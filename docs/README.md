
<h1 align="center"> MyReadit</h1><p align="center">
<div align="center">
<p align="center">React CRUD App </p>
</div>

### backend repo
-  https://github.com/esther615kim/nodejs-jest-my-readit

### hosted backend project 
- https://dashboard.heroku.com/apps/ek-reddit/api

### 📣 How to run

- To run the app, clone the repo and run it with `npm install` in your terminal.

- Run `npm run start` to start the app.

- minimum versions of `Node.js`: Node.js `v17.1.0`

### ✏ What I've learned

  `React`
  #### Global state management using context and useReducer hooks
- `authContext.js`, `authReducer.js`,`commentContext.js`,`articleContext.js`
#### Reusable components
- `LikeButton` used in `PostCard` and `CommentCard`
- `PostCard` used in `Posts`,`ProfilePage` and `UserPage`
- `CommentCard` used in  `Comments`,`ProfilePage` and `UserPage`
#### Immedate update without re-rendering/refreshing page
- click `Like` button
- create `comment`
- delete `comment` and `post`
#### Asynchronous function calls in useEffect hook
- `loading` state to avoid unnecessary re-rendering
#### Authentification
- only logged in users can create or delete posts/comments
- users can only delete their own posts/comments

`React-router-dom v6`
#### Send a prop using `useLocation` in `Link`
```js
  const location = useLocation();
  const {from} = location.state;
```
#### `useNavigate()` to redirect a path
```js
  const navigate = useNavigate();

  const handleClickDelete = (e) => {

    e.preventDefault();
    deleteAPost(id);
    navigate("/");
```

 `Typescript`
- Typescript Eslint setting
- react-testing-library with Typescript
- types for React hooks
- Interface types

### 🕵️‍♀️ Area for improvement
- [] lazy loading
- [] testing code
- [] refactor in TypeScript

