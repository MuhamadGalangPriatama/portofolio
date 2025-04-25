import AOS from "aos";

const Skills = {
  async render() {
    return `
    <section id="skills" data-aos="fade-up">
    <div class="container mt-5">
      <div class="row col-11">
        <div class="offset-1">
        <h1 class="m-3">Project</h1>

        <div class="row gap-5 mt-5 mb-5">
        <div class="col-lg-5" data-aos="fade-up">
      <div class="card box">
        <img src="./project/growth.png" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title mb-3">Growth Familie</h5>
          <h6 class="card-subtitle mb-3 text-muted">Dicoding</h6>
          <p class="card-text mb-5">Belajar membuat website sederhana yang menyediakan berbagai layanan seperti rack colocation server,dedicated server,vps hosting.</p>
          <a href="" class="btn position-absolute top-100 start-50 translate-middle skill">Repository</a>
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
