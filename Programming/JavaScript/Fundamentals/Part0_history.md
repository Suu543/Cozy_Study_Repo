# 브라우저의 역사

<img src="https://cdn-images-1.medium.com/max/900/1*LQ_0mxVJ1ZcjqQXD-C3lhQ.png" />

집집마다 컴퓨터가 없던 시절, 컴퓨터를 잘 모르는 사람도 쉽게 사용할 수 있는 `Mosaic Web Browser` 가 세상에 나왔다. 이 사람은 대학을 졸업하자마자 `Netscape`라는 회사를 설립한다. 

![img](https://cdn-images-1.medium.com/max/900/1*uqFQl7apfZ7nS2jSGk0yZg.png)

`Mosaic`에 추가로 `UI`요소를 추가해 `Netscape Navigator`를 발표한다. 이것을 이용해 간단히 `HTML, CSS`를 이용해 웹 사이트를 만들 수 있었다. 이대 `Netscape Naviagtor`는 시장의 80%를 차지했다. 그러다가 `Marc Andressen`은 어떻게 하면 동적인 웹사이트를 만들 수 있을까 고민했다. 정적인 웹사이트를 벗어나 사용자들이 조금 더 다이나믹하게 사용할 수 있는 페이지를 위해 `Scripting`언어를 추가하기로 했다.

![img](https://cdn-images-1.medium.com/max/900/1*0Jf24PCvWvakckz1ewkgZQ.png)

처음 `Scripting`언어의 대안으로 `Java`를 생각했지만, 웹 사이트를 주로 개발하는 개발자들이 쓰기에는 다소 무겁고 어려워 다른 대안을 물색했다. 이후 `Brenden Eich`를 고용해 `Scheme Script`를 조금 변경했다. 기존의 `Schema Script` 컨셉을 유지하면서 문법을 조금 더 `Java`처럼 만들자는 계획을 세웠다. 

![img](https://cdn-images-1.medium.com/max/900/1*ZeQRKj1ols1vbjuExxxQzQ.png)

`Brendan`에게 주어진 기간은 10일이였고. 1994년 9월에 `LiveScript`가 개발되었고, `Netscape Navigator`내부에는 `LiveScript`를 이애할 수 있는 `LiveScript Interpreter`가 포함된 브라우저를 출시했다. 이 말은 이 언어를 이용해 웹사이트를 개발하면 `Netscape Navigator`가 이것을 이해하고 개발자가 원하는 방식으로 화면을 그려주었다.

![img](https://cdn-images-1.medium.com/max/900/1*H7onUEegbRuWwr1F6ZOadQ.png)

당시 `Java`의 인기가 치솟고 있었는데, 어떻게 하면 이 흐름을 탈수 있을까 생각했고, 그 대안이 바로 `LiveScript`를 `JavaScript`이라는 이름으로 변경하는 것이였다.

![img](https://cdn-images-1.medium.com/max/900/1*SHLI3mKNDFDSb-cHpxc5wA.png)

이후 1995년에 공식적으로 `Netscape Navigator`에 `JavaScript Interpreter`가 포함되어 나왔다.

![img](https://cdn-images-1.medium.com/max/900/1*JJynsHANI_Mtp15V1DLDxg.png)

![img](https://cdn-images-1.medium.com/max/900/1*JO6wTdp-6D_o9sZl7tg9BQ.png)

`Netscape`의 성공 사례를 목격하고 `Browser`의 잠재성을 확인한 마이크로소프트는 `Netscape`에 출시한 브라우저를 `Reverse Engineering` (프로그램의 이진코드를 분석해 소스 코드를 복원해내는 과정)을 이용해 자시만의 언어인 `JSCRIPT`를 개발했다. 이때 개발자들의 고통의 시발점이 발생했다. 웹 개발자들은 여러 브라우저에 다 동작하는 웹 사이트를 만들어야했다. 

![img](https://cdn-images-1.medium.com/max/900/1*kcYLvuH92fTV4p6dgVboUg.png)

![img](https://cdn-images-1.medium.com/max/900/1*3JM3TN0wTRJZsHa9L86bHQ.png)

`Netscape`는 `ECMA International`을 찾아가 우리가 `JavaScript`를 만들었는데 이것으로 표준안을 만들자고 제안한다. 그래서 첫번째 `ECMAScript1`이 시장에 출시되게된다. 이것이 바로 브라우저에서 동작하는 언어를 만들 때 그리고 그 언어를 이해할 수 있는 엔진에 사용되는 `Scripting`언어의 문법적인 사항을 잘 정리한 문서다. 그 이후 새로운 버전이 계속 추가되었다.

![img](https://cdn-images-1.medium.com/max/900/1*hCJGiaWnl16XRImpBlGSqQ.png)

`ECMAScript`를 제정하는 가운데 `Internet Explorer`의 점유율이 95%를 넘었다. 이렇게 큰 시장 점유율을 확보한 `MS`는 조금씩 건방져지기 시작했다. 우리가 개발자들은 쉽게 하기위해 `Script`를 만들었는데, 클래스를 추가하면 더 이상 쉬운 `Script`언어가 아니다. 우리는 신경쓰지 않겠다 선언한다. 이때 `MS`는 우리가 점유율이 높으니까 우리가 표준이라 주장한다. 결과적으로 `ECMAScript` 표준한 편찬히 점점 느려지기 시작한다.

![img](https://cdn-images-1.medium.com/max/900/1*hCJGiaWnl16XRImpBlGSqQ.png)

![img](https://cdn-images-1.medium.com/max/900/1*3Je8RdAnmEFNlVLRN55hzQ.png)

4년뒤 2004년 `Mozilla` 사에서 `Firefox` 브라우저를 출시한다. `Mozilla`는 `ECMAScript`를 찾아가 우리에게 `ActionScript3`이라는 언어가 있는데 이를 실행시킬 수 있는 `Tamarin`이라는 엔진을 가지고 다시 표준안을 검토해보자 제시한다. 이것은 기존의 브라우저에 사용되는 `JSCRIPT`와 `JavaScript`와 너무 다르기 때문에 이걸로 다시 표준안을 진행하기에는 무리가 있었다. 그래서 이 표준안을 두고 위 세개의 회사가 치열하게 경쟁했고, 그래서 불쌍한 개발자들 시장에 존재하는 다양한 브라우저에서 동작하도록 웹사이트를 만들어야했다.

![img](https://cdn-images-1.medium.com/max/900/1*QtreuW-bpWXPkg6XrUNLOA.png)

![img](https://cdn-images-1.medium.com/max/900/1*3Je8RdAnmEFNlVLRN55hzQ.png)

2004는 `Jesse James Garrett`는 하얀 종이를 제출한다. 이 종이에는 `AJAX`라는 기술이 적혀있는데 이것은 AJAX(Asynchronous JavaScript and XML) 비동기적으로 데이터를 서버에서 받아오고 처리할 수 있도록 도와주는 획기적이 AJAX가 도입되었다. 이것에도 불구하고 3사의 경쟁은 치열하게 벌어지고 있었다.

![img](https://cdn-images-1.medium.com/max/900/1*1GfIjuUZY2pnNbceixdkKw.png)

![img](https://cdn-images-1.medium.com/max/900/1*5Xu1Srwb_LjgfeB7U1XLUg.png)

이렇게 웹 시장이 증가하고 수요가 많아지면서 웹 개발자들 사이에서 획기적인 커뮤니티가 형성되고 이때 비로소 Jquery, dojo, 등의 라이브러리 들이 많이 나오기 시작한다. 해결하고자 하는 공통된 문제는 딱 하나, 개발자들이 더 이상 다른 브라우저의 구현사항을 신경쓰지 않게 만드는 것이다. 우리가 제공하는 함수만 호출하면 알아서 다른 브라우저에서 다 동작하게 해줄께. 이 중 Jquery가 가장 큰 사랑을 받게 되었다. 

![img](https://cdn-images-1.medium.com/max/900/1*0_aEc1aXd3fz9zFx8NKYdw.png)

이런 진취적인 변화에도 웹 개발의 트렌드를 통째로 바꾸는 사건이 하나 있었다. 그것은 바로 2008년도의 구글에서 출시한 Chrome Browser다. 여기에는 (Chrome Browser)에는 JIT라는 아주 강력한 엔진이 포함되어있다. 이것은 JavaScript를 실행하는 속도가 엄청빠른 강력한 엔진이 포함된 브라우저다. 

![img](https://cdn-images-1.medium.com/max/900/1*gSJZPGqp6W36djZ1AB6eQg.png)

![img](https://cdn-images-1.medium.com/max/900/1*gSJZPGqp6W36djZ1AB6eQg.png)

![img](https://cdn-images-1.medium.com/max/900/1*Fniss3q10dFFe85bzwn2Ig.png)

![img](https://cdn-images-1.medium.com/max/900/1*Fniss3q10dFFe85bzwn2Ig.png)

![img](https://cdn-images-1.medium.com/max/900/1*oPzCg2oLMt7Gl0tkX1GUSA.png)

다른 브라우저는 멘붕이 왔다. 그래서 2008년 7월 모든 브라우저가 모여 표준화를 시작했다. 드디어!! 서로 도와주는 윈우니 관계가 되다. 그리하여 드디어 ECMAScript5가 세상에 등장하게된다. 지금은 표준은 ECMAScript6이다. 이제는 말할 수 있다. JavaScript은 더 이상 Script 언어가 아닌 성숙하고 잘 정착된 언어다. 그리고 모든 브라우저가 ECMAScript의 표준을 잘 따라가고 있기 때문에 더 이상 Jquery, dojo 등의 라이브러리 도구가 필요없어졌다. 결과적으로 JavaScript와 WebAPIs에서 제공하는 것 만으로 모든 브라우저에서 개발이 가능해졌다. (Vanilla JavaScript이라 부른다)

![img](https://cdn-images-1.medium.com/max/900/1*B_-Fdp9deG0wx_uDEyRvVw.png)

이제 각각의 브라우저마다 ECMAScript의 표준을 따라가는 엔진이 존재한다. 

![img](https://cdn-images-1.medium.com/max/900/1*dahYbyMHHpzuv9EPW3YOCw.png)

Chrome Browser에서 사용되는 V8 Engine은 NodeJS와 ELECTRON에서 많이 사용되는데. 2020년 Microsoft Edge도 이것을 사용하기 시작했다.

![img](https://cdn-images-1.medium.com/max/900/1*iqAgu6kPqeFrEULJnzl9KQ.png)

시장에서 다양한 사용자들은 다양한 브라우저를 사용하고 있고 모든 사용자들이 최신의 브라우저를 쓰고 있는 것은 아닐 수있다. 하지만 개발자들은 최신 버전의 ECMAScript으로 개발하고 싶기 때문에 개발시에는 최신 버전을 사용하고 배포할 때만 BABEL이라는 Transcompiler를 이용해 ECMAScript5 → ECMAScript4 로 변환된 코드를 생산해주는 코드를 생성해준다.

최근 동양

![img](https://cdn-images-1.medium.com/max/900/1*KlvH_08wwNKmWLq8jKOPbA.png)

![img](https://cdn-images-1.medium.com/max/900/1*tE47j1KB9Rr-b7Hj2rRYXQ.png)

이게 굉장히 뜨고 있다. 즉 웹사이트를 만드는 것은 더 이상 충분하지 않고 데이터를 받아와 부분적으로 업데이트 하는 것이 굉장히 유행하고 있다. 이것을 보다 더 쉽게 만들기 위해 React, Angular , Vue 등이 나오기 시작했다. 이런 Library 혹은 프레임워크를 이용해 더 쉽게 SPA를 구현할 수 있게 되었다. 브라우저에 동적인 요소를 추가하기 위해 사용됨.

![img](https://cdn-images-1.medium.com/max/900/1*C2Scl_wiZ11MlrGHfnDukg.png)

NodeJS는 V8 기반에 Backend에서 서비스를 구현할 수 있도록 만들어짐

ReactNative는 모바일

Electron — Desktop

![img](https://cdn-images-1.medium.com/max/900/1*YzXE84aFnAEObOyXi_F_Cg.png)

![img](https://cdn-images-1.medium.com/max/900/1*oIL4H1hy9k_ZpXo6FwPp2Q.png)

이전에는 JavaScript만 웹에서 사용할 수 있었는데, 지금은 WebAssembly를 이용해Go, Python, Java, C++ 등 다양한 언어를 이용해 웹 어플리케이션을 만드는 것이 가능해졌다. C++로 만들어진 게임도 웹 브라우저에서 웹에서 동작하게 만들어 줄 수 있다. JavaScript은 가장 많이 사용되는 기술로 1위를 차지하고 있다.