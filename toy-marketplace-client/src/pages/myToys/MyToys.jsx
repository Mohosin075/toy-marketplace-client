import { useContext, useEffect, useState } from "react";
import useTitle from "../hooks/useTitle";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const MyToys = () => {
  useTitle("my toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [active, setActive] = useState(' ');


  useEffect(() => {
    fetch(`https://toy-marketplace-server-steel.vercel.app/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user]);

  
  const  handleAssending= () => {
    
    fetch(`https://toy-marketplace-server-steel.vercel.app/myToysAssending/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        setActive("assending")
      });
  };

  const handleDisending = () => {
    
    fetch(`https://toy-marketplace-server-steel.vercel.app/myToysDssending/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        setActive("dissending")
      });
  };
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
        fetch(`https://toy-marketplace-server-steel.vercel.app/myToys/toyRemove/${id}`, {
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
      <h2 className="text-5xl font-bold text-center mb-8">My Toys</h2>
      {myToys.length < 1 ? <></> : <div className="text-center flex justify-center items-center">
       <span className="font-bold mr-5">Sort Price By : </span>
        <div className="tabs tabs-boxed">
          <a
            onClick={() => handleDisending()}
            className={`tab font-bold ${active === "dissending" ? "tab-active" : ""}`}
          >
            descending 
          </a>
          <a
            onClick={() => handleAssending()}
            className={`tab font-bold ${
              active === "assending" ? "tab-active" : ""
            }`}
          >
            ascending 
          </a>
        </div>
      </div>}
      {myToys.length < 1 ? <div className="text-center"><h2 className="text-5xl text-red-500">... </h2><br /> <Link to="/addToys" className="btn bg-blue-700 hover:bg-blue-800">Added Toys</Link></div> :<div className="overflow-x-auto">
        <table className="table w-full mt-10">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Toy Name</th>
              <th>images</th>
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
                  <td><img className="w-10 h-10" src={toy?.picture} alt="" /></td>
                  <td>{toy?.category}</td>
                  <td>$ {toy?.price}</td>
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
                    <Link to={`/update/${toy._id}`} className="btn bg-blue-600 border-0 hover:bg-blue-400">
                      update
                    </Link>
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
      </div>}
    </div>
  );
};

export default MyToys;
