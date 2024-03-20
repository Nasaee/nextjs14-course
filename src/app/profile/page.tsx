'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const router = useRouter();
  return (
    <div>
      <h1>my list of profile</h1>
      <div>
        <ul className='flex flex-col'>
          {/* Link use for internal link */}
          <Link href='/profile/1'>Profile 1</Link>
          <Link href='/profile/2'>Profile 2</Link>
          {/* you can pass query to Link */}
          <Link
            // prefetch={false} by default is true
            href={{
              pathname: '/profile/3',
              query: {
                username: 'nasaee',
                userId: 1,
                person: JSON.stringify({ age: 31 }),
              },
            }}
          >
            Profile 3
          </Link>
          <li onClick={() => router.push('/profile/3')}>Profile 3</li>
          {/* use for external link */}
          <a href='https://google.com'>Google</a>
        </ul>
      </div>
    </div>
  );
};
export default Profile;
