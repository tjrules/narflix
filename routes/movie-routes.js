const express = require('express');
const goalsController = require('../controllers/movie-controllers');
const moviesRouter = express.Router();

moviesRouter.get('/', moviesController.index);
moviesRouter.get('/new', moviesController.new);
moviesRouter.get('/:id', moviesController.show);
moviesRouter.get('/:id/edit', moviesController.edit);
moviesRouter.put('/:id', moviesController.update);
moviesRouter.post('/', moviesController.create);
moviesRouter.delete('/:id', moviesController.delete);

module.exports = moviesRouter;
//movie-routes
