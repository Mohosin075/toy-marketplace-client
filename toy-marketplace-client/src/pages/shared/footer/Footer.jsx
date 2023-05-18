import { FaTwitter, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Footer = () => {
  return (
    <div>
         <footer className="px-10 pb-5 bg-base-200 text-xs md:flex justify-between items-center pt-6 space-y-4">
        <div>
          <div className="space-y-5">
            <div className="flex">
              <img
                className="w-11 h-11"
                src="https://i.ibb.co/3F57y83/logo111.png"
                alt=""
              />
              <a className="btn btn-ghost normal-case tex-xl md:text-3xl lg:text-5xl">
                <span className="text-blue-500 font-extrabold">Toy</span>{" "}
                <span className="text-pink-500 font-extrabold">G</span> alore{" "}
                <br />
              </a>
            </div>
            <p className="">
              Street: 123 ABC Lane <br /> City: Dhaka <br /> Postal Code: 12345
            </p>
          </div>
          <div className="flex space-x-10 mt-6">
            <a href="">
              <FaFacebook className="w-6 h-6 md:w-8 md:h-8"/>
            </a>
            <a href="">
              <FaTwitter className="w-6 h-6 md:w-8 md:h-8"/>
            </a>
            <a href="">
              <FaGithub className="w-6 h-6 md:w-8 md:h-8"/>
            </a>
            <a href="">
              <FaInstagram className="w-6 h-6 md:w-8 md:h-8"/>
            </a>
          </div>
        </div>
        <div>
            <h2 className="footer-title">Contact Us</h2>
          <form className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <label className="input-group">
                <span>Email</span>
                <input
                  type="password"
                  className="input input-bordered input-sm"
                  required
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <textarea className="textarea textarea-bordered w-full" placeholder="Type here..." required></textarea>
              </label>
            </div><input  className="btn btn-outline btn-secondary" type="submit" value="Submit"/>
            
          </form>
          
        </div>
      </footer>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <span className="footer-title">Quick Links</span>
          <Link className="link link-hover" to="/allToys">
            All Toys
          </Link>
          <Link className="link link-hover" to="/myToys">
            My Toys
          </Link>
          <Link className="link link-hover" to="/addToys">
            Add A Toy
          </Link>
          <Link className="link link-hover" to="/blogs">
            Blogs
          </Link>
        </div>
        <div>
          <span
            className="footer-title"
            onClick={() => toast.warn("this feature is not added")}
          >
            Company
          </span>
          <a
            className="link link-hover"
            onClick={() => toast.warn("this feature is not added")}
          >
            About us
          </a>
          <a
            className="link link-hover"
            onClick={() => toast.warn("this feature is not added")}
          >
            Contact
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a
            className="link link-hover"
            onClick={() => toast.warn("this feature is not added")}
          >
            Terms of use
          </a>
          <a
            className="link link-hover"
            onClick={() => toast.warn("this feature is not added")}
          >
            Privacy policy
          </a>
          <a
            className="link link-hover"
            onClick={() => toast.warn("this feature is not added")}
          >
            Cookie policy
          </a>
        </div>
      </footer>
     
      <div>
        <div className="px-10 pb-10 text-center bg-base-200">
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
