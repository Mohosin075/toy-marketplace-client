import { useLoaderData } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const ShopCardDetails = () => {
  useTitle('shop category')
  const data = useLoaderData();
  const { details, price, rating, name, picture, quentity } = data;
  return (
    <div className="px-10 md:px-40 my-20">
      <div className="card lg:card-side w-full bg-base-100 shadow-xl">
        <figure className="md:w-1/2">
          <img src={picture} alt="Album"  className="w-full"/>
        </figure>
        <div className="md:w-1/2 flex justify-start items-center">
        <div className="space-y-6 p-8 ">
          <h2 className="card-title font-semibold">{name}</h2>
          <p>Price :{price}</p>
          <p>Available Quantity : {quentity}</p> 
          <p>Rating : {rating}</p> 
          <p className="text-xs md:text-lg">Details : {details}</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCardDetails;
