'use client'

import { WorkoutLog } from "../globalVariable";

const WorkoutLogComp = ({ id, exerciseName, content, date, duration } : WorkoutLog) => {
    return (
        <div>
            <div>
                <div>
                    <h2>{exerciseName}</h2>
                    <span>{duration}</span>
                </div>
                <p>{content}</p>
                <div>{getDateString(date)}</div>
            </div>
            <div>
                <button>
                    <img
                        alt="go to write workout log buttom styling"
                        src="/imgs/write_icon.svg"
                    />
                </button>
                <button>
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