import React from "react";
import SkeletonElement from "./SkeletonElement";

const SkeletonPage = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="2md:grid 2md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-y-8 xl:mx-2 py-10">
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
      </div>
    </div>
  );
};

export default SkeletonPage;
