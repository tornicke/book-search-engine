# Book Search Engine

## Purpose

The purpose of this challenge is to refactor the starter code (that has a fully functioning Google Books API search engine built with a RESTful API) convert it into a GraphQL API built with Apollo Server.

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Acceptance Criteria

<li>GIVEN a book search engine, WHEN I load the search engine, THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
</li>
<li>WHEN I click on the Search for Books menu option, THEN I am presented with an input field to search for books and a submit button
</li>
<li>WHEN I am not logged in and enter a search term in the input field and click the submit button, THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
</li>
<li>WHEN I click on the Login/Signup menu option, THEN a modal appears on the screen with a toggle between the option to log in or sign up
</li>
<li>WHEN the toggle is set to Signup, THEN I am presented with three inputs for a username, an email address, and a password, and a signup button</li>
<li>WHEN the toggle is set to Login, THEN I am presented with two inputs for an email address and a password and login button
</li>
<li>WHEN I enter my account’s email address and password and click on the login button, THEN I the modal closes and I am logged in to the site
</li>
<li>WHEN I am logged in to the site, THEN the menu options change to Search for Books, an option to see my saved books, and Logout
</li>
<li>WHEN I am logged in and enter a search term in the input field and click the submit button, THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
</li>
<li>WHEN I click on the Save button on a book, THEN that book’s information is saved to my account
</li>
<li>WHEN I click on the option to see my saved books, THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Googl Books site and a button to remove a book from my account
</li>
<li>WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
</li>
<li>WHEN I click on the Logout button, THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
</li>

## Screenshots

![image](https://github.com/tornicke/book-search-engine/blob/ef12327c0f1f1c8079d267f361dbdb39998fd016/images/Screenshot-Book-Search-Engine.png)

## Required URLs

[Live deployment URL](https://salty-fortress-09368.herokuapp.com/)

[GitHub repository URL](https://github.com/tornicke/book-search-engine)
