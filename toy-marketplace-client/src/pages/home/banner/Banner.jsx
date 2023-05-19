const Banner = () => {
  return (
    <div className="relative">
      <div className="carousel w-full bg-base-300 bg-blend-darken max-h-screen h-full min-h-full">
        <div id="item1" className="carousel-item w-full relative bg-blend-darken">
          <img
            src="https://i.ibb.co/BPB0GKS/slider4.jpg"
            className="w-full h-full bg-center bg-cover"
          />
          <div className="absolute flex flex-col  items-center justify-center px-10 md:px-20 md:w-5/12 text-white  space-y-2 md:space-y-8  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <h2 className="text-2xl font-extrabold md:text-5xl">Dive into Playtime with Vibrant Toy Creatures</h2>
            <p className="text-xs md:text-lg tracking-wide">We prioritize the safety and well-being of your child. All our animal toys undergo rigorous quality checks to ensure they meet the highest industry standards. Rest assured, each toy is made from child-safe materials, free from harmful chemicals, and designed to withstand the test of time.</p>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full relative bg-blend-darken">
          <img
            src="https://i.ibb.co/CQQn3y2/slider5.jpg"
            className="w-full h-full bg-center bg-cover"
          />
          <div className="absolute flex flex-col  items-center justify-center px-10 md:px-20 md:w-5/12 text-white  space-y-2 md:space-y-8  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <h2 className="text-2xl font-extrabold md:text-5xl">Uncover the Magic of Animal Toys</h2>
            <p className="text-xs md:text-lg tracking-wide">We prioritize the safety and well-being of your child. All our animal toys undergo rigorous quality checks to ensure they meet the highest industry standards. Rest assured, each toy is made from child-safe materials, free from harmful chemicals, and designed to withstand the test of time.</p>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full relative bg-blend-darken">
          <img
            src="https://i.ibb.co/dcxptxp/slider3.jpg"
            className="w-full h-full bg-center bg-cover"
          />
          <div className="absolute flex flex-col  items-center justify-center px-10 md:px-20 md:w-5/12 text-white  space-y-2 md:space-y-8  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <h2 className="text-2xl font-extrabold md:text-5xl">Animal Toys for Endless Entertainment</h2>
            <p className="text-xs md:text-lg tracking-wide">Your satisfaction is our top priority. Our friendly and knowledgeable customer service team is here to assist you every step of the way. If you have any questions, concerns, or need recommendations, we are just a call or email away.</p>
          </div>
        </div>
        <div id="item4" className="carousel-item w-full relative bg-blend-darken">
          <img
            src="https://i.ibb.co/KLLKwFv/slider2.jpg"
            className="w-full h-full bg-center bg-cover"
          />
          <div className="absolute flex flex-col  items-center justify-center px-10 md:px-20 md:w-5/12 text-white  space-y-2 md:space-y-8  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <h2 className="text-2xl font-extrabold md:text-5xl">Animal Toy Collection for Imaginative Play</h2>
            <p className="text-xs md:text-lg tracking-wide">Our animal toys are crafted with meticulous attention to detail, capturing the unique characteristics and features of each animal. From lifelike textures to vibrant colors, every aspect is carefully designed to provide an immersive and engaging play experience.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-6 absolute bottom-1 md:bottom-20">
        <a href="#item1" className="btn text-white btn-xs">
          1
        </a>
        <a href="#item2" className="btn text-white btn-xs">
          2
        </a>
        <a href="#item3" className="btn text-white btn-xs">
          3
        </a>
        <a href="#item4" className="btn text-white btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
