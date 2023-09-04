export const formatDate = (date: Date): string => {
    if (date.getDay() === 0) { // If Sunday
        date.setDate(date.getDate() + 1); // Move to the next day
    }
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}