<template>
    <MonthPicker
        :currentMonth="currentMonth"
        :months="$info.months"
        @change-month="updateData"
    />

    <ul class="calendar" data-month="juillet">
        <TransitionGroup name="list">
            <CalendarDay v-for="day in monthData" :key="day" :data="day" />
        </TransitionGroup>
    </ul>
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
    height: 400px;
}

.list-move,
.list-enter-active,
.list-leave-active {
    transition: all 0.48s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
}
</style>
