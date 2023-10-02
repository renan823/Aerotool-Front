import Link from "next/link";
import * as Icon from "@phosphor-icons/react"

const Navbar = (props) => {
  return (
    <div className="bg-primaryLight flex flex-col p-2 justify-around w-fit h-screen items-center">
      <div className="bg-primary bg-gradient-to-b from-primary to-accent rounded-full p-3">
        <Link href="/profile">
          <Icon.User color="#FFF" size={36} weight="fill"/>
        </Link>
      </div>
      <div className="flex flex-col justify-around p-2 my-10">
        <Link href="/dashboard" className="my-5 p-2 rounded-md">
          <Icon.SquaresFour color="#4E54DA" size={36} weight="fill" />
        </Link>
        <Link href="/requests" className="my-5 p-2 rounded-md">
          <Icon.PaperPlaneTilt color="#4E54DA" size={36} weight="fill" />
        </Link>
        <Link href="/tools" className="my-5 p-2 rounded-md">
          <Icon.Wrench color="#4E54DA" size={36} weight="fill" />
        </Link>
        <Link href="events" className="my-5 p-2 rounded-md">
          <Icon.Bell color="#4E54DA" size={36} weight="fill" />
        </Link>
      </div>
      <div>
        <Link href="/settings">
          <Icon.Gear color="#4E54DA" size={36} weight="fill" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
