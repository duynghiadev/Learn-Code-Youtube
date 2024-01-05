[Link Repo](https://github.com/MiguelLamas/react-hooks-practice)

# React Hooks Practice

## Understanding and practicing 9 core Hooks from React:

# What are React Hooks? 

React Hooks are Javascript Functions that have access to deep React features (state, side effects, etc), which you can add to your Components to separate concerns and maintain pure stateless components.
##

## `useState` :  A Component's Memory

* <ins>`useState`</ins> is a React Hook that lets you add a [state variable](https://react.dev/learn/state-a-components-memory) to your component.

  * Components often need to change what’s on the screen as a result of an interaction. Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” should put a product in the shopping cart. Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called `state`.

## `useReducer` :  Extracting State Logic into a Reducer

* <ins>`useReducer`</ins> is a React Hook that lets you add a [reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer) to your component.

  * Components with many state updates spread across many event handlers can get overwhelming. For these cases, you can consolidate all the state update logic outside your component in a single function, called a reducer.

  * As your components grow in complexity, it can get harder to see at a glance all the different ways in which a component’s state gets updated. For example, a TaskApp component which holds an array of tasks in state, and uses three different event handlers to add, remove, and edit tasks.

## `useRef` :  Reference a value that’s not needed for rendering.

* <ins>`useRef`</ins> is a React Hook that lets you reference a value that’s not needed for rendering.

  * You can store information between re-renders (unlike regular variables, which reset on every render).
  * Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).
  * The information is local to each copy of your component (unlike the variables outside, which are shared).
  * It’s particularly common to use a ref to manipulate the DOM. React has built-in support for this.
  
## `useLayoutEffect` :  Measuring layout before the browser repaints the screen.

* <ins>`useLayoutEffect`</ins> is a version of `useEffect` that fires before the browser repaints the screen.

  * Most components don’t need to know their position and size on the screen to decide what to render. They only return some JSX. Then the browser calculates their layout (position and size) and repaints the screen.
  
  
## `useImperativeHandle` : Customise the handle exposed as a ref.

* <ins>`useImperativeHandle`</ins> is a React Hook that lets you customize the handle exposed as a [ref](https://react.dev/learn/manipulating-the-dom-with-refs).

  * Call `useImperativeHandle` at the top level of your component to customize the ref handle it exposes.
  * Do not overuse refs. You should only use refs for imperative behaviors that you can’t express as props: for example, scrolling to a node, focusing a node, triggering an animation, selecting text, and so on.
  * If you can express something as a prop, you should not use a ref. For example, instead of exposing an imperative handle like { open, close } from a Modal component, it is better to take isOpen as a prop like <Modal isOpen={isOpen} />. [Effects](https://react.dev/learn/synchronizing-with-effects) can help you expose imperative behaviors via props.

## `useContext` : Passing Data Deeply with Context.

* <ins>`useContext`</ins> is a React Hook that lets you read and subscribe to [context](https://react.dev/learn/passing-data-deeply-with-context) from your component.
 * Usually, you will pass information from a parent component to a child component via props. But passing props can become verbose and inconvenient if you have to pass them through many components in the middle, or if many components in your app need the same information. 
 * `Context` lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.

## `useMemo` : Cache A Calculation Between Re-Renders.

* <ins>`useMemo`</ins> is a React Hook that lets you cache the result of a calculation between re-renders.
    
## `useCallback` : Cache A Function Definition Between Re-Renders.

* <ins>`useCallback`</ins> is a React Hook that lets you cache a function definition between re-renders.

