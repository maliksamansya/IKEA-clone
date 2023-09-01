import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { createCategory, updateCategory } from "../../stores/actions";
import swal from "sweetalert";

function CategoryForm(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { category } = props;
  const formType = location.pathname.split("/").slice(-1)[0];
  // console.log(formType);
  const [categoryName, setCategoryName] = useState("");
  // console.log(category, "<<<<<<<<<<<<<");

  useEffect(() => {
    if (category) {
      if (Object.keys(category).length) {
        setCategoryName(category.name);
      }
    }
  }, [category]);

  function changeHandler(e) {
    const value = e.target.value;
    setCategoryName(value);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (!categoryName) {
      return swal("Error", `Category name is required`, "error");
    }
    if (formType === "addCategory") {
      dispatch(createCategory(categoryName));
    } else if (formType === "edit") {
      dispatch(updateCategory(categoryName, category.id));
    }
    navigate("/category");
  }

  return (
    <div className="bg-white">
      <div className="py-2 px-30 my-8">
        <form
          action=""
          className="space-y-6 w-1/3 mx-auto"
          onSubmit={submitHandler}
        >
          <h1 className="text-2xl font-semibold">
            {formType === "addCategory" ? "Create Category" : "Edit Category"}
          </h1>
          <div>
            <label
              htmlFor="categoryName"
              className="text-sm font-medium text-gray-700"
            >
              Category name <span className="text-red-500">*</span>
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="categoryName"
                name="categoryName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-smalt focus:border-smalt"
                autoFocus
                onChange={changeHandler}
                value={categoryName}
              />
            </div>
          </div>
          {/* <button
            type="submit"
            className="text-gray-700 w-full justify-center py-2 px-4 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-smalt hover:bg-darkSmalt focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkSmalt"
          >
            Submit
          </button> */}
          <button
            type="submit"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CategoryForm;
