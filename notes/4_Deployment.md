# Deployment

- 스타일 입히기
- vercel을 이용한 배포8
- 최적화

## 4.1 CSS Modules

- global style을 만들기
- css Module -> `이름.module.css`로 이름 지정을 해야 함

### 4.1 실습 순서

1. styles 퐅더 내에 global.css를 만들고 루트 레이아웃 파일에 import.
2. 전체에 필요한 설정 적어주기
3. navigation css module 파일을 styles에 넣고(꾸며주는 파일 바로 옆에 두어도 됨) class 지정자로만 css 작성
4. 확인

## 4.2 Movie Styles

### 4.2 관련 개념

- next navigation > Router
- onClick
- json
- props
- css 사용

### 4.2 실습 순서

1. component/movie 생성 및 내용 작성
2. (home) 페이지 파일에서 만든 컴포넌트 import 및 사용
3. component/movie를 클릭하면 링크가 넘어가도록 설정(onClick, useRouter)
4. navigation, movie component와 home css 작성

## 4.3 Movie Trailers

- movie detail page styling

### 4.3 관련 개념

- iframe
- youtube player API

### 4.3 실습 순서

1. component/movie-info 및 스타일 작성
2. component/movie-videos 및 스타일 작성

## 4.4 Dynamic Metadata

- 추가 챌린지: movie api의 credit, similar, providers도 써보기
- movie id page의 메타데이터 바꾸기
- 요청이 캐싱되기 떄문에 여러번 api를 불러도 부하 x

### 4.4 실습 순서

1. (movies)/movies/[id]의 페이지에 generateMetadata 추가

## 3.5 Deployment

- package json에 build와 start 추가
- github에 올리기
- vercel로 배포
- Link에 prefetch 추가
