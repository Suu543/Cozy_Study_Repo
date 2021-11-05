# JavaScript 반복문

- for
- for ... in
- for ... of
- forEach
- map
- reduce
- filter
- some
- every

### 1. for loop

```javascript
for (let i = 0; i < 10; i++) {
    console.log(arr[i]);
};
```

- 가장 빠르고 단순하다. 효율적이다.
- 모든 자료형에 사용이 가능하다.
- 중간에 loop 건너뛰기 혹은 종료가 가능하다 (continue or break).
- 반복 범위의 유연한 조정이 가능하다 (i++, i--, etc).
- 변수를 활용할 수 있다 (let i, etc).

### 2. for ... in

```javascript
let obj = {
    a: '가',
    b: '나',
    c: '다'
};

for (let key in obj) {
    console.log(key, obj[key]);
}

// a 가
// b 나
// c 다
```

- `객체(Object)`에 사용할 수 있다.
- `객체(Object)`의 `Key` 값과 `Value` 값을 출력하는데 유용하다.
- `객체(object)`의 `Key`값의 갯수만큼 반복해 첫번째 ~ 마지막 키값까지 반복한다.

### 3. for ... of

```javascript
let iterable = [10, 20, 30];

for (let value of iterable) {
    console.log(value);
}

// 10
// 20
// 30
```

- `for ... of`는 `ES6`에 추가된 새로운 `Collection` 전용 반복 구문.
- `for ... of` 구문을 사용하기 위해서는 `Collection` 객체가 `[Symbol.iterable]` 속성을 가지고 있어야함.

### for ... in vs for ... of

`for ... in`문은 `object`의 `key`값을 순회하는데 사용하는 반복문이다.

`for ... of`문은 `array`를 순회하는데 사용할 수 있다.

`for .. in`은 `object` 데이터 타입에 사용할 수 있지만, `for .. of`는 `for loop` 방식이 있는데 왜 사용하는 걸까?

1. `for loop`를 사용할 때 범위와, 증감인자를 따로 명시하지 않아도 된다.
2. `array`의 요소에 접근할 때 `array[i]`와 같은 방식 대신에 `value`라는 이름으로 접근이 가능하다 (가독성이 좋다).
3. 시간을 측정해보자, 누가 더 빠를까?

```javascript
let arr = [...Array(1000).keys()]

console.time('test');

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.timeEnd('test');
// test: 260.421ms

// --------------------------------------------------------------------------------------

let arr = [...Array(1000).keys()]

console.time('test');

// i < arr.length; i++ or i-- 등을 작성하지 않아도 된다.
// 가독성이 좋다 arr[i] 대신에 value로 접근하기 때문에
for (let value of arr) {
    console.log(value);
}

console.timeEnd('test');
// test: 215.769ms
```

### 4. forEach

```javascript
let arr = [1, 2, 3, 4, 5];

arr.forEach(function(value, index, array) {
    console.log(value);
})
```

- 장점은 1번의 `for loop` 보다 가독성이 좋다.

```javascript
const foodArray = [
    { name: 'Burrito', ingredients: ['onion', 'tomato', 'cheese']},
    { name: 'Pizza', ingredients: ['onion', 'tomato', 'cheese'] },
    { name: 'Burger', ingredients: ['onion', 'tomato', 'cheese'] },
    { name: 'Pasta', ingredients: ['onion', 'tomato', 'cheese'] }
];

// 1. for문을 이용해서 순회
for (let i = 0; i < foodArray.length; i++) {
    console.log(`i value: ${i} | Food Name: `, foodArray[i]);
}

// 2. forEach를 이용해 위 코드를 구현해보자
foodArray.forEach((value, index, array)) {
    console.log(`i value: ${index} | Food Name: `, value);
}

foodArray.forEach((food, index, array)) {
    console.log(`i value: ${index} | Food Name `, food);
}

// 3. forEach는 변수의 범위를 Block 단위로 유지한다
const num = 4;
const arr = [0, 1, 2];

arr.forEach(num => {
    console.log(num);
});

console.log(num);

// 4. forEach가독성을 높여보자
const foodArray = [
    { name: 'Burrito', ingredients: ['onion', 'tomato', 'cheese']},
    { name: 'Pizza', ingredients: ['onion', 'tomato', 'cheese'] },
    { name: 'Burger', ingredients: ['onion', 'tomato', 'cheese'] },
    { name: 'Pasta', ingredients: ['onion', 'tomato', 'cheese'] }
];

for (let i = 0; i < foodArray.length; i++) {
    let food = foodArray[i];
    console.log(food);
    
    for (let j = 0; j < food.ingredients.length; j++) {
        let ingredient = food.ingredients[j];
        console.log(ingredient);
    }
}

// 위 코드를 forEach를 이용해 작성해보자
foodArray.forEach(food => {
    console.log(food);
    food.ingredients.forEach(ingredient => {
        console.log(ingredient);
    });
});

// 5. for loop는 쉽게 빠져나갈 수 있다
for (let i = 0; foodArray.length; i++) {
    if (foodArray[i].name === 'Pizza') {
        console.log('I LOVE PIZZA');
        break;
    }
}

// forEach 구문은 중간에 빠져나갈 방법이 없다

// forEach는 구문 밖으로 return 값을 받지 못한다.
let arr = [1, 2, 3, 4, 5];
let newArr = arr.forEach(function(e, i) {
    return e;
});

console.log(newArr); // undefined
```

- 가독성의 관점에서 `for loop`와 `forEach` 둘 중 어느 것이 더 좋을까? `forEach`는 복잡한 객체를 처리하는데 유용하다.  조금 더 인간친화적인 방법이라 할 수 있다.
- `forEach`는 빠르다
- `array (object)`에서 사용 할 수 있다
- 일반 `for loop`보다 가독성이 좋다. 또한 `object`형의 요소를 다루기 용이하다.
-  `for loop`와 다르게 중간에 끊을 방법이 없다. (단, `return`을 이용해 `skip`은 가능하다).
- `return` 값을 받지 못한다.

![javascript prototype chain 이미지 검색결과](https://uploads.toptal.io/blog/image/392/toptal-blog-image-1399822383211.png)

### 5. map

```javascript
let arr = [1, 2, 3, 4, 5];
let newArr = arr.map(function(value, index, arr) {
    return v + 1;
});

// [2, 3, 4, 5, 6];
```

- 빠르다
- Chaining이 가능하다.
- 대용량 배열 처리시 메모리 overflow 가능성이 있다.
- return 값 그 자체를 반환한다 (새로운 배열).

### map을 직접 구현해보자

```javascript
Array.prototype.mymap = function(callback) {
    const resultArray = [];	
    
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    
    return resultArray;
}

let output = sample.mymap((value, index, array) => {
    console.log(`val: ${val}, index: ${index}, array: ${array}`);
    return val * 2;
})
```

### 6. filter

```javascript
let arr = [1, 2, 3, 4, 5];
let newArr = arr.filter(function(value, index, arr) {
    return condition;
})
```

- `filter`의 특징은 `boolean` 형태의 `return` 값을 가진다. 다시 말해서 `return`에 조건문을 작성할 수 있다. `return`값이 참인 경우 `true`를 그 요소를 반환, 그렇지 않은 경우 `false` 반환하지 않는다.

```javascript
let arr = [1, 2, 3, 4, 5];
let newArr = arr.filter(function(v) {
    return v % 2 == 0;
});

// [2, 4];

var distances = [
  {from: 'Seoul', to: 'Jejudo', distance: 23451},
  {from: 'Busan', to: 'Daegu', distance: 6457},
  {from: 'Daejeon', to: 'Incheon', distance: 233}
];
var filteredDistances = distances.filter(item => item.distance < 10000);
console.log(filteredDistances);
```

- 위 두 예시를 보면, 우리가 원하는 요소만을 필터링 할 수 있는 유용한 요소다. 또한 새로운 `array`를 리턴한다.

```javascript
// 빈 요소를 반환하지 않는다는 것이다.
var arr = [0, , , 1, , , , , 2, , , , 3];
var newArr = arr.filter(function() { return true; });
var newArr = arr.filter(function(el) { return el; });
// [0, 1, 2, 3];
```

- 빠르다.
- chaining이 가능하다.
- 빈 배열 요소를 반환하지 않는다.
- 대용량 배열 처리시 메모리 overflow 가능성이 있다.
- return 값은 true/false 이며, 요소를 반환한다.

### filter를 직접 구현해보자

```javascript
Array.prototype.myFilter = function(callback) {
    const filteredArr = [];
    
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            filteredArr.push(this[index]);
        }
    }
    
    return filteredArr;
}

const names = ['a', 'b', 'c']
const filteredNames = names.myFilter(name => name !== 'a');
console.log(filteredNames); // 'b', 'c'
```

### 7. reduce

```javascript
let arr = [1, 2, 3, 4, 5];
let newArr = arr.reduce(function(accumulator, value, index, array) {
    return accumulator + value;
});

// 결과 15
```

- `reduce`의 가장 큰 특징은 첫 번째 인자인 `acc(accumulator)`이다. `acc`는 `return`값을 누적한다. 순회하는 `array`의 요소에 끝에 도달할 때 까지 값을 누적한다. 
- `acc(accumulator)`는 초기값을 설정할 수 있다. (Optional 이고, 생략시 첫 번째 값이 `return`값이 된다).

```javascript
let arr = [1, 2, 3, 4, 5];
let newArr = arr.reduce(function(accumulator, value, index, array) {
    return accumulator + value;
}, 10);

// 결과 25
```

- 첫번째 예시와 다르게 `초기값 10 (두번째 인자)` 때문에 25라는 값이 나오게 됬다. 어떻게 활용하느냐에 따라 `reduce`는 강력하고 확장성이 높다. `accumulator`의 값은 배열이 될수도 있고, `object`가 될수도 있다.

### reduce를 직접 구현해보자

```javascript
const names = ['Hello ', 'World ', 'Welcome'];
Array.prototype.myReduce = function (callback, accumulator) {
    if (this.length < 1) {
        throw new Error("Array is Empty");
    }

    if(!accumulator) {
        if (typeof this[0] === 'string') {
            accumulator = '';
        } else if (typeof this[0] === 'number') {
            accumulator = 0;
        }
    }

    for (let index = 0; index < this.length; index++) {
        accumulator = callback(accumulator, this[index]);
    }

    return accumulator;
}

const statement = names.myReduce((acc, element) => acc + element);
console.log(statement);

const numbers = [1, 2, 3, 4, 5];
const numbersResult = numbers.myReduce((acc, element) => acc + element);
console.log(numbersResult);
```









<img src="https://daesuni.github.io/images/posts/loopperformance.png" />



```javascript
// forEach - 한 개씩 돌면서 무엇인가 하기
let firstArr = ["a", "b", "c"];

firstArr.forEach(function(x) {
    console.log(x);
})

firstArr.forEach((x) => {
    console.log(x);
})


// filter - 특정 조건에 맞는 것만 담아 새로운 배열만들어 리턴하기
let secondArr = [1, 2, 3, 4, 5];

let filterSecondArr = secondArr.filter(function(x) {
    return x % 2 == 0;
})

console.log("filterSecondArr", filterSecondArr);

let filterSecondArrArrow = secondArr.filter((x) => {
    return x % 2 == 0;
})

console.log("filterSecondArrArrow", filterSecondArrArrow);

let filterSecondArrArrowNoReturn = secondArr.filter(x => x % 2 == 0);

console.log("filterSecondArrArrowNoReturn", filterSecondArrArrowNoReturn);

// filter + forEach - 조건에 맞는 배열로 만들고, 한 개씩 돌면서 무엇인가 처리하기
let thirdArr = [1, 2, 3, 4, 5];

thirdArr
    .filter(function(x) { return x % 2 == 0; })
    .forEach(function(y) { console.log("filter + forEach", y)});

thirdArr
    .filter((x) => { return x % 2 == 0; })
    .forEach((y) => { console.log("filter + forEach", y)});

thirdArr
    .filter((x) => x % 2 == 0)
    .forEach((y) => console.log("filter + forEach", y));

// map - 배열의 각 요소가 변환된 값을 가진 새 배열을 반환한다
let fourthArr = [1, 2, 3, 4, 5];

let fourthResult1 = fourthArr.map(function(x) { return x + 2; });
console.log("fourthResult1", fourthResult1);

let fourthResult2 = fourthArr.map((x) => { return x + 2 });
console.log("fourthResult2", fourthResult2);

let fourthResult3 = fourthArr.map(x => x + 2);
console.log("fourthResult3", fourthResult3);

// map + forEach - 배열의 각 요소가 변환된 값을 가진 새 배열을 반환하고, 이 새 배열을 가지고 무슨 짓 하기
let fifthArr = [1, 2, 3, 4, 5];

fifthArr.map(function(x) { 
    return x + 2; 
}).forEach(function(y) {
     console.log("fifthArrFirst", y); 
});

fifthArr.map((x) => { 
    return x + 2
}).forEach((y) => { 
    console.log("fifthArrSecond", y)
});

fifthArr.map(x => x + 2).forEach(y => console.log("fifthArrThird", y));

// filter + map + forEach - 배열에서 원 하는 요소만 뽑아 새 배열을 반환, 그 후 새 배열의 요소를 이용해 연산 후 그 결과를 모은 새 배열 리턴, 그리고 이 새로운 배열을 이용해 무슨 짓하기
let sixthArr = [1, 2, 3, 4, 5];

sixthArr.filter(function(x) { 
    return x % 2 == 0;
}).map(function(y) {
    return y + 2;
}).forEach(function(z) {
    console.log('sixthArrFirst', z);
})

sixthArr.filter((x) => {
    return x % 2 == 0;
}).map((y) => {
    return y + 2;
}).forEach((z) => {
    console.log('sixthArrSecond', z);
})

sixthArr.filter((x) => x % 2 == 0).map(y => y + 2).forEach(z => console.log('sixthArrThird', z));

// reduce
/*
- forEach, filter, map 과 같이 reduce도 내부에서 함수를 1개 받는다, 단 parameter에 여러 정보가 들어온다.
- reduce의 함수는 4 개의 파라미터를 받는다 (ac, current, index, array)
    - acc(accumulator): reduce 호출할 때 넘긴 함수의 결과를 보관한다. 최초 호출시 reduce를 호출할 때 두번째 넘긴 파라미터 값
    - current: 배열의 0 번 부터 배열의 마지막까지 순차적으로 전달
    - index: 현재 배열이 몇번째 loop를 도는지 알려주는 값
    - array: reduce 함수를 호출한 배열
    - 이 4 개의 파라미터를 이용하면 filter, map, forEach를 모두 구현할 수 있다.
*/
let reduceArr = [1, 2, 3, 4, 5];

reduceArr.reduce(function(acc, current, index, array) {
    console.log('1. acc', acc);
    console.log('1. current', current);
    console.log('1. index', index);
    console.log('1. array', array);
    acc = acc + current;
    return acc;
}, 0);

reduceArr.reduce((acc, current, index, array) => {
    console.log('2. acc', acc);
    console.log('2. current', current);
    console.log('2. index', index);
    console.log('2. array', array);
    acc = acc + current;
    return acc;
}, 0);

reduceArr.reduce((acc, current, index, array) => acc = acc + current, 0);

// reduce - string 배열 순환하면서 한개의 string으로 합치기
[ "안녕", "하세요" ].reduce(
    function ( ac, current, index, array ) {
          // 최초 호출될때, ac는 reduce의 두번째 파라미터인 아래에서 넘긴 "" 값을 가지고, current는 배열의 0 번째 "안녕"의 값이 들어 있을 것이다.
          // 그러므로 최초 호출 될 때는 return 값이 "" + "안녕" 이므로, "안녕"이 return 될 것이다.
          // 두번째 호출 될 때는 ac는 첫번째 호출 되었을때, return한 값인 "안녕" 값을 가지고, current는 배열의 1번째 "하세요"가 들어 있을 것이다.
          // 그리고 두번째 호출 될 때는 return 값이 "안녕"+"하세요"가 될 것이다.
          // 더 이상 돌 item이 없으므로, 결과적으로 해당 함수의 return 값은 "안녕하세요"가 될 것이다.
        return ac + current; 
    }
, "" ) // reduce 함수의 두번째 파라미터인 "" 은, 위 익명 함수의 ac에 최초 할당 된다.

let reduceStr = ["안", "녕", "하", "세", "요"];

let result = reduceStr.reduce(function(acc, current, index, array) {
    console.log('acc', acc);
    console.log('current', current);
    console.log('index', index);
    console.log('array', array);
    acc = acc + current;
    return acc;
}, "");

console.log('result', result);

// 응? reduce 대신 forEach만 써도 되는거 아닌가?
// forEach 버전
let sumStr = "";
reduceStr.forEach(function(x) {
    sumStr += x;
});

console.log('forEachVer', sumStr);

let forEachReduce = reduceStr.reduce(function(acc, current, index, array) {
    return acc + current;
}, "")

console.log('forEachReduce', forEachReduce);

// reduce - 배열에서 string type만 Set으로 만들기
// https://blog.ggaman.com/1012

```

### 8. some

`some` 메소드는 배열안의 모든 요소를 검사하는 것이 아닌, 순차적으로 검색하다 맞는 요소가 나오면 거기서 멈춘다.

```javascript
const test = [
    { name: 'a', value: 0},
    { name: 'b', value: 1},
    { name: 'c', value: 2},
    { name: 'd', value: 3},
    { name: 'e', value: 4}
];

console.log(test.some(e => e.name === 'c')); // true
console.log(test.some(e => e.name === 'f')); // false
```



### 9. every

`every` 메소드는 배열안의 모든 요소가 조건에 만족하는지 확인한다. 이 또한 순차적으로 검색하며, 조건에 하나라도 안맞는 요소가 있을경우 false를 반환한다

```javascript
const test = [
    { name: 'a', value: 0},
    { name: 'b', value: 1},
    { name: 'c', value: 2},
    { name: 'd', value: 3},
    { name: 'e', value: 4}
];

console.log(test.every(e => e.name === 'c')); // false
console.log(test.every(e => e.value < 5 )); // true
```



### 10. find

`find` 메소드는 배열안의 요소 중 조건에 맞는 첫번째 요소를 반환한다.

```javascript
const test = [
    { name: 'a', value: 0},
    { name: 'b', value: 1},
    { name: 'c', value: 2},
    { name: 'd', value: 3},
    { name: 'e', value: 4}
];

console.log(test.find(e => e.name === 'c')); // { name: 'c', value: 2}
```







# References

https://daesuni.github.io/Loop-performance/

