// Create web server
// Route: /comments
// Method: POST
// Description: Add a new comment
router.post('/', function(req, res, next) {
  // Get the comment object from the request body
  var comment = req.body;
  // Add a timestamp to the comment object
  comment.timestamp = new Date().getTime();
  // Add a unique id to the comment object
  comment.id = uuid.v4();
  // Add the comment to the array of comments
  comments.push(comment);
  // Set the response status code to 201 Created
  res.status(201);
  // Send the comment object as the response body
  res.json(comment);
});

// Path: comments.js
// Create web server
// Route: /comments/:id
// Method: PUT
// Description: Update a comment
router.put('/:id', function(req, res, next) {
  // Get the id from the request
  var id = req.params.id;
  // Get the comment object from the request body
  var comment = req.body;
  // Find the comment in the array of comments
  var index = _.findIndex(comments, {id: id});
  // Replace the comment in the array of comments
  comments[index] = comment;
  // Set the response status code to 200 OK
  res.status(200);
  // Send the comment object as the response body
  res.json(comment);
});

// Path: comments.js
// Create web server
// Route: /comments/:id
// Method: DELETE
// Description: Delete a comment
router.delete('/:id', function(req, res, next) {
  // Get the id from the request
  var id = req.params.id;
  // Remove the comment from the array of comments
  _.remove(comments, {id: id});
  // Set the response status code to 204 No Content
  res.status(204);
  // Send the response body
  res.send();
});

// Export the router
module.exports = router;