import React from 'react';
import { useTypedSelector } from '../../store/hooks';
import PostItem from '../PostItem/PostItem';
import classes from './PostList.module.scss';

const PostList: React.FC = () => {

    const posts = useTypedSelector(state => state.photo.photos)

    return (
        <div className={classes.posts}>
            {posts.map( post => 
                <PostItem 
                    key={post.id}
                    post={post}
                />
            )}
        </div>
    );
};

export default PostList;