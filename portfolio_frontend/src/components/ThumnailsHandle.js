import React from 'react'
import UploadWidget from '../pages/uploadProject/UploadWidget'
import { FaDumpster } from 'react-icons/fa';

const ThumnailsHandle = ({thumbnails,setThumbnails,setUploadedFileName}) => {
    const handleImgDelete = (index) => {
        const updatedThumbnails = [...thumbnails];
        updatedThumbnails.splice(index, 1);
        // setOneProject({ ...item, thumbnails: updatedThumbnails });
        setThumbnails(updatedThumbnails)
    };

    const handleImgUpload = (url) => {
        // const updatedThumbnails = [...item.thumbnails, url];
        // const updatedThumbnails = [...thumbnails, url];
        // // setOneProject({ ...item, thumbnails: updatedThumbnails });
        // setThumbnails(updatedThumbnails)
        setThumbnails((prevUrls) => [...prevUrls, url]); // Append new URL to the existing list
    };
    return (
        <div>
            {thumbnails && (
                <div className="project-edit-img-container">
                    {thumbnails.map((url, index) => (
                        <div className="edit-img-container" key={index}>
                            <img src={url} alt={url} className="thumbnail-img" />
                            <div className="edit-delete-btn" onClick={() => handleImgDelete(index)}><FaDumpster /></div>
                        </div>
                    ))}
                </div>
            )}
            <UploadWidget onUpload={handleImgUpload} setName={setUploadedFileName} />

        </div>
    )
}

export default ThumnailsHandle
