export interface WorkoutLog{
    id: number,
    exerciseName: string,
    content: string,
    date: Date,
    duration: string
}

export const backURL: string = "http://localhost:8080";