# JavaScript 101 - Part - 3

### Keyword: Operator

An **operator** in a **programming** language is a symbol that tells the compiler or interpreter to perform specific mathematical, relational or logical operation and produce final result.

`조작원 or 연산자 (Operator)`는 프로그래밍 언어에서 수학적, 논리적, 관계적인 결과를 도출하기 위해 사용하는  `문자(Symbol)`를 의미한다. `문자(Symbol)`의 간단한 예시는 `+, -, *, /`를 생각할 수 있다. 

본격적으로 `JavaScript`의 `조작원(Operator)`을 알아보기 전에 전 시간에 했던 것들을 복습해보자.

### 변수 (Variable)

#### let

- `rw: (read / write)`
- 변수는 메모리에 변수를 읽고 쓸 수 있다

```javascript
let globalName = 'Global Scope and Name';

{
    let name = 'yongsu';
    name = 'susu';
    console.log(name);
}
```

#### const

- `r: (read)` 읽기만 가능하다. 다시 다른 값을 할당하는 것이 불가능하다.
- `Object(객체)`에 사용했을 때는 값을 저장하는 것이 아닌 `참조(Reference)`를 저장하는 것이기 때문에 값의 변경이 가능하다. 혼동하지 말자.
- **불변성(Immutability)**
- **안정성 (Security)**
- **쓰레드 안정성 (Thread Security)**
- **인간의 실수를 줄여준다 (Reduce Human Mistakes)**

```javascript
const daysInWeek = 7;
const PI = 3.14;

const su = {
    name: 'Yongsu',
    age: 24,
    address: 'Daegu'
}

su = 'Hello'; // const를 사용해 변수를 선언했기 때문에 값의 재할당은 불가능하다.

// const에는 애초에, name, age, address 라는 변수를 담고 있는 큰 통의 주소의 참조(Reference)가 담겨있기 때문에, const로 정의되지 않은 name, age, address의 값은 변경이 가능하다.
su.name = "Yongsu Jeong"; 
su.age = 25;
su.address = 'Daegugu';
```

### variable types

#### Primitive types - single item (더 이상 쪼개질 수 없는 JS에서 가장 작은 데이터 단위)

1. number
2. string
3. boolean
4. null
5. undefined
6. symbol

#### Object type

- `객체 (object)`는 다수의 `primitive type`의 데이터를 저장할 수 있다. 즉, 메모리에 저장하기에 크기가 크기 때문에 한 번에 올라갈 수 없다. 그러므로 `참조(Reference)`값을 가진다. 



## 1. String Concatenation (문자열 연결)

`+ `를 사용해 문자를 연결할 수 있다.

- 크게 네 가지의 경우의 수가 있다. 

```javascript
// 1. 문자 + 문자
console.log("Hello " + "World!");

// 2. 숫자 + 문자 --> 숫자는 문자로 간주된다.
console.log("1" + 2);

// 3. 문자 + 특수 문자 \n은 줄 바꿈을 의미한다.
console.log("Hello \n Book");

// 4. 탬플릿 리터럴 (Template Literal)
console.log(`
String Literals:
''''
''''
줄바꿈도 인식된다.
1 + 2 = ${1 + 2}
`);
```

## 2. Numeric Operators

```javascript
// 1. Addiction
console.log(1 + 1);

// 2. Subtraction
console.log(1 - 1);

// 3. Division
console.log(1 / 1);

// 4. Multiplication
console.log(1 * 1);

// 5. Remainder
console.log(5 % 2);

// 6. Exponentiation
console.log(2 ** 3);
```

## 3. Increment and Decrement Operators

##### Increment Operators

```javascript
// 1. preIncrement
let preCounter = 2;
const preIncrement = ++preCounter;
// const preIncrement = preCounter + 1; 과 동일
console.log(`preIncrement: ${preIncrement}, preCounter: ${preCounter}`); // 3 3

// 2. postIncrement
let postCounter = 2;
const postIncrement = postCounter++;
// const postIncrement = postCounter;
// postCounter = postCounter + 1; 과 동일
console.log(`postIncrement: ${postIncrement}, postCounter: ${postCounter}`); // 2 3
```

##### Decrement Operators

```javascript
// 1. preDecrement
let preCounter = 2;
const preDecrement = --preCounter;
// const preDecrement = preCounter - 1; 과 동일
console.log(`preDecrement: ${preDecrement}, preCounter: ${preCounter}`); // 1 1 

// 2. postDecrement
let postCounter = 2;
const postDecrement = postCounter--;
// const postDecrement = postCounter;
// postCounter = postCounter + 1; 과 동일
console.log(`postDecrement: ${postDecrement}, postCounter: ${postCounter}`); // 2 1
```

## 4. Assignment Operators

```javascript
let x = 4;
let y = 5;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;
```

## 5. Comparison Operators

```javascript
console.log(10 < 6); // 미만 (Less Than)
console.log(10 <= 6); // 이하 (Less Than or Equal)
console.log(10 > 6); // 초과 (Greater Than)
console.log(10 >= 6); // 이상 (Greater Than or Equal)
```

## 6. Logical Operators 

#### || (OR), && (AND), ! (NOT)

##### || (OR)

처음으로 `True`가 나오는 곳에서 동작을 멈춘다. 

```javascript
const first_value = false;
const second_value = 4 < 2; 

function check() {
    for (let i = 0; i < 10; i++) {
        // 시간 낭비를 하다 True 리턴
        console.log("Wasting Time...")
    }
    
    return true;
}

console.log(`OR: ${first_value || second_value || check()}`);
```

만약 `first_value` 에서 true가 나오면 뒤에 것은 따로 검증하지 않고 동작을 멈춘다.

```javascript
// Check 함수가 호출되지 않는 것을 확인할 수 있다.
let first_value = true; 
```

##### && (AND) 

첫 번째 `False`가 발견되면 바로 `false`를 리턴한다. (그 뒤에 것은 실행시키지 않는다)

- 무거운 동작일수록 뒤에서 체크하는 것을 원칙으로 한다. 왜냐하면 더 많은 `Computing Power`를 필요로 하기 때문이다. `check` 같은 무거운 동작을 제일 앞에 두면 욕을 많이 먹을 수 있다. 주의하자.

```javascript
const first_value = false;
const second_value = 4 < 2; 

function check() {
    for (let i = 0; i < 10; i++) {
        // 시간 낭비를 하다 True 리턴
        console.log("Wasting Time...")
    }
    
    return true;
}

console.log(`and: ${first_value && second_value && check()}`);
```

##### ! (not)

```javascript
const first_value = true;

console.log(!first_value);
```

## 7. Equality Operators

값이 같은지 확인하는 방법에는 크게 두 가지가 존재한다

- `==` (Loose Equality with type conversion)
- `===` (Strict Equality, no type conversion)

##### == (Loose Equality)

- 데이터 타입을 변경해 검사한다. 문자열이기는 하지만 안에 들어 있는 것은 숫자이기 때문에 문자 5와 숫자 5를 같다고 간주한다.

```javascript
const stringFive = '5';
const numberFive = 5;

console.log(stringFive == numberFive); // true
```

##### === (Strict Equality)

- 데이터 타입의 변환이 없다. 문자열은 문자열이고, 숫자는 숫자로 간주한다. 똑같은 것은 데이터 타입과 값이 모두 같아야 같다고 간주한다. 웬만하면 이 방식을 사용하는 것을 권장한다.

```javascript
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true
```

## Advanced Topics

```javascript
const a1 = { name: 'a1' };
const a2 = { name: 'a2' };
const a3 = a1;

// false - object의 경우 내부의 값이 아닌 참조값(reference)을 저장하기 때문에 당연히 false를 출력
console.log(a1 == a2); 
// false - 타입을 떠나서 참조값(reference) 자체가 다르기 때문에 false를 출력
console.log(a1 === a2);
// true
console.log(a1 === a3); // true - 같은 참조값(reference)를 가지고 있으니 true

console.log(0 == false); // true - 둘 다 false로 간주되니까 true
console.log(0 === false); // false - 값은 같아도 타입 비교시 false
console.log('' == false); // true - 둘 다 false로 간주
console.log('' === false); // false - 타입 비교시 false
console.log(null == undefined); // true - 애는 둘 다 false이기 때문에 같은 것으로 간주
console.log(null === undefined); // false - 다른 type이니까 false로 간주
```

## 8. Conditional Operators: if

#### if, else if, else

프로그래밍의 꽃인 조건을 표현하고 싶을때 사용하는 오퍼레이터다.

나의 이름은 A이다.

우리 반에는 총 5명의 학생이 있다 (A, B, C, D, E). 

만약 이름이 A라면 A야 안녕 이라고 인사하고, B라면 B야 안녕 ... E야 안녕까지 출력하고, 나머지는 안녕을 출력해야 하는 상황이라 생각해보자. 

```javascript
const name = 'A';

if (name === 'A') {
    console.log(`안녕 ${name}`);
} else if (name === 'B') {
    console.log(`안녕 ${name}`);
} else if (name === 'C') {
    console.log(`안녕 ${name}`);
} else if (name === 'D') {
    console.log(`안녕 ${name}`)
} else if (name === 'E') {
    console.log(`안녕 ${name}`)
} else {
    console.log(`안녕 ${name}`)
}
```

## 9. Ternary Operator

#### if, else if, else 를 사용한 것이 너무 복잡하다고 생각할 수 있다. 이때 간단한 조건인 경우 한 줄에 간단히 표현할 수 있는 방식이다.

```javascript
// 조건 ? 조건이 참이라면 : 조건이 거짓이라면
const name = 'A';

console.log(name === 'A' ? '안녕' : "바이");
```

중첩의 중첩의 중첩...으로 사용하면 가독성이 떨어지기 때문에 간단한 조건인 경우 혹은 코드가 복잡해 리팩토링에 필요한 경우에만 사용하자. 이 방식과 비슷한 방식으로 `Switch`를 사용할 수 있다.

## 10. Switch

- 다수의 조건을 확인할 수 있다.
- 다수의 조건 값이 보다 직관적이다.
- 다수의 데이터 타입을 확인할 수 있다.

```javascript
const browser = "IE";

switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log("Love you!");
        break;
    case 'Firefox':
        console.log("Love You!");
        break;
    default: 
        console.log("Same...");
        break;
}

// Chrome, Firefox 같으니까 붙여서 아래와 같이 사용가능
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log("Love You!");
        break;
    default: 
        console.log("Same...");
        break;
}
```

## 11. Loops

- **1. while loop**

- **2. do while**

- **3. for**

### while loop

```javascript
// 조건이 거짓이 아닌 이상 while 문의 body 부분을 계속 실행함

while (조건) {
    // 이 부분을 while 문의 body라 칭함
}

// 활용
let i = 3;
while (i > 3) {
    console.log(`while: ${i}`);
    i--;
}
```

### do while

```javascript
// do 부분을 먼저 실행시키고 while문 실행
let i = 3;

do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);
```

### for 

```javascript
// for (begin; condition; step) { 
//   for 문의 body 
// }
// Begin 부분은 딱 한번만 실행됨
for (let i = 0; i < 10; i++) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    console.log(`Inline Variable for: ${i}`);
}

// Nested Loop
// Big O (n^2) - CPU Intensive는 가능한 피하자
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
```

### break (완전히 반복문을 끝냄), continue (지금 것만 건너뜀)

```javascript
// 0 ~ 10 까지 순회하면서, 짝수만 출력한다.
for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    
    console.log(i);
}

// 0 ~ 10 까지 순회하면서, i값이 8이 되었을 때 반복문을 종료한다.
for (let i = 0; i < 10; i++) {
    if (i === 8) {
        break;
    }
    
    console.log(`index: ${i}`);
}
```

























