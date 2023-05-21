import { useLoaderData } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const ShopCardDetails = () => {
  useTitle('shop category')
  const data = useLoaderData();
  console.log(data);
  const { details, price, rating, name,email, sellerName, picture, quentity } = data;
  return (
    <div className="px-10 md:px-40 my-20">
      <div className="card lg:card-side w-full bg-base-100 shadow-xl">
        <figure className="md:w-1/2">
          <img src={picture} alt="Album"  className="w-full"/>
        </figure>
        <div className="md:w-1/2 flex justify-start items-center">
        <div className="space-y-6 p-8 ">
          <h2 className="text-5xl font-bold"> {name}</h2>
          <p className="text-lg font-extrabold">Seller : {sellerName}</p>
          <p>Email : {email}</p>
          <p className="font-semibold text-blue-500">Price : {price}</p>
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
