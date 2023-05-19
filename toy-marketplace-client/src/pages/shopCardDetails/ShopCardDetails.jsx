import { useLoaderData } from "react-router-dom";

const ShopCardDetails = () => {
  const data = useLoaderData();
  const { details, price, rating, name, picture } = data;
  return (
    <div className="px-10 md:px-40 my-20">
      <div className="card lg:card-side w-full bg-base-100 shadow-xl">
        <figure className="md:w-1/2">
          <img src={picture} alt="Album"  className="w-full"/>
        </figure>
        <div className="card-body md:w-1/2">
          <h2 className="card-title font-semibold">{name}</h2>
          <p>Price :{price}</p>
          <p>Rating : {rating}</p>
          <p>Details : </p>
          <p className="text-xs md:text-lg">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default ShopCardDetails;
