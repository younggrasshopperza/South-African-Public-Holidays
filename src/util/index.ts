import { formatDate } from './format-date';
import { calculateGoodFriday } from './good-friday';
import { calculateFamilyDay } from './family-day';
const currentYear = new Date().getFullYear();
export const southAfricanHolidays = [
    `${currentYear}-01-01`, // 1 January - New Year's Day
    `${currentYear}-03-21`, // 21 March - Human Rights Day
    formatDate(calculateGoodFriday(currentYear)), // Good Friday - Date varies based on what the date is for that Friday of the year
    formatDate(calculateFamilyDay(currentYear)), // Family Day - the Monday following Good Friday
    `${currentYear}-04-27`, // Freedom Day - 27 April
    `${currentYear}-05-01`, // Workers' Day - 1 May
    `${currentYear}-06-16`, // Youth Day - 16 June
    `${currentYear}-08-09`, // National Women's Day - 9 August
    `${currentYear}-09-24`, // Heritage Day - 24 September
    `${currentYear}-12-16`, // Day of Reconciliation - 16 December
    `${currentYear}-12-25`, // Christmas Day - 25 December
    `${currentYear}-12-26` // Day of Goodwill - 26 December
];