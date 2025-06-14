import "./MembersActive.css";
import { MemberCard } from "@/components/MemberCard/MemberCard";
import { useMembers } from "@/lib/context/Members";

export const MembersActive: React.FC = () => {
    const members = useMembers();

    return (
        <div className="members-active-page">
            <h3>Current members</h3>
            <div className="members-active-container">
                {members.filter((member) => member.isActive).map((member) => (
                    <MemberCard key={member.id} member={member} />
                ))}
            </div>
        </div>
    );
}
