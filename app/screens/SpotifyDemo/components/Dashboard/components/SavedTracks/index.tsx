import Image from 'next/image';
import React from 'react';

import { ArtistInterface, SavedTracksInterface } from '@/types';

type SavedTracksType = {
  createPlaylist: () => void;
  selectedArtists: ArtistInterface[];
  selectedTracks: SavedTracksInterface;
  tracksLoading: { current: number; loading: boolean; total: number };
};

const SavedTracks = ({
  createPlaylist,
  selectedArtists,
  selectedTracks,
  tracksLoading,
}: SavedTracksType) => {
  return tracksLoading.loading ? (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="mb-8 size-16 animate-spin rounded-full border-b-2 border-white" />
      <span>Loading songs... (this may take a while)</span>
      <span>
        {tracksLoading.current} of {tracksLoading.total}
      </span>
    </div>
  ) : (
    <div className="flex flex-1 flex-col">
      <div className="mb-4 flex h-10 w-full items-center justify-between gap-4">
        <h3 className="text-2xl font-bold">Your liked songs</h3>
        {selectedArtists.length > 1 && (
          <button
            className="rounded-full bg-green-500/50 px-4 py-2 text-white transition hover:scale-105 focus:scale-105 active:scale-95 disabled:scale-100 disabled:bg-gray-900/65"
            onClick={createPlaylist}
          >
            Create playlist
          </button>
        )}
      </div>
      {selectedTracks.items.length === 0 ? (
        <div className="flex h-[40rem] flex-1 items-center justify-center text-white">
          {selectedArtists.length === 0
            ? 'Select an artist to see your liked songs'
            : 'No liked songs found from the selected artists'}
        </div>
      ) : (
        <div className="h-[36rem] overflow-y-scroll">
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
      )}
    </div>
  );
};

export default SavedTracks;
