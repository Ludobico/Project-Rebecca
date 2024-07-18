![ezgif com-gif-maker](https://user-images.githubusercontent.com/89598307/214995422-25dc64a7-27db-41fa-a002-20764c202847.gif)



# PROJECT-REBECCA
* [demo](https://web-project-rebecca-1jx7m2glddtwie5.gksl2.cloudtype.app/)
* `React` 및 `Three.js`로 사이버펑크 엣지러너 스타일의 사이트를 만들었습니다.
* 접속이 되지않는다면 **chrome 업데이트** , 혹은 **그래픽카드 업그레이드**를 해주세요

## Libraries
사용한 라이브러리는 아래와 같습니다.

* `Three` : WebGL기반 3D 그래픽 구현 라이브러리
* `Three-fiber` : Three 라이브러리의 리액트 버전
* `Three-drei` : Three-fiber 에서 제공하는 기능을 더 쉬운 코드로 제공하는 라이브러리
* `postprocessing` : 화면 후처리 효과
* `react-reveal` : 텍스트 처리
* `r3f-perf` : r3f(react three fiber) 에서 메모리와 fps를 확인하기 위한 라이브러리

## Reference
https://threejs.org/manual/ : Three.js 공식 매뉴얼입니다.

https://github.com/pmndrs/drei : Three-deri 깃허브입니다.

https://pmndrs.github.io/postprocessing/public/docs/ : postprocessing 의 설명과 함수에 대해 자세히 적힌 사이트입니다.

https://www.youtube.com/@designbase : Three.js의 기초적인 개념(geometry, material, 카메라, 광원, 렌더링) 을 설명해주는 한국어 유튜브입니다.

https://www.youtube.com/@DesignCourse/featured : Three.js의 심화과정(파티클, 쉐이더, 버퍼 등) 을 설명해주는 유튜브입니다.

## How to run locally
파일을 다운받은 뒤 파일의 경로로 `cmd` 프롬프트를 여신뒤 아래의 명령어를 실행합니다.
```
yarn install
or
npm i
```

```
yarn start
or
npm start
```

## PostProcessing
화면 후처리 효과에 대한 설명으로는 [공식 사이트 설명](https://pmndrs.github.io/postprocessing/public/docs/) 이나 [Project_Rebecca_PostProcessing](https://github.com/Ludobico/Project_Rebecca/issues/2) 를 참고해주세요.
