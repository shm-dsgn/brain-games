import "./Home.css";
import {
  GithubLogo,
  LinkedinLogo,
  ReadCvLogo,
} from "@phosphor-icons/react";

function Home() {
  return (
    <div className="home-block">
      <h1>Home</h1>
      <h3>What is the purpose of the website?</h3>
      <p>
        This website is a collection of games that assesses a user's various
        soft skills such as active memory, vocabulary, spelling, cognitive
        skills and response time/reflex.
      </p>
      <br />
      <h3>How do I play?</h3>
      <p>
        There are 3 games in total, you can choose whichever you want to play.
        If you want to save your scores for viewing later, you can do so by
        signing in by Email and Password or directly with your Google Account.
      </p>
      <br />
      <h3>What are the soft skills assessed? Tell me more about it</h3>
      <p>The 3 games assess 3 different things - </p>
      <p>
        <b>Memory</b> - Short-term memory is the capacity for holding, but not
        manipulating, a small amount of information in mind in an active,
        readily available state for a short period of time. For example,
        short-term memory can be used to remember a phone number that has just
        been recited. The duration of short-term memory is believed to be in the
        order of seconds
      </p>

      <p>
        <b>Scramble</b> - Tests a player's knowledge of words and their
        meanings, as the game requires them to identify and form words from a
        set of jumbled letters. It also assess a user's cognitive skills, such
        as their ability to think quickly and strategically and ability to spell
        words correctly
      </p>

      <p>
        <b>Response</b> - Tests a player's response time and hand-eye
        coordination to sudden changes
      </p>
      <br />
      <br />

      <footer>
        <p className="footer-p">
          &#169;shm-dsgn
        </p>

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
