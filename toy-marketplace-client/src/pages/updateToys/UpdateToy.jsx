import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";

const UpdateToy = () => {
  useTitle('update')
  const {id} = useParams();
  const [loadedData, setLoadedData] = useState([]);
  
  const navigate = useNavigate();


  useEffect(()=>{
    fetch(`https://toy-marketplace-server-production.up.railway.app/updateData/${id}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setLoadedData(data)
    })
  },[])

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const price = parseInt(form.price.value);
    const quentity = form.quentity.value;
    const details = form.details.value;

    const info = {
      price,
      quentity,
      details,
    };
    console.log(info);


    fetch(`https://toy-marketplace-server-production.up.railway.app/updateToy/${id}`, {
      method : "PATCH",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(info)

    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.modifiedCount > 0){
        navigate('/myToys')
        Swal.fire({
          title: "update Successfully!",
          icon: "success",
          confirmButtonText: "Cool",
        });
        
      }
    })


  };

  return (
    <div className="px-3 md:px-20 my-16">
      <h2 className="text-5xl font-bold text-center mb-8">Update Your Toys</h2>
      <form className="w-full" onSubmit={handleUpdate}>
        <div className="md:flex justify-between gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price $:</span>
            </label>
            <input
              name="price"
              type="number"
              placeholder="price $"
              className="input input-bordered"
              required
              defaultValue={loadedData?.price}
              min={5}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">quentity :</span>
            </label>
            <input
              name="quentity"
              type="number"
              placeholder="quentity"
              className="input input-bordered"
              required
              defaultValue={loadedData?.quentity}
              min={1}
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
            defaultValue={loadedData?.details}
            className="textarea textarea-bordered textarea-lg w-full max-w-xxl"
          ></textarea>
        </div>
        <div className="form-control block mt-6">
          <input
            className="btn btn-primary btn-wide"
            type="submit"
            value="Update Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
