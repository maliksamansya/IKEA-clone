// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// function CategoryRow({ name, index, id, onDelete }) {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   // const {category} = useSelector(state => state)

//   async function getCategoryById() {
//     try {
//       const response = await fetch(`http://localhost:3000/categories/${id}`, {
//         method: "get",
//         headers: {
//           access_token: localStorage.access_token,
//           "Content-Type": "application/json",
//         },
//       });
//       const result = await response.json();
//       console.log(result);
//       dispatch({ type: "fetchCategoryById", payload: result });
//       navigate("/category/addCategory");
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return (
//     <>
//       {/* {categoriess.map((el, index) => ( */}

//       {/* ))} */}
//       <tr>
//         <td className="py-4 px-6 border-b border-gray-300">{index + 1}</td>
//         <td className="py-4 px-6 border-b border-gray-300">{name}</td>
//         <td className="py-4 px-6 border-b border-gray-300">2023-09-21</td>
//         <td className="py-4 px-6 border-b border-gray-300">2023-09-21</td>
//         <td className="py-4 px-6 border-b border-gray-300">
//           <button
//             onClick={getCategoryById}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
//           >
//             Edit
//           </button>
//           <button
//             onClick={() => onDelete(id)}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Delete
//           </button>
//         </td>
//       </tr>
//     </>
//   );
// }
// export default CategoryRow;
import { deleteCategory } from "../../stores/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function CategoryRow(props) {
  const dispatch = useDispatch();
  const { category, index } = props;
  function deleteHandler(e, categoryId) {
    e.preventDefault();
    dispatch(deleteCategory(categoryId));
  }
  return (
    <tr className="border-b even:bg-gray-50">
      <td className="px-6 py-4 text-center">
        <div className="text-sm leading-5 text-gray-500">{index}</div>
      </td>
      <td className="px-6 py-4 text-center">
        <div className="text-sm leading-5 text-gray-500">{category.name}</div>
      </td>
      <td className="px-6 py-4 text-center">
        <div className="text-sm leading-5 text-gray-500">
          <Link
            to={`/category/${category.id}/edit`}
            className="font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Edit
          </Link>
          <button
            className="ml-3 font-semibold text-rose-600 hover:text-rose-700"
            onClick={(e) => deleteHandler(e, category.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default CategoryRow;
