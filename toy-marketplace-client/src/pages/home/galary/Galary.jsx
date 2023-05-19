import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Galary = () => {
  const images = [
    {
      original: "https://i.ibb.co/YyYX7b5/gggal.jpg",
      thumbnail: "https://i.ibb.co/YyYX7b5/gggal.jpg",
    },
    {
      original: "https://i.ibb.co/YyYX7b5/gggal.jpg",
      thumbnail: "https://i.ibb.co/YyYX7b5/gggal.jpg",
    },
    {
      original: "https://i.ibb.co/YyYX7b5/gggal.jpg",
      thumbnail: "https://i.ibb.co/YyYX7b5/gggal.jpg",
    },
    {
      original: "https://i.ibb.co/YyYX7b5/gggal.jpg",
      thumbnail: "https://i.ibb.co/YyYX7b5/gggal.jpg",
    },
    {
      original: "https://i.ibb.co/YyYX7b5/gggal.jpg",
      thumbnail: "https://i.ibb.co/YyYX7b5/gggal.jpg",
    },
    {
      original: "https://i.ibb.co/YyYX7b5/gggal.jpg",
      thumbnail: "https://i.ibb.co/YyYX7b5/gggal.jpg",
    },
    {
      original: "https://i.ibb.co/YyYX7b5/gggal.jpg",
      thumbnail: "https://i.ibb.co/YyYX7b5/gggal.jpg",
    },
    {
      original: "https://i.ibb.co/YyYX7b5/gggal.jpg",
      thumbnail: "https://i.ibb.co/YyYX7b5/gggal.jpg",
    },
  ];

  return (
    <div className="py-12 md:py-24 bg-base-200 px-3 md:px-12 lg:px-16">
      <h2 className="text-center text-2xl md:text-5xl mb-5 md:mb-16 font-semibold">
        Animal Toys Gallery
      </h2>
      <div>
        <ImageGallery items={images} />
      </div>
    </div>
  );
};

export default Galary;
