# 노드버전

20.11.0 LTS

# 실행방법

```bash
# 노드모듈 설치
npm run install

# 개발서버 실행
# 8080포트에서 실행 -> http://localhost:8080
npm run dev
```

# 프로젝트 구조

```
설명이 붙지 않은 폴더는 퍼블리셔가 작업/사용 중인 폴더
.
├── assets (정적 파일)
│   ├── css
│   ├── fonts
│   ├── images
│   │   ├── common
│   │   ├── footer
│   │   ├── sam
│   │   └── ui
│   └── scss
├── components (컴포넌트)
│   ├── Footer
│   ├── Header
│   ├── common (공통 컴포넌트 / 별도 프로젝트 분리 후 module로 관리)
│   │   ├── base (기본 컴포넌트)
│   │   └── composition (화면구성 컴포넌트)
│   ├── event
│   └── product
├── constants (상수파일)
├── layouts (레이아웃)
├── middleware (라우팅 미들웨어 (A.K.A 네비게이션가드))
├── pages (화면 페이지 / 파일시스템 단위 라우팅)
│   ├── component-test
│   ├── event
│   ├── guide
│   ├── main
│   ├── product
│   ├── publish
│   └── sample
├── plugins (플러그인)
├── public (정적 파일 호스팅)
├── server (노드 서버)
│   ├── api (노드 서버 API 호출)
│   └── routes ('/api' prefix 제거된 경로)
└── utils (공통 유틸)

```

# 작업 중인 컴포넌트 미리보기

http://localhost:8080/component-test

# 컴포넌트 분리 테스트

http://localhost:8080/poc

# CSR/SSR/CSR+SSR 페이지

http://localhost:8080/main?redisUse=Y
