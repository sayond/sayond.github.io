<template>
  <section class="hero is-medium is-bold">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-mobile is-centered">
          <div class="column is-half">
            <div class="box has-text-centered ">
              <h1 class="title has-text-centered is-size-1 is-uppercase has-text-dark">
                sayond
              </h1>
              <h2 class="subtitle has-text-centered has-text-dark">
                KOH RONG SANLOEM
              </h2>
              <a href="https://www.facebook.com/Sayond-Beach-Resort-304152766924448"
              target="_blank"
              rel="noopener noreferrer"
              class="button is-outlined is-small"
              >

              <span class="icon is-small">
                <i class="fab fa-facebook-f"></i>
              </span>
              <span>facebook</span>
              </a>
              <a
                href="https://www.instagram.com/sayond_beach/"
                target="_blank"
                rel="noopener noreferrer"
                class="button is-small"
                >
                <span class="icon is-small"><i class="fab fa-instagram"></i></span>
                <span>Instagram</span>
              </a>
              <p class="has-text-dark">Coming soon ...</p>
            </div>
          </div>
        </div>
        <p class="footer-text">
          <span>{{new Date().getFullYear()}}</span>
          <span> &copy; SAYOND </span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.footer-text{
  position: fixed;
  bottom: 10px;
  left: 10px;
  color: #fff;
}
.button{
  background: #ffffff52;
  border:1px solid #AAAAAA52 ;
}
.button:hover {
  border:1px solid #000;
}
.has-text-dark {
  color: #191313 !important;
}
.box {
  background: #ffffff52 !important;
}
</style>
