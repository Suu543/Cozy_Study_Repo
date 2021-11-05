# JavaScript 101 Part - 07

<img src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=937&q=80" />

#### **함수(Function)란** 무엇일까?

같은 코드를 계속 쓰지 않음으로써 프로그램의 용량을 줄이고, 다른 부분이나 다른 프로그램에서 같은 코드를 사용할 수 있도록 하는 특정 동작을 수행하는 일정 코드 부분을 의미한다.

#### 그래서 함수는 무엇인가?

요리를 해본 적이 있는가? 

우리는 대게 요리를 하기 전 하고 싶은 요리를 정하고, 그 요리에 대한 레시피를 찾아본다. 이 과정을 순서대로 표현하면,

1. 만들고자 하는 요리를 선정한다.
2. 만들고자 하는 요리에 관한 레시피를 검색한다.
3. 찾은 레시피에 기재된 재료를 준비한다.
4. 레시피에 명시된 순서(절차)에 따라 요리한다.

위 방식으로 요리를 하면, 그럭저럭 원하는 맛이 나올 것이다. 또한 반복해서 요리를 하다 보면 우리는 이 조리법에 숙달될 것이고, 결국에는 이것을 외우거나, 더 나아가 응용할 수 있는 단계에 도달한다.

여기서 조리법을 외웠다는 것은 절차를 외웠다는 것을 의미한다. 요리에 있어 절차는 매우 중요하다. 만약 물을 끓이지 않고 스프를 먼저 붓는다면 원하는 요리를 만들지 못할 것이다.

위처럼 요리 레시피와 프로그래밍의 함수는 공통점이 있다.

1. **재사용성 (레시피)**

- 레시피의 절차를 잘 따라만 해도 이전에 만든 것과 똑같은 맛을 보장할 수 있다. 쉽게 말해서, 어떤 값이 나올지 명확이 예측할 수 있는 프로그래밍의 함수와 동일한 기능을 가지고 있다. 

2. **인자(Argument)와 리턴(Return) (요리를 만드는데 반드시 필요한 재료)**

- 레시피는 특정한 재료를 넣어 특정한 요리를 만든다. 동일한 논리로 프로그래밍의 함수 또한 특정한 값 (인자)를 받아 특정한 결과 값을 출력할 수 있다.



### 샌드위치를 만드는 레시피를 프로그래밍 함수로 옮겨보자

![img](https://www.codeanalogies.com/img/funcblog/codeblock1.png)

1. **function**는 함수를 선언함을 의미한다. (**JS Engine**: 아하 함수구나!)

2. **makeSandWich**는 선언한 함수의 이름을 명시한다. (**JS Engine**: 아하 선언한 함수의 이름이 makeSandWich 구나!)

3. 함수명 옆에 있는 **( )** 는 이 함수를 실행하는데 필요한 값을 받는 역할을 한다. **인자(Parameters)**라 칭한다.

4. **{ }**를 한 이유는 함수는 특정 동작을 하기 때문에 **Local Scope**을 가져야한다.
5. 내부 로직을 실행한다.

6. **return**이 실행된다. 이는 이 함수가 계산을 모두 끝내고 최종적으로 산출한 값을 리턴하고 동시에 이 함수가 종료됨을 의미한다.

```javascript
function makeSandwich(ham, cabbage, bread) {
    let sandwich = ham + cabbage + bread;
    return sandwich;
}

makeSandwich('스팸', '한국산 양상추', '곡물빵');
makeSandwich('꽃등심', '중국산 양상추', '호밀빵');
```

**makeSandwich** 함수는 사용자로 부터 받은 재료를 이용해 내부 로직에 의해 샌드위치를 만들어준다. 

# 1. Function Declaration (함수 선언)

```javascript
// param1, param2 대신에 다른 어떤 이름을 사용해도 문제가 되지 않는다.
function name (param1, param2) {
    // body ...
    
    // 함수의 종료를 의미하고 동시에 원한다면 특정 값과 함께 함수를 종료할 수 있다.
    return;
}
```

`함수(Function)`는 크게 네 종류로 분류된다.

1. **Function Name** (함수의 이름)
2. **Function Parameters** (함수의 인자)
3. **Function Body** (함수의 바디)
4. **Function Return Value** (함수의 리턴값)

**요약**: `**함수(Function)**`라는 키워드를 이용해 함수명을 작성하고, **param (n)**을 이용해 인자를 나열하고, `Body`부분에 기본적인 함수 로직을 작성하고, 최종적으로 연산이 끝난 값을 **return**해준다.

프로그래머들 사이에서 통용적으로 하나의 **함수는 하나의 작업만을 수행하도록 만들어야 한다**. 또한 함수명을 작성할 때는 명사 대신에, **동사 + 명사 조합**을 이용해야 한다. 그 이유는 함수는 특정한 사람의 이름 등을 명시하는 변수명과 달리 어떤 동적인 동작을 수행하기 때문이다.

##### 함수명 예시

```javascript
// 카드를 생성하는 기능을 하는 함수
function createCard() {
    // body...
    
    return;
}
```

## 2. Call a function in JavaScript

**함수(Function)**를 호출하는 방법에 대해 알아보자 (정의한 함수를 사용하는 방법)

**함수(Function)**를 호출할 때는 함수에 필요한 인자 값을 **함수(Function)** 정의에 따라 ( ) 내부에 입력하면 된다. 

특정 인자를 넣었을 때 함수가 리턴하는 값을 변수에 저장하고 싶은 경우 **함수(Function)** 호출 후 그것을 변수에 할당하면 된다.

```javascript
function createCard(name, age) {
    const card = (`Your card: 
	------------------------
	|   name: ${name}      |
    ------------------------
    |   age:  ${age}       |
    ------------------------
	`);
    
    return card;
}

// (인자1, 인자2) ===> (name, age)
const yongsuCard = createCard('Yongsu', 25);
console.log(yongsuCard);

```



## Parameter vs Argument

**함수(Function)**에 관한 정보를 검색하다 보면 자주 두 단어가 등장한다. 번역시 혼동을 방지하기 위해 간단하게 둘은 어떻게 다른지 알아보자.

| 단어      | 번역           | 의미                                 |
| :-------- | :------------- | :----------------------------------- |
| Parameter | 매개변수       | 함수와 메서드 입력 변수(Variable) 명 |
| Argument  | 전달인자, 인자 | 함수와 메서드의 입력 값(Value)       |

```javascript
const num1 = 2;
const num2 = 3;

// a, b와 같이 함수를 정의할 때 값을 받기 위한 목적으로 정의한 이름을 Parameters (매개변수)라 칭한다
function addTwoNums(a, b) {
    return a + b;
}

// addTwoNums 함수를 실행하기 위해 전달한 값 num1과 num2를 Arguments (인자)라 칭한다.
addTwoNums(num1, num2);
```



# 3. Function is an object in JavaScript

`JavaScript`에서 함수는 `Object(객체)`로 간주된다. 다음 세 가지 특징을 가진다.

1. `function(함수)`는 변수에 할당이 가능하다
2. `function(함수)`는 인자로 전달이 가능하다
3. `function(함수)`는 리턴 값으로 사용될 수 있다

(함수는 object(객체)로 간주된다는 것만 알아두자! 뒤에서 자세히 다룰 것이다)

#### 쓸모가 크게 없는 함수

```javascript
function printHello() {
    console.log('Hello World')
}
```

`printHello`함수는 쓸모가 크게 없는 함수다. 왜냐하면 항상 "Hello World"만을 출력하기 때문이다.

`function(함수)`의 쓸모는 인자 값이 존재할 때 빛을 발한다.

#### 쓸모 있는 함수

```javascript
function printMessage(message) {
    console.log(message);
}

printMessage('Hello World');
```

`printMessage`함수는 message라는 인자 값을 입력받으면, 그것을 출력해 주는 기능을 한다. 눈여겨볼 점은 앞서 말한 함수를 구성하는 요소 중 마지막 요소인 `return`이 빠진 것을 확인할 수 있다. 위와 같이 `return`값을 생략한 경우 다음과 같이 내부적으로 간주된다 생각할 수 있다.

```javascript
function printMessage(message) {
    console.log(message);
    
    return undefined;
}

printMessage('Hello World');
```

`JavaScript`의 치명적인 단점이 하나 있다. `printMessage`함수가 받는 인자 값은 문자여야 한다. 하지만, 숫자를 인자 값으로 전달해도 문자로 인식한다. `Brenden`이 대충 만들어서 이런 상황이 발생한다. 하지만 이러한 문제를 보완해 주기 위해 `TypeScript`를 사용할 수 있다 (나중에 `JavaScript`가 익숙해졌을 때 공부하면 좋은 것). `TypeScript`는 다음과 같이 코드를 작성할 수 있다.

```typescript
// 인자 string, 리턴값 string
function printMessage(message: string): number {
    console.log(message);
    
    return 0;
}
```

*https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAGzgcwBQFsCmBnPAQzRwC5E8oAnGMNASkQG8AoRdxCBPOZHAOlSZcBYjnosAvkA*

# 4. Parameters

- Primitive Parameters: **Passed by Value**
- Object Parameters**: Passed by Reference**

`Parameters(인자)`는 한 함수가 특정 연산 및 동작을 수행할 때 사용할 수 있는 값을 함수 사용자로부터 받기 위해 사용하는 것이다.

```javascript
function changeName(obj) {
    obj.name = 'sususu'
}

// su에는 참조값(Reference)가 할당되어 있다.
const su = { 
	name: 'su',
    age: 25
}

// 다음과 같이 changeName 함수에 su 객체를 인자값으로 주게되면
changeName(su);

// changeName 함수의 obj는 su가 참조하고 있는 객체와 주소와 똑같은 것이된다.
// 그러므로 obj.name = 'sususu'하면
// name: 'sususu'로 변경되는 것을 확인할 수 있다.
```

changeName 함수의 인자 obj는 변수 su가 참조하고 있는 객체의 주소와 똑같은 주소를 참조하게 된다. 결과적으로 `obj.name = 'sususu'`로 변경하게되면, `name: 'sususu'`로 변경되는 것을 확인할 수 있다. 이러한 동작이 가능한 이유는 `JavaScript`에서 `객체(object)`는 `Passed by Reference`방식으로 동작하기 때문이다.

# 4 - 1. Default Parameters (Added in ES6)

`Default Parameters`는 어떠한 값도 주지 않았을 때 값이 `undefined`이 되면 안 되는 경우를 방지하기 위해 사용한다. `Default Parameters`는 `ES6`에서 추가된 것인데 이것이 추가되기 전을 먼저 알아보고, 이것을 사용해보자

```javascript
// Before Default Parameters
function showMessage(message, from) {
    if (from === undefined) {
        from = "unknown";     
    }
    
    console.log(`${message} by ${from}`);
}
```

`Default Parameters`가 추가되기 전에는 위와 같이 `if 문`을 이용해 예외 처리를 해줘야 했다.

```javascript
// After Default Parameters
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`)
}

// 함수 호출시, 두번째 인자를 빼고 호출한다면, from에 기본값으로 unknown이 할당된다.
showMessage('Hello');

```

# 4 - 2. Rest Parameters (Added in ES6)

`Rest Parameters`는 다수의 인자를 `배열(Array)` 방식으로 용이하게 처리하기 위한 목적으로 `ES6`에 추가되었다.

```javascript
// Rest Parameters ==> ...args
function printArgs(...args) {
    console.log(args);
}

function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i])
    }
    
    for (const arg of args) {
        console.log(arg);
    }
    
    args.forEach((arg) => console.log(arg));
}

printArgs("Hello", "World", "Beautiful");
printAll("Hello", "World", "Beautiful");
```

# 4 - 3. Local Scope in Function

`Local Scope`은 앞서 다뤘던 내용의 로직이 동일하게 함수에도 적용된다.

`Local Scope`과 `Global Scope`은 TV 형사 드라마에 나오는 취조실 거울을 생각하면 이해가 쉽다.

밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다. (Block { } 을 기준으로)

```javascript
let globalMessage = 'global'; // Global Variable

function printMessage () {
    let message = 'hello';
    console.log(message); // Local Variable
    console.log(globalMessage); // Global Variable
    
    // 함수안에 또 다른 함수를 선언하면
    // 똑같은 범위 로직이 적용된다
    function printAnother() {
        let childMessage = 'HelloWorld';
        console.log(message);
    }
    
    // 에러발생
    console.log(childMessage);
}

// 에러발생
console.log(message);
console.log(childMessage);
```

위 코드의 예시처럼 함수안에 다른 함수를 정의하게 되면 (편의상 함수안의 함수를 자식 함수라 부르겠다) 자식함수는 부모 함수의 모든 것에 접근이 가능하지만, 부모 함수는 자식 함수에 대한 접근이 불가능하다. 오직 할 수 있는 것은 자식 함수를 실행시키는 것 밖에 없다. 

# 5. Return a Value in Function

`Function(함수)`가 어떤 `인자 값`을 `input`으로 받고 이것에 대한 내부적 로직을 실행 후 `결과값(Output)`을 출력해야 한다. 이 출력의 역할을 해주는 것이 `return`이다.

1. `Return`은 결과를 출력해 주는 역할을 한다.
2. `Return`은 함수를 종료해 주는 역할을 한다.

```javascript
function sum(a, b) {
    return a + b;
}
```

위 `sum`함수는 인자로 받은 `a, b`의 합을 `결과값(Output)`으로 리턴해주는 역할을 한다.

##### Return을 이용한 함수 종료의 좋은 예와 나쁜 예

**나쁜 예**

아래 코드를 보면 `user.point`가 10보다 크면 로직을 실행한다. 하지만 이것은 비효율적인 방식이다. 왜냐하면 조건이 맞을 때만 특정 로직을 수행하기 때문이다.

```javascript
function upgradeUser(user) {
    if (user.point > 10) {
      // Logic
    }
}
```

**좋은 예**

조건이 맞지 않으면 `Return`을 이용해 바로 함수를 종료하고, 그렇지 않으면 특정 로직을 수행한다.

```javascript
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    
    // Logic
}
```

## Practice #1

**상황:** 

파스타 가게를 운영하고 있다. 손님 주문이 들어오면, 물, 냄비, 면 종류만 입력하면 자동으로 면을 조리하는 프로그램을 만들고 싶다. 함수를 이용해 이 가게의 면 조리를 자동화해보자.

**필요한 값:**

- water
- pasta
- pot

**조건**:

- 변수에 `cookPasta`함수가 리턴하는 값을 담아 `console.log`를 이용해 결과를 출력하세요

**출력 값** 

```javascript
`물양 100g에 xx 종류의 파스타 면을, 120L 크기의 냄비에서 조리를 끝냈습니다.`
```

```javascript
function cookPasta(water, pasta, pot) {
	const result = `물양 ${water}에  ${pasta} 종류의 파스타 면을, ${pot} 크기의 냄비에서 조리를 끝냈습니다.`;
    return result;
}
```

![img](https://www.codeanalogies.com/img/funcblog/funcdiagram.png)

## Practice #2

앞서 본 샌드위치를 만들어 주는 함수를 조금 더 정교하게 만들어보자.

**상황:**

앞서 생성한 함수를 이용해서 샌드위치를 만드는데, 우리 가게의 샌드위치 기계는 정해진 **ham, cabbage, bread**가 아니면 조리가 불가하다. 우리가 취급하는 종류의 ham, cabbage, bread가 아닌 경우 우리가 취급하는 종류의 **ham, cabbage, bread** 값을 고객에게 출력해 주고 함수를 종료해 주세요.

```javascript
const hamList = ['스팸', '꽃등심', '돼지목살', '돼지갈비', "삼겹살", "곱창", "막창"];
const cabbageList = ['한국산 양상추', '중국산 양상추', '일본산 양상추', '미국산 양상추'];
const breadlist =['곡물빵', '호밀빵', "우유식빵", "옥수수식빵"];

// .includes 함수는 배열(Array)에 특정 요소가 존재하면 true를 리턴하고 그렇지 않다면 false를 리턴한다

function makeSandwich(ham, cabbage, bread) {
    if (!hamList.includes(ham)) {
        console.log(`
        고객님이 제공한 햄으로는 샌드위치를 만들 수 없습니다. 
        다음 햄리스트에 있는 햄 중에 하나를 선택해서 재요청 부탁드리겠습니다.
        ${hamList}
		`);
     	return; 
    }
    
    if (!cabbageList.includes(cabbage)) {
        console.log(`
        고객님이 제공한 양배추으로는 샌드위치를 만들 수 없습니다. 
        다음 양배추리스트에 있는 양배추 중에 하나를 선택해서 재요청 부탁드리겠습니다.
        ${cabbageList}
		`);
     	return;         
    }
    
    if (!breadlist.includes(bread)) {
        console.log(`
        고객님이 제공한 빵으로는 샌드위치를 만들 수 없습니다. 
        다음 빵리스트에 있는 빵 중에 하나를 선택해서 재요청 부탁드리겠습니다.
        ${breadlist}
		`);
     	return;         
    }
    
    let sandwich = ham + cabbage + bread;
    return sandwich;
}
```



![img](https://www.codeanalogies.com/img/funcblog/makeSandwichDiag.png)

# 6. Advanced JavaScript Function

##### Function Expression

1. `Function(함수)`는 `First Class Citizen`이다.
2. `Function(함수)`는 마치 변수의 값처럼 다뤄진다.
3. `Function(함수)`는 마치 변수의 값처럼 할당할 수 있다.
4. `Function(함수)`는 다른 함수의 인자로 사용할 수 있다.
5. `Function(함수)`는 다른 함수의 리턴 값으로 사용될 수 있다.



`Function(함수)`를 정의할 때 이름이 없는 경우가 있다. 이런 `Function(함수)`를 `익명 함수(Anonymous Function)` 이라 칭한다. 

#### Anonymous Function VS Named Function

```javascript
// Case 1 - Anonymous Function
const print = function() {
    console.log('This is an example of anonymous function');
}

print();

// Case 2 - Named Function
// 물론 이름있는 함수를 변수에 할당할 수 있다
const print = function doSomething() {
    console.log('Do Something...');
}
```

위의 두 경우 모두 `Function Expression` 방식으로 함수가 정의되었다. 하지만 차이가 존재한다. 첫 번째는 이름이 없는 `익명 함수(Anonymous Function)`이고 다른 하나는 이름이 있는 `Named Function`이다. 

`Named Function`은 `Anonymous Function`과 달리 재귀 (피보나치수열 등)에 유용하게 사용할 수 있다는 점이다.

```javascript
// 재귀는 한 함수가 리턴값으로 자기 자신을 호출하는 것을 의미한다.
const test = function doRecursion() {
    console.log("I am currently on the recursion state");
    doRecursion();
}
```

## 6-1. Function Declaration vs Function Expression

#### Function Declaration

```javascript
doFuncDeclaration();

function doFuncDeclaration() {
    console.log("This is a function declaration");
}

doFuncDeclaration(); // 오류 미출력
```

위와 같은 방식으로 함수를 정의하는 형태를 보고 `Function Declaration`이라 칭한다.

#### Function Expression

```javascript
firstCase(); // 오류 출력 

const firstCase = function doExpression () {
    console.log("This is a function expression");
}

firstCase();

const secondCase = function () {
    console.log("This is a function expression");
}

secondCase();
```

두 `Function(함수)` 정의 방식의 차이가 보이는가?

`Function Declaration` 방식의 경우 `Function(함수)`가 정의되기 전에 실행이 가능하다, 반면에

`Function Expression` 방식의 경우 `Function(함수)`가 정의되기 전에 실행이 불가능하다.

`Function Declaration`은 정의되기 전에 실행이 가능한 이유는 `JS 엔진이` `Function(함수)`를  코드 최상단으로 올려주는 (`var`에서 확인할 수 있는) `Hoisting`의 방식으로 동작하기 때문이다. 그래서 결과적으로 `Function(함수)` 정의보다 먼저 호출이 가능하다!

##### Function(함수)를 변수에 할당해보자

1. 변수에 `함수`를 할당 - `Case1`
2. 변수에 `함수`의 리턴 값을 할당 - `Case2`
3. `Function(함수)`의 인자 값으로 `Function(함수)`를 받는 경우 - `Case3`
4. `Function(함수)`의 리턴 값으로 `Function(함수)`를 리턴하는 경우 - `Case4`

```javascript
function print() {
    console.log("Test Case...");
}

// Case1
const printAgain = print;
printAgain();

function print() {
    return "Hello World";
}

// Case2
// 함수의 리턴값을 변수에 할당하고 싶은 경우 함수를 실행한 것을 변수에 할당한다.
const printResult = print();
console.log(printResult);

// Case3
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function() {
    console.log('Yes!');
}

const printNo = function() {
    console.log('No!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Case4
function fib(n) {
  if (n < 2){
    return n
  }
    
  return fib(n - 1) + fib (n - 2)
}
```

## Arrow Function

기존의 `Function(함수)` 정의 방식을 간결하게 만들어주는 방식이다. 이 `Function(함수)`는 항상 `익명 함수 (Anonymous Function)` 형태를 가진다.

```javascript
// 기존 함수 정의 방식
const simplePrint = function() {
    console.log('This is a simple print');
};

// Arrow 함수 정의 방식
const simplePrint = () => console.log('This is a simple print');

// 기존 함수 정의 방식
const add = function (a, b) {
    return a + b;
}

// Arrow 함수 정의 방식
const add = (a, b) => a + b;
```

`Arrow Function`에도 `Block`을 사용할 수 있다. 단, 이때는 `return` 키워드를 작성해야 한다.

```javascript
const simplyMultiply = (a, b) => {
    return a * b;
}

const simplyAdd = (a, b) => {
    return a + b;
}
```

#### IIFE: Immediately Invoked Function Expression

`IIFE`는 즉시 실행 함수를 의미한다. 이것은 `함수(Function)`를 선언함과 동시에 호출하고 싶은 경우에 사용한다.

```javascript
(function hello() {
    console.log('IIFE');
})();
```

## Summary

```javascript
// function 예약어와 함께 이름을 붙인 경우 
function doStuff() {};

// function 이름이 생략된 경우
const doStuff = function() {};

// Arrow Function
const doStuff = () => {};

// Hoisting
// Hoisting은 코드의 최상단에서 함수와 변수의 이용성을 의미한다. 이러한 함수들은 컴파일 시간에 초기화 되어 이 파일의 어디서든지 접근이 가능하다.

//  Function declaration은 Hoisting이 발생하지만, function expression은 그렇지 않다.
// 아래 코드는 오류를 발생시키지 않는다
doStuff();
function doStuff() {};

// 아래 코드는 오류를 발생시킨다
doStuff();
const doStuff = () => {};

// 언제 function expression을 사용해야하는가?
Function Expression은 Avoid Polluting the global scope의 목적으로 사용한다. 하나의 프로그램이 다수의 다른 함수를 인지하고 있는 것 대신에, 이것을 익명으로 만들어 사용되고 바로 사라지게 하기 위한 목적이다.

// In short, use function declarations when you want to create a function on the global scope and make it available throughout your code. Use function expressions to limit where the function is available, keep your global scope light, and maintain clean syntax.
```



## Quiz

```javascript
// function calculate(command, a, b)
// command: add, substract, multiply, divide, remainder
```















