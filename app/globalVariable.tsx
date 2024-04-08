import { create } from 'zustand';

export interface WorkoutLog{
    id: number,
    exerciseName: string,
    content: string,
    date: Date,
    duration: string
}

interface ServerUrlStore {
    backURL: string,
    portNum : number,

    setPortNum : (value: number) => void;
}

export const useServerUrlStore = create<ServerUrlStore>((set) => ({
    backURL: "http://localhost:8080",
    portNum: 8080,

    setPortNum: (value) => set({portNum: value, backURL: "http://localhost:"+value}),
}));