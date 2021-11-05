# JavaScript 101 - Part - 2

프로그래밍에서 범위의 개념을 이해하는 것이 중요하다.

아파트 단지를 생각해 보자. 하나의 아파트 단지에는 다수의 가구가 거주하고 있다. 이 아파트 단지에 거주하는 사람들은 공통으로 엘레베이터, 아파트 단지 현관 비밀번호를 공유한다. 반면에 같은 아파트 단지에 살고 있음에도 서로의 집 비밀번호는 공유하지 않는다. 

`Global Scope`: 위 예시에서의 각 아파트 단지의 엘리베이터와 현관 비밀번호를 의미한다.

`Block Scope`: 위 예시에서 각 가정의 비밀번호와 가정 내부에서 일어나는 것들을 의미한다.

`Block Scope`에서 `Global Scope`으로의 접근은 가능하다. 하지만 반대는 불가능하다. 



#### 그렇다면 우리가 배우고 있는 `JavaScript`에서는 어떻게 범위를 구분할까?

`{ } (Curly Brace)` 를 이용해 범위를 구분한다. 

```javascript
// Global Scope

// Global Variable
let password = 12345;

{
    // Block Scope
    let myPassword = 45678;
    console.log(password); // 12345
    console.log(myPassword); // 45678
}

console.log(myPassword); // Uncaught ReferenceError: myPassword is not defined at ...
```

실제로는 위처럼 `{ }` 만을 사용하는 경우는 거의 없다. 대신 `if 조건문, for, while 등의 반복문, function 함수에 사용한다.` 자세한 내용은 추후에 다룰 예정이니 걱정하지 않아도 된다.

`Global Scope`에 정의된 변수는 `Global Variable`이라 칭한다. 용어는 크게 중요하지 않으니 참고만 하자.



`JavaScript` 역사에 관한 수업에서 `ECMAScript`에 대해 언급한 적이 있다. 이것은 말했듯이 웹 표준을 의미하는데, `ES5`기준으로 `JavaScript`에서 변수를 선언할 수 있는 키워드는 `let`밖에 존재하지 않는다. 그렇다면 이전에는 어떤 변수를 사용했을까?

`JavaScript`관련 자료를 찾다 보면 심심치 않게 `var`라는 키워드를 사용하는 것을 발견할 수 있다. 

`var`를 설명하기 전 하나는 명확히 기억하자, `var`는 절대 사용하지 말자.

`var`의 동작원리는 앞전에 배운 `let`과 거의 유사하다. 하지만 치명적 결함이 존재한다. 예시를 통해 확인해보자.

```javascript
// 문제점 #1
console.log(age); // undefined - age라는 변수 선언전 출력한 경우
age = 4; // 변수 선언하기 전 값 할당한 경우
var age; // 값 없이 변수 선언 한 경우

// 문제점 #2
// var는 Block Scope을 무시한다. - What the Fuxx!
{
    age = 4;
    var age;
}

console.log(age); // 4;





// let을 사용했을 때
name = 4;
let name; // Uncaught ReferenceError: Cannot access 'name' before initialization at.
```

위와 같은 문제를 `var hoisting`이라 칭한다. `hositing`의 정의는 선언을 하단에서 최상단으로 옮긴다는 의미다.  즉, 어디에 선언했는지 상관없이 항상 제일 위로 선언을 끌어올려 주는 것을 의미한다.

누군가는 자유도가 좋네 하고 생각할 수 있다. 하지만 만들고자 하는 프로그램의 규모가 커지면 그때부터 선언하지 않은 값이 할당되고, 메모리 누수가 발생하는 등 예측하지 못한 결과가 발생한다.

자세한 `hositing`은 차후에 설명할 예정이니 저런 게 있구나 정도만 알고 넘어가도 큰 문제가 없다.



## Constants (const)

`constant` 한 번 할당하면 값이 절대 변경되지 않는 것을 의미한다. `let` 키워드처럼 변수 할당에 사용할 수 있지만, `let`과 다른 점은 `const`는 재할당이 불가능하다는 점이다. 한 번 값이 할당되면 그 값에 더 이상 다른 값을 할당할 수 없게 된다. 이러한 `const`의 특성은 프로그래밍에서 크게 두 가지 이점을 가진다.

1. **Security**

- 한 번 작성한 값에 다른 해커들이 접근에 다른 값으로 변경하려는 시도가 발생 시 그것을 사전에 방지할 수 있다.

2. **Thread Safety**

- 앱이 실행되면 한 가지의 프로세스가 할당되고 이 안에는 다양한 쓰레드가 동시에 돌아가면서 앱이 효과적이고 빠르게 동작하도록 도와준다. 여러 쓰레드가 동시에 변수에 접근해 값을 변경하는 상황이 발생할 수 있는데, 이러한 방식은 프로그래밍에서 꽤나 위험한 방법으로 간주된다. 만약 내가 정의한 한 변수가 이러한 위험에 노출되었을 때 프로그램 동작에 영향을 미칠 수 있는 요소를 `const`로 정의하면 차후에 별도의 문제가 생기지 않음으로 안전하게 앱을 동작시킬 수 있다.

```javascript
const daysInWeek = 7;
const maxNumber = 5;
```

요약하면 인간의 편의를 감소시키는 대신에 실수를 방지할 수 있다.

# Object (객체)

`Object`는 `JavaScript`의 핵심이라 간주할 수 있다. `Object`는 무엇일까? 

`Object`를 이해하기 전 이전에 배웠던 `Primitive Data Types in JavaScript`을 떠올려보자. 

- number, string, boolean, null, undefined, symbol

`JavaScript`이라는 프로그래밍에서 쪼갤 수 있는 최소의 단위를 `Primitive Data Types`라 칭한다. `Object`는 크게 두 종류로 분류된다.

1. **Array**(배열) 형태의 **Object**(객체)

2. **Object**(객체) 형태의 **Object**(객체)

두 객체의 차이를 알아보기 전 객체의 존재 목적을 먼저 알아보자.

객체의 존재 목적은 `Primitive Data Types의 데이터`를 포함한 `Single Item`을 여러개로 묶어 한 단위로 관리하기 위함이다. 

예를 들면, 생일이 빠른 순서대로 친구 이름 10개를 기억해야하는 상황이라 생각해보자. 현재 아는 지식을 이용해 프로그램을 만들면, 아래와 같이 총 10개의 변수를 일일이 선언하고, 값을 할당해야한다. 

```javascript
let name1 = "a";
let name2 = "b";
let name3 = "c";
let name4 = "d";
let name5 = "e";
let name6 = "f";
let name7 = "g";
let name8 = "h";
let name9 = "i";
let name10 = "j";
```

### **Array**(배열) 형태의 **Object**(객체)

주목할 점은 10개의 이름의 순서가 중요하다는 점이다. 이때 `Object`의 첫 번째 경우인 `Array(배열)` 형태의 `Object(객체)`를 사용할 수 있다. 순서가 중요한 10개의 데이터를 한 장소에 순서대로 보관할 수 있게 해준다.

```javascript
let namelist_sortby_birth = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j']; 
```

위와 같이 `Array(배열)` 형태의 `Object(객체)`는 `index`라는 것을 이용해 값에 접근할 수 있다.

`index`는 사전적 의미로 색인, 지표 등을 의미한다. `Array(배열)`에서는 숫자 `index`를 사용한다. 첫 번째 `index`를 가지는 요소가 가장 생일이 빠른 친구라는 것을 알 수 있다. 

하지만 여기서 주의해야 할 것이 있다. `Array(배열)`에서 **첫 번째는 1이 아닌 0이라는 점이다.**

```javascript
let namelist_sortby_birth = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j']; 

// index를 이용해 Array(배열)의 요소에 접근할 때는 [ ] (Cruly Brace)를 이용한다.
console.log(namelist_sortby_birth[0])
console.log(namelist_sortby_birth[1]);

// 마지막 요소는 정의한 배열의 길이 - 1 이라는 것을 알 수 있다.
// 배열의 길이를 구하는 length라는 프로퍼티가 존재한다. 
// namelist_sortby_birth.length
console.log(namelist_sortby_birth[namelist_sortby_birth.length - 1]);
```

프로그래밍의 꽃은 반복학습이다. 이 배열 형태의 객체(Object)는 반복문과 아주 궁합히 잘 맞다. 

예를 들면, 

```javascript
for(let i = 0; i < 10; i++) {
    console.log(`${i} 번째 생일인 친구는 namelist_sortby_birth[i] 입니다.`);
}
```

**Array**(배열) 형태의 **Object**(객체) 를 요약하자면,

1. **배열(Array)** 형태의 객체는 순서가 중요한 다수의 요소를 한 장소에 보관해주는 용이함을 제공한다. 내부 요소에 접근할 때는 숫자 기반의 `index`를 이용해 접근할 수 있다.
2. **배열(Array)** 을 정의할 때는 `[ ] curly brace`를 사용하고 `,`로 요소를 구분한다. 

```javascript
// 여러 요소의 데이터 타입이 담길 수 있다.
let arr = [1, "Hello", 2, "World"];
```

3. 반복문과 궁합이 좋다.
4. 배열의 **첫번째 요소의 index는 0이다!**

### **Object**(객체) 형태의 **Object**(객체)

`Object(객체) 형태의 Object(객체)`는 다수의 데이터가 순서보다는 그 키워드가 중요한 경우 사용된다. 예를 들면, 한 사람의 인적 사항을 생각해 보자,

- 이름, 나이, 성별, 거주지 등

이 경우 기존에 배운 변수로만 선언한다면, 아래와 같이 4개의 변수를 사용해야 한다. 

```javascript
let name = 'su';
let age = 24;
let gender = 'male';
let location = 'daegu';
```

만약 한 명이 아닌 수십 명의 인적 사항이 있다고 생각해 보자, 그러면 변수를 관리하는 것이 굉장히 번거롭고 복잡해질 것이다. 또한 변수명을 짓기도 애매해진다, `name`은 `name`인데 `name1, name2`는 무엇인가 어색하기 때문이다.

```javascript
let name = 'su';
let age = 24;
let gender = 'male';
let location = 'daegu';
let name1 = 'au';
let age2 = 14;
let gender3 = 'female';
let location4 = 'sedoul';
```

`Object(객체) 형태의 Object(객체)`는 인적 사항과 같이 순서는 안 중요하지만 한 사람의 범주 내에서 관리되는 데이터를 관리할 때 용이하다. 

```javascript
let suInfo = {
    name: 'su',
    age: 24,
    gender: 'male',
    location: 'daegu'
} ;

let auInfo = {
    name: 'au',
    age: 14,
    gender: 'female',
    location: 'seoul'
}
```

동일하게 name이라는 이름을 사용한 것을 확인할 수 있다. `Object(객체) 형태의 Object(객체)`에서는 `Key: Value` 구조로 데이터를 관리한다. 이 형태에서 데이터에 접근하는 방식은 크게 두 가지가 있다.

두 방식 모두 `Key`를 이용해 접근하는 방식

1. `. `을 이용해 접근하는 법
2. `[ ] curly brace`를 이용해 접근하는 법

```javascript
// key: name, age, gender, location
let suInfo = {
    name: 'su',
    age: 24,
    gender: 'male',
    location: 'daegu'
} ;

let auInfo = {
    name: 'au',
    age: 14,
    gender: 'female',
    location: 'seoul'
}

// .을 이용해 접근
console.log(suInfo.name);
console.log(suInfo.age);
console.log(suInfo.gender);
console.log(suInfo.location);

// [ ] curly brace를 이용해 접근
console.log(suInfo['name']);
console.log(suInfo['age']);
console.log(suInfo['gender']);
console.log(suInfo['location']);
```

### Object 응용

만약 생일 순서에 따라 정렬하고, 정렬한 각 사람의 인적 사항까지 알고 싶다면 어떻게 해야 할까?

```javascript
let obj = [
    suInfo = {
    name: 'su',
    age: 24,
    gender: 'male',
    location: 'daegu'
    },

    {
    name: 'au',
    age: 14,
    gender: 'female',
    location: 'seoul'
    }
];

console.log(obj[0]['name']);
console.log(obj[0]['age']);
console.log(obj[0]['gender']);
console.log(obj[0]['location']);

console.log(obj[0].name);
console.log(obj[0].age);
console.log(obj[0].gender);
console.log(obj[0].location);
```



## Object & Primitive Data Types in JavaScript 는 메모리에 어떻게 저장될까?

```javascript
let num = 2;
let number = 2;
```

위 코드의 변수 ` num`과 `number`는 서로 다른 메모리 공간에 저장된다. 이 말은 되게 직관적으로 이해가 될 것이다. 그렇다면 다수의 변수를 저장하는 것처럼 보이는 `Object`는 어떤 방식으로 메모리에 저장될까?

```javascript
let obj = {
    name: 'su',
    age: 24
}
```

위 코드를 보면 변수 `obj` 에는 `name`과 `age`라는 두 개의 프로퍼티가 `Key: Value` 형태로 저장되는 것을 알 수 있다. 그렇다면 논리적으로 두 개의 변수가 존재하는 것과 동일한 의미가 아닌가? 어떻게 생각하는가?

그렇다 예상대로 두 개의 변수를 선언하는 것과 동일하게 두 개의 메모리가 할당이 된다. 여기서 들 수 있는 의문점은 어떻게 하나의 변수에 두 개의 메모리 값을 할당할 수 있는가?

이 질문까지 도달했다면 아주 잘 따라와 준 것이다.

`object`는 선언 시 값 그 자체가 할당되는 `primitive data types`과 다르게 두 종류의 다른 메모리 공간을 묶은 메모리의 주소가 변수에 할당된다. 쉽게 말해서 이 두 종류의 다른 메모리가 담겨있는 한 공간의 메모리 주소가 `123`이라면 `object`에는 `123`이라는 주소값이 할당되어있다.

```javascript
let obj = {
    name: 'su',
    age: 24
}

console.log(obj.name);
```

위와 같이 `obj.name`을 실행시키면, `JS 코드`를 해석하는 `엔진`은 다음과 같이 인식한다. 

**"아하 obj라는 변수가 가리키고 있는 123이라는 메모리에 있는 name이라는 이름을 가진 메모리를 찾고 있구나!"**

#### 조금 더 응용해보자

```javascript
let obj = {
    name: 'su',
    age: 24
}

let obj2 = obj;
```

위 코드와 같이 `obj (name, age이라는 메모리를 한곳에 모아둔 메모리 주소)`를 가지고 있는 `obj`를 새로운 변수 `obj2`에 할당하면 어떤 일이 발생할까?

```javascript
let obj = {
    name: 'su',
    age: 24
}

let obj2 = obj;

console.log(obj2.name); 
```

`obj.name`을 한 것과 같은 값을 출력하는 것을 확인할 수 있다. 어떻게 이런 일이 발생할 수 있을까?

`obj`가 `obj2`에게 할당된 것은 `obj`라는 통에 포함되어 있는 `name, age`라는 `key`의 메모리의 주소값이기 때문이다. 그렇다면 같은 메모리를 참조하고 있다는 것을 의미한다.

만약 `obj2`를 이용해 `name` or `age`의 `value(값`)을 변경하면 어떤 일이 발생할까?

```javascript
let obj = {
    name: 'su',
    age: 24
}

let obj2 = obj;

console.log(obj2.name); 

ob2.name = "WhatThe";

console.log(obj2.name);
console.log(obj.name);
```

`name`이 `su`에서 `WhatThe`로 변경된 것을 확인할 수 있다. 이렇게 값 대신 Object의 메모리 상의 주소 값이 참조되어 저장된다는 것을 최종적으로 확인할 수 있다. (차후에 사용할 것이지만 이러한 것을 보고 `참조(Reference)`값을 포함하고 있다고 표현한다. 알아두면 용이한 표현이니 잘 알아두자.)

#### 조금만 더 응용해보자

```javascript
const obj = {
    name: 'su',
    age: 5
}
```

위와 같이 한 번 정의하면 값을 변경할 수 없는 `const`를 이용해 `object`를 할당하면 내부의 `name`과 `age`의 값의 변경이 불가할까?

##### 첫 번째 경우

```javascript
obj = {
    name: 'eu',
    age: 22
}
```

이 경우는 명확히 불가하다. 왜냐하면 `object`여부를 떠나서 `const`정의된 변수에 새로운 값을 재할당 하려 했기 때문이다.

##### 두 번째 경우

```javascript
obj.name = 'JavaScript'

console.log(obj.name);
```

이 경우 `obj.name`이 `JavaScript`를 출력하는 것을 확인할 수 있다. 어떻게 이게 가능할까? 

이것을 변할 수 없는 집주소가 있다고  . 집 주소가 변할 수 없음은 분명하다. 하지만 이 집 주소에 위치한 집의 구조, 가구, 사는 사람, 등이 변할 수 없을까? 아니다. 집 주소가 아닌 모든 것이 변해도 논리적으로 아무런 문제가 없다. 이를 조금 더 프로그래밍적인 용어를 이용해 설명해보겠다.

`참조(Reference)` 자체를 다른 `참조(Reference)`로 변경하는 것은 불가능하다. 왜냐하면 `const`를 이용해 변수를 선언했기 때문이다. 대신에 처음 정의한 `참조(Reference)`가 가리키고 있는 주소의 `프로퍼티(Property)`의 값을 변경하는 것은 가능하다. 왜냐하면 이 공간은 `const`를 이용해 정의하지 않았기 때문이다.





















