import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Post.css';
import Link from '../Link';

function Post({ className, title, content, author }) {
    return (
        <div className={cx(s.root, className)} role="post">
            <h1 className={s.title}>{title}</h1>
            <p>{content}</p>
            <br />
            <div className={s.author}>{author}</div>
            <hr/>
        </div>
    );
}

Post.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
};

export default withStyles(s)(Post);
