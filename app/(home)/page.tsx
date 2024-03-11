import Header from "../components/header";
import WorkoutComp from "../components/workoutLog";
import { WorkoutLog, backURL } from "../globalVariable";

const getWorkoutLogs = async (): Promise<WorkoutLog[]> => {
    const res = await (await fetch(backURL + "/api/workoutLog")).json();
    return res;
}

const MainPage = async () => {
    const workoutLogs = await getWorkoutLogs();

    return(
        <div>
            <Header />
            <div>
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
        </div>
    );
}

export default MainPage;