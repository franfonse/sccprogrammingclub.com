import { createContext, useContext } from "react";
import members from "@/assets/members.json";

export type Member = typeof members[number];

const MemberContext = createContext<Member[]>(members);

export function MemberProvider({ children }: { children: React.ReactNode }) {
  return (
    <MemberContext.Provider value={members}>
      {children}
    </MemberContext.Provider>
  );
}

export function useMembers() {
    const context = useContext(MemberContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
