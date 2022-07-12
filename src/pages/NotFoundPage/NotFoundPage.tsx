import React from 'react';
import { Link, useParams } from 'react-router-dom';
import classes from './NotFoundPage.module.scss';

const NotFoundPage: React.FC = () => {

    const brokenLink: string = Object.values(useParams())[0]!

    return (
        <div className={classes.notFoundPage}>
            <div className={classes.notFoundPage__window}>
                <div className={classes.notFoundPage__message}>
                    <h1>You tried following the link: <span className={classes.notFoundPage__link}>{brokenLink}</span>. It doesn't seem to exist. Check the spelling of the link.</h1>
                    <Link className={classes.notFoundPage__homeLink} to='/'>Go to Main page.</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;