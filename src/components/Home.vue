<template>
  <section class="home-hero">
    <div class="home-hero__content">
      <h1 class="heading-primary">HEY, I'M SNEHA DAMODARAN</h1>
      <div class="home-hero__info">
        <p class="text-primary">
          A Frontend focused full stack Developer building the Frontend of Websites
          and Web Applications that leads to the success of the overall
          product
        </p>
      </div>
      <div class="home-hero__cta">
        <a class='btn__bg' href="#projects">PROJECTS</a>
      </div>

    </div>
    <div class="home-hero__mouse-scroll-cont">
      <div class="mouse">
        <img class="giffy" src="../assets/mouse_scroll_img.gif" alt="this slowpoke moves"  width="250" />
      </div>
    </div>
  </section>
</template>

<script>
export default{
  name: 'home'
}
</script>

<style>
.home-hero {
  color: #fff;
  /* background: linear-gradient(to right, rgba(245,245,245,.8), rgba(245,245,245,.8), url('./../assets/about_bg_image.jpg')); */
  background: url('./../assets/bg.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 80vh;
  min-height: 60rem;
  max-height: 100rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-family: inherit;
}

.heading-primary {
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: -1px;
  text-align: center;
  color: #111;
  font-weight: 900;
}

.home-hero__content {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90rem;
  width: 51%;
}

.home-hero__info {
  margin: 3rem auto 0 auto;
  max-width: 80rem;
}

.text-primary {
  color: #333;
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
  line-height: 1.6;
  letter-spacing: -1px;
  font-weight: 500;
}

.btn__bg {
  padding: 0.9rem 4.2rem;
  font-size: 1.1rem;
  /* background-color: aquamarine; */
  font-weight: 900;
  background: #facf0f;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
  font-weight: 700;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgb(0 0 0 / 15%);
  margin-top: 2rem;
  /* transition: margin-top .3s; */
  transition: transform .3s;
}

/* .mouse {
    width: 25px;
    height: 40px;
    border: 2px solid #333;
    border-radius: 60px;
    position: relative;
    overflow: hidden;
  } */
  .mouse::before {
    content: '';
    width: 5px;
    height: 5px;
    position: absolute;
    top: 7px;
    left: 50%;
    transform: translateX(-50%);
    /* background-color: #333; */
    border-radius: 50%;
    opacity: 1;
    animation: wheel 1.3s infinite;
    -webkit-animation: wheel 1.3s infinite;
}

.giffy{
    width: 150px;
    height: 110px;
    z-index: 1000;
    margin-top: 45rem;
    /* background-color: #333; */
}
/* .btn__bg:hover{
      margin-top: 1.9rem;
  } */
/* @media only screen and (max-width: 50.5em) {
  .home-hero__content {
    top: 45%;
    width: 85%;
  }
}

@media only screen and (max-width: 37.5em) {
  .heading-primary {
    font-size: 2.5rem;
  }

  .home-hero__content {
    top: 45%;
    width: 85%;
  }

  .text-primary {
    font-size: 1.3rem;
    line-height: 1.7;
  }
}  */
</style>
