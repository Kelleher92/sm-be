import * as express from 'express';
import * as UserService from './../services/PromoMats/authenticate';
const router = express.Router({ mergeParams: true });

// ========================================================================================
//  All api routes should follow a strict RESTful pattern to map HTTP to CRUD (Create, Read, Update Destroy)
//  There are 7 RESTful routes
//  * Index (GET method for all of type)
//  * NEW (GET method for initialising new creation)
//  * CREATE (POST method for savinf new creation)
//  * SHOW (GET method for showing specific item)
//  * EDIT (GET method to edit specific item)
//  * UPDATE (PUT method update a specific item)
//  * DESTROY (DELETE method to delete specific item)
// ========================================================================================

router.post('/login', UserService.userLogin);

export default router;
