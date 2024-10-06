'use client';

import toast from 'react-hot-toast';
import React, { useEffect, useState } from 'react';

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

  const [code, setCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    setCode(code);
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

  const handleClick = async () => {
    setLoading(true);
    if (!code) {
      redirectToAuth(CLIENT_ID);
    } else {
      const access_token = await getAccessToken(CLIENT_ID, code);
      const profile = await fetchProfile(access_token);

      if (profile.error) {
        toast.error('Hubo un error de autorizacion.');
        setTimeout(() => {
          redirectToAuth(CLIENT_ID);
        }, 1000);
        return;
      }

      const followedArtists = await fetchAllFollowedArtists(access_token);

      const savedTracks = await fetchAllSavedTracks(access_token);

      setSavedTracks(savedTracks);
      setFollowedArtists(followedArtists);
      setUserProfile(profile);
    }
    setLoading(false);
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
    // setLoading(true);
    // const tracks = selectedTracks.items.map((track) => track.track.uri);
    // const artistNames = selectedArtists.map((artist) => artist.name).join(', ');
    // const playlistName = `Ritmia - ${artistNames}`;
    // const access_token = await getAccessToken(CLIENT_ID, code!);
    // const playlistResponse = await addPlaylist(
    //   access_token,
    //   userProfile!.id,
    //   playlistName,
    // );
    // if (playlistResponse.error) {
    //   toast.error('Hubo un error al crear la playlist.');
    //   setLoading(false);
    //   return;
    // }
    // const tracksResponse = await addTracksToPlaylist(
    //   access_token,
    //   playlistResponse.id,
    //   tracks,
    // );
    // if (tracksResponse.error) {
    //   toast.error('Hubo un error al crear la playlist.');
    //   setLoading(false);
    //   return;
    // }
    // toast.success('Playlist creada con exito!');
    // setLoading(false);
  };

  return (
    <section className="mt-32 flex w-full flex-col items-center justify-center">
      {!userProfile ? (
        <Welcome {...{ code, handleClick, loading }} />
      ) : (
        <Dashboard
          {...{
            createPlaylist,
            followedArtists,
            loading,
            selectArtist,
            selectedArtists,
            selectedTracks,
            unselectArtist,
            userProfile,
          }}
        />
      )}
    </section>
  );
};

export default SpotifyDemo;
