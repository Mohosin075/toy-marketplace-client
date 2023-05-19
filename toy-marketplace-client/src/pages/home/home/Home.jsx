import useTitle from "../../hooks/useTitle";
import Galary from "../galary/Galary";
import Banner from "./../banner/Banner";

const Home = () => {
  useTitle("home");
  return (
    <div>
      <Banner></Banner>
        <Galary></Galary>
    </div>
  );
};

export default Home;
