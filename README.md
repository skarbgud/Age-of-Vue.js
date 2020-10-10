# vue-advanced

# CLI 2.x vs CLI 3.x
* 명령어
  - 2.x : vue init '프로젝트 템플릿 이름' '파일 위치'
  - 3.x : vue craete '프로젝트 이름'

* 웹팩 설정 파일
   - 2.x : 노출 O
   - 3.x : 노출 X

* 프로젝트 구성
   - 2.x : 깃헙의 템플릿 다운로드
   - 3.x : 플러그인 기반으로 기능 추가

* ES6 이해도
   - 2.x : 필요 X
   - 3.x : 필요 O

* [데이터 호출 시점]
1. 라우터 네비게이션 가드
   - 특정 URL로 접근하기 전의 동작을 정의하는 속성(함수)
2. 컴포넌트 라이프 사이클 훅 <br>
   - created : (컴포넌트가 생성)되자마자 호출되는 로직

* Async & Await
   - 어싱크 어웨이트는 Javascript 비동기 처리 패틴의 최신 문법.
   - Promise와 Callback에서 주는 단점들을 해결하고 자바스크립트의 비동기적 사고 방식에서 벗어나 동기적(절차적)으로 코드를 작성할 수 있게 도와준다.

* 라이브러리 모듈화
   - 이유 : Vue.js 관련 라이브러리가 없을 때 일반 라이브러리를 결합할 수 있어야 함
   - 종류
      1. 차트
      2. 데이트 피커
      3. 테이블
      4. 스피너
   - 사용
      1. 차트 라이브러리 NPM 설치
      2. 설치된 라이브러리를 import로 App.vue에서 로딩
      3. mounted() 라이프 사이클 훅에서 차트를 그림