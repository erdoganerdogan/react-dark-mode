import React from "react";

export default function Main(props) {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <h1 className="main--title">How to Learn React</h1>
      <ul className="main--facts">
        <li>
          Before you can code using React, you need to learn HTML, CSS, and
          JavaScript.
        </li>
        <li>You should start learning React by exploring how JSX works.</li>
        <li>
          Components are the building blocks upon which all React JS-powered
          applications are built.
        </li>
        <li>
          As you start to learn about React, you should spend time learning
          about how you can render lists of data on a web page.
        </li>
        <li>
          Every component in a React app can have its own state, which is part
          of an object called this.
        </li>
        <li>
          Before you start learning React, ask yourself: How do you learn best?
          Do you like tutorials? Or do you prefer online videos? Do you like
          working on interactive projects, or prefer to work through theory then
          build your own projects? By answering this question upfront, you’ll be
          able to refine your focus as you look for learning materials.
        </li>
      </ul>
    </main>
  );
}
