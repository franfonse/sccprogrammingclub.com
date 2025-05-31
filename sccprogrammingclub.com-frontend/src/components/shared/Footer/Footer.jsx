import "./Footer.css";

function Footer() {
  return (
    <footer>
      <p className="footer-text">Programming Club (2022–2025)</p>
      <div className="footer-icons">
        <a
          href="https://github.com/sccprogrammingclub"
          className="icon-link github"
        >
          <img src="src/assets/icons/github.svg" alt="GitHub" />
        </a>
        <a
          href="https://www.instagram.com/programmingclub.scc"
          className="icon-link instagram"
        >
          <img src="src/assets/icons/instagram.svg" alt="Instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
