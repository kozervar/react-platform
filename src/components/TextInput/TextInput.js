import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TextInput.css';

function TextInput({ className, title, content, author }) {
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

TextInput.propTypes = {
    uniqueName: PropTypes.boolean,
    placeholder: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
};

export default withStyles(s)(TextInput);
