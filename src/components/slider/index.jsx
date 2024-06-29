import { useEffect } from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ url, page = 1, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setloading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchImages(getUrl) {
    try {
      setloading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setloading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setloading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading data!</div>;
  }
  if (errorMsg !== null) {
    return <div>Failed to fetch data {errorMsg}</div>;
  }

  return (
    <div className="relative flex content-center justify-center items-center w-auto h-auto">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="absolute w-4 h-4 text-white left-4"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index ? "w-full h-full border-r-2" : "hidden"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="absolute w-4 h-4 text-white right-4"
      />
      <span className="flex absolute bottom-4 ">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "bg-white h-3 w-3 border-none rounded outline-none m-1 cursor-pointer"
                    : "bg-gray-400 h-3 w-3 border-none rounded outline-none m-1 cursor-pointer"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
