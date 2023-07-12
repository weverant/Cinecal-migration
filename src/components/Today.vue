<template>
    <a :href="`${months[today.month]}/${event.day}`" class="header__highlight">
        <div id="today" class="box__main">
            <div class="event event__header">
                <h2 class="title title__date date--big">{{ event.day }}</h2>
                <span class="header__month">{{ event.month }}</span>
                <div class="event__img">
                    <img :src="getImgUrl()" alt="" />
                </div>
                <span class="header__year">{{ event.year }}</span>
                <p>{{ event.title }}</p>
            </div>
        </div>
    </a>
</template>

<script setup>
import data from '../data/cine-data.json';

const date = new Date();

const months = [
    'janvier',
    'fevrier',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'aout',
    'septembre',
    'octobre',
    'novembre',
    'decembre',
];

const today = {
    day: date.getDate(),
    month: date.getMonth(),
};

const event = data[months[today.month]][today.day - 1];

const getImgUrl = () => {
    return new URL(
        `../images/events/${today.month + 1}-${today.day}image.jpg`,
        import.meta.url
    );
};
</script>
