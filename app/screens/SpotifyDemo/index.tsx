'use client';

import React, { Fragment, useEffect, useState } from 'react';
import { FaSpotify } from 'react-icons/fa';

import { fetchProfile, getAccessToken, redirectToAuth } from './utils';

interface UserProfile {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: { spotify: string };
  followers: { href: string; total: number };
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
}

interface Image {
  url: string;
  height: number;
  width: number;
}

const SpotifyDemo = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>();
  const [code, setCode] = useState<string | null>();
  const client_id = 'b1b6263c568c4e9b8934d339c49cc649';

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    setCode(code);
  }, []);

  const handleClick = async () => {
    if (!code) {
      redirectToAuth(client_id);
    } else {
      const access_token = await getAccessToken(client_id, code);
      const profile = await fetchProfile(access_token);

      if (profile.error) {
        console.error('Error fetching profile', profile.error);
        redirectToAuth(client_id);
        return;
      }

      console.log('Profile', profile);
      setUserProfile(profile);
    }
  };

  const { display_name, email, external_urls, href, id, images, uri } =
    userProfile || {};

  return (
    <Fragment>
      <h1 className="mb-8 text-4xl font-bold">Spotify Demo</h1>
      <button
        className="borderBlack mb-8 flex items-center gap-4 rounded-full bg-gray-900 px-4 py-2 text-2xl font-light transition hover:scale-[1.15] focus:scale-[1.15] active:scale-105"
        onClick={handleClick}
      >
        <FaSpotify size={28} />
        <h2>{!code ? 'Login with Spotify' : 'Get your Spotify data'}</h2>
      </button>
      {userProfile && (
        <section className="flex w-fit flex-col">
          <div className="borderBlack mb-4 flex w-fit items-center gap-3 rounded-full bg-gray-900 px-4 py-2">
            {images?.[0] && (
              <img
                alt="Profile"
                className="size-10 rounded-full"
                src={images[0].url}
              />
            )}
            <p>{display_name}</p>
          </div>
          <ul>
            <li>User ID: {id}</li>
            <li>Email: {email}</li>
            <li>
              Spotify URI:{' '}
              <a
                className="text-blue-300 underline"
                href={external_urls?.spotify}
              >
                {uri}
              </a>
            </li>
            <li>
              Link:{' '}
              <a className="text-blue-300 underline" href={href}>
                {href}
              </a>
            </li>
          </ul>
        </section>
      )}
    </Fragment>
  );
};

export default SpotifyDemo;
