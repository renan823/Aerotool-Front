import Link from "next/link";
import * as Icon from "@phosphor-icons/react";
import React from "react";
import RequestForm from "@/components/Requests/Register/RequestForm";
import RequestLineForm from "@/components/Requests/Register/RequestLineForm";

const save = () => {
  return (
    <div className="flex w-full p-4 flex-col">
      <nav className="flex flex-row w-full h-fit border-b-2 border-gray-200 p-4 justify-between items-center">
        <h2 className="uppercase text-xl font-semibold text-primary flex flex-row items-center">
          <Link
            href="/requests"
            className="flex flex-row rounded-md justify-center items-center gap-x-4 p-4 px-4 text-primary"
          >
            <Icon.ArrowLeft size={24} weight="bold" />
          </Link>{" "}
          Nova Requisição
        </h2>
        <Link
          href="/requests/cart"
          className="bg-gradient-to-r from-accent to-primary flex flex-row rounded-full justify-center items-center gap-x-4 p-4 px-4 text-white"
        >
          <Icon.ShoppingCart size={26} weight="bold" />
        </Link>
      </nav>

      <div>
        <RequestForm />
        <RequestLineForm />
      </div>
    </div>
  );
};

export default save;
