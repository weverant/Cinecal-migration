<template>
    <li class="box" :data-day="data.day">
        <a
            :href="`/${data.month
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase()}/${data.day}`"
        >
            <div class="box__content">
                <div class="box__info">
                    <h2 class="title title--big">{{ data.day }}</h2>
                    <span class="year">{{ data.year }}</span>
                    <p>
                        {{
                            data.title.length > 90
                                ? data.title.substring(0, 90) + '…'
                                : data.title
                        }}
                    </p>
                </div>
                <div class="box__img">
                    <img
                        loading="lazy"
                        height="200"
                        :src="getImgUrl()"
                        :alt="`image illustrative : ${data.title}`"
                    />
                </div>
            </div>
        </a>
    </li>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['data']);

const months = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
];

const getImgUrl = () => {
    return new URL(
        `../images/events/${months.indexOf(ref(props.data.month).value) + 1}-${
            ref(props.data.day).value
        }image.jpg`,
        import.meta.url
    );
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s var(--easing);
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
