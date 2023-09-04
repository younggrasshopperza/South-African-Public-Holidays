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

export const southAfricanHolidaysCheckingForSundays = [
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
export const southAfricanHolidaysWithNamesCheckingSundays: string[] = [
    `${formatDate(new Date(`${currentYear}-01-01`))} - New Year's Day`,
    `${formatDate(new Date(`${currentYear}-03-21`))} - Human Rights Day`,
    `${formatDate(calculateGoodFriday(currentYear))} - Good Friday`,
    `${formatDate(calculateFamilyDay(currentYear))} - Family Day`,
    `${formatDate(new Date(`${currentYear}-04-27`))} - Freedom Day`,
    `${formatDate(new Date(`${currentYear}-05-01`))} - Workers' Day`,
    `${formatDate(new Date(`${currentYear}-06-16`))} - Youth Day`,
    `${formatDate(new Date(`${currentYear}-08-09`))} - National Women's Day`,
    `${formatDate(new Date(`${currentYear}-09-24`))} - Heritage Day`,
    `${formatDate(new Date(`${currentYear}-12-16`))} - Day of Reconciliation`,
    `${formatDate(new Date(`${currentYear}-12-25`))} - Christmas Day`,
    `${formatDate(new Date(`${currentYear}-12-26`))} - Day of Goodwill`
];

export const southAfricanHolidaysWithNames: string[] = [
    `${currentYear}-01-01 - New Year's Day`,
    `${currentYear}-03-21 - Human Rights Day`,
    `${formatDate(calculateGoodFriday(currentYear))} - Good Friday`,
    `${formatDate(calculateFamilyDay(currentYear))} - Family Day`,
    `${currentYear}-04-27 - Freedom Day`,
    `${currentYear}-05-01 - Workers' Day`,
    `${currentYear}-06-16 - Youth Day`,
    `${currentYear}-08-09 - National Women's Day`,
    `${currentYear}-09-24 - Heritage Day`,
    `${currentYear}-12-16 - Day of Reconciliation`,
    `${currentYear}-12-25 - Christmas Day`,
    `${currentYear}-12-26 - Day of Goodwill`
];