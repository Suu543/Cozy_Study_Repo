## React Hooks

## useState - Error-Example(Simple Use Case)
- 현재 아래 코드의 문제는 title의 값이 변경되었음에도 `re-rendering`을 하지 않는다는 점이다. 이때 `useState`를 사용하면 이 문제를 해결할 수 있다.
```javascript
import React from 'react';

const ErrorExample = () => {
  let title = 'random title';

  const handleClick = () => {
    title = 'hello people';
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
```

##  useState-Basics
```javascript
import React, { useState } from 'react';
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

const UseStateBasics = () => {
  // console.log(useState());
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);

  const [text, setText] = useState('random title');
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
```
##### useState Advanced
```javascript
console.log(useState);

useState(initialState) {
    var dispatcher = resolveDispatcher();
    return dispatcher.useState(initialState);
}

console.log(useState()); // [undefined, f]
console.log(useState("Hello World")); // ["Hello World", f]

const UseStateBasics = () => {
    const value = useState(1)[0];
    const handler = useState(1)[1];
    console.log(value, handler);

    return <h2>useState Basic Example</h2>
}
```

## General Rules of Hooks
1. Starts with use
2. Component must be uppercase
3. Invoke inside function/component body
4. Don't call hooks conditionally

## Error Case #1
- Component 이름이 소문자인 경우 오류 발생
- 아래와 같이 Component 이름이 소문자인 경우 오류 발생
```javascript
import React, { useState } from 'react';

const useStateBasics = () => {
  const [text, setText] = useState('random title');
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default useStateBasics;
```

## Error Case#2
- `function or component` 외부에서 호출시 오류 발생
```javascript
import React, { useState } from "react";

const [text, setText] = useState("random title");

const useStateBasics = () => {
  const handleClick = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default useStateBasics;
```

## Error Case#3
- `React Hook`은 조건부 호출이 불가능하다.
- `handler` 내부에서 호출이 가능하다.
```javascript
import React, { useState } from "react";

const useStateBasics = () => {
    const [text, setText] = useState("random title");
    
    // 다음과 같이 if 조건문 body 에서는 호출이 불가능하다
    if () { }

  const handleClick = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default useStateBasics;
```

## useState - Array Example
```javascript
// data.js
export const data = [
  { id: 1, name: 'john' },
  { id: 2, name: 'peter' },
  { id: 3, name: 'susan' },
  { id: 4, name: 'anna' },
];
```

```javascript
import React, { useState } from "react";
import { data } from "./data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className="item">
            <h4>{name}</h4>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
```
#### Improved Version
```javascript
import React, { useState } from "react";
import { data } from "./data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
```

## useState - Object Example
- `Spread Operator` 용례
```javascript
import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Yongsu",
    age: 25,
    message: "random message",
  });

  const changeMessage = () => {
    // 아래와 같이 설정하면, 기존의 name, age 키가 사라진다.
    // 그 이유는 person = { message: 'hello world' }를 할당한 것과 같은 상황이 발생하기 때문이다.
    // 이 문제를 해결하기 위해 Spread Operator를 사용할 수 있다.
    setPerson({ ...person, message: "Hello World" });
  };

  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
```

## useState - Multiple State Values
```javascript
import React, { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("yongsu");
  const [age, setAge] = useState(25);
  const [message, setMessage] = useState("random message");

  const changeMessage = () => {
    setMessage("Hello World");
  };

  return (
    <React.Fragment>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
```

## Simple Counter
```javascript
import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  return (
    <React.Fragment>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;
```
## Functional Update Form
- https://sangcho.tistory.com/entry/Commons-Mistakes-with-React-useState
- https://stackoverflow.com/questions/63852715/react-usestate-previousstate
- https://stackoverflow.com/questions/56404819/usestate-hook-setstate-function-accessing-previous-state-value
  
- 아래 코드의 문제점은 `setTimeout` 함수가 호출되는 시점의 `value` 값이 전달되고, 이 값을 기준으로 2초 후에 1을 더해 `state`에 반영하는 방식으로 동작한다. 이 방식은 다음과 같은 상황에서 문제가 발생한다.
1. `value`가 `0`인 상태에서 `Increase Later` 버튼을 클릭한다.
2. `2`초의 딜레이 상황 동안에, 다른 버튼을 통해서 이 값을 10으로 만들었다.
3. `setTimeout`에 전달된 `value`의 값은 `0`이기 때문에 2초 후 현재의 `state`에 값이 상관없이 `2`로 값이 설정된다.
4. 이렇게 되면 `sync`에 문제가 생겨서 버그 동작으로 간주되기 때문에 이 문제를 해결해야 한다.
```javascript
import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

// Version #1
  const complexIncrease = () => {
    setTimeout(() => {
      setValue(value + 1);
    }, 2000);
  };

  return (
    <React.Fragment>
      <section style={{ margin: "4rem 0" }}>
        <h2>More Complex Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrese
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </section>
      <section>
        <h2>More Complex Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          Increase Later
        </button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;
```

- 위에서 발생한 문제를 해결하기 위해 `setState` 함수의 인자로 함수를 전달하는 방법을 이용할 수 있다. 이 방법은 값을 직접적으로 전달하는 대신에, `setTimeout` 등의 함수가 2초 후에 실행되는 시점에 `value` 값을 이용해 덧셈을 한다. 그렇기 때문에 위에서 발생한 문제를 방지할 수 있다.
```javascript
import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

// Version #2
  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };


  return (
    <React.Fragment>
      <section style={{ margin: "4rem 0" }}>
        <h2>More Complex Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrese
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </section>
      <section>
        <h2>More Complex Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          Increase Later
        </button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;
```

```javascript
import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  // Functional Update Approach
  const removeItem = (id) => {
    // oldPeople or currentPeople
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id);
      return newPeople;
    })
  };

  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
```
#### Mimicking React's State Setting Logic
```javascript
let state = 5;

function setState(val) {
  if (typeof val === "function") {
    state = val(state);
  } else {
    state = val;
  }
}

setState(9);
setState(prev => prev + 1);
console.log("state", state);
```