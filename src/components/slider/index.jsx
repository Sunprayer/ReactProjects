import { useEffect } from "react";
import { useState } from "react";

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

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);
  if (loading) {
    return <div>Loading data!</div>;
  }
  if (errorMsg !== null) {
    return <div>Failed to fetch data {errorMsg}</div>;
  }

  return <div>borpa</div>;
}
