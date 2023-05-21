/* eslint-disable react/prop-types */

import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from './../provider/AuthProvider';
import { toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const ShowCategoryData = ({ cata }) => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: 'ease-in-out',
      delay: 200,
      once: true, // Animations only occur once
      mirror: true, // Repeating animations on scroll up and down
      anchorPlacement: 'top-bottom', // Specify anchor placement for scroll offset calculation
    });

    return () => {
      AOS.refresh(); // Refresh AOS on component unmount to remove any remaining animations
    };
  }, []);
  const {user} = useContext(AuthContext);
  const {_id, price, rating, name, picture } = cata;
  return (
    <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" className="card w-full bg-base-100 shadow-xl">
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
