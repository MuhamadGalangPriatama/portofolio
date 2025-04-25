import Typed from "typed.js";
import AOS from "aos";

const About = {
  async render() {
    return `
    <!-- About -->
    <section id="about" data-aos="zoom-in-down">
      <div class="container">
        <div class="row me-5">
          <div class="col-lg-6 offset-1 profil my-5">
          <h1>About Me</h1>
          <h4 class="mt-3 mb-3" style="font-size:32px;"><span id="element"></span></h4>
            <p>Hi everyone , my name is Muhamad Galang Priatama. I’am a Junior Front-End Developer, Informatics Engineering.</p>
            <p>I live in Banten, Indonesia. I was born in Rangkasbitung, 30 December 2006. I’m 17 years old. I’am Student from SMKN 1 Rangkasbitung.</p>
            <p>Coding has been my passion and hobby since I was 15 years old, and I love computer since I was a kid. Besides coding, I love listening to music. My favorite band music is Chase Atlantic. I like playing games too. My favorite game is Mobile Legend.</p>
            <p>Sometimes I watch anime, the anime I like the most is Berserk and Tokyo Ghoul.</p>
          </div>
          <div class="col-lg-4 d-flex justify-content-center">
            <img src="./fajrul.png" class="rounded-circle justify-content-center img-fluid" style="height:300px;">
          </div>
          </div>
          <div class="offset-1 mb-5">
            <h1></h1>
            <div> <a href="./cv/cv.pdf"></a>
          </div>
      </div>
      </div>
    </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()

    AOS.init();

    const typed = new Typed("#element", {
      strings: ["Muhamad Galang Priatama"],
      typeSpeed: 80,
    });
  },
};

export default About;
