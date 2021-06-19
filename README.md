# ToDos

## Introduction

ToDos is a React project with [React Hooks](https://reactjs.org/docs/hooks-intro.html), [styled-components](https://styled-components.com/), [axios](https://github.com/axios/axios) and the use of several npm libraries / packages to achieve the goals of building a ToDos page with good UXUI and complete testing

### Assumptions

A user should be able to

 1. Add/ delete items to/ from the list

 2. Fetch a list of todo items from https://jsonplaceholder.typicode.com/ todos and append the first 10 items to the list when first load
 
 2. Edit the list after the application is reopened

 3. Mark the item as completed with a click to the item

 4. Categorize items as "All", "Completed", "Active"

This project used the idea of atoms designs, which makes the code more organized, testable and scalable. For reference, [ATOM Design](http://atomicdesign.bradfrost.com/chapter-2/)

### Packages 
- styled-components
  - For component stylings, avoid inline styling and the use of css

- react-router-dom
  - Page routing

- axios
  - Http request package

- Jest & Enzyme
  - Unit testing

- eslint & prettier
  - Format & Beautify code

---

## Project tree

 * [Entry File](./index.js)
 * [App.tsx](./App.js)
 * [src](./src)
    * [core](./src/core)
      * [components](./src/core/components)
      * [lib](./src/core/lib)
        * [apis](./src/core/lib/apis)
        * [contexts](./src/core/lib/contexts)
        * [theme](./src/core/lib/theme)
        * [utils](./src/core/lib/utils)
    * [pages](./src/pages)
      * [ToDos](./src/pages/ToDos)

---

## Quick Start

For development, you will need Node.js and a node global package, NPM, installed in your environment.

### Prerequisite

1. Create `.env` file & put the endpoint base url in the _REACT_APP_API_ENDPOINT_ field

    ```
      REACT_APP_TODO_DEFAULT_ENDPOINT=https://jsonplaceholder.typicode.com/todos
      REACT_APP_TODO_LOCAL_STORAGE_KEY=REACT_TODO_LOCAL_STORAGE
      ESLINT_NO_DEV_ERRORS=true
    ```

### Start Server
  - Project runs on http://localhost:3000

    ```
        $  yarn install
        $  yarn start
    ```

### Test

    $ yarn test

### Format Code

    $ yarn lint:fix

### Build

    $ yarn build
    
---

### Remarks

  - React Hooks is used instead of Redux as the project does not really require the use of state management. Basic features like fetching & updating can be done by ___React.useEffect___.

  - Persistent storage is achieved by the use of ___Browser Local Storage___