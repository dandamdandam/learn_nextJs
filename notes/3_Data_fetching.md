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

## sksk

### sksk 관련 개념

### sksk 실습 순서
