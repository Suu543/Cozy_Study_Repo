# JavaScript While Loop

### syntax

```javascript
while (조건) {
    // 실행 코드
}
```

- `while` 반복문은 조건의 값이 `참(true)`인 경우 내부의 실행 코드를 실행한다.

``` javascript
let i = 0 ;
while (i < 10) {
    console.log('Current Index is ', i);
    i++;
}

// 결과
Current Index is  0
Current Index is  1
Current Index is  2
Current Index is  3
Current Index is  4
Current Index is  5
Current Index is  6
Current Index is  7
Current Index is  8
Current Index is  9
```



# The Do/While Loop

`do/while` 반복문은 `while` 문의 조건을 확인하기 전에 먼저 `do` 부분에 있는 코드를 실행시킨다. 적어도 `do`는 한 번은 실행된다. (조건을 검증하기 전에 실행하기 때문에)

```javascript
let i = 0;

do {
    console.log('Current Index is', i);
    i++;
}
while (i < 10);

// 결과
Current Index is 0
Current Index is 1
Current Index is 2
Current Index is 3
Current Index is 4
Current Index is 5
Current Index is 6
Current Index is 7
Current Index is 8
Current Index is 9
```



# JavaScript Break and Continue

### break

`break`는 `switch` 문에서 사용했던 것처럼 반복문에서도 반복문을 멈추고 빠져나가는 기능을 한다.

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        break;
    }
    
    console.log('Current Index is', i);
}

// 결과
Current Index is 0
Current Index is 1
Current Index is 2
```

 

### continue

`continue`는 단어 뜻 그대로 멈추지 않고 계속 나아감을 의미한다. 용도는 반복문을 순회하는 중 특정 조건에 부합하면 해당 순서를 건너뛰고 다음 반복문으로 넘어갈 때 사용한다.

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        // i 값이 3 일때 반복문을 멈추지 않고 계속 진행한다.
        console.log('세번째 입니다.')
        continue;
    }
    
    console.log("Current Index is", i);
}

// 결과
Current Index is 0
Current Index is 1
Current Index is 2
세번째 입니다.
Current Index is 4
Current Index is 5
Current Index is 6
Current Index is 7
Current Index is 8
Current Index is 9  
```



### Use Cases for Do...While / While Loops in JavaScript

`자동화(Automation)`는 시스템이 자동으로 작동하도록하는 기술이다. 프로그래밍에서 반복문을 사용해 반복되는 작업을 `자동화(Automation)`한다. 반복문은 프로그래밍 에서 가장 유용한 기능 중 하나고, `Do ... While / While` 반복문의 사용 용례를 알아보자.



#### Aquarium

**시나리오**: 한 아쿠아리움의 수조는 물고기를 최대 10마리를 수용할 수 있다. 수조 속의 물고기 숫자가 10마리 이상이 되면, 수조의 수용 최대치에 도달한다. 자동으로 물고기 숫자를 확인하고 10 마리 이상의 물고기가 들어오지 못하게 막아야 한다. 이 시나리오를 코드로 옮겨보자.

```javascript
// Set Population limit of aquarium to 10
const tankLimit = 10;

// Start off with 0 fish
let fish = 0;

// Initiate while loop to run until fish reaches population limit
while (fish < tankLimit) {
    fish++;
    console.log("There's room for " + (tankLimit - fish) + " more fish.");
}

// Output
There's room for 9 more fish.
There's room for 8 more fish.
There's room for 7 more fish.
There's room for 6 more fish.
There's room for 5 more fish.
There's room for 4 more fish.
There's room for 3 more fish.
There's room for 2 more fish.
There's room for 1 more fish.
There's room for 0 more fish.
```

아쿠아리움 시나리오를 통해,

1. `while`문은 수조 속의 물고기 숫자가 10마리 보다 많지 않는 동작을 멈추지 않는다.
2. `while`문은 물고기 숫자가 10마리 보다 많으면 자동으로 동작을 멈춘다.

#### Infinite Loops

`무한 반복 (Infinite Loop)`은 이름에서 알 수 있듯이 무한히 실행되는 어떤 것을 의미한다. 하지만 `무한 반복 (Infinite Loop)`이 실제 일어난다면 당신의 `browser or computer`의 시스템이 부하를 견디지 못하고 망가질 것이다. `무한 반복 (Infinite Loop)`이 무엇인지 이해하고 `while`문을 사용할 때 어떤 경우에 `무한 반복 (Infinite Loop)`이 발생하는지 알아보자.

```javascript
// Initiate an infinite loop
while (true) {
    // 영원히 참이기 때문에 무한 반복
}
```



#### While + Break 

**시나리오**: 북극의 얼음이 계속 녹고 있다. 현재 북극에는 5마리의 북극곰이 있다. 무한히 북극의 북극곰 수를 확인하는 시스템이 있다. 북극에 더 이상 북극곰이 없을 때 시스템이 종료된다. 이 시나리오를 코드로 옮겨보자.

```javascript
const iceCapsAreMelting = true;
let polarBears = 5;

while (iceCapsAreMelting) {
  console.log(`There are ${polarBears} polar bears.`);
  polarBears--;
  // Terminate infinite loop when following condition is true
  if (polarBears === 0) {
    console.log("There are no polar bears left.");
    break;
  }
}

// Output
There are 5 polar bears.
There are 4 polar bears.
There are 3 polar bears.
There are 2 polar bears.
There are 1 polar bears.
There are no polar bears left.
```

이 시나리오를 통해 `무한 반복 (Infinite Loop) while`문을 `break`를 이용해 멈추는 방법을 알아봤다.

#### do ... while

```javascript
// generate secret number is a random integer between 1 and 12
const MIN = 1;
const MAX = 12;

let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

let guesses = 0; // for storing the number of guesses
let hint = ''; // for storing hint
let number = 0;
do {
    // get input from user
    let input = prompt(`Please enter a number between ${MIN} and ${MAX}` + hint);
    // get the integer
    number = parseInt(input);
    // increase the number of guesses
    guesses++;
    // check input number with the secret number
    // provide hint if needed
    if (number > secretNumber) {
        hint = ', and less than ' + number;
    } else if (number < secretNumber) {
        hint = ', and greater than ' + number;
    } else if(number == secretNumber) {
        alert(`Bravo! you're correct after ${guesses} guess(es).`);
    }
} while (number != secretNumber);
```























