## First Component
```javascript
import React from "react";
import ReactDOM from "react-dom";

// stateless functional component
// always return JSX

function Greeting() {
  return <h4>This is Yongsu and this is my first component</h4>;
}

// const Greeting = () => {
//   // return React.createElement("h1", {}, "hello world");
//   return React.createElement(
//     "h1",
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };

ReactDOM.render(<Greeting />, document.getElementById("root"));
```

## JSX Rules
- return single element
- div / section / article or fragment
- use camelCase for html attribute
- className instead of class
- close every element
- formatting

```javascript
import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <div className="">
      <h3>Hello People</h3>
      <ul>
        <li>
          <a href="#">Hello World</a>
        </li>
        <img src="" alt="" />
        <input type="text" name="" id="" />
      </ul>
    </div>
  );
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
```

## Nested Component
```javascript
import React from "react";
import ReactDOM from "react-dom";

// Nested Components, React Tools
// Check out React DevTools

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => {
  return <h2>John Doe</h2>;
};

const Message = () => {
  return <p>This is my message</p>;
};

ReactDOM.render(<Greeting />, document.getElementById("root"));
```

## Mini Book Project
```javascript
import React from "react";
import ReactDOM from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=961&q=80"
    alt="Mini Book Project Image"
  />
);

const Title = () => <h1>I love you to the Moon and Back</h1>;
const Author = () => <h4>Yongsu Jeong</h4>;

ReactDOM.render(<Book />, document.getElementById("root"));
```

## CSS
```javascript
// index.css
import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article class="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=961&q=80"
    alt="Mini Book Project Image"
  />
);

const Title = () => <h1>I love you to the Moon and Back</h1>;
const Author = () => <h4>Yongsu Jeong</h4>;

ReactDOM.render(<BookList />, document.getElementById("root"));
```

```css
/* index.css*/
.booklist {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.book {
  flex: 1 1 25rem;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem 2rem;
}
```

## JSX - CSS
```javascript
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Yongsu Jeong
  </h4>
);
```

## JSX - JavaScript
```javascript
const Book = () => {
  const title = "I love you to the Moon and Back";
  const author = "Yongsu Jeong";

  return (
    <article class="book">
      <img
        src="https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=961&q=80"
        alt="Mini Book Project Image"
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* <p>{ let = x 6 (this is not allowed, only value is allowed)}</p> */}
      <p>{6 + 6}</p>
    </article>
  );
};
```

## Props
- First Version
```javascript
function BookList() {
  return (
    <section className="booklist">
      <Book
        title="First Book"
        author="First"
        img="https://images.unsplash.com/photo-1566108254099-3cea2ffb214a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
      />
      <Book
        title="Second Book"
        author="Second"
        img="https://images.unsplash.com/photo-1565502233254-3d22afd146eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
      />
    </section>
  );
}

// You can name it, as a rule of thumb, props
const Book = (props) => {
  console.log(props);

  return (
    <article class="book">
      <img src={props.img} alt="Mini Book Project Image" />
      <h1>{props.title}</h1>
      <h4>{props.author.toUpperCase()}</h4>
    </article>
  );
};
```

- Second Version
```javascript
const firstBook = {
  img: "https://images.unsplash.com/photo-1566108254099-3cea2ffb214a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
  title: "First Book",
  author: "First",
};

const secondBook = {
  img: "https://images.unsplash.com/photo-1565502233254-3d22afd146eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
  title: "Second Book",
  author: "Second",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}
```

## Props - Destructuring
```javascript
const Book = (props) => {
  const { img, title, author } = props;

  return (
    <article class="book">
      <img src={img} alt="Mini Book Project Image" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const BookTwo = ({ img, title, author }) => {
  return (
    <article class="book">
      <img src={img} alt="Mini Book Project Image" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};
```

## Props - Children
```javascript
function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>Props Children Test Case</p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      >
        <p>Props Children Test Case</p>
      </Book>
    </section>
  );
}

// You can name it, as a rule of thumb, props
const Book = ({ img, title, author, children }) => {
  return (
    <article class="book">
      <img src={img} alt="Mini Book Project Image" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  );
};
```

## Simple List
```javascript
const names = ["john", "peter", "susan"];
const newName = names.map((name) => {
  return <h1>{name}</h1>;
});

function BookList() {
  return <section className="booklist">{newName}</section>;
}
```

## Proper List
```javascript
// Ver 1
const books = [
  {
    img: "https://images.unsplash.com/photo-1566108254099-3cea2ffb214a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    title: "First Book",
    author: "First",
  },
  {
    img: "https://images.unsplash.com/photo-1565502233254-3d22afd146eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    title: "Second Book",
    author: "Second",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book img={img} title={title} author={author} />;
      })}
    </section>
  );
}

// You can name it, as a rule of thumb, props
const Book = ({ img, title, author }) => {
  return (
    <article class="book">
      <img src={img} alt="Mini Book Project Image" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};
```

```javascript
// Ver 2
const books = [
  {
    img: "https://images.unsplash.com/photo-1566108254099-3cea2ffb214a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    title: "First Book",
    author: "First",
  },
  {
    img: "https://images.unsplash.com/photo-1565502233254-3d22afd146eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    title: "Second Book",
    author: "Second",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book} />;
      })}
    </section>
  );
}

// You can name it, as a rule of thumb, props
const Book = (props) => {
  const { img, title, author } = props.book;

  return (
    <article class="book">
      <img src={img} alt="Mini Book Project Image" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};
```

## Key Prop and Spread Operator
- 요소 값에 변화가 없을 것으로 예측된다면 key에는 index 값을 할당해도된다.
```javascript
const books = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1566108254099-3cea2ffb214a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    title: "First Book",
    author: "First",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1565502233254-3d22afd146eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    title: "Second Book",
    author: "Second",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
}
```
#### Spread Operator
```javascript
function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

// You can name it, as a rule of thumb, props
const Book = (props) => {
  const { img, title, author } = props;

  return (
    <article class="book">
      <img src={img} alt="Mini Book Project Image" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
```

## Event Basics
- https://reactjs.org/docs/events.html
```javascript
const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver

  const clickHandler = () => {
    alert("Hello World");
  };

  return (
    <article class="book">
      <img src={img} alt="Mini Book Project Image" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
    </article>
  );
};
```

```javascript
const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver

  const clickHandler = () => {
    alert("Hello World");
  };

  return (
    <article class="book">
      <img src={img} alt="Mini Book Project Image" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
    </article>
  );
};
```

```javascript
// 차이점 알기
// <button type="button" onClick={() => complexExample(author)}>
// <button type="button" onClick={complexExample(author)}>

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello World");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article class="book">
      <img src={img} alt="Mini Book Project Image" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More Complex Example
      </button>
    </article>
  );
};
```

## Import and Export Statements
```javascript
// index.js
import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";
import { books } from "./books.js";
// export default이기 때문에 이름은 어떤 것을 사용해도 상관없다.
import Book from "./Book.js";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
```

```javascript
// Book.js
import React from "react";

const Book = ({ img, title, author }) => {
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello World");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="Mini Book Project" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More Complex Example
      </button>
    </article>
  );
};

export default Book;
```

```javascript
// books.js
export const books = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1566108254099-3cea2ffb214a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    title: "First Book",
    author: "First",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1565502233254-3d22afd146eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    title: "Second Book",
    author: "Second",
  },
];
```

