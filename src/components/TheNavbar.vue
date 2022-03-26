<template>
  <div class="mainNav" :class="{ 'scrolled-nav': scrolledNav }">
    <nav class="navBar">
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" to="/">Home</router-link></li>
        <li><router-link class="link" to="/order">Pedido</router-link></li>
        <li><router-link class="link" to="/chef">Pastelero</router-link></li>
        <li>
          <router-link class="link" to="/premade"
            >Entrega Inmediata</router-link
          >
        </li>
        <li><router-link class="link" to="/about">Contacto</router-link></li>
      </ul>
      <div class="branding">
        <img src="../assets/logo.png" />
      </div>
      <div class="icon">
        <i
          @click="toggleMobileNav"
          v-show="mobile"
          class="far fa-bars"
          :class="{ 'icon-active': mobileNav }"
        ></i>
        <transition name="mobile-nav">
          <ul v-show="mobileNav" class="dropdown-nav">
            <li><router-link class="link" to="/">Home</router-link></li>
            <li><router-link class="link" to="/order">Pedido</router-link></li>
            <li>
              <router-link class="link" to="/chef">Pastelero</router-link>
            </li>
            <li>
              <router-link class="link" to="/premade"
                >Entrega Inmediata</router-link
              >
            </li>
            <li>
              <router-link class="link" to="/about">Contacto</router-link>
            </li>
          </ul>
        </transition>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "TheNavBar",
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
      return;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>
<style scoped>
.navBar {
  background-image: linear-gradient(yellow, #ffbd89);
  width: 100%;
  position: fixed;
  top: 0px;
  transition: 0.5s ease all;
  display: flex;
  flex-direction: row;
  padding-top: 8px;
  padding-bottom: 0px;
  margin: 0 auto;
}
@media (min-width: 1140px) {
  .navBar {
    max-width: 1140px;
  }
}
@media screen and (max-width: 750px) {
  .navBar {
    padding-bottom: 22px;
  }
}
ul,
.link {
  font-weight: 500;
  list-style: none;
  text-decoration: none;
}

li {
  text-transform: uppercase;
  padding: 16px;
  margin-left: 16px;
}

.link {
  font-size: 14px;
  transition: 0.5s ease all;
  padding-bottom: 4px;
  padding: 10px 10px;
  border-bottom: 1px solid transparent;
}
.link:hover {
  color: #2c3e50;
  border-color: white;
}
/* .navigation a {
  font-weight: bold;
  color: #2c3e50;
  padding: 20px 20px;
  text-decoration: none;
  margin-top: 20px;
  vertical-align: center;
} */

nav a.router-link-exact-active {
  color: black;
  background-color: #aee77c;
  background-image: linear-gradient(#aee77c, yellow);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.branding {
  display: flex;
  align-items: center;
}

img {
  height: 60px;
  width: auto;
  /* margin-right: 40px; */
  /* float: right; */
  box-shadow: 50%;
  transition: 0.5s ease all;
}

.navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
}

.icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
}

.icon i {
  cursor: pointer;
  font-size: 24px;
  transition: 0.8s ease all;
}

.icon-active {
  transform: rotate(180deg);
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-image: linear-gradient(yellow, #ffbd89);
  top: 0;
  left: 0;
}

.dropdown-nav li {
  margin-left: 0;
}

.dropdown-nav li .link {
  color: black;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}

.mobile-nav-enter-to {
  transform: translateX(0px);
}

.scrolled-nav {
  box-shadow: 0 4px 6px -1px black, 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.scrolled-nav nav {
  padding: 0px 0;
}
</style>
