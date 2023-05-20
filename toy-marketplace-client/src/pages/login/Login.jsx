import { useContext, useState } from "react";
import useTitle from "../hooks/useTitle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  useTitle("login");
  const { user, loginUser, googleLogin, forgetPassword } =
    useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [fEmail, setFEmail] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  //   login form
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("user login successfully!", {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate(from);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const handleForgetPassword = () => {
    console.log(fEmail);
    forgetPassword(fEmail).then(() => {
      toast.success("check your email and reset password!", {
        position: toast.POSITION.TOP_CENTER,
      });
      // ..
    })
    .catch((error) => {
      toast.error("provide email!", {
        position: toast.POSITION.TOP_CENTER,
      });
      // ..
    });
  };

  const handleInputBlur = (e) => {
    const email  = e.target.value;
    setFEmail(email);
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("user login successfully!", {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate(from);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <div className="hero my-12 md:my-20 w-full">
      <div className="hero-content flex-col w-full">
        <h2 className="text-5xl font-bold">
          Please <span className="text-blue-600 font-bold">Login</span>!
        </h2>
        <div className="card flex-shrink-0 w-full max-w-lg border border-1 shadow-lg bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email :</span>
              </label>
              <input
                onBlur={handleInputBlur}
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
                  type={show ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered relative w-full"
                  required
                />
                <span
                  className="absolute right-10 p-2 cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  {show ? "hide" : "show"}
                </span>
              </div>
              <label className="label">
                <a
                  href="#"
                  onClick={handleForgetPassword}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary btn-outline"
                type="submit"
                value="Login"
              />
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
            <button
              className="btn gap-2 btn-outline btn-info"
              onClick={handleGoogleLogin}
            >
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
