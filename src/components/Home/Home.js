import Accordion from "./Accordion";
import { Data } from "./Data";
import "./Home.css";
import { GithubLogo, LinkedinLogo, ReadCvLogo } from "@phosphor-icons/react";

function Home() {
  return (
    <div className="home-block">
      <h1>Home</h1>
      {Data.map(({ title, content }) => (
        <Accordion title={title} content={content} />
      ))}

      <footer>
        <p className="footer-p">&#169;shm-dsgn</p>

        <p className="footer-p">
          <a
            href="https://drive.google.com/file/d/1-1-9ht1R1086T9KF3m0Ooy4swHL-NFPv/view?usp=share_link"
            target="_blank"
            title="Resume/CV"
            rel="noreferrer"
          >
            <ReadCvLogo size={24} color="#2FB400" weight="fill" />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://github.com/shm-dsgn"
            target="_blank"
            title="GitHub"
            rel="noreferrer"
          >
            <GithubLogo
              size={24}
              color="#ffffff"
              weight="fill"
              title="GitHub"
            />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://www.linkedin.com/in/shm-dsgn"
            target="_blank"
            title="LinkedIn"
            rel="noreferrer"
          >
            <LinkedinLogo size={24} color="#0a66c2" weight="fill" />
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
