import express, { Request, Response } from 'express';
import { southAfricanHolidays } from "./util";
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/south-african-holidays', (req: Request, res: Response) => {
    res.json(southAfricanHolidays);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});