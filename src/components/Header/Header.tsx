import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <div className={classes.header}>
            <div className={classes.header__content}>
                <Link to="/" className={classes.header__title}>
                    Unsplash Gallery
                </Link>
            </div>
        </div>
    );
};

export default Header;