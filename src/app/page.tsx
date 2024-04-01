import Header from '@/components/Header';
import Logo from '@/components/Header/Logo';
import Image from 'next/image';
import programmingImg from '../../public/programming.jpg';

export default function Home() {
  return (
    <div>
      <div className='w-[500px]'>
        <Image quality={1} src={programmingImg} alt='programming' />
      </div>
    </div>
  );
}
