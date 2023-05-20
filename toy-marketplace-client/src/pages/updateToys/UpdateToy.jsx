const UpdateToy = () => {
  return (
    <div>
      <form className="w-full">
        <h2 className="text-center text-5xl font-bold my-4">
          Update :{/* The button to open modal */}
          <label htmlFor="my-modal" className="btn">
            open modal
          </label>
          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Congratulations random Internet user!
              </h3>
              <p className="py-4">
                You've been selected for a chance to get one year of
                subscription to use Wikipedia for free!
              </p>
              <div className="modal-action">
                <label htmlFor="my-modal" className="btn">
                  Yay!
                </label>
              </div>
            </div>
          </div>
        </h2>
        <div className="md:flex justify-between gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price :</span>
            </label>
            <input
              name="price"
              type="number"
              placeholder="price"
              className="input input-bordered"
              required
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
            value="Update Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
