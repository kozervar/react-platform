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
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';

function Header() {
    return (
        <div className={s.heroHead}>
        <header className={s.nav}>
            <div className={s.container}>
                <div className={s.navLeft}>
                    <a className={s.navItem}>
                        <span className={cx(s.fa, s.faCode, s.fa2X, s.faFw)}/>

                        <h1 className={s.title}>
                            My awesome website
                        </h1>
                    </a>
                </div>
                                <span className={s.navToggle}>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>

                <div className={cx(s.navRight, s.navMenu)}>
                                  <span className={s.navItem}>
                    <a className={cx(s.button, s.isActive)}>
                        Home
                    </a>
                  </span>
                                  <span className={s.navItem}>
                    <a className={cx(s.button)}>
                        About
                    </a>
                  </span>
                </div>
            </div>
        </header>
        </div>
    );
}

export default withStyles(s)(Header);


//<div className={s.heroHead}>
//    <header className={s.nav}>
//        <div className={s.container}>
//            <div className={s.navLeft}>
//                <a className={s.navItem}>
//                    <span className={cx(s.fa, s.faCode, s.fa2X, s.faFw)}/>
//
//                    <h1 className={s.title}>
//                        My awesome website
//                    </h1>
//                </a>
//            </div>
//                <span className={s.navToggle}>
//                  <span></span>
//                  <span></span>
//                  <span></span>
//                </span>
//
//            <div className={cx(s.navRight, s.navMenu)}>
//                  <span className={s.navItem}>
//                    <a className={cx(s.button, s.isActive)}>
//                        Home
//                    </a>
//                  </span>
//                  <span className={s.navItem}>
//                    <a className={cx(s.button)}>
//                        About
//                    </a>
//                  </span>
//            </div>
//        </div>
//    </header>
//</div>