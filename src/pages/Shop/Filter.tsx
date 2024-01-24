import { useState } from "react";
// import FilterOptions from "../../components/FilterOptions";
import CloseIcon from "../../components/UI/Icons/CloseIcon";
import FilterOptions from "../../components/UI/FilterOptions";
// import AddProductModal from "../../components/modals/AddProductModal";

const categoryOptions = [
  "Water and Drinks",
  "Fresh Fruit",
  "Meat Products",
  "Vegetables",
  "Oil",
  "Soda",
  "Snacks",
  "Beauty",
];
const priceOptions = [
  "Min $5 -  Max $10",
  "Min $10 - Max $20",
  "Min $20 - Max $30",
  "Min $30 - Max $40",
  "Min $40 - Max $50",
];

const sortOptions = ["Sort by: Latest", "Sort by: Newest", "Sort by: Trending"];
const ratingOptions = ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐", "⭐⭐", "⭐"];

const Filter = () => {
  const [addProductModal, setAddProductModal] = useState(() => false);

  return (
    <>
      {/* {addProductModal && (
        <AddProductModal
          text="Add Product"
          closeModal={() => setAddProductModal(false)}
        />
      )} */}

      <div className="filter">
        <div className="container">
          <div className="filter__top">
            <FilterOptions options={categoryOptions} title="Select Category" />
            <FilterOptions options={priceOptions} title="Select Price" />
            <FilterOptions options={ratingOptions} title="Select Rating" />
            <FilterOptions options={sortOptions} title="Sort By: Latest" />
            {/* <button
              className="button add-button"
              onClick={() => setAddProductModal(true)}
              children="Add Product"
            /> */}
          </div>
        </div>
        <div className="filter__bottom">
          <div className="container">
            <div className="filter__bottom--main">
              <div className="active__filters">
                <h5>Active Filters:</h5>
                <div className="active__filter">
                  Vegetables
                  <CloseIcon />
                </div>
                <div className="active__filter">
                  Min $10 - Max $20
                  <CloseIcon />
                </div>
              </div>
              <div className="filter__result">
                <p>
                  89
                  <span>Products found.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;