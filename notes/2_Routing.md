# 2 Routing

## 2.1 Defining Routes

- nextJs에서는 파일 시스템을 통해 라우팅을 함
  `파일구조 == url`
- 새 폴더를 생성함으로써 그 안에 페이지가 있을 가능성을 next에 알림. 그 안에 page파일을 만들어주어 렌더링된 파일 지정
  `렌더링될 파일 == page.js/.jsx/.tsx`
  > 직접적인 page.tsx 파일이 없는 폴더는 실제 페이지 없이 그저 경로의 일부분이 된다.
- page 파일이 없는 폴더는 실제 경로에 포함되지 않음

### 2.1 실습 순서

1. about-us 폴더와 그 아래 page.tsx 생성
2. about-us/company/sales를 생성하고 그 안에 page.tsx 생성
3. company url에는 랜더링되는게 없다는 걸 보여주고, page.tsx 생성 후 비교
4. about-us에 components 폴더 생성, component(avatar) 사용예시 제시.

## 2.2 Not Found Routes

- not-found 페이지 구현
- 앱 안의 모든 페이지에서 사용될 네비게이션 바 구현

### 2.2 관련 개념

- special file -> not-found
- client/server component

### 2.2 실습 순서

1. not-found 파일 생성 후 테스트
2. about-us의 company 폴더 삭제(프로젝트 단순화를 위함)
3. root에 component 폴더 생성 후 navigation 함수 만들기. `<Link>` 사용
4. 모든 page에 navigation component 추가
5. "next/navigation"의 usePathname 훅 이용, 현재 경로에 따라 navigation 링크 옆에 🔥 붙이기 - use client

## 2.3 SSR vs CSR

- next.js가 앱을 랜더링 하는 법
  - 랜더링: js를 브라우저가 이해할 수 있는 html로 변환하는 작업
  - 일반적인 react는 client side rendering 사용. (브라우저에서 랜더링)
    - ui를 보려면 javascript가 실행될 때까지 기대려야 함
    - SEO 상 좋지 않음.
  - next는 default로 server side rendering 사용. (서버에서 랜더링)

### 2.3 관련 개념

- client/server component

### 2.3 실습 순서

1. "use client"인 상태에서 console.log()와 아닌 상태에서 console.log() 비교 -> SSR/CSR 비교 위함. 삭제하기.
