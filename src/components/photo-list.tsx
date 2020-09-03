import React from 'react'

import { PhotoListRow } from './photo-list-row'
import './../styles/photo-list.css'

interface PhotoUI {
    id: number;
    src: string;
    src_hr: string;
    name: string;
    description: string;
    flags: number;
}

interface PhotoListUI {
    photos: PhotoUI[];
    loading: boolean;
    handlePhotoFlag: (id: number) => void;
}

export const PhotoList = (props: PhotoListUI) => {
    // Show loading message
    if (props.loading) return <p>Loading photos...</p>;
    return (
        <div className="grid">
                    {props.photos.length > 0 ? (
                        props.photos.map((photo: PhotoUI, idx) => (
                        <PhotoListRow
                            key={photo.id}
                            photo={photo}
                            position={idx + 1}
                            handlePhotoFlag={props.handlePhotoFlag}
                        />
                            ))
                        ): (
                            <span>There are no photos to show.</span>
                        )}
            </div>
    )
};
