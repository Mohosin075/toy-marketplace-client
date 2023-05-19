/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import ShowCategoryData from "../showCategoryData/ShowCategoryData";
const ShopByCategory = () => {
  const [active, setActive] = useState("bear");
  const [catData, setCatData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/category/${active}`)
      .then((res) => res.json())
      .then((data) => {
        setCatData(data);
      });
  }, [active]);

  const handleActive = (tab) => {
    setActive(tab);
  };
  return (
    <div className="py-12 md:py-24 px-3 md:px-12 lg:px-16">
        <h2 className="text-center text-2xl md:text-5xl  mb-5 font-semibold">
        Shop Your Favorite Animals
      </h2>
      <p className="md:w-2/3 mx-auto mb-5 md:mb-16 tex-xs md:text-md text-center">Our animal toys are crafted with meticulous attention to detail, capturing the unique characteristics and features of each animal. From  an immersive and engaging play experience.</p>
      <div className="text-center flex justify-center">
        <div className="tabs tabs-boxed">
          <a
            onClick={() => handleActive("bear")}
            className={`tab font-bold ${active === "bear" ? "tab-active" : ""}`}
          >
            teddy bear
          </a>
          <a
            onClick={() => handleActive("dogs")}
            className={`tab font-bold ${active === "dogs" ? "tab-active" : ""}`}
          >
            dogs
          </a>
          <a
            onClick={() => handleActive("unicorn")}
            className={`tab font-bold ${
              active === "unicorn" ? "tab-active" : ""
            }`}
          >
            unicorn
          </a>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 my-8 gap-5">
      {
        catData.map(cata=><ShowCategoryData key={cata._id} cata={cata}></ShowCategoryData>)
      }
      </div>
    </div>
  );
};
export default ShopByCategory;
