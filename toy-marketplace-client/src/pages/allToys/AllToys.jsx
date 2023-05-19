/* eslint-disable react/jsx-no-undef */
import { useLoaderData } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import { Link } from "react-router-dom";

const AllToys = () => {
  useTitle("all toys");
  const allToys = useLoaderData();
  console.log(allToys);
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
            </tr>
          </thead>
          <tbody>
            {/* row 3 */}

            {allToys.map((toy, i) => {
              return (
                  <tr className="hover" key={toy._id}>
                    <th>{i+1}</th>
                    <td>{toy?.sellerName}</td>
                    <td>{toy?.name}</td>
                    <td>{toy?.category}</td>
                    <td>{toy?.price}</td>
                    <td>{toy?.quentity}</td>
                    <td><button className="btn bg-blue-500"><Link  to={`/shopDetails/${toy._id}`}>Veiw Details</Link></button></td>
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
