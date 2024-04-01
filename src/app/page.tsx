import Header from '@/components/Header';
import Logo from '@/components/Header/Logo';

export default function Home() {
  return (
    <div>
      <Header name={'Kevin'} age={31} isMan={true}>
        <Logo />
      </Header>
    </div>
  );
}
