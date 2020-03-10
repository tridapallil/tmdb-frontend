# AT-front

This is a webapp made to show upcoming movies, consuming an API made with Typescript, which consume an API from TMDB.
The main page from app, show the upcoming movies. The user is able to search movies and see the details from it.

## Techs

Made with React, the project could be easily adapted to a mobile app, made with React Native. This tech was chosen
by the performance and technologies that make implementation easier.

### Used Techs

- **[Axios](https://www.npmjs.com/package/axios "axios")** -> Used to do requests to API

- **[React router dom](https://www.npmjs.com/package/react-router-dom)** -> Responsable to do all the navigation

- **[Styled Components](https://styled-components.com)** -> Used to style components from react.

- **[Date FNS](https://date-fns.org)** -> Used to convert date.

- **[History](https://www.npmjs.com/package/react-history)** -> Used to manage session history.

- **[EsLint](https://www.npmjs.com/package/eslint)** -> Used to make the code clean and standardized.

- **[RocketSeat Unform](https://www.npmjs.com/package/@rocketseat/unform)** -> Used to make form submit (search).

- **[Prop Types](https://www.npmjs.com/package/prop-types)** -> Used to document the intended types.

- **[Query String](https://www.npmjs.com/package/query-string)** -> Convert query strings

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

## Considerations
The next step is make tests, error handling and add some new features to make the user experience better.
