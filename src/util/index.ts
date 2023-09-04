import { formatDate } from './format-date';
import { calculateGoodFriday } from './good-friday';
import { calculateFamilyDay } from './family-day';
const currentYear = new Date().getFullYear();
export const southAfricanHolidays = [
    formatDate(new Date(`${currentYear}-01-01`)),
    formatDate(new Date(`${currentYear}-03-21`)),
    formatDate(calculateGoodFriday(currentYear)),
    formatDate(calculateFamilyDay(currentYear)),
    formatDate(new Date(`${currentYear}-04-27`)),
    formatDate(new Date(`${currentYear}-05-01`)),
    formatDate(new Date(`${currentYear}-06-16`)),
    formatDate(new Date(`${currentYear}-08-09`)),
    formatDate(new Date(`${currentYear}-09-24`)),
    formatDate(new Date(`${currentYear}-12-16`)),
    formatDate(new Date(`${currentYear}-12-25`)),
    formatDate(new Date(`${currentYear}-12-26`))
];