'use client';

import toast from 'react-hot-toast';
import React, { useEffect, useRef, useState } from 'react';

import {
  ArtistInterface,
  FollowedArtistsInterface,
  SavedTracksInterface,
  UserProfileInterface,
} from '@/types';

import { CLIENT_ID } from './constants';
import Dashboard from './components/Dashboard';
import Welcome from './components/Welcome';
import {
  addPlaylist,
  addTracksToPlaylist,
  fetchAllFollowedArtists,
  fetchAllSavedTracks,
  fetchProfile,
} from './fetch';
import { getAccessToken, redirectToAuth } from './auth';

const SpotifyDemo = () => {
  const [userProfile, setUserProfile] = useState<UserProfileInterface | null>(
    null,
  );
  const [followedArtists, setFollowedArtists] =
    useState<FollowedArtistsInterface | null>(null);
  const [selectedArtists, setSelectedArtists] = useState<ArtistInterface[]>([]);

  const [selectedTracks, setSelectedTracks] = useState<SavedTracksInterface>({
    items: [],
    total: 0,
  });
  const [savedTracks, setSavedTracks] = useState<SavedTracksInterface | null>(
    null,
  );

  const [accessToken, setAccessToken] = useState<string | null>(null);
  const hasProcessedToken = useRef<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [artistsLoading, setArtistsLoading] = useState(false);
  const [tracksLoading, setTracksLoading] = useState({
    current: 0,
    loading: false,
    total: 0,
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code && !hasProcessedToken.current) {
      setLoading(true);
      hasProcessedToken.current = true;

      getAccessToken(CLIENT_ID, code).then((access_token) => {
        setAccessToken(access_token);

        fetchProfile(access_token).then((profile) => {
          if (profile.error) {
            toast.error('Hubo un error de autorizacion.');
            setTimeout(() => {
              redirectToAuth(CLIENT_ID);
            }, 1000);
            return;
          }
          setUserProfile(profile);

          setArtistsLoading(true);
          fetchAllFollowedArtists(access_token).then((followedArtists) => {
            setFollowedArtists(followedArtists);

            setTracksLoading({ current: 0, loading: true, total: 0 });
            fetchAllSavedTracks(access_token, setTracksLoading).then(
              (savedTracks) => {
                setSavedTracks(savedTracks);
              },
            );

            setArtistsLoading(false);
          });

          setLoading(false);
        });
      });
    }
  }, []);

  useEffect(() => {
    if (savedTracks) {
      const fiteredTracks = savedTracks?.items
        .filter((track) => {
          return selectedArtists.some((artist) => {
            return track.track.artists.some(
              (trackArtist) => trackArtist.id === artist.id,
            );
          });
        })
        .sort((a, b) => {
          const nameA = a.track.name.toUpperCase();
          const nameB = b.track.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });

      setSelectedTracks({
        items: fiteredTracks,
        total: fiteredTracks?.length || 0,
      });
    }
  }, [selectedArtists, savedTracks]);

  const handleClick = () => {
    redirectToAuth(CLIENT_ID);
  };

  const selectArtist = (id: string) => {
    const artist = followedArtists?.items.find((artist) => artist.id === id);
    if (artist) {
      setSelectedArtists([...selectedArtists, artist]);
    }
  };

  const unselectArtist = (id: string) => {
    setSelectedArtists(selectedArtists.filter((artist) => artist.id !== id));
  };

  const createPlaylist = async () => {
    setLoading(true);
    const tracks = selectedTracks.items.map((track) => track.track.uri);
    const artistNames = selectedArtists.map((artist) => artist.name).join(', ');
    const playlistName = `Ritmia - ${artistNames}`;
    const playlistResponse = await addPlaylist(
      accessToken!,
      userProfile!.id,
      playlistName,
    );
    if (playlistResponse.error) {
      toast.error('Hubo un error al crear la playlist.');
      setLoading(false);
      return;
    }
    const tracksResponse = await addTracksToPlaylist(
      accessToken!,
      playlistResponse.id,
      tracks,
    );
    if (tracksResponse.error) {
      toast.error('Hubo un error al crear la playlist.');
      setLoading(false);
      return;
    }
    toast.success('Playlist creada con exito!');
    setLoading(false);
  };

  return (
    <section className="mt-32 flex w-full flex-col items-center justify-center">
      {!userProfile ? (
        <Welcome {...{ handleClick, loading }} />
      ) : (
        <Dashboard
          {...{
            artistsLoading,
            createPlaylist,
            followedArtists,
            selectArtist,
            selectedArtists,
            selectedTracks,
            tracksLoading,
            unselectArtist,
            userProfile,
          }}
        />
      )}
    </section>
  );
};

export default SpotifyDemo;
