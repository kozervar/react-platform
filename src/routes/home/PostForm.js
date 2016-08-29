import React from 'react';
import { Field, reduxForm } from 'redux-form';


const PostForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <div>
                    <Field name="title" component="input" type="text" placeholder="Title"/>
                </div>
            </div>
            <div>
                <label>Author</label>
                <div>
                    <Field name="author" component="input" type="text" placeholder="Author"/>
                </div>
            </div>
            <div>
                <label>Short content</label>
                <div>
                    <Field name="contentShort" component="input"/>
                </div>
            </div>
            <div>
                <label>Content</label>
                <div>
                    <Field name="content" component="textarea"/>
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>Save post</button>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'postForm'  // a unique identifier for this form
})(PostForm)