import React, { useState } from "react";
import { ArrowCircleRight } from "@phosphor-icons/react";
import ClosestRequest from "./Requests/ClosestRequest";
import ShowViewHeader from "./Requests/ShowViewHeader";
import RequestList from "./Requests/RequestList";

const ShowView = () => {
  const [requests, setRequests] = useState([
    {
      name: "IRINEU - VC N SABE NEM EU",
      dueDate: "nunca",
    },
    {
      name: "AV2 - A VOLTA DOS QUE NÃO FORAM",
      dueDate: "meio dia pras quatro",
    },
    {
      name: "DJIWAHIWAH, O que? Som de peido*",
      dueDate: "11/09/2011",
    },
  ]);
  
  return (
    <div>
      <ShowViewHeader />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center w-full justify-around">
        <ClosestRequest />
        <RequestList requests={requests} />
      </div>
    </div>
  );
};

export default ShowView;
