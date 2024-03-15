'use client'

import { FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Header from "../../components/header";
import { backURL } from "../../globalVariable";

// https://velog.io/@sbinha/next.js-Link%EB%A1%9C-props-%EC%A0%84%EB%8B%AC%ED%95%98%EA%B8%B0
const WritePage = () => {
    const router = useRouter();
    const params = useSearchParams();

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
     
        const formData = new FormData(event.currentTarget);
        const id = params.get('id');
        
        fetch(backURL + `/api/workoutLog${id==null ? '' : '/'+id}`, {
          method: id==null ? 'POST' : 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(Object.fromEntries(formData)),
        });

        router.push('/');
        router.refresh();
    }

    return(
        <div>
            <Header />
            <form method="post" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="exerciseName">오늘 한 운동: </label>
                    <input
                        id="exerciseName"
                        name="exerciseName"
                        defaultValue={params.get('exerciseName')}
                        type="text"
                    />

                    <label htmlFor="duration">한 시간: </label>
                    <input
                        id="duration"
                        name="duration"
                        defaultValue={params.get('duration')}
                        type="time"
                    />

                    <label htmlFor="content">메모: </label>
                    <textarea
                        id="content"
                        name="content"
                        defaultValue={params.get('content')}
                    />
                </div>
                <button type="submit">&gt; 저장하기 &lt;</button>
            </form>
        </div>
    );
}

export default WritePage;