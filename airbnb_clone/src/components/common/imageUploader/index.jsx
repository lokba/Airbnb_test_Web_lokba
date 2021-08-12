import React, { useState } from 'react';
import storage from '../../../firebase';
import { FileUploadBlock } from './styled';

const FirebaseFileUpload = ({ handleImageUrl }) => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => { },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        setUrl(url);
                        handleImageUrl(url);
                    })
            }
        )
    }
    return (
        <>
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>업로드</button>
        </>
    );
};

export default FirebaseFileUpload;

