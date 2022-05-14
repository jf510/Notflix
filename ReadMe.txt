Welcome to the NOTFILX App! This app is a recreation of the netflix home page.

Components:

With in the app we have some of the following components:

    - Banner.js
        Banner.js is the component that contains the top video poster. This banner contains an image, a title, two buttons and a description of the movie.
        The data that is used to create the banner is fetched from 'the movie db' - API baseURL: "https://api.themoviedb.org/3". Below the div that contains banner, there is an empty div that is styled with a linear gradient in order to make the fade from the banner, to the first row of movies a little smoother.

    - Row.js
        Row.js contains all the rows of movies. These rows are essentially movie categories that the user can scroll through. Similarly to Banner.js, all the data is fetched from 'the movie db' api and then styled into rows.

Currently working on:

    - 1.
        On the main page I want the user to be able to click on any movie below the banner, and see the movie trailer played below. Then when the movie is clicked again, the trailer should stop playing and remove itself from the page. The problem that I am having is that when I write the handleCLick function in Row.js, I am getting an error from within the urlParams function -->  const urlParams = new URLSearchParams(new URL(url).search); Once I figure this error out the user will be able to play movie trailers.

    - 2.
        Also on the main page, there is a nav bar at the very top. It has the Neflix logo on the left and an account user avatar on the right. I want users to be able create their accounts from a sign in page, and then login to their account.
