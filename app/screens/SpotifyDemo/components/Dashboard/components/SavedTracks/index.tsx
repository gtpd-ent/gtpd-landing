import Image from 'next/image';
import React from 'react';

import { ArtistInterface, SavedTracksInterface } from '@/types';

type SavedTracksType = {
  createPlaylist: () => void;
  loading: boolean;
  selectedArtists: ArtistInterface[];
  selectedTracks: SavedTracksInterface;
};

const SavedTracks = ({
  createPlaylist,
  loading,
  selectedArtists,
  selectedTracks,
}: SavedTracksType) => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-4 flex h-10 w-full items-center justify-between gap-4">
        <h3 className="text-2xl font-bold">Your liked songs</h3>
        {selectedArtists.length > 1 && (
          <button
            className="rounded-full bg-green-500/50 px-4 py-2 text-white transition hover:scale-105 focus:scale-105 active:scale-95 disabled:scale-100 disabled:bg-gray-900/65"
            disabled={loading}
            onClick={createPlaylist}
          >
            Create playlist
          </button>
        )}
      </div>
      <div className="h-[40rem] overflow-y-scroll">
        {selectedTracks.items.map(({ track }) => (
          <div
            className="flex w-full items-center gap-4 border border-x-0 border-t-0 border-b-gray-500/50 p-2 text-white"
            key={track.id}
          >
            {track.album.images[0] && (
              <Image
                alt="Track"
                className="size-10"
                height={40}
                src={track.album.images[0].url}
                width={40}
              />
            )}
            {track.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedTracks;
