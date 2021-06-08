import { format } from 'date-fns';

export function formatDate(date: Date): string {
    const newDate = new Date(date);
    return format(newDate, 'P');
}