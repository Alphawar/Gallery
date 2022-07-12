import { PhotoActionTypes } from '../actionTypes';
import { IGetPhotosAction, ISetLoaderAction } from '../actions';
import { IPost } from '../interfaces';

interface IDefaultState {
    photos: IPost[]
    loading: boolean
}

export type PhotoAction = IGetPhotosAction | ISetLoaderAction

const defaultState: IDefaultState = {
    photos: [],
    loading: false
}

export const photoReducer = (state = defaultState, action: PhotoAction): IDefaultState => {
    switch(action.type) {
        case PhotoActionTypes.GET_PHOTOS: 
            return {...state, photos: [...state.photos, ...action.payload]}
        case PhotoActionTypes.SET_LOADER:
            return {...state, loading: action.payload}
        default: 
            return state
    }
}