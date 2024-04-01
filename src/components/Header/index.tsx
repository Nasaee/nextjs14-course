'use client';

import Menu from './Menu';

const Header = (props: any) => {
  return (
    <header>
      <Menu {...props} />
      {props.children}
    </header>
  );
};
export default Header;
