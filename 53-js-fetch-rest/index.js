// set base URL to your json server
// Ex: http://localhost:3000
const baseURL = "http://localhost:3000";
/**
 * BEFORE YOU START:
 * 1. Run `npm install -g json-server`
 * 2. In this directory, run `json-server db.json`
 * 		to serve your back end API
 * 3. In your broser, go to http://localhost:3000/comments,
 * 		to view the available data
 */

/**
 * Exercise 1
 *
 * create an async function {getComments}, which 
 * gets data from URL and returns the data as JS objects
 *
 * Note: test this function with an URL from your json-server API
 */
let getComments = async () => {
    return await fetch(`${baseURL}/comments`).then(res => res.json())
}

getComments()
/**
 * Exercise 2
 *
 * create an async function {postComment}, which takes {newComment} as an argument,
 * and posts it to the comments URL.
 *
 * This function should return the data recieved
 * from the server if successful, or "Oops something went wrong!" if not.
 *
 * Don't forget to handle errors.
 */
let postComment = async (newComment) => {
    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(newComment),
    };

    return await fetch(`${baseURL}/comments`, configObject)
    .then(res => (res.ok) ? res.json() : "Oops something went wrong!")
}

/**
 * Exercise 3
 *
 * Create an async function {patchComment}, which takes {comment}
 * and {newCommentBody} as arguments.
 *
 * It should send a patch request to update the comment in the database with
 * the newCommentBody as the new body value.
 *
 * This function should return the updated object if
 * successful, or "Oops we couldn't update that!" if not.
 *
 * Don't forget to handle errors.
 */
let patchComment = async (comment, newCommentBody) => {
    const configObject = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({body : newCommentBody}),
    };

    return await fetch(`${baseURL}/comments/${comment.id}`, configObject)
    .then(res => (res.ok) ? res.json() : "Oops we couldn't update that!")
}

/**
 * Exercise 4
 *
 * create an async function {putComment}, which takes {comment} as an argument,
 * and makes a put request with the new comment data.
 *
 * This function should return the updated comment if
 * successful, or "Oops we couldn't update that!" if not.
 *
 * Don't forget to handle errors.
 */
let putComment = async (comment) => {
    const configObject = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(comment),
    };

    return await fetch(`${baseURL}/comments/${comment.id}`, configObject)
    .then(res => (res.ok) ? res.json() : "Oops we couldn't update that!")
}

/**
 * Exercise 5
 *
 * create an async function {deleteComment}, which takes {comment} as an argument,
 * and deletes the selected comment from DB.
 * This function should return "Deleted!" if successful,
 * or "That could not be deleted!" if not.
 *
 * Don't forget to handle errors.
 */
let deleteComment = async (comment) => {
    const configObject = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(comment),
    };

    return await fetch(`${baseURL}/comments/${comment.id}`, configObject)
    .then(res => (res.ok) ? "Deleted!" : "That could not be deleted!")
}
