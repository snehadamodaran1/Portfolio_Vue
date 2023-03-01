<template>
    <header class="header">
        <div class="header__content">
            <div class="logo_container">
                <div>
                    <img class="logo_image" src="./../assets/sneha_image.png" alt="SD">
                </div>
                <span>
                    SNEHA DAMODARAN
                </span>
            </div>
            <div>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default{
  name: 'navigator',
  data () {
    return {
      title: 'Navigator'
    }
  }
}
</script>

<style>
.header {
    background-color: #fff;
    width: 100%;
    position: fixed;
    box-shadow: 0 10px 100px rgb(0 0 0 / 10%);
    z-index: 1000;
}

.header__content {
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
}

.logo_container {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #333;
    transition: color .3s;
}

.logo_container:hover {
    color: red;
}

.logo_image {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
    margin-right: 1em;
}

li {
    list-style-type: none;
    padding: 1.8em 1.8rem;
    /* background-color: yellow; */
    color: #333;
    transition: color .3s;
}

a:hover {
    color: red;
}

ul {
    margin: 0px;
    display: flex;
}

a {
    /* padding: 2rem 3rem; */
    display: inline-block;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    transition: color .3s;
    text-decoration: none;
}
</style>
