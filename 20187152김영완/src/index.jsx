import React, { useEffect, useState } from "react";
import CheckBox from "../../20187160안중현/src/pages/LandingPage/Sections/CheckBox";
import RadioBox from "../../20187160안중현/src/pages/LandingPage/Sections/RadioBox";
import SearchInput from "../../20187160안중현/src/pages/LandingPage/Sections/SearchInput";
import CardItem from "../../20187160안중현/src/pages/LandingPage/Sections/CardItem";
import axiosInstance from "../../utils/axios";
import { continents, prices } from "../../utils/fillterData";
import GREAPP1 from "/images/GREAPP-1.png";

const LandingPage = () => {
  const limit = 4;
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [filters, setFilters] = useState({
    continents: [],
    price: [],
  });

  useEffect(() => {
    fetchProducts({ skip, limit });
  }, []);

  const fetchProducts = async ({
    skip,
    limit,
    loadMore = false,
    filters = {},
    searchTerm = "",
  }) => {
    const params = {
      skip,
      limit,
      filters,
      searchTerm,
    };

    try {
      const response = await axiosInstance.get("/products", { params });

      if (loadMore) {
        setProducts([...products, ...response.data.products]);
      } else {
        setProducts(response.data.products);
      }
      setHasMore(response.data.hasMore);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoadMore = () => {
    const body = {
      skip: skip + limit,
      limit,
      loadMore: true,
      filters,
      searchTerm,
    };
    fetchProducts(body);
    setSkip(skip + limit);
  };

  const handleFilters = (newFilteredData, category) => {
    const newFilters = { ...filters };
    newFilters[category] = newFilteredData;
    if (category === "price") {
      const priceValues = handlePrice(newFilteredData);
      newFilters[category] = priceValues;
    }
    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  const handlePrice = (value) => {
    let array = [];

    for (let key in prices) {
      if (prices[key]._id === parseInt(value, 10)) {
        array = prices[key].array;
      }
    }
    return array;
  };

  const showFilteredResults = (filters) => {
    console.log(filters);
    const body = {
      skip: 0,
      limit,
      filters,
      searchTerm,
    };

    fetchProducts(body);
    setSkip(0);
  };

  const handleSearchTerm = (event) => {
    const body = {
      skip: 0,
      limit,
      filters,
      searchTerm: event.target.value,
    };
    setSkip(0);
    setSearchTerm(event.target.value);
    fetchProducts(body);
  };
  return (
    <div className="div">
      <div className="text-center m-40">
        {" "}
        {/* 여유 공간 조절 */}
        <div className="text-center m-36">
          <img className="image-container GREAPP" alt="Greapp" src={GREAPP1} />
          <h2 className="text-2xl">Preview</h2>
        </div>{" "}
      </div>
      {/* Filter */}
      <div className="flex gap-3">
        <div className="w-1/2">
          <CheckBox
            continents={continents}
            checkedContinents={filters.continents}
            onFilters={(filters) => handleFilters(filters, "continents")}
          />
        </div>
        <div className="w-1/2">
          <RadioBox
            prices={prices}
            checkedPrice={filters.price}
            onFilters={(filters) => handleFilters(filters, "price")}
          />
        </div>
      </div>

      {/* Search */}
      <div className="flex justify-end mb-3">
        <SearchInput searchTerm={searchTerm} onSearch={handleSearchTerm} />
      </div>

      {/* Card */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {products.map((product) => (
          <CardItem product={product} key={product._id} />
        ))}
      </div>

      {/* LoadMore */}
      {hasMore && (
        <div className="flex justify-center mt-5">
          <button
            onClick={handleLoadMore}
            style={{ backgroundColor: "#eeddff" }}
            className="px-4 py-2 mt-60 text-black rounded-md hover:bg-blue-500"
          >
            More
          </button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
