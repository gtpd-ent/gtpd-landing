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
  createPlaylist: () => void;
  followedArtists: FollowedArtistsInterface | null;
  loading: boolean;
  selectArtist: (_id: string) => void;
  selectedArtists: ArtistInterface[];
  selectedTracks: SavedTracksInterface | null;
  unselectArtist: (_id: string) => void;
  userProfile: UserProfileInterface | null;
};

const Dashboard = ({
  createPlaylist,
  followedArtists,
  loading,
  selectArtist,
  selectedArtists,
  selectedTracks,
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
              followedArtists,
              selectArtist,
              selectedArtists,
              unselectArtist,
            }}
          />
        )}
        {selectedTracks && (
          <SavedTracks
            {...{ createPlaylist, loading, selectedArtists, selectedTracks }}
          />
        )}
      </div>
    </Fragment>
  );
};

export default Dashboard;
