'use client'

import { FormEvent } from "react"
import { useServerUrlStore } from "../globalVariable";
import style from "../styles/setting.module.css";

const Setting = ({setIsPaging}) => {
    const {portNum, setPortNum, ip, setIp} = useServerUrlStore((state) => state)

    function onSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
     
        const formData = new FormData(event.currentTarget);
        
        setIp(formData.get("ip").toString());
        setPortNum(Number(formData.get("portNum")));

        if(Number(formData.get("isPaging"))==0) setIsPaging(false);
        else setIsPaging(true);
        alert("세팅 완료. 새로 고침하면 초기화 됩니다.");
    }

    return(
        <div>
            <form onSubmit={onSubmit} className={style.setting}>
                {/* set server url */}
                <div>
                    <label htmlFor="ip">서버 IP: </label>
                    <input
                        id="ip"
                        name="ip"
                        defaultValue={ip}
                        type="text"
                    />
                    <label htmlFor="portNum">서버 포트 번호: </label>
                    <input
                        id="portNum"
                        name="portNum"
                        defaultValue={portNum}
                        type="number"
                    />
                </div>
                {/* set paging or not*/}
                <div>
                    <label htmlFor="isPaging">get 방식: </label>
                    <select id="isPaging" name="isPaging">
                        <option value="0">use "findAll()" to get</option>
                        <option value="1">use "findPart()" to get</option>
                    </select>
                </div>
                <div>
                    <button type="submit">설정 적용</button>
                </div>
            </form>
        </div>
    )
}

export default Setting;