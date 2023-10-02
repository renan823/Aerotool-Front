import { useState } from "react";
import { User, Bell, Gear } from "@phosphor-icons/react";
import EventCard from "@/components/EventCard";

const Page = ({page}) => {
    if (page === "notification") {
        return (
            <div>
                <EventCard/>
            </div>
        )
    } else if (page === "system") {
        return (
            <div>
                <h1>sistema</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1>usuario</h1>
            </div>
        )
    }
}

const Events = () => {

    const [page, setPage] = useState("notification") // notification or user or system

    const handleNavigation = (target) => {
        console.log("oi")
        setPage(target);
    }

    return (
        <div className="flex flex-col w-full">
            <div className="p-4 h-fit w-full border-b-4 border-primaryLight">
                <h1 className="font-bold text-3xl text-primary">Eventos</h1>
                <div className="flex flex-row">
                    <div className="mr-6 p-1 flex flex-row">
                        <Bell size={26} color="#4E54DA"/>
                        <button className="mx-2 text-lg text-primary font-bold" onClick={() => handleNavigation("navigation")}>Notificações</button>
                    </div>
                    <div className="mr-6 p-1 flex flex-row">
                        <Gear size={26} color="#4E54DA"/>
                        <button className="mx-2 text-lg text-primary font-bold" onClick={() => handleNavigation("system")}>Log do sistema</button>
                    </div>
                    <div className="mr-6 p-1 flex flex-row">
                        <User size={26} color="#4E54DA"/>
                        <button className="mx-2 text-lg text-primary font-bold" onClick={() => handleNavigation("user")}>Notificações do usuário</button>
                    </div>
                </div>
            </div>
            <div className="w-full p-10">
                <Page page={page}/>
            </div>
        </div>
    )
}

export default Events;
