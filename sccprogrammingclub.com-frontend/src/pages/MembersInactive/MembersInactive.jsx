import "./MembersInactive.css";
import MemberCard from "../../components/MemberCard/MemberCard";
import Loader from "../../components/Loader/Loader";
import useMember from "../../contexts/member/member";
import { useEffect } from "react";

function MembersInactive() {
  const { loading, members, membersInactive, getMembers } = useMember();

  useEffect(() => {
    if (members.length === 0) {
      getMembers();
    }
  }, [getMembers, members.length]);

  return loading ? (
    <Loader />
  ) : (
    <div className="members-inactive-page">
      <h3>Past members</h3>
      <div className="members-inactive-container">
        {membersInactive.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}

export default MembersInactive;
