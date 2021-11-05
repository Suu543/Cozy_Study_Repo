# JavaScript 101 Part - 08

![img](https://images.unsplash.com/photo-1598644612563-82fbfa1bf2dd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80)

# OOP (Object Oriented Programming)

**OOP(객체지향)**는 프로그래밍에서 가장 많이 사용되는 패러다임 중 하나다. 이번 수업에서 배울 내용은 다음과 같다.

1. **What is Object-Oriented Programming?**
2. **Building Blocks of OOP** 
3. **Four Principles of OOP**
4. **What to learn next**

#### 이 수업을 통해 숙지해야 할 용어

- **Classes**
- **Objects**
- **Methods**
- **Attributes**

### What is Object Oriented Programming?

**OOP(객체지향)**은 **클래스(classes)**와 **객체(objects)** 개념에 의존하는 프로그래밍 패러다임이다. **OOP(객체지향)** 은 소프트웨어 프로그램을 더욱 더 간결하고, **클래스(classes)**라고 불리는 청사진을 사용해 재사용할 수 있게 만들어준다. 이 청사진을 사용해 만드는 **객체(object)**를 **인스턴스(instance)**라 칭한다.

![img](https://jamiezzhou.files.wordpress.com/2018/12/1.png)

![What Frame Damage Could Mean to You and Your Car — M3 Collision](https://images.squarespace-cdn.com/content/v1/59f36c23bce17661f702cbae/1565619455689-AH70NQNQECI2M0UWYBIQ/ke17ZwdGBToddI8pDm48kENxbPubkcOmEHfSZGTB9nZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gycmlYrUNOm5FlGNDjMZJgpqJD-0CquWH5sHQo1k4Ds8xrZpC4307mT6_2kOukQEg/image-asset.jpeg)



앞서 말한 것 처럼 **JavaScript**의 **클래스(Class)**는 **객체(object) or 인스턴스(instance)**를 생성하는데 사용할 수 있다. 앞서 배운 것 처럼 **객체(object)**는 **JavaScript**의 모든 데이터 타입을 담을 수 있다. 

#### 객체(Object) 내부에 정의할 수 있는 데이터 타입

1. `Primitive Data Type` : **number, string, boolean, undefined, null, NaN** 
2. `Object Type`: **배열(Array), 함수(Function)**

**객체(Object)** 내부에는 **JS**의 모든 데이터 타입을 담을 수 있다. 이 말은 **객체(Object) or 인스턴스(Instance)**를 생성하는 것이 목적인 **클래스(Class)** 내부에도 위 데이터 타입을 모두 정의할 수 있다는 것을 알 수 있다.

이렇게 **클래스(Class)** 내부에 값 형태로 정의되는 것을 **속성(attribute)**이라 칭하고, 내부에 함수 형태로 정의되는 것을 **메소드(method)**라 칭한다.

위 자동차 프레임 사진을 보자. 이 자동차 프레임에는 어떤 바퀴, 유리, 엔진, 전구, 시트 등을 넣으냐에 따라 다른 자동차를 만들 수 있다. 앞서 **OOP(객체지향)**에 **class(클래스)**를 **청사진(blueprint)**라 칭했다. 이처럼 **class(클래스)**를 이용하면 프레임은 같지만, 다른 종류의 자동차를 만들 수 있다. 코드로 확인해보자.

```javascript
class Car {
    constructor(color, wheel, engine, light, seat) {
        this.color = color;
        this.wheel = wheel;
        this.engine = engine;
        this.light = light;
        this.seat = seat;        
    }
}
```

위 코드를 보면 **Class Car**라는 키워드를 사용해 자동차를 만드는 데 사용할 수 있는 청사진을 정의했다. 이 청사진은, 자동차 **색(color)**, **바퀴 종류(wheel)**, **엔진 종류(engine)**, **라이트(light)**, **시트 종류(seat)**로 구성이 된다. 그렇다면 어떻게 이 청사진을 이용해 자동차 한 대를 만들 수 있을까?

**클래스(class)**를 이용해 자동차 한 대를 만들어 보기 전, **구조체(constructor)**와 **this**에 대해서 알아보자.

```javascript
const test = {
    name: "su",
    age: 25
}

test.name
test.age

```

 **this**는 **객체(object)**의 주소 값을 저장하고 있는 **변수 test**와 같은 역할을 해준다. **클래스(class)**를 이용해 새로 생성하는 **객체(object) or 인스턴스(instance**)의 위치를 가리키는 역할을 한다. 우리는 **이 객체(object)**의 주소 값을  담고 있는 **test라는 변수를** 이용해 해당 주소 내부에 있는 값에 접근할 수 있다. 

**구조체(constructor)**는 해당 **클래스(class)**를 이용해 새로운 자동차를 만들기 위해 함수가 인자를 받는 것처럼 전달받은 인자를 이용해 내부적으로 **객체(object) or 인스턴스(instance)**를 생성하는 역할을 한다. 쉽게 이야기하면 **구조체(constructor)**는 **클래스(class)**를 호출하면 최초로 실행되는 함수라고 생각하면 된다.

하나만 더 하면 **클래스(class)**를 최초 호출해 **객체(object) or 인스턴스(instance)**를 생성할 때는, 클래스를 이용해 새로운 **객체(object) or 인스턴스(instance)**를 생성하는 것이기 때문에 **new**라는 키워드를 꼭 붙여줘야한다.

```javascript
class Car {
    constructor(color, wheel, engine, light, seat) {
        this.color = color;
        this.wheel = wheel;
        this.engine = engine;
        this.light = light;
        this.seat = seat;
    }
}

const carModel1 = new Car('red', 'M-1', 'A-1', 'LED', 'premium'); // Model1
const carModel2 = new Car('blue', 'M-2', 'A-2', 'LED', 'normal'); // Model2
const carModel3 = new Car('white', 'M-3', 'A-3', 'LED', 'premium'); // Model3
```

**carModel1**에는 

1. **new**: `new` 키워드를 이용해 특정한 `클래스(class)`의 `객체(object)` or `인스턴스(instance)`를 생성함을 알려준다.

2. **Car**: `Car 클래스`의 `객체(object)` or `인스턴스(instance)`를 이용해 생성하고 내부에 함수를 호출하는 것처럼 자동차를 생성하는 데 필요한 인자값과 함께 `Car( ) 클래스(class)`를 호출한다.
3. **constructor**: `new Car(인자..)`를 호출하면 `Car 클래스(class)` 내부에서 `constructor(구조체)` 함수가 호출된다.
4. **this**: `this` 키워드를 이용해 생성하고 있는 `object`의 주소 값을 가리키고, 그 내부에 여러 `값(attribute)`과 `메소드(method)`를 할당한다.

결과적으로 **carModel1**에는 `클래스(class) Car`를 이용해 생성한 `객체(Object)` or `인스턴스(Instance)`의 **주소 값**이 할당된다.

#### Car class(클래스)를 이용해 생성한 객체(Object) or 인스턴스(Instance)를 이용해 값을 출력해보자

```javascript
class Car {
    constructor(color, wheel, engine, light, seat) {
        this.color = color;
        this.wheel = wheel;
        this.engine = engine;
        this.light = light;
        this.seat = seat;
    }
}

const carModel1 = new Car('red', 'M-1', 'A-1', 'LED', 'premium'); // Model1
const carModel2 = new Car('blue', 'M-2', 'A-2', 'LED', 'normal'); // Model2
const carModel3 = new Car('white', 'M-3', 'A-3', 'LED', 'premium'); // Model3

console.log(carModel1.color);
console.log(carModel1.wheel);
console.log(carModel1.engine);
```

#### 이번에는 Car class(클래스) 내부에 메소드(method)를 추가해보자

**클래스(class)** 내부에 **메소드(method)**를 추가할 때는 함수를 정의하는 것과 똑같이 할 수 있다. 한 가지 차이점이 있다면 **function 키워드**를 사용하지 않고 함수명만 정의하는 것이다.

```javascript
class Car {
    constructor(color, wheel, engine, light, seat) {
        this.color = color;
        this.wheel = wheel;
        this.engine = engine;
        this.light = light;
        this.seat = seat;
    }
    
    getEngine() {
        console.log(`${this.engine}을 사용합니다...`)
    }
    
    getCarInfo() {
        console.log(`
		바퀴: ${this.wheel},
        엔진: ${this.engine},
        시트: ${this.seat}
        빛: ${this.light}
        색: ${this.color}`)
    }
}
 
const carModel = new Car('white', 'M-3', 'A-3', 'LED', 'premium');
carModel.getEngine();
carModel.getCarInfo();
```

## Fields (public, private)

`private`은 비교적 최근에 추가된 기능이다. 지금 쓰기에는 무리가 있지만 이런게 있구나 알아두자. 이것이 쓰기에 별로라 사용되지 않는 것이 아니라, 최근에 추가되어 이 문법을 지원하지 않는 브라우저가 존재하기 때문이다.

```javascript
class Test {
    publicField = 'public';
	#privateField = 'private';
}

const test = new Test();
// 2
console.log(test.publicField);
// Private field '#privateField' must be declared in an enclosing class
console.log(test.#privateField); 
```

`public`은 어디에서든지 접근할 수 있다 (**클래스(class)** 내부에 를 정의했을 때의 기본값이라 생각할 수 있다). 하지만 `private`은 **클래스(class)** 내부에서만 접근할 수 있다. 무슨 말인지 조금 더 자세히 알아보자. 

**클래스(class)** 내부에 `private` 변수를 정의하기 위해서는 변수 앞에 `#`을 붙여준다.

어떻게 하면 `private` 값에 접근할 수 있을까?

```javascript
class Test {
    publicField = 'public';
	#privateField = 'private';
    
    accessToPrivateField() {
        return `private field: ${this.#privateField}`
    }
}

const test = new Test();
console.log(test.publicField); // public
console.log(test.accessToPrivateField()); // private
```

**클래스(class)** 외부에서는 `private` 값을 읽을 수도 변경할 수도 없다.

## static

`static`은 `클래스(class)` 중 인자로 받은 데이터에 상관없이 항상 일정한 `attribute(class 내부의 변수)` or `메소드(method)`에 사용할 수 있다. 이것은 `객체(object)` or `인스턴스(instance)`마다 할당되는 것이 아닌, `클래스(class)` 자체에 붙어 있는 것으로 이해할 수 있다.

```javascript
const Test {
    static publisher = 'yongsu';
    
    constructor(testNum) {
        this.testNum = testNum;
    } 
    
    static printPublisher() {
        console.log(Test.publisher);
    }   
}

const test1 = new Test(1);

console.log(test1.publisher); 
// undefined - 객체(object) or 인스턴스(instance) 마다 할당되는 것이 아닌, 클래스(class) 자체 할당되는 것이기 때문에

console.log(Test.publisher); 
// yongsu - 클래스(class) 자체에 할당되는 것이기 때문에 클래스(class) 자체를 이용해야 접근할 수 있다.

Test.printPublisher(); 
// yongsu - 클래스(class) 자체에 할당되는 것이기 때문에 클래스(class) 자체를 이용해야 접근할 수 있다.
```

`static`은 `인자값 혹은 클래스(class)`를 이용해 만드는 `객체(object) or 인스턴스(instance)` 에 상관없이 공통으로 사용할 수 있는 경우에 사용한다. 장점은 메모리의 사용을 줄여줄 수 있다.

자세한 사용 방법은 이후 뒷부분에서 다루겠다. 지금은 `static`, `private` 등이 존재하는구나! 정도만 알면 된다.

# Four Principles of OOP



![Object Oriented Programming - FusionReactor](https://www.fusion-reactor.com/wp-content/uploads/2020/09/oop-1.png)

# 1. 추상화 (Abstraction)

https://medium.com/@viktor.kukurba/object-oriented-programming-in-javascript-1-abstraction-c47307c469d1

# 2. 상속 (Inheritance)

`상속(inheritance)`은 자식 클래스가 부모 클래스의 `attribute(class 내부의 변수)`와 `method`를 상속해 이용할 수 있게됨을 의미한다. 게임을 잘 생각해보자. 이 게임에는, 총을 쏘는 사람, 칼을 쓰는 사람, 마법을 쓰는 사람, 세 분류가 존재한다. 이 세 직업의 공통점은 무엇일까? 

**세 직업의 공통점**

1. 사람

`상속(inheritance)`은 `extends`라는 예약어를 이용해 구현할 수 있다. 예시로 확인해보자.

```javascript
class Human {
    constructor(name, height, weight, age, gender) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.gender = gender;
    }
    
    walk() {
        console.log(`${this.name}이 걷는다.`);
    }
    
    run() {
        console.log(`${this.name}이 뛴다.`)
    }
    
    speak() {
		console.log(`${this.name}이 말한다.`);		
    }
    
    hit() {
        console.log(`${this.name}이 주먹으로 사냥감을 사냥하다.`)
    }
    
    shareInfo() {
        console.log(`${this.name}의 정보를 공유하다.`)
        return {
            name: this.name,
            height: this.height,
            weight: this.weight,
            age: this.age,
            gender: this.gender
        }
    }
}


class Warrior extends Human {

    constructor(name, height, weight, age, gender, knife) {
        super(name, height, weight, age, gender);
        this.knife = knife;
    }

    hitAndCutOpponent() {
        super.hit();
        console.log(`${this.name}이 칼으로 사냥감을 사냥하다`);
    }

    getKnife() {
        console.log(`${this.knife}종류의 칼을 사용하고 있다`)
    }
}

const su = new Warrior('su', 180, 100, 20, 'male', 'solider knife');
su.hitAndCutOpponent();
su.getKnife();
```

위 예시를 보면, `Warrior` 클래스는 `extends`라는 예약어를 사용해 `Human` 클래스를 상속하는 것을 확인할 수 있다. `Warrior` 클래스는  `Human` 클래스  `constructor`에 정의된 `name`, `height`, `weight`, `age`, `gender`를 이용하고 싶다. 이때 `super` 라는 키워드를 사용할 수 있다. `new Warrior`를 이용해 `객체(object) or 인스턴스(instance)`를 생성하면서 전달한 인수를, `super`에 전달하면 상속한 `Human` 클래스의 `constructor`의 attribute를 초기화하는 것을 알 수 있다. 

(단, `Warrior` 클래스는 이미 `Human` 클래스를 상속했기 때문에 `this` 예약어를 사용해 마치 자기 자신의 `attribute(class 내부의 변수)`인 것처럼 사용할 수 있다. 또한 `Human` 클래스의 `constructor`에 없는 `Warrior` 클래스 만의 `attribute(class 내부의 변수)`를 가지고 싶은 경우 위와 같이, `this.knife = knife` 방식을 이용해 `Warrior` 클래스 만의 `attribute(class 내부의 변수)`를 설정할 수 있다. )

비록 `Warrior` 클래스의 `Constructor`에는 `this.knife` 밖에 없음에도, `Human` 클래스를 상속했기 때문에 위와 같이 `Human` 클래스의 `Constructor`의 `attribute(class 내부의 변수)`값에  `this` 키워드를 이용해 자유롭게 이용할 수 있다. 이것을 코드로 표현해보면

```javascript
// A
constructor(name, height, weight, age, gender, knife) {
        super(name, height, weight, age, gender);
        this.knife = knife;
}

// A 부분의 constructor는 아래와 같다고 간주할 수 있다.
constructor(name, height, weight, age, gender, knife) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.age = age;
    this.gender = gender;
    this.knife = knife;
}
```

부모 클래스의 `attribute(class 내부의 변수)` 상속이 가능하다는 것은 부모 클래스의 `Method` 또한 상속이 가능해야 논리적이다. 이번에는 `Warrior` 클래스에서 부모 클래스인 `Human` 클래스의 `method`를 이용해보자.

```javascript
class Human {
    constructor(name, height, weight, age, gender) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.gender = gender;
    }
    
    walk() {
        console.log(`${this.name}이 걷는다.`);
    }
    
    run() {
        console.log(`${this.name}이 뛴다.`)
    }
    
    speak() {
		console.log(`${this.name}이 말한다.`);		
    }
    
    hit() {
        console.log(`${this.name}이 주먹으로 사냥감을 사냥하다.`)
    }
    
    shareInfo() {
        console.log(`${this.name}의 정보를 공유하다.`)
        return {
            name: this.name,
            height: this.height,
            weight: this.weight,
            age: this.age,
            gender: this.gender
        }
    }
}


class Warrior extends Human {

    constructor(name, height, weight, age, gender, knife) {
        super(name, height, weight, age, gender);
        this.knife = knife;
    }

    hitAndCutOpponent() {
        super.hit();
        console.log(`${this.name}이 칼으로 사냥감을 사냥하다`);
    }

    getKnife() {
        console.log(`${this.knife}종류의 칼을 사용하고 있다`)
    }
}

const su = new Warrior('su', 180, 100, 20, 'male', 'solider knife');
su.hitAndCutOpponent();
su.getKnife();
```

위 코드를 보면, `Human` 클래스를 상속한 `Warrior` 클래스 내부의 `hitAndCutOpponent` method 내부에서 `super`라는 예약어를 이용해 부모인 `Human` 클래스의 `hit`이라는 메소드를 사용하는 것을 알 수 있다. 이것이 바로 `OOP (객체지향 프로그램밍)`을 이루는 큰 기둥 중 하나인 `상속(Inheritance`)이다.

# 3. 다형성(Polymorphism)

> Poly= many, Morphism=form

하나의 `attribute(class 내부의 변수)` 혹은 `method(class 내부의 함수)`가 다른 방식으로 사용되는 경우가 발생할 수 있다. `다형성(Polymorphism)`은 의미 그대로 한 가지 기능을 의미하는 것이 아니라 하나의 이름이 여러 가지 방식으로 표현됨을 알 수 있다.

도형을 생각해 보자. 세 개 이상의 변의 가진 도형은 공통적으로 너비(width)와 높이(height)가 존재한다. 또한 각 도형에 특정 색(color)이 존재하고, 이 도형이 어떤 색깔이고 동시에 어떤 너비를 가지는지 출력하는 메소드(method)가 있다고 생각해 보자. 이것을 코드로 옮겨보자.

```javascript
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    draw() {
        console.log(`이 도형은 ${color} 색을 가졌습니다.`);
    }
    
    getArea() {
        return this.width * this.height;
    }
}
```

이번에는 이 `Shape` 클래스를 상속하는 `Rectangle` 클래스와 `Triangle` 클래스가 있다고 생각해 보자. `Triangle` 의 경우 넓이 공식이 `Shape`에 있는 `getArea 메소드(method)` 와는 다르다. 이때 `다형성(Polymorphism)`이라는 개념을 이용할 수 있다. 

이때 `다형성(Polymorphism)` 패러다임을 구현하기 위해 `Overriding`이라는 것을 사용할 수 있다. 어렵게 생각하지 말자. 그냥 `Shape` 클래스에 있는 `getArea 메소드(method)와` 똑같은 이름을 가진 `메소드(method)`를 `Triangle` 클래스에 정의하는 것이다. 이렇게 되면 `Triangle` 클래스에서 `getArea 메소드(method`)를 호출했을 때, 상속한 `Shape` 클래스의 `getArea 메소드(method)` 대신에, `Triangle` 클래스 자신만의 `getArea 메소드(method)`를 사용하는 것이다. 

이러한 것을 `다형성(Polymorphism)`이라 칭한다.`Shape` 클래스를 상속해 사용할 수 있는 것은 최대로 사용하고, 그중 마음에 안 드는 것은 내 입맛에 맞게 변경해 사용하겠다는 의도를 가진다. 단물만 쏙 빼먹고 나머지는 내가 알아서 구현하겠다 이런 의미로 받아들여도 된다 (부정적 의미로 작성한 말이 아니기 때문에 오해는 없길 바란다).

```javascript
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    draw() {
        console.log(`이 도형은 ${color} 색을 가졌습니다.`);
    }
    
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}

class Triangle extends Shape {
    constructor(width, height, color) {
        super(width, height, color);
    }
    
	getArea() {
        return (this.width * this.height) / 2;
    }  
}

class Trapezoid extends Shape {
    constructor(width, height, color, base1, base2) {
        super(width, height, color);
        this.base1 = base1;
        this.base2 = base2;s
    }
    
    getArea() {
        return ((base1 + base2) * height) / 2;
    }
}
```

#### 상속을 했다면 다음과 같은 논리가 성립한다.

`Triangle or Rectangle`클래스의 `객체(object)` 혹은 `인스턴스(instance)`라는 것은 `Shape` 클래스의 `객체(object)` 혹은 `인스턴스(instance)`임을 의미한다. `Shape` 클래스는 모든 `객체(object)` 혹은 클래스의 부모인 `Object`의 `객체(object)` 혹은 `인스턴스(instance)`임을 의미한다.

어떤 클래스의 `객체(object)` 혹은 `인스턴스(instance)`임을 확인하는 목적으로 `instanceof` 메소드를 사용할 수 있다.

```javascript
const rect = new Rectangle(10, 20, 'red');

console.log(rect instanceof Rectangle); // true
console.log(rect instanceof Shape); // true
console.log(rect instanceof Trapezoid); // false
console.log(rect instanceof Triangle); // false
console.log(rect instanceof Object); // true
```

















