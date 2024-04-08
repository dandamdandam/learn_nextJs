'use client'

import { useState, useEffect } from 'react';

import Header from "../components/header";
import Setting from '../components/Setting';
import WorkoutComp from "../components/workoutLog";
import { WorkoutLog, useServerUrlStore } from "../globalVariable";
import style from "../styles/home.module.css";

const MainPage = () => {
    const [workoutLogs, setWorkoutLogs] = useState<WorkoutLog[]>([]);
    const backURL = useServerUrlStore((state) => state.backURL);
    const dataLoad = () => {
        fetch(backURL + "/api/workoutLog")
            .then(res => {
                if(res.ok) return res.json();
                
                alert("fail to get datas. check chrome devtools > network.");
                return [];
            })
            .then(data => {setWorkoutLogs(data)})
            .catch(err => {
                alert("fail to connect with server. execute server or check port number");
            })
    }

    useEffect(() => {
        dataLoad();
    }, [workoutLogs, backURL]);

    return(
        <div>
            <Setting />
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