import useTitle from "../../hooks/useTitle";

const Home = () => {
    useTitle('home')
    return (
        <div>
            this is home
            <a href="">hello world</a>
        </div>
    );
};

export default Home;