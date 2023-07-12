<template>
    <nav
        class="menu"
        :class="{ 'menu--active': isMenuOpen }"
        @mouseleave="isMenuOpen = false"
    >
        <button class="burger" @click="isMenuOpen = !isMenuOpen">
            <span></span>
        </button>
        <a href="/" class="logo"> CineCal </a>
        <span class="menu__title">Menu</span>
        <ul class="nav">
            <li class="nav__el"><a href="/">Accueil</a></li>
            <li class="nav__el link">
                <a href="/calendrier">Calendrier</a>
            </li>
            <li class="nav__el"><a href="/apropos">À propos</a></li>
        </ul>
    </nav>
    <Transition name="fade" mode="out-in">
        <div class="overlay" v-show="isMenuOpen" :key="'menu'"></div>
    </Transition>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>

<style lang="scss" scoped>
@use '../styles//helpers/mixins' as *;
@use '../styles//helpers/config' as *;

.logo {
    position: fixed;
    top: 7px;
    left: 0;
    padding: 10px 15px;

    line-height: 1;
    font-family: $font-family-title;
    color: $title-color;
    font-weight: 700;
    font-size: 2rem;
    text-transform: uppercase;

    img {
        height: 40px;
    }

    @include screen(tablet) {
        position: absolute;
        bottom: 50%;
        top: auto;
        left: auto;
        right: -36px;
        transform: translateY(50%) rotate(-90deg);
    }

    @include screen(desktop) {
        right: -25px;
    }
}

.menu {
    padding: 50px;
    position: fixed;
    right: 0;
    top: -430px;
    width: 100%;
    height: 100%;
    height: 500px;
    background-color: #fff;
    z-index: 550;
    transition: transform 0.6s var(--easing);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @include screen('(max-width: 480px)') {
        padding: 20px;
    }

    @include screen(tablet) {
        top: 0;
        height: 100%;
        padding: 100px;
        left: -440px;
        width: 500px;
    }

    @include screen(desktop) {
        left: -640px;
        width: 720px;
    }

    &__title {
        position: absolute;
        top: 25px;
        left: 50%;
        transform: translateX(-50%);
    }

    &--active {
        transform: translateY(430px);

        @include screen(tablet) {
            transform: translateX(440px);
        }
        @include screen(desktop) {
            transform: translateX(640px);
        }

        .nav__el {
            opacity: 1;
            transform: translateY(300px);

            @include screen(tablet) {
                transform: translateX(300px);
            }
        }
    }
}

.nav {
    &__el {
        position: relative;
        left: 0;
        top: -300px;
        opacity: 0;
        letter-spacing: -0.02em;
        margin: 20px 0;
        text-align: center;
        color: #000;
        font-size: 36px;
        transition: color 0.35s ease, transform 0.8s var(--easing),
            opacity 0.8s var(--easing);

        @include screen('(max-width: 480px)') {
            font-size: 30px;
        }

        @include screen(mobile) {
            left: 0;
            top: -300px;
        }

        @include screen(tablet) {
            top: 0;
            left: -300px;
            font-size: 40px;
        }

        @include screen(desktop) {
            left: -300px;
            font-size: 48px;
        }

        &:hover {
            color: #969696;
        }
    }
}
.burger {
    display: block;
    width: 80px;
    height: 80px;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    position: fixed;
    right: 2px;
    top: -8px;
    z-index: 501;
    transition: all 0.6s var(--easing);

    @include screen(tablet) {
        position: absolute;
        right: -8px;
        top: 0;
    }

    @include screen(desktop) {
        right: 2px;
        top: 0;
    }

    span {
        display: block;
        height: 4px;
        width: 30px;
        position: absolute;
        left: 50%;
        top: 50%;
        background: #000;
        transform: translate(-50%, -50%);
        transition: all 0.6s var(--easing);

        &::before {
            transform: translate(0, 250%);
            transition: all 0.6s var(--easing);
        }

        &::after {
            transform: translate(0, -250%);
            transition: all 0.6s var(--easing);
        }
    }

    span::after,
    span::before {
        content: '';
        display: block;
        height: 100%;
        width: 115%;
        background: #000;
        position: absolute;
        top: 0;
        left: 0;
    }
}
.menu--active .burger {
    right: 12px;

    span {
        width: 0;
    }

    span::before {
        opacity: 1;
        transform: translate(0, 0) rotate(45deg);
    }

    span::after {
        transform: translate(0, 0) rotate(-45deg);
    }

    span::after,
    span::before {
        width: 40px;
    }
}

.overlay {
    opacity: 0.35;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000;
    width: 100%;
    height: 100%;
    transition: all 0.6s var(--easing);
    z-index: 100;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
