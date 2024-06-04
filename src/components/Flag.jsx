import React from "react";

const Flag = ({ address }) => {
  return (
    <div className="flex justify-center">
      <img
        className="px-8 py-5 2md:w-[584px] 2md:h-[380px] lg:px-5"
        src={address}
        alt="flag"
      />
    </div>
  );
};

export default Flag;
