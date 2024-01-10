# Happy Cloud Storage 행복 클라우드 스토리지

> 일상의 행복을 저장하고 함께 나누어요

일상의 행복과 그 순간의 감정을 적어 보관하고 친구들과 공유할 수 있는 게시판입니다.

# 1. 개요
![HCS_로고](./FE/public/HCS_logo.svg)
- 서비스명: Happy Cloud Storage 행복 클라우드 스토리지
- 개발 기간: 23.01.04 - 23.01.10 (1차)
- 주제: 게시판 구현 프로젝트

# 2. 서비스 설명

## 2-1. 기획 의도

일상 속 자잘한 즐거움, 혹은 행복한 기억들을 클라우드 저장소에 snapshot을 남기듯 짧게 기록해두고 필요할 때 한번씩 들춰보는 공간을 제공하고자 합니다.

## 2-2. 와이어프레임

[발표자료: 피그마](https://www.figma.com/file/zaCaKeLDIAX113nBTNMYRy/Jungle_Board?type=design&node-id=0%3A1&mode=design&t=HVYRpqssqXQhM0FJ-1)

[발표자료: 구글 슬라이](https://docs.google.com/presentation/d/1eHHHLCR3ywSqWmwIpp-BuCqXxDLf-4h4w7rMWyHXWHk/edit?usp=sharing)

## 2-3. 주요 기능

- 회원가입/로그인
  - `recoil` 및 `recoil-persist`을 통해 session storage를 사용하여 JWT 토큰을 사용하였다.
- 게시물 작성
- 게시물 목록보기 (개인/모든 회원)
- 게시물 읽기 (개인/모든 회원)
  - 작성 후 전체 화면 새로고침 없이 목록만 다시 랜더링 됨
- 댓글 작성

## 2-4. 사용한 기술

- Typescript

### - FE

무한 스크롤을 사용하는 게시판 UI 구현

- React(CSR) created via Vite
- React-Router-Dom
- Recoil & Recoil Persist
- Tailwind CSS
- React Testify
- Axios

### - BE

게시판 Server, API 구현

- Node.js & Express.js
- MongoDB, Mongoose
- JWT, bcrypt
- CORS

---

# 3. 계획(목표/희망)

- 구현 중이던 기능: comment 작성시 Re-Rendering 기능
- 코드 정리

## FrontEnd 측면

- Redux로 업그레이드

* Next.js로 이전 및 SSR 구현

## BackEnd 측면

- refresh token 구현
- 배포 구현

* API 명세서

- Node.js(express) -> Nest.js로 업그레이드

## 기능적 측면

### 회원가입/로그인

- 회원가입시 이메일 인증 구현
- 구글/카카오톡 로그인 및 회원가입 기능 구현
- 로그인시 정보를 기억하기(Remember me)

### 게시물 작성

- 템플릿 제공 기능
- 사진 첨부 가능 기능
- 웹 에디터 기능 추가(희망)
- 좋아요 기능

### 게시물 목록 보기

- 작성일 기준 올림/내림차순 정렬 기능

# 기타

## Create React App이 아닌 `Vite`

| CRA                                                           | vite                                                 |
| ------------------------------------------------------------- | ---------------------------------------------------- |
| webpack based build tool (by javscript: interpreted language) | esBuild based build tool (by Go: low-level-language) |

- vite는 쉽게 바뀌지 않는 javascript소스 코드를 esbuild를 통해 ESM으로 변환하고, 수정이 잦고 컴파일링이 필요한 js소스 코드는 navtive ES module(EcmaScript Module)을 기반으로 제공한다.

- memo for question: develop 시점에서의 bundling이 빠르다는 건 production도 마찬가지라는 것일까? 자세한 검색과 공부가 필요한데 일단은 시간이 없어 적어두고 넘어간다.

[Vite vs Create React App (CRA)](https://www.linkedin.com/pulse/vite-vs-create-react-app-cra-abolfazl-haraini-avlne)

## Firebase가 아니라 MongoDB & Mongoose

firebase는 serverless를 지향하여 BE 개발 소요 시간을 줄일 수 있으나, 이를 사용할 경우 axios를 통한 직접 통신 등의 연습엔 부적합하다. Firebase측에서는 보안을 위해 Firebase SDK를 사용하기를 권장한다.

## Trouble Shootings

프로젝트 중 겪은 문제상황과 해결방안 등을 기록하는 Repo ([링크](https://github.com/J-dbd/react-ts-studying/tree/main/React/projects_records))

---

23.01.03 작성/
23.01.05 수정/
23.01.10 1차 갈무리 기록/
