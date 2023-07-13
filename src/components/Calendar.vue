<template>
    <MonthPicker
        :currentMonth="currentMonth"
        :months="$info.months"
        @change-month="updateData"
    />

    <TransitionGroup tag="ul" class="calendar" name="list">
        <CalendarDay v-for="day in monthData" :key="day" :data="day" />
    </TransitionGroup>
</template>

<script setup>
import { ref } from 'vue';

import MonthPicker from './MonthPicker.vue';
import CalendarDay from './CalendarDay.vue';

import { infos } from '../calendarStore';
import { useStore } from '@nanostores/vue';

import data from '../data/cine-data.json';

const $info = useStore(infos);

const currentMonth = ref();
const monthData = ref();

const updateData = (month) => {
    if (month) infos.setKey('month', month);

    currentMonth.value = $info.value.month;

    monthData.value =
        data[
            currentMonth.value
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase()
        ];
};

updateData();
</script>

<style lang="scss">
.box {
    position: relative;
    height: 400px;
}

.list-move .box__content,
.list-enter-active .box__content,
.list-leave-active .box__content {
    transition: all 0.48s cubic-bezier(0.77, 0, 0.175, 1);
}

.list-enter-from .box__content,
.list-leave-to .box__content {
    opacity: 0;
    transform: translateY(140px);
}
</style>
