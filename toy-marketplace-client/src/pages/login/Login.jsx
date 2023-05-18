import useTitle from "../hooks/useTitle";
import { Link } from 'react-router-dom';

const Login = () => {
  useTitle("login");
  return (
    <div className="hero my-12 md:my-20 w-full">
      <div className="hero-content flex-col w-full">
        <h2 className="text-5xl font-bold">Please <span className="text-blue-600 font-bold">Login</span>!</h2>
        <div className="card flex-shrink-0 w-full max-w-lg border border-1 shadow-lg bg-base-100">
          <form className="card-body">
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
              <button className="btn btn-primary btn-outline">Login</button>
            </div>
            <p className="text-sm mt-3">New to ToyGalore ? <Link to="/register" className="text-blue-700 underline hover:text-blue-600">create an account</Link></p>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
