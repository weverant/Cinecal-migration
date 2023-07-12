import { map } from 'nanostores';

const date = new Date();

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

const today = {
    day: date.getDate(),
    month: date.getMonth(),
};

export const infos = map({
    day: today.day,
    month: months[today.month],
    monthIndex: today.month + 1,
    months: months,
});
