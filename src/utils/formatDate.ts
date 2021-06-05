import { format } from 'date-fns';

export function formatDate(date: Date): string {
    const newDate = format(date, 'P');
    return newDate;
}