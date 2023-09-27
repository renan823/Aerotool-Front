import RequestCard from "@/components/RequestCard";

const Profile = () => {
    return (
        <div className="bg-teal-500">
            <RequestCard name="Kit parafuso" description="Uns parafusos aí" amount={10} situation={2}/>
        </div>
    )
}

export default Profile;