import "./Home.css";

export const Home: React.FC = () => {
	return (
		<div className="home-page">
			<h2>
				Seattle Central College <br /> Programming Club
			</h2>
			<img
				src="/images/sccpc_first-meeting.webp"
				alt="Seattle Central College Programming Club"
			/>
			<h4>About us</h4>
			<p>
				The Seattle Central College Programming Club is a student club open to
				all students of its college. Computer programming is the main interest
				the club members share, but we also discuss about anything related to
				Computer Science in general.
			</p>
		</div>
	);
};
