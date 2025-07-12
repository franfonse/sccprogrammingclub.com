import type { Member } from "@/lib/context/Members";
import "./MemberCard.css";
import { Link } from "react-router-dom";
import { IncognitoIcon } from "../icons/incognito";

export interface MemberCardProps {
	member: Member;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
	return (
		<Link className="member-card" to={`/member/${member.id}`}>
			<div className="member-card-image">
				{member.img ? (
					<img src={`images/members/${member.img}`} alt={member.name} />
				) : (
					<IncognitoIcon />
				)}
			</div>
			<div>
				<h3>{member.name}</h3>
				<p>{member.role}</p>
			</div>
		</Link>
	);
};
