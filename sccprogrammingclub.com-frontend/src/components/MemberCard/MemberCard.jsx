import "./MemberCard.css";
import { Link } from "react-router-dom";

function MemberCard({ member }) {
  return (
    <div className="member-card">
      <img src={member.img} alt={member.name} />
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <Link to={`/member/${member.id}`}>View member</Link>
    </div>
  );
}

export default MemberCard;
