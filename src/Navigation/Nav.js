import React, { PropTypes } from 'react';
import NavLink from './NavRouterLink';
import isClient from '../utils/isClient';

const defaultMenu = [
  { name: 'Collections', path: '/collections' },
  { name: 'About', path: '/about' },
];

const Nav = ({ menu = defaultMenu }) => {
  if (isClient) require('./Nav.css');
  return (
    <div>
      <ul>
        {menu.map((item, idx) => <NavLink customStyles={{ flex: '1 1 100%' }} key={idx} name={item.name} path={item.path} />)}
      </ul>
    </div>
  );
};

Nav.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, path: PropTypes.string })),
};

export default Nav;