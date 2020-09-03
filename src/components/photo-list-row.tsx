import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';

interface PhotoListRowUI {
    position: number;
    photo: {
        id: number;
        src: string;
        src_hr: string;
        name: string;
        description: string;
        flags: number;
    }
    handlePhotoFlag: (id: number) => void;
}

export const PhotoListRow = (props: PhotoListRowUI) => (
    <Card style={{ width: '18rem' }} className="box">
        <Card.Img variant="top" src={props.photo.src} />
        <Card.Body>
            <Card.Title>
                {props.photo.name}
        </Card.Title>
            <Card.Text>
                {props.photo.description}
            </Card.Text>
            <Button variant="primary" onClick={() => props.handlePhotoFlag(props.photo.id)}>
                Flag {props.photo.flags}</Button>
        </Card.Body>
    </Card>

    // <Link to={'/photos/'+props.photo.id}>
    //     {props.photo.name}
    // </Link>
);
