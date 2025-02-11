import React, { useState } from "react";
import Input from "../atoms/Inputs/Input";
import Button from "../atoms/Button/Button";
import ImageUploader from "../atoms/ImageUploader/ImageUploader";
import Carousel from "../atoms/Carousel/Carousel";
import "./styles/ProductForm.scss";

const ProductForm = ({ onSubmit }) => {
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        images: [], // Almacena las imágenes subidas
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleImageUpload = (file) => {
        const imageUrl = URL.createObjectURL(file);
        setProduct((prevState) => ({
            ...prevState,
            images: [...prevState.images, imageUrl], // Agrega nueva imagen
        }));
    };

    return (
        <div className="product-form">
            <Input type="text" name="name" placeholder="Nombre producto" value={product.name} onChange={handleChange} />
            <Input type="text" name="description" placeholder="Descripción" value={product.description} onChange={handleChange} />
            <Input type="number" name="price" placeholder="Precio" value={product.price} onChange={handleChange} />

            <ImageUploader onUpload={handleImageUpload} />

            <Button label="Guardar" onClick={() => onSubmit(product)} type="primary" />

            <Carousel images={product.images} />
        </div>
    );
};

export default ProductForm;
