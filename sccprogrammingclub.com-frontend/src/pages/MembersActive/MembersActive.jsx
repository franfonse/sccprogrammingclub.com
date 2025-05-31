import "./MembersActive.css";
import MemberCard from "../../components/MemberCard/MemberCard";
import useMember from "../../contexts/member/member";
import { useEffect } from "react";
import Loader from "../../components/Loader/Loader";

function MembersActive() {
  const { membersActive, loading, members, getMembers } = useMember();

  useEffect(() => {
    if (members.length === 0) {
      getMembers();
    }
  }, [getMembers, members.length]);

  return loading ? (
    <Loader />
  ) : (
    <div className="members-active-page">
      <h3>Current members</h3>
      <div className="members-active-container">
        {membersActive.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}

export default MembersActive;
