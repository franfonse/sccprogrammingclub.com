import { IncognitoIcon } from "@/components/icons/incognito";

import { Loader } from "@/components/Loader/Loader";
import { useMembers } from "@/lib/context/Members";
import { useParams } from "react-router-dom";

import "./Member.css";

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
				<div className="member-image">
					{member.img ? (
						<img src={`/images/members/${member.img}`} alt={member.name} />
					) : (
						<IncognitoIcon />
					)}
				</div>
				<h2>{member.name}</h2>
				<span>{member.role}</span>
				<p>{member.bio}</p>
			</div>
		)
	);
};
