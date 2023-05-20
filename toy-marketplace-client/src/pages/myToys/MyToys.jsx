import { useContext, useEffect, useState } from "react";
import useTitle from "../hooks/useTitle";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const MyToys = () => {
  useTitle("my toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "Your cannot recovery !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myToys/toyRemove/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Delete Successfully!",
                icon: "success",
                confirmButtonText: "Cool",
              });

              const remaining = myToys.filter((toy) => toy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="px-3 md:px-12 lg:px-16 my-20">
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quentity</th>
              <th>Details</th>
              <th>Update</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 3 */}

            {myToys.map((toy, i) => {
              return (
                <tr className="hover" key={toy._id}>
                  <th>{i + 1}</th>
                  <td>{toy?.sellerName}</td>
                  <td>{toy?.name}</td>
                  <td>{toy?.category}</td>
                  <td>{toy?.price}</td>
                  <td>{toy?.quentity}</td>
                  <td>
                    <Link
                      className="btn btn-outline btn-secondary"
                      to={`/shopDetails/${toy._id}`}
                    >
                      Veiw Details
                    </Link>
                  </td>
                  <td>
                    {/* The button to open modal */}
                    <label className="btn bg-blue-600 border-0 hover:bg-blue-400">
                      update
                    </label>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(toy._id)}
                      className="btn btn-circle hover:bg-red-600 hover:border-0 btn-outline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
