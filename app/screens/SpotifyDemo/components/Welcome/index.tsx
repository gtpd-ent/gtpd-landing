import { FaSpotify } from 'react-icons/fa';
import React, { Fragment } from 'react';

type WelcomeType = {
  handleClick: () => void;
  loading: boolean;
};

const Welcome = ({ handleClick, loading }: WelcomeType) => {
  return (
    <Fragment>
      <h1 className="mb-16 text-4xl font-bold">Spotify Demo</h1>
      <button
        className="borderBlack mb-8 flex items-center gap-4 rounded-full bg-gray-900 px-4 py-2 text-2xl font-light text-white transition hover:scale-[1.15] focus:scale-[1.15] active:scale-105 disabled:scale-100 disabled:bg-gray-900/65"
        disabled={loading}
        onClick={handleClick}
      >
        {loading ? (
          <div className="size-5 animate-spin rounded-full border-b-2 border-white" />
        ) : (
          <FaSpotify size={28} />
        )}
        <h2>{loading ? 'Fetching data...' : 'Login with Spotify'}</h2>
      </button>
    </Fragment>
  );
};

export default Welcome;
