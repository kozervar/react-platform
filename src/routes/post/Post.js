'use strict';
import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Post.css';

const title = 'React Starter Kit';

function Post({ post }, context) {
    context.setTitle(title);
    return (
        <div className={s.root}>
            <div className={s.container}>
                <h1 className={s.title}>React.js News</h1>
                <ul className={s.post}>
                    {post.map((item, index) => (
                        <li key={index} className={     s.postItem}>
                            <a href={item.link} className={s.postTitle}>{item.title}</a>
              <span
                  className={s.postDesc}
                  dangerouslySetInnerHTML={{ __html: item.contentSnippet }}
                  />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

Post.propTypes = {
    post: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        contentSnippet: PropTypes.string,
    })).isRequired,
};
Post.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Post);