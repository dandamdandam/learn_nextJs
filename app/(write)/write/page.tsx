'use client'

import { FormEvent, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Header from "../../components/header";
import { backURL } from "../../globalVariable";
import style from "../../styles/write.module.css";

// https://github.com/vercel/next.js/discussions/61654
const WritePage: React.FC = () => {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <WriteComp />
        </Suspense>
      </div>
    );
}

const WriteComp = () => {
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
            <form method="post" onSubmit={onSubmit} className={style.form}>
                <div className={style.inputs}>
                    <div>
                        <label htmlFor="exerciseName">오늘 한 운동: </label>
                        <input
                            id="exerciseName"
                            name="exerciseName"
                            defaultValue={params.get('exerciseName')}
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="duration">한 시간: </label>
                        <input
                            id="duration"
                            name="duration"
                            defaultValue={params.get('duration')}
                            type="time"
                        />
                    </div>
                    <div>
                        <label htmlFor="content">메모: </label>
                        <textarea
                            id="content"
                            name="content"
                            defaultValue={params.get('content')}
                        />
                    </div>
                </div>
                <div className={style.button}>
                    <button className="colored_span" type="submit">&gt; 저장하기 &lt;</button>
                </div>
            </form>
        </div>
    );
}

export default WritePage;