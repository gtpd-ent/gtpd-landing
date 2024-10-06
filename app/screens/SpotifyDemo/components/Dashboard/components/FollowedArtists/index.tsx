import Image from 'next/image';
import React from 'react';

import { ArtistInterface, FollowedArtistsInterface } from '@/types';

type FollowedArtistsType = {
  artistsLoading: boolean;
  followedArtists: FollowedArtistsInterface;
  selectArtist: (_id: string) => void;
  selectedArtists: ArtistInterface[];
  unselectArtist: (_id: string) => void;
};

const FollowedArtists = ({
  artistsLoading,
  followedArtists,
  selectArtist,
  selectedArtists,
  unselectArtist,
}: FollowedArtistsType) => {
  return artistsLoading ? (
    <div className="flex flex-1 flex-col items-center justify-center gap-8">
      <div className="size-16 animate-spin rounded-full border-b-2 border-white" />
      Loading artists...
    </div>
  ) : (
    <div className="flex h-fit flex-1 flex-wrap gap-2">
      <h3 className="mb-4 h-10 w-full text-2xl font-bold">Followed Artists</h3>
      {selectedArtists.map(({ id, images, name }) => (
        <button
          className="borderBlack flex w-fit items-center gap-4 rounded-full bg-green-950/80 px-4 py-2 text-white"
          key={id}
          onClick={() => unselectArtist(id)}
        >
          {images[0] && (
            <Image
              alt="Artist"
              className="size-10 rounded-full"
              height={40}
              src={images[0].url}
              width={40}
            />
          )}
          {name}
        </button>
      ))}
      {followedArtists.items
        .filter(({ id }) => !selectedArtists.find((artist) => artist.id === id))
        .map(({ id, images, name }) => (
          <button
            className="borderBlack flex w-fit items-center gap-4 rounded-full bg-gray-900 px-4 py-2 text-white"
            key={id}
            onClick={() => selectArtist(id)}
          >
            {images[0] && (
              <Image
                alt="Artist"
                className="size-10 rounded-full"
                height={40}
                src={images[0].url}
                width={40}
              />
            )}
            {name}
          </button>
        ))}
    </div>
  );
};

export default FollowedArtists;
