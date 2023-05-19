import useTitle from "../../hooks/useTitle";
import Banner from './../banner/Banner';

const Home = () => {
    useTitle('home')
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;