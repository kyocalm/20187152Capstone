import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/thunkFunctions";
import "./ProductInfo.css"; // 새로운 CSS 파일을 생성하여 여기에서 스타일을 적용

const ProductInfo = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart({ productId: product._id }));
  };

  return (
    <div style={{ paddingTop: "30px" }}>
      <ul>
        <li>
          <span className="p text-2xl">Product Name :{product.title}</span>
        </li>
        <li>
          <span className="font-semibold text-gray-900">Price :</span>{" "}
          {product.price} Won
        </li>
        <li>
          <span className="font-semibold text-gray-900">purchases :</span>{" "}
          {product.sold} Purchase
        </li>
        <li>
          <span className="font-semibold text-gray-900">Details :</span>{" "}
          {product.description}
        </li>
      </ul>

      <div className="mt-3">
        <button
          onClick={handleClick}
          className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-gray-700"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
