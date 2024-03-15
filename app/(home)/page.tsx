'use client'

import { useState, useEffect } from 'react';

import Header from "../components/header";
import WorkoutComp from "../components/workoutLog";
import { WorkoutLog, backURL } from "../globalVariable";
import style from "../styles/home.module.css";

const MainPage = () => {
    const [workoutLogs, setWorkoutLogs] = useState<WorkoutLog[]>([]);
    const dataLoad = () => {
        fetch(backURL + "/api/workoutLog")
            .then(res => res.json())
            .then(data => {setWorkoutLogs(data)});
    }

    useEffect(() => {
        dataLoad();
    }, []);

    return(
        <div>
            <Header />
            <div className={style.workoutLogs}>
                {
                    workoutLogs.map(workoutLog => 
                        <WorkoutComp
                            key={workoutLog.id}
                            id={workoutLog.id}
                            exerciseName={workoutLog.exerciseName}
                            content={workoutLog.content}
                            date={new Date(workoutLog.date)}
                            duration={workoutLog.duration}
                            dataLoad={dataLoad}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default MainPage;