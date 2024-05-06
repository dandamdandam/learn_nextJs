'use client'

import { useState } from 'react';

import Header from "../components/header";
import Setting from '../components/Setting';
import WorkoutComp from "../components/workoutLog";
import { WorkoutLog, useServerUrlStore } from "../globalVariable";
import style from "../styles/home.module.css";
import { useQuery } from 'react-query';

const WorkoutLogs = () => {
    const backURL = useServerUrlStore((state) => state.backURL);
    const dataLoad = () => {
        return fetch(backURL + "/api/workoutLog")
            .then(res => {
                if(res.ok) return res.json();
                
                alert("데이터를 가져오는데 실패했습니다. 개발자도구 > networks 탭에서 오류를 확인해주세요.");
                return [];
            })
            .then(data => data)
            .catch(() => {
                alert("서버 연결에 실패했습니다. 서버를 실행시켰는지, 포트가 맞는지 확인해주세요.");
            })
    }
    const {data: workoutLogs, isLoading} = useQuery(["workoutLogs"], dataLoad);

    if(isLoading) return <div>isLoading</div>;
    
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
                    />
                )
            }
        </div>
    )
}

const WorkoutLogPages = () => {
    const [pageNum, setPageNum] = useState<number>(0);
    const [maxPageNum, setmaxPageNum] = useState<number>(0);
    const backURL = useServerUrlStore((state) => state.backURL);
    const dataLoad = (howMany) => {
        return fetch(`${backURL}/api/workoutLog/page?howMany=${howMany}&pageNum=${pageNum}`)
            .then(res => {
                if(res.ok)return res.json();
                
                alert("데이터를 가져오는데 실패했습니다. 개발자도구 > networks 탭에서 오류를 확인해주세요.");
                return {
                    "maxPage": 0,
                    "workoutLogs": [],
                };
            })
            .then(data => {
                setmaxPageNum(data.maxPage);
                return data.workoutLogs;
            })
            .catch(() => {
                alert("서버 연결에 실패했습니다. 서버를 실행시켰는지, 포트가 맞는지 확인해주세요.");
            })
    }
    const pageChange = (value: number) => {
        var pageTo = value + pageNum;
        if(0<=pageTo && pageTo<maxPageNum) setPageNum(pageTo);
    }
    const {data: workoutLogs, isLoading} = useQuery(["workoutLogs"], dataLoad);

    if(isLoading) return <div>isLoading</div>;

    return(
        <div>
            <div className={style.workoutLogs}>
                {
                    workoutLogs?.map(workoutLog => 
                        <WorkoutComp
                            key={workoutLog.id}
                            id={workoutLog.id}
                            exerciseName={workoutLog.exerciseName}
                            content={workoutLog.content}
                            date={new Date(workoutLog.date)}
                            duration={workoutLog.duration}
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