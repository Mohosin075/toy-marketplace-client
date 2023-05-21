import useTitle from "../../hooks/useTitle";
import ShopByCategory from "../../shopByCategory/ShopByCategory";
import App from "../extraSection/ToyGiftGuideSection/App";
import Galary from "../galary/Galary";
import Banner from "./../banner/Banner";

const Home = () => {
  useTitle("home");
  return (
    <div>
      <Banner></Banner>
        <Galary></Galary>
        <ShopByCategory></ShopByCategory>
        <App></App>
    </div>
  );
};

export default Home;
