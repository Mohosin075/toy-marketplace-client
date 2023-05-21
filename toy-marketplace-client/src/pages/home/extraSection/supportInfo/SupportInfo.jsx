import { toast } from "react-toastify";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

const SupportInfo = () => {
  

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: 'ease-in-out',
      delay: 200,
      once: false, // Animations only occur once
      mirror: true, // Repeating animations on scroll up and down
      anchorPlacement: 'top-bottom', // Specify anchor placement for scroll offset calculation
    });

    return () => {
      AOS.refresh(); // Refresh AOS on component unmount to remove any remaining animations
    };
  }, []);

    return (
        <div className="py-12 md:py-24 px-3 md:px-12 lg:px-16">
        <div className="text-center">
        <h2 className="text-center text-2xl md:text-5xl mb-1 font-bold">
        What is ToyGalore?
        </h2>
        <button className="btn btn-link btn-xs mb-8  md:mb-16 " onClick={()=>toast.warn("story not availabe right now!", {
          position: toast.POSITION.TOP_CENTER,
        })}>Read our wonderfully weird story</button>
        </div>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
            <h2 className="text-xl md:text-3xl font-semibold mb-4">A community doing good</h2>
            <p className="text-xs md:text-sm">Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the plane</p>
          </div>
          <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500">
            <h2 className="text-xl md:text-3xl font-semibold mb-4">Support independent creators</h2>
            <p className="text-xs md:text-sm">There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</p>
          </div>
          <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500">
            <h2 className="text-xl md:text-3xl font-semibold mb-4">Peace of mind</h2>
            <p className="text-xs md:text-sm">Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
          </div>
        </div>
        <div className="text-center">
        <h2 className="text-center text-xl mt-10 md:text-3xl">Have a question? Well, we’ve got some answers.</h2>
        <button onClick={()=>toast.warn("help center is not available! try after few days!", {
          position: toast.POSITION.TOP_CENTER,
        })} className="py-3 px-8 border font-bold text-lg  rounded-full border-blue-600 mt-8 border-3 hover:bg-blue-700 hover:border-0 hover:text-white">Go to Help Center</button>
        </div>
      </div>
    );
};

export default SupportInfo;