// middle ware 
// global middleware
function globalMiddlware (req, res, next){
    console.log(`${req.method} - ${req.url}`);
    console.log("I am a global middleware");

    if(req.query.bad){
        return res.status(400).send("Bad Request");
    }

    next();
}

// local middleware
function localMiddleware(req, res, next){
    console.log("I am a local middleware");
    next();
}

// middleware responsibility
/*
 - Responsibilities of middleware
 - Handle common task
 - Request logs
 - Filter request 
 - Modify or reshape request
 - Validate request body
 - Authenticate or authorize request
 - Add additional details to request body
 - Response bad request
 - Pass request to next middleware or response handler
*/ 