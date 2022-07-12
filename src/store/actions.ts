import { PhotoActionTypes } from './actionTypes';
import { IPost } from './interfaces';

export interface IGetPhotosAction {
    type: PhotoActionTypes.GET_PHOTOS
    payload: IPost[]
}

export interface ISetLoaderAction {
    type: PhotoActionTypes.SET_LOADER
    payload: boolean
}

export const getPhotos = (payload: IPost[]): IGetPhotosAction => ({type: PhotoActionTypes.GET_PHOTOS, payload})
export const setLoader = (payload: boolean): ISetLoaderAction => ({type: PhotoActionTypes.SET_LOADER, payload})