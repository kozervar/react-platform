import DataType from 'sequelize';
import Model from '../sequelize';

const Post = Model.define('Post', {

    id: {
        type: DataType.UUID,
        defaultValue: DataType.UUIDV1,
        primaryKey: true,
    },

    title: {
        type: DataType.STRING(255),
    },

    contentShort: {
        type: DataType.STRING(255),
    },

    content: {
        type: DataType.TEXT(),
    },

    author: {
        type: DataType.STRING(255),
    },

}, {

    indexes: [
        { fields: ['title'] },
    ],

});

export default Post;
