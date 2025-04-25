import AOS from "aos";

const Skills = {
  async render() {
    return `
    <section id="skills" data-aos="fade-up">
    <div class="container mt-5">
      <div class="row col-11">
        <div class="offset-1">
        <h1 class="m-3">Skills</h1>
        <a href="#/skills" class="btn skill m-2">Language</a>
        <a href="#/certifications" class="btn skill m-2">Certifications</a>

        <div class="row gap-5 mt-5 mb-5">
      <div class="col-lg-5" data-aos="fade-up">
      <div class="card box">
        <img src="./serti/fe-dasar.jpg" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title mb-3">Belajar Dasar Pemograman Web</h5>
          <h6 class="card-subtitle mb-3 text-muted">Dicoding</h6>
          <p class="card-text mb-5">Belajar Dasar Pemrogramman Javascript</p>
          <a href="https://www.dicoding.com/certificates/81P24V2GOZOY" class="btn position-absolute top-100 start-50 translate-middle skill">Lihat Detail Sertifikasi</a>
          </div>
      </div>
      </div>


      </div>
      </div>
      </div>
    </section>

   
          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()

    AOS.init();
  },
};

export default Skills;
