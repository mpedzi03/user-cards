# user-cards

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

# About

This User-Cards application is built using Vue.js, HTML, and CSS.
Within this application you can do a few cool things:
* read user data from an external API
* sort users by different methods, while having easy access to add new sorting methods
* add new users using a neat form that has full-fledged validation using the form validation library, Vuelidate


The app itself serves as a single page application that has one main page with dynamic shifting components.
Due to the architecture, there was no need to use Vue-Router to manage multiple pages.

The app uses Vuex for main user management processes, such as:
* get users
* sort users
* add users

It would be fairly straighforward to simply use the event bus or organize communication via a prop / emit style,
but being a veteran of Vuex it is difficult to not have it on hand to do basically anything you want within your app.
It is super easy to use and extremely flexible, although it does add a little overhead to be aware of.

## Future Improvements

* Get an actual UI Designer to offer some advice on the design. (I love CSS, but admittedly my skills required improvement.)
* Add ability to persist user data, both on page refresh and long term
* Add ability to export user data
* Add upvote feature to allow coworkers, friends, or visitors to upvote who they would like to work with
* Add an authentication / authorization system with an admin tool

### Thanks for checking it out!
#### - Michael Pedzimaz
