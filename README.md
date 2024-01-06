# Happy Cloud Storage 행복 클라우드 스토리지

> 일상의 행복을 저장하고 함께 나누어요

# CRA가 아닌 Vite

CRA : webpack based build tool (by javscript: interpreted language)
vite : esBuild based build tool (by Go: low-level-language)

- vite는 쉽게 바뀌지 않는 javascript소스 코드를 esbuild를 통해 ESM으로 변환하고, 수정이 잦고 컴파일링이 필요한 js소스 코드는 navtive ES module(EcmaScript Module)을 기반으로 제공한다.

- memo for question: develop 시점에서의 bundling이 빠르다는 건 production도 마찬가지라는 것일까? 자세한 검색과 공부가 필요한데 일단은 시간이 없어 적어두고 넘어간다.

#### ref

[Vite vs Create React App (CRA)](https://www.linkedin.com/pulse/vite-vs-create-react-app-cra-abolfazl-haraini-avlne)

# 디자인 관련 정보 메모

```javascript
lightBlue = "8ECAE6";
darkerBlue = "219EBC";
navyBlue = "023047";
silentYellow = "FFB703";
silentOrange = "FB8500";

fontsize = {
  xxlarge = 35,
  xlarge = 30,
  large = 25,
  medium = 20,
  small = 18,
}
```

---

## 기능 요구사항

- 회원가입/로그인
- 게시물 작성
- 게시물 목록보기
- 게시물 읽기
- 댓글 작성

## 개발범위

- 프론트: 게시판 UI를 구현
- 백엔드: 게시판 Server API 구현
- 추가적 구현 가능 (기술적 챌린지 요소)

- 프론트 UI만 구현할 경우
  - 게시판 데이터는 브라우저상에서만 존재하도록 구성 또는 postman mock server를 구성해서 사용
- 백엔드 ServerAPI만 구현한 경우
  - postman등으로 요청을 직접 보내서 시연

또는 원하는 사람과 2인팀을 구성하고, 프론트/백엔드를 나누어서 개발

# 계획(목표/희망)

- 피그마로 UI 그리고 발표 자료에 활용
- 프론트: React(TS)
- 백엔드: Node.js(express) -> Nest.js로 업그레이드 생각 중(시간이 된다면!)

## 회원가입/로그인

- JWT 토큰 or passport 사용: local storage 사용
- 회원가입시 이메일 인증 구현
- 구글/카카오톡 로그인 및 회원가입 기능 구현(가능하다면)
- 로그인시 정보를 기억하기(Remember me)

## 게시물 작성

- 템플릿 제공?
- 사진 첨부 가능 기능
- 웹 에디터 기능 추가

## 게시물 목록 보기

- 조회순/추천순 정렬 기능
- hot 게시글 5개 위로 끌어올려주기

## 게시물 읽기

- 추천 기능
- 신고 기능
- 작성자의 수정 가능 기능

## 기타

### SSR? CSR?

- SEO 적용 가능한 Next.js를 사용할까 했으나 이번 과제 주제 혹은 범위가 'React' 였으므로 react에 집중하기로 결정. 단, SSR과 CSR을 무엇으로 어떻게 만드는지에 대해 조금 더 생각해보아야 함. 완벽하게 알고 있지 않음.

---

# 후보 기록 보관용

## Board topic 후보

1. trouble shooting Record board :
   - 어떠한 문제 해결 과정을 기록하는 게시판. 보통 대학 과제 시 문의사항이 있다면 학기마다 생성된 과목별 학습/질문게시판을 통해 교수자에게 질문이 가능하거나 토론 게시판을 통해 학우끼리 토론 및 의논이 가능하지만 해당 과목이 끝나면 사용자(학습자)가 접근 불가능해지거나 사라진다. 혹은 크래프톤 정글의 경우 pintOS라는 공통 프로젝트를 할 때 매 기수마다 TIL/WIL등을 적으므로 그것을 검색하여 찾는 방법이 있으나, 발생했던 문제들이 명확히 적혀있지 않은 경우가 더 많다(학습용이 많음). 이에 기반하여 독립된 별개의 사이트에서 내가 어떤 과제(보통은 프로그래밍일 확률 높음)를 할 때 어떤 문제(버그)를 어떻게 해결하였는지 문제와 해결방안, 트라이등을 모두 기록하고 쌓아갈 수 있는 공간이 있다면 어떨까? 그리고 어떤 프로젝트나 프레임워크등을 사용하는 중 어떤 문제가 발생하여 해결하고 있는데, 내가 처한 문제를 다른 사람이 지나가다가 아, 이거 이렇게 해결하면 된다고 댓글을 달아줄 수 있다면?
     - 기록 겸 QnA 게시판, 지식in/stack overflow 과 유사할 것 같다고 예상하나 보다 개인적인 기록을 쓰는 공간 겸이기도 하다.
     - 짧은 텍스트 제한(간결요약), 이미지 첨부 가능 기능
     - 답변에 추천을 많이 받을수록 회원 등급 상승(?)기능
     - 개인 기록을 한눈에 (차후 면접 등 준비할 때 볼 수 있도록) 마이페이지 기능
     - 약간 raw한 기록이므로 private/public 돌릴 수 있는 기능?
     - 기록 위한 짦은 템플릿 제공?
     - 어떤 프로젝트/ 어떤 그룹 세팅 그것도 고려
   - 단점: 이미 자잘한 문제 해결 방법은 stack overflow 검색 기능을 사용하여 해결 가능함, 이런 개인적인 기록은 blog등을 사용할 수 있음
   - 의의: 내 ts 기록이 다른사람에게 도움이 될 수 있음, 프로젝트를 할때 raw하게 기록을 남겨두는 메모지 역할을 할 수 있음
2. SNS형(피드 형식) 게시판
   - 무엇을? (아직 생각 중)
3. (1)을 단순화한 QnA 게시판

   23.01.03 작성
   23.01.05 수정
