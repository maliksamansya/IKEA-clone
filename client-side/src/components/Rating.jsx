import React from "react";

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;

  return (
    <div className="flex items-center mt-1">
      {[...Array(filledStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black fill-current"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1l3.09 6.78 6.88.5-4.97 4.92 1.17 6.85L12 18.02l-6.17 3.01 1.17-6.85L1.03 8.28l6.88-.5L12 1zm0 2.36l-2.91 6.39-6.42.47 4.64 4.58-1.11 6.5L12 17.38l5.79 2.83-1.11-6.5 4.64-4.58-6.42-.47L12 3.36z"
          />
        </svg>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white fill-current"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1l3.09 6.78 6.88.5-4.97 4.92 1.17 6.85L12 18.02l-6.17 3.01 1.17-6.85L1.03 8.28l6.88-.5L12 1zm0 2.36l-2.91 6.39-6.42.47 4.64 4.58-1.11 6.5L12 17.38l5.79 2.83-1.11-6.5 4.64-4.58-6.42-.47L12 3.36z"
          />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
