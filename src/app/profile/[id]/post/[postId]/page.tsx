'use client';

import { useParams } from 'next/navigation';

const ProfileIdPost = () => {
  const params = useParams();
  return (
    <div>
      <h1>ProfileIdPost</h1>
      <p>id: {params.id}</p>
      <p>postId: {params.postId}</p>
    </div>
  );
};
export default ProfileIdPost;
