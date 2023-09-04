import express, { Request, Response } from 'express';
import {
    southAfricanHolidays,
    southAfricanHolidaysCheckingForSundays,
    southAfricanHolidaysWithNames,
    southAfricanHolidaysWithNamesCheckingSundays
} from "./util";

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/south-african-holiday-names', (req: Request, res: Response) => {
    res.json(southAfricanHolidaysWithNames);
});

app.get('/south-african-holiday-names-checking-sundays', (req: Request, res: Response) => {
    res.json(southAfricanHolidaysWithNamesCheckingSundays);
});

app.get('/south-african-holiday-dates', (req: Request, res: Response) => {
    res.json(southAfricanHolidays);
});

app.get('/south-african-holiday-dates-checking-sundays', (req: Request, res: Response) => {
    res.json(southAfricanHolidaysCheckingForSundays);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});