# JavaScript 101 Part - 09

#### Closures and Prototypal Inheritance

![image-20210210123942698](C:\Users\jos50\AppData\Roaming\Typora\typora-user-images\image-20210210123942698.png)

### Functions are first class citizens in JavaScript

```javascript
// 1 - Able to assign a function to the stuff variable
let stuff = function() {}
 
// 2 - Able to pass a function as an argument
function a(fn) {
    fn()
}
a(function() { console.log('hi there'); })

// 3 - Able to use a function as a return value
function b() {
	return function c () { console.log('hi'); }
}

var d = b()
d();

// 4
// i = 0 일때 for문 내부에서 function a를 초기화(initialize) 한다
// i = 1 일때 for문 내부에서 function a를 초기화(initialize) 한다
// ... i = 4 일때 까지
for(let i = 0; i < 5; i++;) {
    function a() {
        
    }
    
    a();
}

// 이 방식은 효율적인 방식이 아니다. 효율적으로 변경하기 위해 다음과 같이 변경해 준다
function a() {
    
}

for(let i = 0; i < 5; i++) {
    a();
}
```

### Higher Order Functions

![img](https://cdn-images-1.medium.com/max/1000/1*F7XCTD4-xoVAr1hAemftfQ.png)

```javascript
// 사용자가 로그인하는 시스템을 만든다 생각해보자
function letAdamLogin() {
    let arr = [];
    
    // Just Slow Down with useless operations
    // Auth 과정이라 가정해보자
    for (let i = 0; i < 100000; i++) {
        arr.push(i);
    }
    
    return 'Access Granted to Adam'
}

function letEvaLogin() {
    let arr = [];
    
    // Just Slow Down with useless operations
    // Auth 과정이라 가정해보자
    for (let i = 0; i < 100000; i++) {
        arr.push(i);
    }
    
    return 'Access Granted to Eva'
}

letAdminLogin();
letEvaLogin();
```

위 코드의 문제는 무엇일까?

1. 반복

```javascript
const giveAccessTo = (user) => {
	return 'Access Granted to ' + name;
}

function letUserLogin(user) {
    // We now tell what data to use.
    let arr = [];
    
    // Just Slow Down with useless operations
    // Auth 과정이라 가정해보자
    for (let i = 0; i < 100000; i++) {
        arr.push(i);
    }
    
    return 'Access Granted to ' + user;     
}

letUserLogin('Adam');
letUserLogin('Eva');
```





















