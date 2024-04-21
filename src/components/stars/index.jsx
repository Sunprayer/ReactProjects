import { useState } from "react";
import { FaStar } from "react-icons/fa6";

export default function StarRating({ numberOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleSelect(getCurrentIndex) {
    setRating(getCurrentIndex);
  }
  function handleMouseMove(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="flex content-center justify-center">
      {[...Array(numberOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={
              index <= (hover || rating) ? "text-amber-500" : "text-black"
            }
            onClick={() => handleSelect(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}
