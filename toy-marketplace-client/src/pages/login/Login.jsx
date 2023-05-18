import { useContext } from "react";
import useTitle from "../hooks/useTitle";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  useTitle("login");
  const { user, loginUser, googleLogin } = useContext(AuthContext);
  console.log(user);
  //   login form
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("user login successfully!");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });

  };

  const handleGoogleLogin = () =>{
    googleLogin().then(result=>{
        console.log(result.user);
        toast.success("user login successfully!")
    })
    .catch(err=>{
        console.log(err);
        toast.error(err.message)
    })
  }


  return (
    <div className="hero my-12 md:my-20 w-full">
      <div className="hero-content flex-col w-full">
        <h2 className="text-5xl font-bold">
          Please <span className="text-blue-600 font-bold">Login</span>!
        </h2>
        <div
          
          className="card flex-shrink-0 w-full max-w-lg border border-1 shadow-lg bg-base-100"
        >
          <form className="card-body" onSubmit={handleLogin}>
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
            <div className="form-control mt-6">
              <input className="btn btn-primary btn-outline" type="submit" value="Login" />
            </div>
            <p className="text-sm mt-3">
              New to ToyGalore ?{" "}
              <Link
                to="/register"
                className="text-blue-700 underline hover:text-blue-600"
              >
                create an account
              </Link>
            </p>
          </form>
          <div className="text-center mb-10">
          <button className="btn gap-2 btn-outline btn-info" onClick={handleGoogleLogin}>
              <img
                className="w-6 h-6"
                src="https://i.ibb.co/jHm659t/gggggggg.png"
                alt=""
              />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
