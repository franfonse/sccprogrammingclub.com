import type { Member } from "@/lib/context/Members";
import "./MemberCard.css";
import { Link } from "react-router-dom";

export interface MemberCardProps {
	member: Member;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
	return (
		<div className="member-card">
			<img src={`images/${member.img}`} alt={member.name} />
			<h3>{member.name}</h3>
			<p>{member.role}</p>
			<Link to={`/member/${member.id}`}>View member</Link>
		</div>
	);
};
