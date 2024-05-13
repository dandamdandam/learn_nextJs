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
    ip: string,
    portNum : number,

    setPortNum : (value: number) => void;
    setIp: (value: string) => void;
}

export const useServerUrlStore = create<ServerUrlStore>((set) => ({
    backURL: "http://localhost:8080",
    ip: '127.0.0.1',
    portNum: 8080,

    setPortNum: value => set(state => ({portNum: value, backURL: 'http://'+state.ip+':'+value})),
    setIp: value => set(state => ({ip: value, backURL: 'http://'+value+':'+state.portNum})),
}));