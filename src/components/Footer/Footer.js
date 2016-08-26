/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './Footer.css';
import Link from '../Link';

function Footer() {
  return (
  <div className={s.heroFoot}>
    <nav className={cx(s.tabs, s.isBoxed, s.isFullwidth)}>
      <div className={s.container}>
        <ul>
          <li className={s.isActive}><a>Home</a></li>
          <li><Link to="/no-page">No-page</Link></li>
        </ul>
      </div>
    </nav>
  </div>

  );
}

export default withStyles(s)(Footer);

// <div className={s.root}>
//  <div className={s.container}>
//    <span className={s.text}>© Your Company</span>
//    <span className={s.spacer}>·</span>
//    <Link className={s.link} to="/">Home</Link>
//    <span className={s.spacer}>·</span>
//    <Link className={s.link} to="/privacy">Privacy</Link>
//    <span className={s.spacer}>·</span>
//    <Link className={s.link} to="/not-found">Not Found</Link>
//  </div>
//</div>
