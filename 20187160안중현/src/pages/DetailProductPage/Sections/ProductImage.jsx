import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "./ProductInfo.css"; // 새로운 CSS 파일을 생성하여 여기에서 스타일을 적용

const ProductImage = ({ product }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (product?.images?.length > 0) {
      let images = [];

      product.images.map((imageName) => {
        return images.push({
          original: `${import.meta.env.VITE_SERVER_URL}/${imageName}`,
          thumbnail: `${import.meta.env.VITE_SERVER_URL}/${imageName}`,
        });
      });

      setImages(images);
    }
  }, [product]);

  return (
    <div style={{ paddingTop: "30px" }}>
      <ImageGallery items={images} />
    </div>
  );
};

export default ProductImage;
