import { useContext, useEffect, useState } from "react";
import AddCategoryModal from "../../components/modals/AddCategoryModal";
import { CategoryContext } from "../../store/CategoryContext";
import { CategoryItemTypes } from "../../utils/user-types";
import CategoryItem from "../../components/category/CategoryItem";
import { UserContext } from "../../store/UserContext";
import CategorySkeleton from "../../skeletons/CategorySkeleton";
import EmptyOrErrorContainer from "../../components/EmptyOrErrorContainer";
import { getCategoriesApi } from "../../api/categories";

const Categories = () => {
  const [openModal, setOpenModal] = useState(() => false);

  const {
    state: { categories, categoriesLoading, error },
    dispatch,
  } = useContext(CategoryContext);
  const { state: userState } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      await getCategoriesApi(dispatch);
    })();
  }, [dispatch]);

  return (
    <>
      {openModal && (
        <AddCategoryModal
          text="Create Category"
          closeModal={() => setOpenModal(false)}
        />
      )}

      <div className="section-sm">
        <div className="categories">
          <div className="container">
            {userState.user?.role === "admin" && (
              <div className="section__head">
                <button
                  className="button add-button"
                  onClick={() => setOpenModal(true)}
                  children="Add Category"
                />
              </div>
            )}

            <div className="categories__main">
              {categoriesLoading && !categories ? (
                <>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <CategorySkeleton key={i} />
                  ))}
                </>
              ) : (
                <>
                  {categories?.map((category: CategoryItemTypes) => (
                    <CategoryItem
                      category={category}
                      key={category._id}
                      forAdmin={userState.user?.role === "admin" && true}
                    />
                  ))}
                </>
              )}

              {!categoriesLoading && categories?.length === 0 && (
                <EmptyOrErrorContainer
                  text="No categories found. Please create a new category to be
                shown here."
                />
              )}

              {error && !categoriesLoading && (
                <EmptyOrErrorContainer error={error} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
