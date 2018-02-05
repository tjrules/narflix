const express = require('express');
const moviesController = require('../controllers/movie-controller');
const moviesRouter = express.Router();

moviesRouter.get('/', moviesController.index);
moviesRouter.post('/', moviesController.create);
moviesRouter.get('/new', moviesController.new);
moviesRouter.get('/:id', moviesController.show);
moviesRouter.get('/edit/:id', moviesController.edit);
moviesRouter.put('/:id', moviesController.update);
moviesRouter.delete('/:id', moviesController.delete);

module.exports = moviesRouter;
//movie-routes
