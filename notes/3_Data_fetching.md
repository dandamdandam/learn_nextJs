# Data fetching

- [영화 api](https://nomad-movies.nomadcoders.workers.dev/)

## 2.1 Client Side

- 외부 라이브러리나 서드파티 없이 data를 fetch

### 2.1 관련 개념

- data fetch
- (리액트 훅) useEffect, useState
- 비동기 함수

### 2.1 실습 순서

(home) page 파일

1. get all movies: movies state, getMovies function, useEffect 작성 후 JSON.stringfy()로 테스트
2. use client 추가, metadata 삭제로 오류 해결
3. loading 처리: isLoading state, useEffect에 로딩 완료 처리 추가, 조건부 랜더링

## 2.2 Server Side

- server side에서 data fetch
  - 서버 실행 후에는 데이터가 서버에서 캐싱되게 때문에 로딩이 거의 없음
  - 로딩이 있더라도 자동으로 보여줌

### 2.2 관련 개념

- data fetching: pre-rendering with Server-side Rendering or Static Generation

### 2.2 실습 순서

(home) page 파일

1. 2.1에서 실습한것을 모두 지우기
2. 데이터를 패칭하고 리턴하는 동기 함수 `getMovies`를 작성
3. page에 해당하는 컴포넌트를 동기 함수로 바꾸어주기 (async 추가)
4. getMovies를 컴포넌트 내부에서 실행

## 2.3 Loading Component

- Loading component 추가로 로딩 시 웹페이지에 보이는 UI 만들기
- data fetching을 server side에서 하는 것: 브라우저 입장에서는 페이지가 아직 덜 로딩된 것처럼 보인다.
  - network를 보면 로딩 페이지는 preview로, 완성된 페이지는 response로 주어진다.

### 2.3 관련 개념

- Loading 파일

### 2.3 실습 순서

1. (home) page 파일의 `getMovies`함수에 10초 기다리는 작업 추가(로딩 테스트 위함)
2. (home)에 loading 파일 추가 후 내용 작성

## 2.4 parallel requests

- 2.3 복습
- 한 파일에서 여러 api를 각기 다른 함수로 호출해 데이터를 패칭할 경우, 순차적으로 실행되어 서버 로딩 시간이 길어짐
  - 병렬처리로 해결할 수 있음 -> Promise.all

### 2.4 관련 개념

- data fetching
- parallel requests

### 2.4 실습 순서

1. (movies)/movies/[id]의 page 파일에 data fetching을 하는 `getMovie` 동기 함수 작성 및 사용.
2. 위 폴더에 loading 파일 추가
3. 다시 page 파일에서 `getVideos` 동기 함수 추가.
4. 그냥 순차실행과 Promise.all을 한 병렬실행의 차이 보여주기

## 2.5 Suspense

- 병렬처리로 data fetching을 하는 동시에 여러 개 중 하나의 데이터 패칭이 먼저 끝난 경우 받아오는 법 -> Suspense
- Suspense: 동기 컴포넌트가 랜더링 될 때까지 기다려주다가 랜더링 된 후 내용을 보여줌(랜더링 중에는 fallback에 입력된 JSX를 보여줌)

### 2.5 관련 개념

- Suspense (react 라이브러리)

### 2.5 실습 순서

1. (movies)/movies/[id]의 페이지 파일에서 getMovie와 getVideos 함수와 관련된 임포트, 변수 삭제
2. component에 movie-info와 movie-videos 파일을 만들과 각각 getMovie, getVideos를 작성.
3. 각 함수를 사용하는 동기 컴포넌트 MovieInfo와 MovieVideos를 각각 만들어주고 export.
4. 다시 [id]의 페이지 파일로 돌아와 MovieInfo와 MovieVideos를 각각 Suspense 컴포넌트로 감싸 적어주기
5. 테스트

## 2.7 Error Handling

- date fetching 중 에러가 발생했을 때 처리하는 방법

### 2.7 관련 개념

- error file

### 2.7 실습 순서

1. component의 movies-videos에 에러 발생하는 코드 추가하고 확인
2. [id] 폴더에 error 파일 추가 및 내용 작성
