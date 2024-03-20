'use client';

import { useParams, useRouter } from 'next/navigation';

const ProfileID = () => {
  const params = useParams();
  const router = useRouter();
  return (
    <div>
      <h1>Profile page id: {params.id}</h1>
      <div onClick={() => router.push('/profile')}>Back to main page</div>
    </div>
  );
};
export default ProfileID;
