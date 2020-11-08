import React from 'react';
import 'utils/StyleUtils.scss';
import { Link } from 'react-router-dom';

export function Header(): React.ReactElement {
  return (
    <nav>
      <Link
        to={{ pathname: '/' }}
      >
        LOGO
      </Link>
    </nav>
  );
}
