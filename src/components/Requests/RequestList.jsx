import { ArrowCircleRight } from "@phosphor-icons/react";

const RequestListItem = ({ request }) => {
  return (
    <div
      className=" flex flex-row
                    gap-10 
                    p-4 
                  rounded-md 
                  border-solid border-2 border-gray-300
                    text-primary 
                    font-semibold
                    w-fit
                    h-full
                    items-center"
    >
      <div className="flex flex-col gap-3">
        <div className=" text-2xl">{request.name}</div>
        <div><span className="font-bold">Data de entrega:</span> {request.dueDate}</div>
      </div>
      <div className="text-center flex flex-col gap-2 ">
        <div>Status:</div>
        <div className="flex flex-row gap-1 p-2 bg-gradient-to-r to-warn from-warnAccent rounded-md text-white">
          Em aberto
        </div>
      </div>
      <ArrowCircleRight size={50} />
    </div>
  );
};

const RequestList = ({ requests }) => {
  return requests.map((request, i) => {
    return <RequestListItem request={request} key={i} />;
  });
};

export default RequestList;
