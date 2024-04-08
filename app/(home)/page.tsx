'use client'

import { useState, useEffect } from 'react';

import Header from "../components/header";
import Setting from '../components/Setting';
import WorkoutComp from "../components/workoutLog";
import { WorkoutLog, useServerUrlStore } from "../globalVariable";
import style from "../styles/home.module.css";

const WorkoutLogs = () => {
    const [workoutLogs, setWorkoutLogs] = useState<WorkoutLog[]>([]);
    const [isDeleted, setIsDeleted] = useState<number>(0);
    const backURL = useServerUrlStore((state) => state.backURL);
    const dataLoad = () => {
        fetch(backURL + "/api/workoutLog")
            .then(res => {
                if(res.ok) return res.json();
                
                alert("fail to get datas. check chrome devtools > network.");
                return [];
            })
            .then(data => {setWorkoutLogs(data)})
            .catch(() => {
                alert("fail to connect with server. execute server or check port number");
            })
    }

    useEffect(() => {
        dataLoad();
    }, [backURL, isDeleted]);

    return(
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
                        isDeleted={isDeleted}
                        setIsDeleted={setIsDeleted}
                    />
                )
            }
        </div>
    )
}

const WorkoutLogPages = () => {
    const [workoutLogs, setWorkoutLogs] = useState<WorkoutLog[]>([]);
    const [isDeleted, setIsDeleted] = useState<number>(0);
    const [pageNum, setPageNum] = useState<number>(0);
    const [maxPageNum, setmaxPageNum] = useState<number>(0);
    const backURL = useServerUrlStore((state) => state.backURL);
    const dataLoad = (howMany) => {
        fetch(`${backURL}/api/workoutLog/page?howMany=${howMany}&pageNum=${pageNum}`)
            .then(res => {
                if(res.ok)return res.json();
                
                alert("fail to get datas. check chrome devtools > network.");
                return {
                    "maxPage": 0,
                    "workoutLogs": [],
                };
            })
            .then(data => {
                setmaxPageNum(data.maxPage);
                setWorkoutLogs(data.workoutLogs);
            })
            .catch(() => {
                alert("fail to connect with server. execute server or check port number");
            })
    }
    const pageChange = (value: number) => {
        var pageTo = value + pageNum;
        if(0<=pageTo && pageTo<maxPageNum) setPageNum(pageTo);
    }

    useEffect(() => {
        dataLoad(0);
        dataLoad(4);
    }, [backURL, pageNum, isDeleted]);

    return(
        <div>
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
                            isDeleted={isDeleted}
                            setIsDeleted={setIsDeleted}
                        />
                    )
                }
            </div>
            <div className={style.pagingBtn}>
                <button onClick={() => {pageChange(-1)}}>이전페이지</button>
                <span>{pageNum}</span>
                <button onClick={() => {pageChange(1)}}>다음페이지</button>
            </div>
        </div>
    )
}

const MainPage = () => {
    const [isPaging, setIsPaging] = useState<boolean>(false);

    return(
        <div>
            <Setting setIsPaging={setIsPaging} />
            <Header />
                {isPaging ? <WorkoutLogPages /> : <WorkoutLogs />}
        </div>
    );
}

export default MainPage;