import { Check, X, Question, LinkBreak } from "@phosphor-icons/react";
import { useState } from "react";

const situation = {
    BROKEN: 0,
    LOST: 1,
    BUSY: 2,
    FREE: 3
}

function handleIcon(status) {
    switch(status) {
        case situation.BROKEN:
            return (
                <div className="rounded-md w-full p-1 m-3 bg-gradient-to-r from-purple-300 to-purple-500 items-center">
                    <LinkBreak size={24} color='white'/>
                </div>
            )
        case situation.LOST:
            return (
                <div className="rounded-md w-full p-1 m-3 bg-gradient-to-r from-dangerAccent to-danger items-center">
                    <Check size={24} color='#4E54DA' weight='fill'/>
                </div>
            )
        case situation.BUSY:
            return (
                <div className="rounded-md w-full p-1 m-3 bg-gradient-to-r from-warnAccent to-warn items-center justify-center">
                    <Check size={24} color='#4E54DA'/>
                </div>
            ) 
        default:
            return (
                <div className="rounded-md w-full p-1 m-3 bg-gradient-to-r from-successAccent to-success">
                    <Check size={24} color='#4E54DA'/>
                </div>
            )
    }
}

const RequestCard = (props) => {

    return (
        <div className='bg-gradient-to-b from-accent to-primary rounded-md p-5 w-52'>
            <h1 className="font-bold text-white text-center my-2">{ props.name }</h1>
            <h5 className="font-bold text-white text-center my-3">{ props.description }</h5>
            <h3 className="font-bold text-white text-center my-2">{ props.amount }x</h3>
            <div>
                <h3 className="font-bold text-white text-center">Status:</h3>
                { handleIcon(props.situation) }
            </div>
        </div>
    )
}

export default RequestCard;