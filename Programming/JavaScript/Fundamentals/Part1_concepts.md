# JavaScript 101 - Part - 1

프로그래밍에서 가장 중요한 것은 무엇일까?

- 입력 - 사용자에게 데이터를 입력받고
- 연산 - 입력받은 데이터를 잘 처리해 연산하고
- 출력 - 연산된 데이터를 알맞은 형식으로 사용자에게 출력한다.

연산을 하면서 `cpu`에 최적화된 연산 작성과, 메모리 사용의 최소화도 중요하다.



변수(Variable)는 무엇일까?

마트에 장을 보러 가면 수많은 냉장고가 있는 것을 확인할 수 있다. 냉장고는 가정에서는 다양한 식재료를 보관할 수 있는 용도로 사용된다. 하지만 마트에서는 각 코너마다 특정 식재료를 분류해 담아 판매하는데 사용한다. 

변수는 냉장고라고 생각할 수 있다. 어떤 것이든 담을 수 있고, 담겨있는 것을 이용할 수도 있고 혹은 냉장고를 비울 수도 있다. 하지만 프로그래밍 언어마다 담을 수 있는 방식에 차이가 존재한다.

#### Static Typing vs Dynamic Typing

1. `Static Typing`은 특정 식재료만 담을 수 있는, 보관할 수 있는 냉장고다. 예를 들면, 한 번 이 냉장고에 육류만 담겠다고 결정했다면, 이 냉장고에는 채소, 해산물 등의 다른 종류의 식재료를 담을 수 없게 된다. 

이 방식의 장점은 특정 냉장고에 어떤 종류의  식재료가 담겨있는지 명확히 판단할 수 있다는 점이다. 반대로, 이 방식의 단점은 육류의 양이 적고 다른 식재료의 양이 너무 많아 냉장고가 부족했을 상황에, 이 냉장고를 대체로 활용할 수 없다는 점이다.

2. `Dynamic Typing`은 이전 혹은 지금 어떤 식재료가 냉장고에 담겨있는가와 상관없이 어떤 식재료든 보관할 수 있는 냉장고를 생각할 수 있다. 

이 방식의 장점은 식재료 보관이 쉽고, 다른 식재료를 보관하는 냉장고가 꽉 찾을 때 대안으로 이용할 수 있다는 장점이 있다. 반대로, 이 방식의 단점은 한 냉장고에 어떤 식재료가 보관되어 있는지 파악하기가 쉽지 않고, 실제로 이 방식을 식당에서 사용했다면, 주문이 들어왔을때 요리를 만드는데 긴 시간이 소요될 수 있다는 점이다.



### Dynamic Typing in JavaScript

`변수(Variable)`는 어떤 식재료를 담을 수 있는 냉장고라서 앞선 예시에서 설명했다. 이 개념을 그대로 프로그래밍에 적용한다면, `변수(Variable)` 데이터를 저장하는 통이라 생각할 수 있다.

##### 변수 선언 In JavaScript

```javascript
let test = 2;
```

위와 같이 `JavaScript`에서  `변수(Variable)`를 선언할 때 `let` 이라는 키워드를 사용한다. `let`이라는 키워드를 사용해 변수를 생성했다면, 생성한 변수에 이름을 붙여줘야한다. 그래야 나중에 변수의 이름을 통해 그 값에 접근할 수 있기 때문이다. 마치 집에서 일반 냉장고와 김치 냉장고를 구분해 부르는 것이라 생각할 수 있다. 

위 예시의 경우 변수는 `test`라는 이름을 가지고 있다. 

`=` 키워드를 이용해 `test`라는 변수에 담고자 하는 값을 할당할 수 있다. 

`;` 세미콜론의 경우 선택적인 사항이지만 작성해주는 것을 권장한다. (글을 작성할 때 사용하는 `.` 온 점의 역할이라 생각하면된다.)

**변수 선언 요약**

1. `let` 키워드를 사용해 데이터를 담는 통을 생성한다.
2. `let` 키워드 다음에 생성한 변수를 다른 변수와 구분될 수 있는 이름을 부여한다.
3. `let test` 와 같이 변수에 이름을 부여했다면, `=` 키워드를 이용해 변수에 값을 할당한다.
4. 마지막에 `;`세미콜론은 선택적 사항이지만 작성해 주는 것을 권장한다.



생성한 변수에 이름과 값 할당을 끝냈다면 출력을 통해 정상적으로 값이 할당되었는지 확인해보자.

`JavaScript`의 경우 `console.log`라는 함수(메소드)를 이용해 값을 출력할 수 있다.

```javascript
let test = 2;
console.log(2); // 2
```



여기까지 이해했다면 앞서 언급한 `Dynamic Typing in JavaScript`에 대해 알아보자. 

이 주제를 이해하기 위해서는 식재료의 종류처럼,  `JavaScript`에 어떤 데이터 타입이 존재하는지 이해해야 한다.

`JavaScript`에는 가장 작은 데이터 단위를 의미하는 `Primitive Data Type`이 크게 6가지 존재한다.

#### Primitive Data Types in JavaScript

참고: (`Primitive Data Type`을 제외하고 나머지는 모두 `Object`라 생각할 수 있다 .)

1. number
2. string
3. boolean
4. null
5. undefined
6. symbol

```javascript
// Primitive Data Types in JavaScript

// 1. Number - 숫자 (정수, 소수 등등)
let num = 1;
let num2 = 2.5;

// 2. String - 문자열
let str = 'Hello';
let str1 = "Hello World";
let str2 = "It's beautiful day!";

// 3. Boolean - 참, 거짓
let canYouRead = true;
let cannotRead = false;

// 4. Null - 값 (아무것도 의미하지 않겠다는 의미의 값)
let nothing = null;

// 5. undefined - 아무것도 의미하지 않곘다 조차 지정하지 않았음을 의미, null값과 차이를 확실히하기.
let x;
let x = undefined;

// 6. Symbol - Unique Identifiers for Objects - 나중에 자세히 다룰 예정
let symbol1 = Symbol('id');
let symbol2 = Symbol('id');
```

#### 그래서 Dynamic Typing이란 무엇인가?

```javascript
let str = 1;
str = "Hello";
console.log(str, typeof str);
str = true;
console.log(str, typeof str);
str = null;
console.log(str, typeof str);
str = undefined;
console.log(str, typeof str);

// C와 같은 프로그래밍 언어는 아래와 같이 Static Type 방식으로 동작한다.
int main {
    short a = 12; // 2 bytes
    int a = 12; // 4 bytes
    long b = 1234; // 8 bytes 
    float d = 1.2f; // 4 bytes
    double e = 8.2; // 16 bytes
    return 0;
}


// Java는 아래와 같이 숫자를 표현하는 다양한 Data Type이 존재한다.
class Main {
	public static void main(String[] args) {
        byte a = 12;
        short b = 12;
        long c = 12;
        int d = 12;
        float e = 1.2f;
        double f = 1.2;
    }  
}
    int a = 12;
    long b = 1234;
    float d = 1.2f;
    double e= 8.2f;
    return 0;
}
```

`C or Java`와 같은 프로그래밍 언어는 변수 하나를 정의할 때도 어떤 데이터 타입을 할당할 수 있고, 이 데이터 타입이 숫자라면,  들어갈 수 있는 숫자의 크기, 숫자가 소수인지 정수인지 등을 명확히 명시해 줘야 한다. 반면에 `JavaScript`은 변수에 `Primitive Data Types`이라면 어떤 데이터든지 할당할 수 있다. 이것이 바로 `Dynamic Typing`이다.

`JavaScript`은 숫자를 할당할 때 얼마나 큰 숫자를 할당할지 생각할 필요가 없다. 

왜? `JavaScript`은 동적으로 타입이 결정되기 때문이다.

### 알아두면 유용한 것들 in JavaScript

 ```javascript
// 숫자에도 약속된 숫자가 존재한다.
// 다양한 계산을 할 때 나누려고 하는 값이 0인지 혹은 숫자인지 명확히 확인하지 않으면 에러가 발생할 수 있기 때문에 아래 요소를 잘 고려해야 한다.
let infinity = 1 / 0;
let negativeInfinity = -1 / 0;
let nAn = 'Not a number' / 2; 

console.log(infinity); // Infinity
console.log(negativeInfinity); // Infinity
console.log(nAn); // NaN

// BigInt (Farely Now, Don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // Over (-2**53 ~ 2**53) 
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
console.log(`value: ${bigInt}`);

// String
let char = 'c';
let name = 'Yongsu Jeong';
let greeting = 'Hello ' + name;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
let helloName = `hi ${name}!`; // Template Literals (String)
// 구버전(No Template Literals)
console.log('Value: ' + name + ' type: ' + typeof helloName);
// 신버전(Template Literals)
console.log(`Value: ${name}, type: ${typeof helloName}`)

// Boolean - 매우 중요
// false: 0, null, undefined, NaN, '',
let canRead = true;
let test = 3 < 1; // false
console.log(`Value: ${canRead}, type: ${typeof canRead}`);
console.log(`Value: ${test}, type: ${typeof test}`);

// Null - 텅텅 비어 있는 값, 아무것도 아니라는 의미의 값
let nothing = null;
console.log(`Value: ${nothing}, type: ${typeof nothing}`);

// undefined - 아무것도 아니야라고 조차 지정하지 않은 것 저게 아무것도 아닌 걸 아는 거랑 아무것도 아닌 걸 모르는 것 천지차이다. 잘 구분해서 사용하자. (텅 비었는지, 값이 없는지)
let x;
let x = undefined;
console.log(`Value: ${x}, type: ${typeof x}`);

// Symbol, Create Unique Identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
console.log(`Value ${symbol1.description}, type: ${typeof symbol1}`);

// 변수를 선언할 때 어떤 타입인지 선언하는 반면에, JS는 프로그래밍 (Runtime)에 타입이 변경될 수 있음을 의미한다. 빠르게 테스트하는 경우에는 유용하지만, 대규모 프로젝트에는 다소 불편할 수 있다.
// 5. Dynamic Typing: Dynamically Typed Language
let text = 'hello';
console.log(`Value: ${text}, type: ${typeof text}`); hello string
text = 1;
console.log(`Value: ${text}, type: ${typeof text}`); 1 number
text = '7' + 5;
console.log(`Value ${text}, type: ${typeof text}`); // 75 String
text = '8' / '2';
console.log(`Value ${text}, type: ${typeof text}`);
 ```



# Practices

1. 변수란 무엇인가?
2. JavaScript은 Dynamic Typing인가 혹은 Static Typing인가?
3. Primitive Types in JavaScript 6가지를 설명하시오 (Symbol은 안 해도 됨)
4. Dynamic Typing이 무엇인지 설명하고, 어떤 장단점이 있는지 설명하세요. 
   - (JavaScript 언어의 Primitive Type 6가지 예와 함께 설명해야 합니다)

3. Template Literals이 무엇인지 설명하세요.
4. 데이터 타입을 확인할 때 사용하는 함수는?



















