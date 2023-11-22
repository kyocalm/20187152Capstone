import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import ProductImage from "./Sections/ProductImage";
import ProductInfo from "./Sections/ProductInfo";
import "./Sections/ProductInfo.css"; // 새로운 CSS 파일을 생성하여 여기에서 스타일을 적용

const DetailProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axiosInstance.get(
          `/products/${productId}?type=single`
        );
        console.log(response);
        setProduct(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProduct();
  }, [productId]);

  if (!product) return null;

  return (
    <section>
      <div style={{ paddingTop: "100px" }}>
        <div className="text-center">
          <p className="text-xl text-bold">Product info</p>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            {/* ProductImage */}
            <ProductImage product={product} />
          </div>
          <div className="w-1/2">
            {/* ProductInfo */}
            <ProductInfo product={product} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProductPage;
