import React from "react";
import { ArrowCircleRight } from "@phosphor-icons/react";

const ShowView = () => {
  return (
    <div className="">
      <div
        className=" flex flex-row
                    gap-10 
                    p-4 
                    bg-gradient-to-r from-accent to-primary rounded-md 
                    text-white 
                    font-semibold
                    w-fit
                    items-center"
      >
        <div className="flex flex-col gap-3">
          <div className="">Sua próxima requisição é:</div>
          <div className=" text-3xl">MAR - MARTELOS</div>
          <div>Data de entrega: 12/02/2023</div>
        </div>
        <div className="text-center flex flex-col gap-2 ">
            <div>Status:</div>
            <div className="flex flex-row gap-1 p-2 bg-gradient-to-r to-warn from-warnAccent rounded-md text-white">Em aberto</div>
        </div>
        <ArrowCircleRight size={50}/>
      </div>
    </div>
  );
};

export default ShowView;
