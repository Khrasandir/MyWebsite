import DefaultLayout from '../defaultLayout/DefaultLayout';
import max from './pics/max.jpg';

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
        <div>Download CV?</div>
      </div>
    </DefaultLayout>
  );
};

export default About;
