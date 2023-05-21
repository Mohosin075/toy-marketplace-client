/* eslint-disable react/jsx-no-undef */
import { useLoaderData } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const AllToys = () => {
  const [searchText, setSearchText] = useState('');
  useTitle("all toys");
  const loadedAllToys = useLoaderData();
  const [allToys, setAllToys] = useState(loadedAllToys)
  const handleSearch =(e)=>{
    e.preventDefault();
    fetch(`https://toy-marketplace-server-production.up.railway.app/searchByName/${searchText}`)
    .then(res=>res.json())
    .then(data=>{
      setAllToys(data);
      if(data.length < 1){
        toast.error("no data found" )
      }
    })
  }
  return (
    <div className="px-3 md:px-12 lg:px-16 my-14">
      <h2 className="text-5xl font-bold text-center mb-8">All Toys</h2>
      <form className="flex justify-center mb-8">
      <div className="form-control">
        <div className="input-group">
          <input onChange={(e)=>setSearchText(e.target.value)}
            type="text"
            placeholder="search by name"
            className="input input-bordered"
          />
          <button onClick={handleSearch} className="btn btn-square">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      </form>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quentity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 3 */}

            {allToys.map((toy, i) => {
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
                      className="btn bg-blue-500"
                      to={`/shopDetails/${toy._id}`}
                    >
                      Veiw Details
                    </Link>
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

export default AllToys;
