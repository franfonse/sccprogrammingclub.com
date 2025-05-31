import { useContext } from "react";
import MemberContext from "./MemberContext";

function useMember() {
    return useContext(MemberContext);
}

export default useMember;
