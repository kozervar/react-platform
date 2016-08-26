import {
    GraphQLObjectType as ObjectType,
    GraphQLID as ID,
    GraphQLString as StringType,
    GraphQLNonNull as NonNull,
} from 'graphql';

const PostType = new ObjectType({
    name: 'Post',
    fields: {
        id: { type: new NonNull(ID) },
        title: { type: StringType },
        contentShort: { type: StringType },
        content: { type: StringType },
        author: { type: StringType },
    },
});

export default PostType;