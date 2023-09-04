import { calculateEaster } from '../easter';
export const calculateGoodFriday = (year: number): Date => {
    const easterDate = calculateEaster(year);
    easterDate.setDate(easterDate.getDate() - 2);
    return easterDate;
}