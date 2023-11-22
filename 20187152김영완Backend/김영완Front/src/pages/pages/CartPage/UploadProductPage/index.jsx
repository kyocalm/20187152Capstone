import React, { useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import FileUpload from "../../components/FileUpload";
const continents = [
  { key: 1, value: "의류" },
  { key: 2, value: "뷰티" },
  { key: 3, value: "모바일/태블릿" },
  { key: 4, value: "노트북/PC" },
  { key: 5, value: "리빙/생활" },
  { key: 6, value: "식재료" },
  { key: 7, value: "디저트" },
];

const UploadProductPage = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    continents: 1,
    images: [],
  });

  const userData = useSelector((state) => state.user?.userData);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImages = (newImages) => {
    setProduct((prevState) => ({
      ...prevState,
      images: newImages,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const body = {
      writer: userData.id,
      ...product,
    };

    try {
      await axiosInstance.post("/products", body);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div className="text-center m-7">
        <h1>Product Upload</h1>
      </div>

      <form className="mt-6" onSubmit={handleSubmit}>
        <FileUpload images={product.images} onImageChange={handleImages} />

        <div className="mt-4">
          <label htmlFor="title">Product Name</label>
          <input
            className="w-full px-4 py-2 bg-white border rounded-md"
            name="title"
            id="title"
            onChange={handleChange}
            value={product.title}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="description">Details</label>
          <input
            className="w-full px-4 py-2 bg-white border rounded-md"
            name="description"
            id="description"
            onChange={handleChange}
            value={product.description}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="price">Price</label>
          <input
            className="w-full px-4 py-2 bg-white border rounded-md"
            type="number"
            name="price"
            id="price"
            onChange={handleChange}
            value={product.price}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="continents">Category</label>
          <select
            className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
            name="continents"
            id="continents"
            onChange={handleChange}
            value={product.continents}
          >
            {continents.map((item) => (
              <option key={item.key} value={item.key}>
                {item.value}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="w-full px-4 py-2 text-black bg-purple-100 rounded-md hover:bg-blue-100"
          >
            Complete Upload
          </button>
        </div>
      </form>
    </section>
  );
};

export default UploadProductPage;
