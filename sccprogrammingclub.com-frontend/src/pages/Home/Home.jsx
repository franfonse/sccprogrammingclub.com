import "./Home.css";

function Home() {
  return (
    <>
      <div className="home-page">
        <h2>
          Seattle Central College <br /> Programming Club
        </h2>
        <img
          src="/src/assets/images/sccpc_first-meeting.jpeg"
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
    </>
  );
}

export default Home;
