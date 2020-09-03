import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'

export const PhotoDetail = () => {
    // Prepare states
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        fetchPhoto()
    }, []);

    // Fetch all photos
    const fetchPhoto = async () => {
        // Send GET request to 'photos/all' endpoint
        axios
            .get(`http://localhost:4001/photos/1`)
            .then(response => {
                setPhoto(response.data);
            })
            .catch(error => console.error(`There was an error retrieving the photo list: ${error}`))
    };

    return (
        <div className="photo-list-wrapper">
            photot page

        </div>
    )
};
