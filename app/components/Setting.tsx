'use client'

import { FormEvent } from "react"
import { useServerUrlStore } from "../globalVariable";

const Setting = () => {
    const {portNum, setPortNum} = useServerUrlStore((state) => state)

    function onSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
     
        const formData = new FormData(event.currentTarget);
        console.log("onClick: "+formData.get("portNum"));
        setPortNum(Number(formData.get("portNum")));
    }

    return(
        <div>
            {/* set server port */}
            <form onSubmit={onSubmit}>
                <label htmlFor="portNum">서버 포트 번호: </label>
                <input
                    id="portNum"
                    name="portNum"
                    defaultValue={portNum}
                    type="number"
                />
                <button type="submit">설정 적용</button>
            </form>
        </div>
    )
}

export default Setting;