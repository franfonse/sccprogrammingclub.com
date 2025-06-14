import { Contact } from "@/pages/Contact/Contact";
import { Home } from "@/pages/Home/Home";
import { Member } from "@/pages/Member/Member";
import { MembersActive } from "@/pages/MembersActive/MembersActive";
import { MembersInactive } from "@/pages/MembersInactive/MembersInactive";
import { NotFound } from "@/pages/NotFound/NotFound";
import { Projects } from "@/pages/Projects/Projects";
import { Route, Routes } from "react-router-dom";

export const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="home" element={<Home />} />

			<Route path="/members-active" element={<MembersActive />} />
			<Route path="/members-inactive" element={<MembersInactive />} />
			<Route path="/member/:id" element={<Member />} />

			<Route path="/projects" element={<Projects />} />
			<Route path="/contact" element={<Contact />} />

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default AppRoutes;
