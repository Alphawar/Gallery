import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../../components/UI/BackButton/BackButton';
import { useTypedSelector } from '../../store/hooks';
import classes from './DetailsPage.module.scss';

const DetailsPage: React.FC = () => {

    const { id } = useParams()
    const state = useTypedSelector(state => state.photo.photos)
    const currentPhoto = useMemo(() => state.filter( el => el.id === id), [id, state])

    console.log(currentPhoto)

    return (
        <div className={classes.details}>
            <BackButton />
            <img 
                className={classes.details__photo}
                src={currentPhoto[0].urls.full} 
                alt={currentPhoto[0].alt_description!} 
            />
        </div>
    );
};

export default DetailsPage;