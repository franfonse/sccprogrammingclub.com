import "./Member.css";
import { Loader } from "@/components/Loader/Loader";
import { useMembers } from "@/lib/context/Members";
import { useParams } from "react-router-dom";

export const Member: React.FC = () => {
	const { id } = useParams();

	if (!id || Number.isNaN(Number.parseInt(id))) {
		return <Loader />;
	}

	const members = useMembers();
	const member = members.find((a) => a.id === Number.parseInt(id));

	return (
		member && (
			<div className="member-page">
				<img src={`images/${member.img}`} alt={member.name} />
				<h2>{member.name}</h2>
				<span>{member.role}</span>
				<p>{member.bio}</p>
			</div>
		)
	);
};
