import { User, Clock } from "@phosphor-icons/react";

const EventCard = (props) => {
    return (
        <div className="bg-gradient-to-r from-accent to-primary w-full rounded-xl p-3 flex flex-row justify-between">
            <div className="self-center mx-5">
                <div>
                    <div className="flex flex-row justify-around w-fit px-3">
                        <h1 className="text-white mr-4 text-lg">#0001</h1>
                        <h1 className="text-white font-bold mr-4 text-xl">REQUISIÇÃO APROVADA</h1>
                        <h2 className="mr-4">Problema com icone</h2>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row justify-around w-fit px-3">
                        <Clock size={24} color="white"/>
                        <h2 className="text-white font-bold mx-2 text-lg">02/10/2023 17:00</h2>
                    </div>
                    <div className="flex flex-row justify-around w-fit px-3">
                        <User size={24} color="white"/>
                        <h2 className="font-bold text-white mx-2 text-lg">Você</h2>
                    </div>
                </div>
            </div>
            <div className="border-white border-2 p-3 h-fit rounded-lg self-center mx-4">
                <h1 className="text-white font-bold">Processado por:</h1>
                <h2 className="text-white text-center">Jão</h2>
            </div>
        </div>
    )
}

export default EventCard;