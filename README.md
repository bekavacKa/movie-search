
# MOVIE / TV SHOWS SEARCH APP
    React - TypeScript


## 🔗 Links
    Visit web application by clicking the button 
    or copy link ( https://movie-search-bekavac-ka.netlify.app/ )
[![portfolio](https://img.shields.io/badge/netlify-movie_search-000?style=for-the-badge&logoColor=white)](https://movie-search-bekavac-ka.netlify.app/)

## HOW TO START
    1. Download or clone the movie-search repository to your computer.

    2. Open the project (folder) using the terminal
    
        2.1  Using the terminal, enter the movie-search folder and run the command "npm i"

    3. After installation (npm i)

        3.1 3.2 Using the terminal enter the folder movie-search and run the command "npm start"

### APP REQUIREMENTS

    When the app loads, the TV SHOWS tab should be selected.
    Clicking on a tab loads the top 10 MOVIES/TV SHOWS depending on the selected tab.

    The search field should be live and react to any change in the input field.
    The search should fire a request on the search endpoint from TMDB and not filter the top 10 results.
    The search is performed only when there are 3 or more characters in the search bar and it should be triggered only one second after the user has stopped typing.
    When there are fewer than 3 characters in the search bar, the content should revert back to the top 10 MOVIES/TV SHOWS.
    When the search is performed, results should appear under the search box.
    Switching between tabs while searching should trigger the search again with the same search term for the selected tab and update the results.

    When the user clicks on a specific MOVIE/TV SHOW, he is taken to the details view.

    The Detailed View of the Movie/TV Show should show the cover image on top and in the case of Movies/TV Shows which have a trailer should show the trailer video instead of the cover image. Below the image/trailer some basic information regarding the selected Movie/TV Show should be shown.

    The Back Button should return the user back to where he was and with the same state before clicking to see more information about a Movie/TV Show.
    (This means that the correct tab should be selected and if the user came from a search - the search result with the search term should be there. 

### Technical requirements for React

    1. React version 16.8 or later should be used
    2. React is focused more on the UI so you will need something to save and consume the state
        2.1 React Context, MobX, Redux might help with that
    3. Use React Router
    4. Use Typescript
    5. Showcase correct usage of:
        5.1 Functional and Stateful Components
        5.2 Working with global state
        5.3 React Hooks
        5.4 Typescript
    6. Don’t use Bootstrap or similar CSS frameworks, showcase us proper HTML structure and CSS layout skills

### Bonus Points

    1. Use ESLint or any other form of linting/static analysis to have nice and clean code
    2. Use a clean and logical app architecture
    3. Write some tests for your app (maybe use Enzyme, Karma, or Testing Library)
    4. Make the app responsive
    5. Style the app (maybe add some color, animations, and borders - show us you have an eye for design)


### USED TECHNOLOGIES, LIBRARIES FOR DEVELOPMENT

    AXIOS
    SASS
    REACT ROUTER 6 
    REDUX (REDUX TOOLKIT)
    REACT ROUTER DOM
    REACT ICONS
    ANIMATE CSS
    LODASH.DEBOUNCE