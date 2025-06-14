import "./MembersInactive.css";
import { MemberCard } from "@/components/MemberCard/MemberCard";
import { useMembers } from "@/lib/context/Members";

export const MembersInactive: React.FC = () => {
	const members = useMembers();

	return (
		<div className="members-inactive-page">
			<h3>Past members</h3>
			<div className="members-inactive-container">
				{members
					.filter((member) => !member.isActive)
					.map((member) => (
						<MemberCard key={member.id} member={member} />
					))}
			</div>
		</div>
	);
};
