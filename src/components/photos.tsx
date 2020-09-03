import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { PhotoList } from './photo-list'
import './../styles/photo-list.css'

export const Photos = () => {
    // Prepare states
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPhotos()
    }, []);

    // Fetch all photos
    const fetchPhotos = async () => {
        // Send GET request to 'photos/all' endpoint
        axios
            .get('http://localhost:4001/photos/list')
            .then(response => {
                setPhotos(response.data);
                setLoading(false)
            })
            .catch(error => console.error(`There was an error retrieving the photo list: ${error}`))
    };

    // Flag photo
    const handlePhotoFlag = (id: number) => {
        axios
            .put('http://localhost:4001/photos/flag', { id: id })
            .then(() => {
                fetchPhotos()
            })
            .catch(error => console.error(`There was an error flagging the photo: ${error}`))
    };


    return (
        <div id="photos" className="photo-list-wrapper">

            <PhotoList photos={photos} loading={loading} handlePhotoFlag={handlePhotoFlag} />
            
        </div>
    )
};
