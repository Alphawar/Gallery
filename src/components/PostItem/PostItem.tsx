import React from 'react';
import classes from './PostItem.module.scss';
import { useNavigate } from 'react-router-dom';
import { IPost } from '../../store/interfaces';

interface IPostItemProps {
    post: IPost
}

const PostItem: React.FC<IPostItemProps> = ({ post }) => {

    const history = useNavigate()

    return (
        <div className={classes.card}>
            <div className={classes.card__content}>
                <div className={classes.card__header}>
                    <div className={classes.card__profileImg}>
                        <img src={post.user.profile_image.small} alt={post.user.name} />
                    </div>
                    <div className={classes.card__addInfo}>
                        <h3>{post.user.username}</h3>
                        <p>{new Date(post.created_at).toUTCString()}</p>
                    </div>
                </div>
                <div className={classes.card__image}>
                    <img 
                        style={{
                            margin: post.height < post.width ? '50px 0 20px 0' : 0,
                            height: post.height > post.width ? '350px' : '300px',
                            width: post.height < post.width ? '400px' : '300px',
                        }}
                        src={post.urls.small} alt={post.alt_description!} 
                        onClick={() => history(`/post/${post.id}`)}
                    />
                </div>
                {post.description && 
                    <div className={classes.card__text}>
                        <h2>{post.description}</h2> 
                    </div>
                }
            </div>
        </div>
    );
};

export default PostItem;