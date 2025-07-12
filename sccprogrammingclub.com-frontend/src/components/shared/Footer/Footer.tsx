import { GithubIcon } from "@/components/icons/github";
import { InstagramIcon } from "@/components/icons/instagram";

import "./Footer.css";

export const Footer: React.FC = () => {
	return (
		<footer>
			<p className="footer-text">Programming Club (2022 - 2025)</p>
			<aside className="footer-links">
				<a href="https://github.com/sccprogrammingclub">
					<GithubIcon />
				</a>
				<a href="https://www.instagram.com/programmingclub.scc">
					<InstagramIcon />
				</a>
			</aside>
		</footer>
	);
};
