import {z} from 'zod';

export const createTaskSchema = z.object({
    title: z.string({
        required_error: 'Title is required',
    }),
    description: z.string({
        required_error: 'Description must be a string',
    }),
    date: z.string().datetime().optional(),
    longitude: z.string({
        required_error: 'Longitude is required',
    }),
    latitude: z.string({
        required_error: 'Latitude is required',
    }),
});