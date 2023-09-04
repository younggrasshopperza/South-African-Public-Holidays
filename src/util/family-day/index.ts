import { calculateEaster } from '../easter';
export const calculateFamilyDay = (year: number): Date => {
    const easterDate = calculateEaster(year);
    easterDate.setDate(easterDate.getDate() + 1);
    return easterDate;
}