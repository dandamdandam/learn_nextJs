'use client'

import Link from "next/link";

import { useServerUrlStore } from "../globalVariable";
import style from "../styles/workoutLog.module.css";
import { useQueryClient } from "react-query";

const WorkoutLogComp = ({ id, exerciseName, content, date, duration}) => {
    const backURL = useServerUrlStore((state) => state.backURL);
    const queryClient = useQueryClient();

    const handleDelete = () => {
        fetch(backURL + `/api/workoutLog/${id}`, {method: 'DELETE'})
            .then(res => {
                if(res.ok){
                    queryClient.invalidateQueries(["workoutLogs"]);
                    return;
                }
                
                alert("요청에 실패했습니다. 개발자도구 > networks 탭에서 오류를 확인해주세요.");
            }).catch(err => {
                alert("서버 연결에 실패했습니다. 서버를 실행시켰는지, IP가 맞는지 확인해주세요.");
            });
    }

    return (
        <div className={style.workoutLog}>
            <div className={style.card}>
                <div>
                    <div className={style.cardName}>
                        <h2>{exerciseName}</h2>
                        <span className="colored_span">{duration}</span>
                    </div>
                    <p>{content}</p>
                </div>
                <span className="colored_span">{getDateString(date)}</span>
            </div>
            <div className={style.buttons}>
                <Link href={`/write?id=${id}&exerciseName=${exerciseName}&content=${content}&duration=${duration}`}>
                    <img
                        alt="go to write workout log buttom styling"
                        src="/imgs/write_icon.svg"
                    />
                </Link>
                <button onClick={handleDelete}>
                    <img
                        alt="delete workout log buttom styling"
                        src="/imgs/del_icon.svg"
                    />
                </button>
            </div>
        </div>
    );
}

const getDateString = (date: Date): string => {
    var arrDayStr = ['일','월','화','수','목','금','토'];

    let year = date.getFullYear().toString().slice(2, 4);
    return year + "/" + formatTwoWord(date.getMonth()) + "/" + formatTwoWord(date.getDate())
            + "(" + arrDayStr[date.getDay()] + ") " + formatTwoWord(date.getHours()) + ":" + formatTwoWord(date.getMinutes());
}
const formatTwoWord = (n: number): string => {
    return n<10 ? "0"+n : ""+n;
}

export default WorkoutLogComp;