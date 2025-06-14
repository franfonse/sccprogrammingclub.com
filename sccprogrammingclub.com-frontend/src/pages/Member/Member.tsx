import "./Member.css";
import { useParams } from "react-router-dom";
import { useMembers } from "@/lib/context/Members";
import { Loader } from "@/components/Loader/Loader";

export const Member: React.FC = () => {
    const { id } = useParams();

    if (!id || isNaN(parseInt(id))) {
        return <Loader />;
    }

    const members = useMembers();
    const member = members.find((a) => a.id === parseInt(id));

    return member && (
        <div className="member-page">
            <img src={`images/${member.img}`} alt={member.name} />
            <h2>{member.name}</h2>
            <span>{member.role}</span>
            <p>{member.bio}</p>
        </div>
    )
}
