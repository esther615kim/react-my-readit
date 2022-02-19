 
### backend repo
-  https://github.com/esther615kim/nodejs-jest-my-readit

### hosted backend project 
- https://dashboard.heroku.com/apps/ek-reddit/api

### How to run

- To run the app, clone the repo and run it with `npm install`.

- Run `npm run start` to start the app.

- minimum versions of `Node.js`: Node.js `v17.1.0`


### What I've practiced and learned from the project
 `Typescript`
- How to set Typescript Eslint setting
- How to set react-testing-library with Typescript
- How to set types for React hooks
- Interface types

 `React-router-dom v6`
- How to send a prop using useLocation in `Link`
https://v5.reactrouter.com/web/api/Hooks/uselocation
```js
  const location = useLocation();
  const {from} = location.state;
```
- How to use `useNavigate()` to redirect a path
```js
  const navigate = useNavigate();

  const handleClickDelete = (e) => {

    e.preventDefault();
    deleteAPost(id);
    navigate("/");
```

  `React`
- context and useReducer for global management
- How to handle asynchronous functions in useEffect

  `Others` (to-dos)
- performance check
