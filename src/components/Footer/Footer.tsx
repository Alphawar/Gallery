import React from 'react';
import classes from './Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footer__content}>
                <h1 className={classes.footer__title}>Unsplash Gallery</h1>
                <h3 className={classes.footer__info}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
            </div>
            <div className={classes.footer__copyright}>
                <p>Copyright ©2022 UnsplashGallery.</p>
            </div>
        </div>
    );
};

export default Footer;