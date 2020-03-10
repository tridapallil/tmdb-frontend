# AT-front

This is a webapp made to show upcoming movies, consuming an API made with Typescript, which consume an API from TMDB.
The main page from app, show the upcoming movies. The user is able to search movies and see the details from it.

## Techs

Made with React, the project could be easily adapted to a mobile app, made with React Native. This tech was chosen
by the performance and technologies that make implementation easier.

### Used Techs

- **[Axios](https://www.npmjs.com/package/axios "axios")**

- **[React router dom](https://www.npmjs.com/package/react-router-dom)**

- **[Styled Components](https://styled-components.com)**

- **[Date FNS](https://date-fns.org)**

- **[History](https://www.npmjs.com/package/react-history)**

- **[EsLint](https://www.npmjs.com/package/eslint)**

- **[RocketSeat Unform](https://www.npmjs.com/package/@rocketseat/unform)**

- **[Prop Types](https://www.npmjs.com/package/prop-types)**

- **[Query String](https://www.npmjs.com/package/query-string)**

## How to Run
**Considering that the api server is runnning**

- Clone the project

```
yarn
```

```
yarn start
```

### Directory Structure

```
├── /app/               # Source code and logic of WebApp,
│   |── /pages/         # All the pages implementation, including styles and assets
│   ├── /routes/        # Routes logic to navigate the WebApp
│   ├── /services/      # The services need to run the app, such as the api configuration and the history app
│   ├── /styles/        # Contain all global style from app
```
