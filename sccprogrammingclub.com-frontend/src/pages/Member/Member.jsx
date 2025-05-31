import "./Member.css";
import { useParams } from "react-router-dom";
import useMember from "../../contexts/member/member";
import { useEffect } from "react";
import Loader from "../../components/Loader/Loader";

function Member() {
  const { id } = useParams();
  const { getMember, member, loading } = useMember();

  useEffect(() => {
    getMember(id);
  }, [getMember, id]);

  return loading || !member ? (
    <Loader />
  ) : (
    <div className="member-page">
      <img src={member.img} alt={member.name} />
      <h2>{member.name}</h2>
      <span>{member.role}</span>
      <p>{member.bio}</p>
    </div>
  );
}

export default Member;
