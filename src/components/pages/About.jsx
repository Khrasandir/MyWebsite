import DefaultLayout from '../defaultLayout/DefaultLayout';
import max from './pics/max.jpg';
import html from './icons/html.png';
import js from './icons/js.png';
import css from './icons/css.png';
import devops from './icons/devops.png';
import git from './icons/git.png';
import jest from './icons/jest.png';
import json from './icons/json.png';
import mongodb from './icons/mongodb.png';
import nodejs from './icons/nodejs.png';
import postgresql from './icons/postgresql.png';
import react from './icons/react.png';

const About = () => {
  return (
    <DefaultLayout>
      <h1>Hello I&apos;m Max the web-dev</h1>
      <div>
        <img
          src={max}
          alt="MyPicture"
        />
        <div>
          <h2>Description</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere
            maiores, qui nisi possimus accusantium architecto dolor porro
            adipisci, ipsa aut, molestias cum? Amet illum commodi porro nobis
            dolorem fuga. Dolores asperiores repellendus ipsum labore commodi
            reiciendis nisi odit adipisci fugiat quasi ea fugit nostrum aliquid
            architecto, libero, pariatur qui aspernatur, ut consequatur!
            Molestiae omnis est officia, magnam soluta deserunt? Quaerat odit at
            labore corrupti officiis illo veritatis veniam assumenda. Minus quo
            suscipit, itaque placeat expedita doloribus fuga, consequuntur
            quibusdam aperiam ipsa nisi beatae! Consequatur ut asperiores
            dignissimos exercitationem id? Nihil odio consequatur nemo corporis
            maxime beatae voluptates in? Quidem quasi quaerat similique soluta
            porro labore sequi ipsam adipisci rem autem, aperiam dolores animi!
            Molestiae doloremque nesciunt deleniti earum doloribus! Iste et
            incidunt autem. Ab illum repudiandae itaque aut asperiores
            reprehenderit laudantium. Odit, repellat placeat quisquam cupiditate
            quidem enim ea praesentium eaque saepe ipsam deleniti cumque porro
            neque esse sit!
          </p>
        </div>
        <div>
          <h2>Skill-Stack</h2>
          <div className="stack">
            <img
              src={html}
              alt="html-icon"
            />
            <h3>HTML</h3>
          </div>
          <div className="stack">
            <img
              src={css}
              alt="icon"
            />
            <h3>CSS</h3>
          </div>
          <div className="stack">
            <img
              src={js}
              alt="icon"
            />
            <h3>Javascript</h3>
          </div>
          <div className="stack">
            <img
              src={react}
              alt="icon"
            />
            <h3>React</h3>
          </div>
          <div className="stack">
            <img
              src=""
              alt="icon"
            />
            <h3>ExpressJS</h3>
          </div>
          <div className="stack">
            <img
              src={nodejs}
              alt="icon"
            />
            <h3>NodeJS</h3>
          </div>
          <div className="stack">
            <img
              src={postgresql}
              alt="icon"
            />
            <h3>SQL</h3>
          </div>
          <div className="stack">
            <img
              src={mongodb}
              alt="icon"
            />
            <h3>NoSQL</h3>
          </div>
          <div className="stack">
            <img
              src={git}
              alt="icon"
            />
            <h3>Git & GitHub</h3>
          </div>
          <div className="stack">
            <img
              src={json}
              alt="icon"
            />
            <h3>Restful APIs</h3>
          </div>
          <div className="stack">
            <img
              src={devops}
              alt="icon"
            />
            <h3>DevOps</h3>
          </div>
          <div className="stack">
            <img
              src={jest}
              alt="icon"
            />
            <h3>Software Testing</h3>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default About;
