import React from 'react';
import classes from './BackButton.module.scss';
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {

    const history = useNavigate()

    return (
        <button className={classes.button} onClick={() => history(-1)}>
            <IoArrowBackOutline size='25px' className={classes.button__arrow}/>
        </button>
    );
};

export default BackButton;