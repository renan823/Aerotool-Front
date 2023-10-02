import React from "react";
import { ArrowCircleRight } from "@phosphor-icons/react";
import ClosestRequest from "./ClosestRequest";
import ShowViewHeader from "./ShowViewHeader";

const ShowView = () => {
  return (
    <div className="flex flex-row gap-5 items-center w-full justify-around">
      <ClosestRequest />
      <ShowViewHeader />
    </div>
  );
};

export default ShowView;
