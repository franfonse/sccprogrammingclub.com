import { useState } from "react";
import MemberContext from "./MemberContext";

function MemberProvider({ children }) {
  const [members, setMembers] = useState([]);
  const [membersActive, setMembersActive] = useState([]);
  const [membersInactive, setMemberInactive] = useState([]);
  const [member, setMember] = useState({});
  const [loading, setLoading] = useState(false);

  function getMembers() {
    setLoading(true);
    fetch("/data/members.json")
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
        setMembersActive(data.filter((member) => member.isActive));
        setMemberInactive(data.filter((member) => !member.isActive));
      })
      .catch((err) => console.error("Failed to load members:", err))
      .finally(() => {
        setLoading(false);
      });
  }

  function getMember(id) {
    if (members.length === 0) {
      getMembers();
    }
    const mem = members.find((m) => m.id === +id);
    setMember(mem);
  }

  return (
    <MemberContext.Provider
      value={{
        members,
        member,
        getMember,
        membersActive,
        membersInactive,
        loading,
        getMembers,
        setLoading,
      }}
    >
      {children}
    </MemberContext.Provider>
  );
}

export default MemberProvider;
