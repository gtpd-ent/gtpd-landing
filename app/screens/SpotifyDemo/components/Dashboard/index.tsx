import React, { Fragment } from 'react';

import {
  ArtistInterface,
  FollowedArtistsInterface,
  SavedTracksInterface,
  UserProfileInterface,
} from '@/types';

import FollowedArtists from './components/FollowedArtists';
import SavedTracks from './components/SavedTracks';
import UserBadge from './components/UserBadge';

type DashboardType = {
  artistsLoading: boolean;
  createPlaylist: () => void;
  followedArtists: FollowedArtistsInterface | null;
  selectArtist: (_id: string) => void;
  selectedArtists: ArtistInterface[];
  selectedTracks: SavedTracksInterface | null;
  tracksLoading: { current: number; loading: boolean; total: number };
  unselectArtist: (_id: string) => void;
  userProfile: UserProfileInterface | null;
};

const Dashboard = ({
  artistsLoading,
  createPlaylist,
  followedArtists,
  selectArtist,
  selectedArtists,
  selectedTracks,
  tracksLoading,
  unselectArtist,
  userProfile,
}: DashboardType) => {
  return (
    <Fragment>
      <h1 className="mb-16 text-4xl font-bold">Spotify Demo</h1>
      {userProfile && <UserBadge {...{ userProfile }} />}
      <div className="flex w-[64rem]">
        {followedArtists && (
          <FollowedArtists
            {...{
              artistsLoading,
              followedArtists,
              selectArtist,
              selectedArtists,
              unselectArtist,
            }}
          />
        )}
        {selectedTracks && (
          <SavedTracks
            {...{
              createPlaylist,
              selectedArtists,
              selectedTracks,
              tracksLoading,
            }}
          />
        )}
      </div>
    </Fragment>
  );
};

export default Dashboard;
