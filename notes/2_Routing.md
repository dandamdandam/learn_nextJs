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

## 2.4 Hydration

- hydration: 사용자가 html를 본 후 react가 활성화하는 작업
  - 사용자 접속 -> html 제공 -> init(html){react application을 html에 씌움}
  - 씌움의 대상이 되는 것 ex) 링크, state가 들어간 부분...

### 2.4 관련 개념

- hydration
- CSR/SSR

### 2.4 실습 순서

1. javascript를 disable 시켰을 때의 링크 이동(hard navigator)과 활성화 시켰을 때 비교 -> 개발자도구 이용

## 2.5 'use client'

- 'use client'란?
  - hydration이 진행될 component를 지정해주는 커맨드.
  - client component를 적게 쓰면유저가 다운받아야 할 javascript 소스가 적어진다.

### 2.5 관련 개념

- client component

## 2.7 Layouts

- 상위 폴더의 layout을 먼저 랜더링 한 후 링크를 확인하고 layout안에 경로에 해당하는 컴포넌트를 렌더링 해줌
- layout은 중첩이 가능함

### 2.7 관련 개념

- layout파일

### 2.7 실습 순서

1. 레이아웃 파일 테스트
2. page파일에 있던 네비게이션 바 컴포넌트를 삭제하고, 네비게이션 바 레이아웃에 추가
3. about-us에 layout 추가, company/jobs/sales/pages.tsx 추가.

## sksk

### sksk 관련 개념

### sksk 실습 순서
