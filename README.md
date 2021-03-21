<h3 align="center">The MoveApp (Netflix Clone) </h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]() 

[The MoveApp - Netfly Demo 🔗](https://silly-kirch-5f0330.netlify.app/)
</div>

## Summary

- [About](#about)
- [Getting Started](#getting_started) 
- [Prerequisites](#prerequisites)
- [Documentation](#Documentation)
- [Built Using](#built_using)
- [Author](#author)

## About 
This project  using The Movie Database (TMDb) API and React. Also focus in Web responsiveness and modern coding practices like React Hooks, Styled-Components, Storybook and Jest for Snapshots.

## Getting Started <a name = "getting_started"></a>

The documentation of the project can be found under [Documentation](#documentation) section.

The documentation of **TMDb** can be found here: [TMDb documentation](https://developers.themoviedb.org/3/getting-started/introduction)

The documentation of **React** and **Hooks** for reference: [React](https://reactjs.org/) and [Hooks](https://reactjs.org/docs/hooks-overview.html).

The documentation for **Storybook** for reference: [Storybook](https://storybook.js.org/)

The documentation for **Styled-Components** for reference [Styled-Components](https://styled-components.com/)

The documentation for **Typescript** for reference [Typescript](https://www.typescriptlang.org/)

## Prerequisites

This project use at least **React 16.8**, because React introduced [Hooks](https://reactjs.org/docs/hooks-overview.html) on this release.

For efficiency and organized development I prefer styling **React Components** with [styled-components](https://styled-components.com/).

As my package manager i'm using [Yarn](https://classic.yarnpkg.com/en/docs/install/)

I'm using **Typescript** on this project for adds the **Static Types** (props)

[Typescript](https://www.typescriptlang.org/docs/handbook/react.html)
### Installing locally

**git clone** this project locally in any folder of your computer, **install dependencies** and **run on the web browser**:

## Available Scripts

In the project directory, you can run:
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn storybook`

Storybook is a tool for UI development. It makes development faster and easier by isolating components. This allows you to work on one component at a time.

Open [http://localhost:6006/](http://localhost:6006/) to view it in the browser.

Go to Folder 

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Documentation

### API Environment

For getting data from **TMDb API** efficiently we need to store the **URLs** in **_variables_**/**_constants_**. This will avoid repeated URLs typing. You can name your constants the way you want, but try to keep it meaningful:
```js
// THE BASE API URL
const API_URL = "https://api.themoviedb.org/3/";

// GET YOUR KEY FROM TMDB DEVELOPER API
const API_KEY = "put your KEY from TMDb API";

// THE URL WHICH TRIGGERS SEARCH
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;

// THE URL WHICH TRIGGERS TRENDING NOW  MOVIES
const TRENDING_NOW = `${API_URL}/trending/all/day?api_key=${API_KEY}`;

// THE URL WHICH TRIGGERS NOW_PLAYING MOVIES

const NOW_PLAYING = `${API_URL}movie/now_playing?api_key=${API_KEY}&page=1`;

// THE BASE URL WHICH TRIGGERS IMAGES
const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";

// THE SIZE OF ALTERNATIVE BACKDROP IMAGES
const BACKDROP_SIZE = "w1280";

// THE SIZE OF MOVIES POSTER IMAGES
const POSTER_SIZE = "w500";
```

### Ratings Star Filter

In **RatingsFilter Component** we will restrict movies based on vote_average of the **TMDb API**.  To create that functionality we will use a `radio input HTML Element` which will mimic a star rating system and `useState Hook` to store the filtered ratings then restrict the results based on the radio id
```js
// VERIFY ANY VALUE CHANGES IN target.id AND UPDATE ratings ACCORDINGLY
  const handleInputChange = (e) => {
    setSelected(e.target.id);
  };
  ...
```

###  Search Movies

When  user types in  **Search Bar** it will return movies based on what is typed  without the necessity to press `Enter`. This gives a better user experience

```js
const doSearch = (event) => {
  // TRACKS THE USER INPUTS event.target
  const { value } = event.target;
  // SET A DELAY (1s) TO USER SEARCH QUERY AND AVOID ABRUPT RENDERING
  clearTimeout(timeOut.current);
  // STORE INPUTS IN value AND RETURN DATA WITH callback TO Home COMPONENT
  setState(value);

  timeOut.current = setTimeout(() => {
    callback(value);
  }, 500);
};
```
This will return the movies inside the `callback(value)`.

## Styled Components

With `styled-components` the development turns easier exemple:

```js
<StyledRatingsFilter>
    ...
    <StyledMovieWall>
        <StyledMovieCard>
        {
            ...
        }
        </StyledMovieCard>
    </StyledMovieWall>
</StyledRatingsFilter>

```

## Static Types

With `Static Types` we can enforce static types behavior by forcing `types` for every `props` in `React`.

```js
export interface ProgressBarProps {
size: number,
progress: number,
strokeWidth: number,
circleOneStroke: string,
circleTwoStroke: string,
stroke?: string | undefined,
}

```

## Built Using <a name = "built_using"></a>

- [VSCode](https://code.visualstudio.com/) 
- [Git](https://git-scm.com/) 
- [React](https://reactjs.org/)
- [Hooks](https://reactjs.org/docs/hooks-overview.html) 
- [PropTypes](https://www.npmjs.com/package/prop-types) 
- [Styled Components](https://styled-components.com/) 
- [Storybook](https://storybook.js.org/)
- [Typescript](https://www.typescriptlang.org/)
- [TMDb](https://developers.themoviedb.org/3/getting-started/introduction) 
- [Snapshot Testing](https://jestjs.io/docs/snapshot-testing)

## ✍️ Author <a name = "author"></a>
Juliana Leon [Github](https://github.com/waspfreak)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
