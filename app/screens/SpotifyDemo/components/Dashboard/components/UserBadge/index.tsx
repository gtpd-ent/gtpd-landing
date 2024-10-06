import Image from 'next/image';
import React from 'react';

import { UserProfileInterface } from '@/types';

type UserBadgeType = {
  userProfile: UserProfileInterface;
};

const UserBadge = ({ userProfile }: UserBadgeType) => {
  const { display_name, images } = userProfile;

  return (
    <div className="borderBlack absolute right-8 top-8 mb-4 flex w-fit items-center gap-3 rounded-full bg-gray-900 px-4 py-2">
      {images?.[0] && (
        <Image
          alt="Profile"
          className="size-10 rounded-full"
          height={40}
          src={images[0].url}
          width={40}
        />
      )}
      <p className="text-white">{display_name}</p>
    </div>
  );
};

export default UserBadge;
