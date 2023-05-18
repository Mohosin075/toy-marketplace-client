import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Register = () => {
  useTitle("register");
  const {user} = useContext(AuthContext);
  console.log(user);
//   register form
const handleRegister =e=>{
    e.preventDefault();
    const form = e.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    const photo=form.photo.value;

    const userData = {name, email, password, photo}
    console.log(userData);
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
                <span className="label-text">Password :</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
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
