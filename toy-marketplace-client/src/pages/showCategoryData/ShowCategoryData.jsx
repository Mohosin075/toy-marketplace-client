/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ShowCategoryData = ({ cata }) => {
  const {_id, price, rating, name, picture } = cata;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={picture} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Price : {price}</p>
        <p>Rating : {rating}</p>
        <div className="card-actions">
          <button className="btn btn-primary" ><Link to={`/shopDetails/${_id}`}>View Details</Link></button>
        </div>
      </div>
    </div>
  );
};

export default ShowCategoryData;
