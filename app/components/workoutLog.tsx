'use client'

import Link from "next/link";

import { useServerUrlStore } from "../globalVariable";
import style from "../styles/workoutLog.module.css";

const WorkoutLogComp = ({ id, exerciseName, content, date, duration, isDeleted, setIsDeleted}) => {
    const backURL = useServerUrlStore((state) => state.backURL);

    const handleDelete = () => {
        fetch(backURL + `/api/workoutLog/${id}`, {method: 'DELETE'})
            .then(res => {
                if(res.ok) return;
                
                alert("fail to delete data. check chrome devtools > network.");
            }).catch(err => {
                alert("fail to connect with server. execute server or check port number");
            });
        setIsDeleted(isDeleted+1);
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