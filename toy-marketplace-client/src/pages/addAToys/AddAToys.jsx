import { useContext } from "react";
import useTitle from "./../hooks/useTitle";
import { AuthContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2'
const AddAToys = () => {
  useTitle("add a toys");
  const { user } = useContext(AuthContext);
  const handleAddToys = (e) => {
    e.preventDefault();
    const form = e.target;

    const picture = form.picture.value;
    const name = form.name.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const rating = form.rating.value;
    const quentity = form.quentity.value;
    const details = form.details.value;
    const sellerName = user.displayName;
    const email = user.email;


    console.log(price);
    console.log(typeof(price));

    const info = {
        picture,
      name,
      category,
      price,
      rating,
      quentity,
      details,
      sellerName,
      email,
    };
    console.log(info);


    fetch('https://toy-marketplace-server-steel.vercel.app/addAToy', {
        method : 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(info)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: 'Toy Added Successfully!',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
    })

  };

  return (
    <div className="hero my-12 md:my-20 w-full">
      <div className="hero-content flex-col w-full">
        <h2 className="text-5xl font-bold">Add Your Toys</h2>
        <div className="card flex-shrink-0 w-full max-w-xxl border border-1 shadow-lg bg-base-100">
          <form className="card-body" onSubmit={handleAddToys}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL :</span>
              </label>
              <input
                name="picture"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="md:flex justify-between items-center gap-5 w-full">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Seller Name :</span>
                </label>
                <input
                  name="seller"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full"
                  value={user?.displayName}
                  disabled
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email :</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Name"
                  className="input input-bordered w-full"
                  value={user?.email}
                  disabled
                />
              </div>
            </div>
            <div className="md:flex justify-between items-center gap-5 w-full">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Toy Name :</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Sub Category :</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  name="category"
                  required
                >
                  <option disabled selected>
                    category
                  </option>
                  <option>bear</option>
                  <option>dogs</option>
                  <option>unicorn</option>
                  <option>horse</option>
                  <option>dinosaur</option>
                  <option>cat</option>
                  <option>cows</option>
                </select>
              </div>
            </div>
            <div className="md:flex justify-between gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Price $:</span>
                </label>
                <input
                min={5}
                  name="price"
                  type="number"
                  placeholder="price $"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Rating Star :</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  name="rating"
                  required
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option selected>5</option>
                </select>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">quentity :</span>
                </label>
                <input
                min={1}
                  name="quentity"
                  type="number"
                  placeholder="quentity"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Detail description :</span>
              </label>
              <textarea
                placeholder="Detail description"
                name="details"
                className="textarea textarea-bordered textarea-lg w-full max-w-xxl"
              ></textarea>
            </div>
            <div className="form-control block mt-6">
              <input
                className="btn btn-primary btn-wide"
                type="submit"
                value="Submit Your Toy"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAToys;
