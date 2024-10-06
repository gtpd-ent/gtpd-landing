import toast from 'react-hot-toast';

import { ArtistInterface, TrackInterface } from '@/types';

export const fetchProfile = async (access_token: string) => {
  const response = await fetch('https://api.spotify.com/v1/me', {
    headers: { Authorization: `Bearer ${access_token}` },
    method: 'GET',
  });

  return await response.json();
};

export const fetchFollowedArtists = async (access_token: string) => {
  const response = await fetch(
    'https://api.spotify.com/v1/me/following?type=artist',
    {
      headers: { Authorization: `Bearer ${access_token}` },
      method: 'GET',
    },
  );

  return await response.json();
};

export const fetchAllFollowedArtists = async (access_token: string) => {
  let followedArtists: ArtistInterface[] = [];
  let next = 'https://api.spotify.com/v1/me/following?type=artist';
  while (next) {
    const response = await fetch(next, {
      headers: { Authorization: `Bearer ${access_token}` },
      method: 'GET',
    });

    const data = await response.json();

    if (data.error) {
      toast.error('Hubo un error al obtener los artistas seguidos.');
      break;
    }

    followedArtists = followedArtists.concat(data.artists.items);
    next = data.artists.next;
  }

  return { items: followedArtists, total: followedArtists.length };
};

export const fetchSavedTracks = async (access_token: string) => {
  const response = await fetch(
    'https://api.spotify.com/v1/me/tracks?limit=50',
    {
      headers: { Authorization: `Bearer ${access_token}` },
      method: 'GET',
    },
  );

  return await response.json();
};

export const fetchAllSavedTracks = async (access_token: string) => {
  let savedTracks: TrackInterface[] = [];
  let next = 'https://api.spotify.com/v1/me/tracks?limit=50';
  while (next) {
    const response = await fetch(next, {
      headers: { Authorization: `Bearer ${access_token}` },
      method: 'GET',
    });

    const data = await response.json();

    if (data.error) {
      toast.error('Hubo un error al obtener las canciones guardadas.');
      break;
    }

    savedTracks = savedTracks.concat(data.items);
    next = data.next;
  }

  return { items: savedTracks, total: savedTracks.length };
};

export const addPlaylist = async (
  access_token: string,
  user_id: string,
  name: string,
) => {
  const response = await fetch(
    `https://api.spotify.com/v1/users/${user_id}/playlists`,
    {
      body: JSON.stringify({
        name,
        public: true,
      }),
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
    },
  );

  return await response.json();
};

export const addTracksToPlaylist = async (
  access_token: string,
  playlist_id: string,
  track_uris: string[],
) => {
  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
    {
      body: JSON.stringify({ uris: track_uris }),
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
    },
  );

  return await response.json();
};
