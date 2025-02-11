import React, { useState } from "react";
import "./ImageUploader.scss";

const ImageUploader = ({ onUpload }) => {
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
    onUpload(file);
  };

  return (
    <div className="image-uploader">
      <input type="file" accept="image/*" onChange={handleChange} />
      {image && <img src={image} alt="Preview" className="image-preview" />}
    </div>
  );
};

export default ImageUploader;