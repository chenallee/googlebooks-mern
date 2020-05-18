# googlebooks-mern

## description
A full stack MERN application that allows the user to bookmark books found from the [Google Books API](https://developers.google.com/books), and check out a list of all saved books. There is no authentication so the database just stores the saved books, and does not associate them with a particular user. 

Check out the live site [here](https://fierce-reaches-88613.herokuapp.com/).

## technologies
The site was made with [create react app](https://create-react-app.dev/) using [bootstrap](https://react-bootstrap.github.io/) components on the front end. On the back end it uses [mongoose](https://mongoosejs.com/) and [mongo](https://www.mongodb.com/) for the database and runs on a [node.js](https://nodejs.org/en/) [express](https://expressjs.com/) server.

## final thoughts
I understand the structure for this type of full stack application on a basic enough level to replicate something similar, but I'm not confident in being able to explain how everything works behind the scenes in great detail.

When I get a chance, I have a few ideas I want to try out on the front end that are mostly aesthetic choices to suit a bookshelf skeumorphic theme. I might also attempt a socket.io toast alert when a book is bookmarked if I don't add user authentication.
