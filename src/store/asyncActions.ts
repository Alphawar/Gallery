import axios from "axios";
import { Dispatch } from "react";
import { getPhotos, setLoader } from "./actions";
import { PhotoAction } from "./reducers/photoReducer";

const url = 'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'

export const fetchPhotos = () => {
    return async ( dispatch: Dispatch<PhotoAction> ) => {
        dispatch(setLoader(true))
        setTimeout( async () => {
            const response = await axios.get(url)
            dispatch(getPhotos(response.data))
            dispatch(setLoader(false))
        }, 2000)
    }
}