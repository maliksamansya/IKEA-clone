import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import CategoryForm from "../components/Category/CategoryForm";
import { fetchCategory } from "../stores/actions";
import PulseLoader from "react-spinners/PulseLoader";

function EditCategoryPage() {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(false);
  const category = useSelector((state) => {
    return state.category.category;
  });
  // console.log(categoryId, "<<<<<<<<<< ini category id");
  useEffect(() => {
    dispatch(fetchCategory(categoryId));
    setLoading(true);
  }, [dispatch]);

  useEffect(() => {
    if (category) {
      if (Object.keys(category)) {
        setLoading(false);
      }
    }
  }, [category]);

  return (
    <React.Fragment>
      {loading ? (
        <div className="sweet-loading flex items-center h-screen">
          <PulseLoader
            loading={loading}
            size={20}
            color={"#002672"}
            className="mx-auto"
          />
        </div>
      ) : (
        <CategoryForm category={category} />
      )}
    </React.Fragment>
  );
}

export default EditCategoryPage;
