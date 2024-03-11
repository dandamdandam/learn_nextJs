import Header from "../../components/header";

const WritePage = () => {
    return(
        <div>
            <Header />
            <div>
                <label htmlFor="exerciseName">오늘 한 운동: </label>
                <input
                    id="exerciseName"
                    type="text"
                />

                <label htmlFor="duration">한 시간: </label>
                <input
                    id="duration"
                    type="time"
                />

                <label htmlFor="content">메모: </label>
                <textarea
                    id="content"
                />
            </div>
            <button>&gt; 저장하기 &lt;</button>
        </div>
    );
}

export default WritePage;