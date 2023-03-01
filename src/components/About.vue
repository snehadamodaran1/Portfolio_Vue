<template>
    <section id="about" class="about">
        <div class="main-container">
            <h2 class="heading"><span class="heading-sec__main">ABOUT ME</span></h2>
            <span class="heading-sec__sub">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</span>
            <div class="about__content">
              <div class="about__content-main">
                <div class="about__content-title">Get to know me!</div>
                <div class="about__content-details">I'm a <strong>Frontend Web Developer</strong> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.

  I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a rel="noreferrer" href="https://linkedin.com/in/rammcodes" target="_blank">Linkedin</a> where I post useful content related to Web Development and Programming

  I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</div>
              </div>
              <div class="about__content-skills">

              </div>
            </div>
        </div>
    </section>
  </template>

<script>
export default{
  name: 'about',
  data () {
    return {
      title: 'About'
    }
  }
}
</script>

  <style>
  .about {
    background:  #fafafa;
    padding: 6rem 0;
    height: 80vh;
  }
  .main-container {
    max-width: 120rem;
    margin: auto;
    width: 92%;
  }
  .heading{
    margin-bottom: 1.5rem;
  }
  .heading-sec__main{
    display: block;
    font-size: 2.5rem;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    font-weight: bolder;
    text-align: center;
    margin-bottom: 3.5rem;
    position: relative;
    color: #111;
  }
  .heading-sec__main::after {
    content: '';
    position: absolute;
    top: calc(100% + 1rem);
    height: 5px;
    width: 2rem;
    background: #facf0f;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
}
.heading-sec__sub {
    display: block;
    text-align: center;
    color: #555;
    font-size: 1.2rem;
    font-weight: 500;
    max-width: 60rem;
    margin: auto;
    line-height: 1.6;
    margin-bottom: 5rem;
}
.about__content{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10rem;
}
.about__content-title{
  font-size: 1.8rem;
  font-weight: bolder;
  margin-bottom: 1rem;
}
.about__content-details{
      font-size: 1.1rem;
      color: #666;
      max-width: 60rem;
      line-height: 1.7;
      margin-bottom: 1rem;
      text-align: left;
}
@media only screen and (max-width: 37.5em){
    .heading-sec__sub {
        font-size: 1rem;
    }
}
  </style>
