import Link from "next/link";
import * as Icon from "@phosphor-icons/react";
import React, { useState } from "react";
import { useRouter } from "next/router";

const NavbarList = ({ routes }) => {
  const currentRoute = useRouter();

  return routes.map((route, index) => (
    <Link href={route.to} key={index}>
      {currentRoute.pathname.includes(route.to) ? (
        <div className="bg-primary p-3 text-white flex justify-center items-center rounded-lg">
          {React.cloneElement(route.icon, { color: "white" })}
        </div>
      ) : (
        <div className="text-primary">{route.icon}</div>
      )}
    </Link>
  ));
};

const Navbar = (props) => {
  /* TODO - Move to REDUX */
  const [routes, setRoutes] = useState([
    {
      icon: <Icon.SquaresFour color="#4E54DA" size={24} weight="fill" />,
      to: "/dashboard",
    },
    {
      icon: <Icon.PaperPlaneTilt color="#4E54DA" size={24} weight="fill" />,
      to: "/requests",
    },
    {
      icon: <Icon.Wrench color="#4E54DA" size={24} weight="fill" />,
      to: "/tools",
    },
    {
      icon: <Icon.Bell color="#4E54DA" size={24} weight="fill" />,
      to: "/events",
    },
  ]);

  return (
    <div className="border-r-4 shadow-lg flex flex-col p-2 justify-around w-fit h-screen items-center">
      <div className="p-3">
        <Link href="/profile">
          <Icon.User color="#4E54DA" size={24} weight="fill" />
        </Link>
      </div>
      <div className="flex flex-col items-center gap-y-8 justify-around p-2 my-10">
        <NavbarList routes={routes} />
      </div>
      <div>
        <Link href="/settings">
          <Icon.Gear color="#4E54DA" size={24} weight="fill" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
