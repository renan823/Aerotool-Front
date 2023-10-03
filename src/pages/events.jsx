import { useState } from "react";
import { User, Bell, Gear } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import EventCard from "@/components/EventCard";

const Page = ({ page }) => {
  if (page === "notification") {
    return (
      <div>
        <EventCard />
      </div>
    );
  } else if (page === "system") {
    return (
      <div>
        <h1>sistema</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>usuario</h1>
      </div>
    );
  }
};

const EventHeaderItem = ({ isSelected, icon, setPage, title, name }) => {
  const handleChangePage = (target) => {
    console.log(target);
    setPage(target);
  };

  return isSelected ? (
    <motion.div
      initial={{ scale: .9, opacity: .6 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="mr-6 p-2 flex flex-row items-center border-b-4 border-primary"
    >
      {icon}
      <button
        className="mx-2 text-lg text-primary font-semibold uppercase"
        onClick={() => handleChangePage(name)}
      >
        {title}
      </button>
    </motion.div>
  ) : (
    <div className="mr-6 p-2 flex flex-row items-center">
      {icon}
      <button
        className="mx-2 text-lg text-primary font-semibold uppercase"
        onClick={() => handleChangePage(name)}
      >
        {title}
      </button>
    </div>
  );
};

const EventHeader = ({ page, setPage }) => {
  const eventOptions = [
    {
      icon: <Bell size={26} color="#4E54DA" />,
      name: "notification",
      text: "Notificações",
    },
    {
      icon: <Gear size={26} color="#4E54DA" />,
      name: "system",
      text: "Sistema",
    },
    {
      icon: <User size={26} color="#4E54DA" />,
      name: "user",
      text: "Usuário",
    },
  ];

  return (
    <div className="flex justify-center items-center flex-row">
      {eventOptions.map((option) =>
        option.name === page ? (
          <EventHeaderItem
            key={option.name}
            icon={option.icon}
            isSelected={true}
            setPage={setPage}
            title={option.text}
            name={option.name}
          />
        ) : (
          <EventHeaderItem
            key={option.name}
            icon={option.icon}
            isSelected={false}
            setPage={setPage}
            title={option.text}
            name={option.name}
          />
        )
      )}
    </div>
  );
};

const Events = () => {
  const [page, setPage] = useState("notification"); // notification or user or system

  return (
    <div className="flex flex-col w-full p-4 ">
      <div className="p-4 h-fit w-full border-b-2 border-gray-200">
        <h1 className="font-semibold text-xl text-primary uppercase">
          Eventos
        </h1>
        <EventHeader setPage={setPage} page={page} />
      </div>
      <div className="w-full p-10">
        <Page page={page} />
      </div>
    </div>
  );
};

export default Events;
