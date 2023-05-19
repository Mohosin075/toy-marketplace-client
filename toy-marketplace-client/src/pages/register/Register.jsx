/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
const Register = () => {
  useTitle("register");
  const {user, createUser , userProfileDataUpdata} = useContext(AuthContext);
  const [show, setShow] = useState(false)
//   register form
const handleRegister =e=>{
    e.preventDefault();
    const form = e.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    const photo=form.photo.value;

    if(password.length < 8){
      toast.error("password less then 8 character!", {
        position: toast.POSITION.TOP_CENTER
      })
      return;
    }

    if (!/(?=.*?[A-Z])/.test(password)) {
      toast.error("At lest one uppercase!", {
        position: toast.POSITION.TOP_CENTER
      })
      return;
    } else if (!/(?=.*[0-9])/.test(password)) {
      toast.error("At lest one number!", {
        position: toast.POSITION.TOP_CENTER
      })
      return;
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      toast.error("At lest one special carecter!", {
        position: toast.POSITION.TOP_CENTER
      })
      return;
    }

    createUser(email, password)
    .then(result=>{
        const createdUser = result.user;
        console.log(createdUser);
        toast.success("User Successfully Added!", {
          position: toast.POSITION.TOP_CENTER
        })
        userProfileDataUpdata(name, photo)
    })
    .catch(err=>{
        console.log(err);
        toast.error(err.message, {
          position: toast.POSITION.TOP_CENTER
        })
    })
}
  return (
    <div className="hero my-12 md:my-20 w-full">
      <div className="hero-content flex-col w-full">
        <h2 className="text-5xl font-bold">
          Please <span className="text-blue-600 font-bold">Register</span>!
        </h2>
        <div className="card flex-shrink-0 w-full max-w-lg border border-1 shadow-lg bg-base-100">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name :</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email :</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex items-center justify-between">
                <input
                  type={show ? 'text' : 'password'}
                  placeholder="password"
                  name="password"
                  className="input input-bordered relative w-full"
                  required
                />
                <span className="absolute right-10 p-2 cursor-pointer" onClick={()=>setShow(!show)}>{show ? 'hide' : 'show'}</span>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL :</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary btn-outline">Register</button>
            </div>
            <p className="text-sm mt-3">
              Already have an Account ? Please{" "}
              <Link
                to="/login"
                className="text-blue-700 underline hover:text-blue-600"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
