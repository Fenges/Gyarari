import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'

import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

export const Photos = () => {
    // Prepare states
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

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

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
            <Gallery photos={photos} onClick={openLightbox}/>

            <ModalGateway>
                {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                        currentIndex={currentImage}
                        views={photos}
                    />
                </Modal>
                    ) : null}
            </ModalGateway>
        </div>
    )
};
