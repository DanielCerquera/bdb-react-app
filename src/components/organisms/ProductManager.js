import React, { useState } from "react";
import ProductForm from "../molecules/ProductForm";
import Carousel from "../atoms/Carousel/Carousel";
import "./styles/ProductManager.scss";

const ProductManager = () => {
    const [products, setProducts] = useState([]);
    const [allImages, setAllImages] = useState([]);
  
    const handleSubmit = (product) => {
      setProducts([...products, product]);
      setAllImages([...allImages, ...product.images]); // Agregar imágenes al estado global
    };
  
    return (
      <div className="product-manager">
        <h1>Registro de Productos</h1>
        <ProductForm onSubmit={handleSubmit} />
        
        {allImages.length > 0 && <Carousel images={allImages} />}
      </div>
    );
  };

export default ProductManager;
