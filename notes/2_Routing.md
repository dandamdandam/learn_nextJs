# 2 Routing

## 2.1 Defining Routes

- nextJs에서는 파일 시스템을 통해 라우팅을 함
  `파일구조 == url`
- 새 폴더를 생성함으로써 그 안에 페이지가 있을 가능성을 next에 알림. 그 안에 page파일을 만들어주어 렌더링된 파일 지정
  `렌더링될 파일 == page.js/.jsx/.tsx`
  > 직접적인 page.tsx 파일이 없는 폴더는 실제 페이지 없이 그저 경로의 일부분이 된다.
- page 파일이 없는 폴더는 실제 경로에 포함되지 않음

### 실습 순서

1. about-us 폴더와 그 아래 page.tsx 생성
2. about-us/company/sales를 생성하고 그 안에 page.tsx 생성
3. company url에는 랜더링되는게 없다는 걸 보여주고, page.tsx 생성 후 비교
4. about-us에 components 폴더 생성, component(avatar) 사용예시 제시.
