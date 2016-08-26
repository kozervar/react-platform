/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List,
    GraphQLString as StringType,
    GraphQLObjectType as ObjectType} from 'graphql';
import fetch from '../../core/fetch';
import { Post } from '../models';
import PostType from '../types/PostType';
import {resolver} from 'graphql-sequelize';

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const create = async (req, {title, contentShort})=>{
    //const destroyed = Post.destroy({where: {}});
    const post = await Post.create({title: title, contentShort: contentShort, author: 'server'});
    return post.dataValues;
};

const query = {
    type: new List(PostType),
    resolve: resolver(Post),
};

const mutations = {
    type: PostType,
    args: {
        title: { type: StringType },
        contentShort: { type: StringType },
    },
    resolve: create
};


export { query };
export { mutations };