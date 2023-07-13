<template>
    <div class="pick">
        <Transition name="slide">
            <h1 class="title title__month" :key="currentMonth">
                {{ currentMonth }}
            </h1>
        </Transition>
    </div>
    <div class="months">
        <ul class="months__inner">
            <li
                class="link months__el"
                v-for="month in months"
                :class="{ active: currentMonth === month }"
                @click="$emit('changeMonth', month)"
            >
                {{ month }}
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps(['currentMonth', 'months']);
const emits = defineEmits(['changeMonth']);
</script>

<style lang="scss" scoped>
@use '../styles//helpers/mixins' as *;
@use '../styles//helpers/config' as *;

.pick {
    margin: 100px 0 40px;
    display: flex;
    justify-content: center;

    position: relative;
    overflow: hidden;

    @include screen(mobile) {
        margin: 100px 0 80px;
    }
}

.months {
    display: block;
    overflow: hidden;

    @include screen(desktop) {
        position: sticky;
        top: 0;
        background-color: $text-color;
        z-index: 1;
    }

    &__inner {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: #eeeeee;
        transition: transform 0.45s var(--easing);
        animation: slideback ease 0.3s forwards;

        border-top: 1px inset #000;
        border-left: 1px inset #000;
    }

    &__el {
        color: #000;
        text-align: center;
        width: calc(100% / 3);
        transition: all 0.15s ease-in-out;
        font-size: 0.9rem;
        transition: opacity 0.6s ease-in-out, color 0.35s ease;

        border-bottom: 1px solid #000;
        border-right: 1px solid #000;

        @include screen(tablet) {
            width: calc(100% / 4);
            font-size: 1.4rem;
        }
        @include screen(desktop) {
            width: calc(100% / 6);
        }

        &:hover {
            color: #969696;
        }

        a {
            line-height: 0.8;
            padding: 8px 0;
            display: block;
        }
    }
    &--active {
        .months__el {
            opacity: 1;
        }
        animation: slide ease 1.6s forwards;
    }

    li {
        padding: 10px 20px;
    }
}
.active {
    background-color: #000;
    color: #f4f4f4;
}

.slide-move,
.slide-enter-active,
.slide-leave-active {
    transition: all 0.64s ease;
}

.slide-enter-from,
.slide-leave-to {
    transition: all 0.48s ease;
    transform: translateY(100%);
}

.slide-leave-active {
    position: absolute;
}
</style>
