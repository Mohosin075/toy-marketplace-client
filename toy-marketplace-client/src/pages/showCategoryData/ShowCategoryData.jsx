/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from './../provider/AuthProvider';
import { toast } from 'react-toastify';

const ShowCategoryData = ({ cata }) => {
  const {user} = useContext(AuthContext);
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
          <button className="btn btn-primary" onClick={()=> user ? <></> : toast.warn("Login first!") }><Link to={`/shopDetails/${_id}`}>View Details</Link></button>
        </div>
      </div>
    </div>
  );
};

export default ShowCategoryData;
