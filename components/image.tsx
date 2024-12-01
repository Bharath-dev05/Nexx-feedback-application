import React from "react";

const ClickableImage = ({ imageUrl }: any) => {
  return (
    <div className=" p-4 max-w-xs text-center border rounded-xl ">
      <a href={imageUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={imageUrl}
          alt="Clickable"
          className="w-14 h-14 ml-6 mt-3 rounded-md 
    transition-all object-cover mb-4 hover:scale-150"
        />
      </a>
    </div>
  );
};

export default ClickableImage;
