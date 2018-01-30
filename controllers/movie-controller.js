//movie controller
const Movie = require('../models/movie');
const moviesController = {};

moviesController.index = (req, res) => {
  Movie.findAll(req.user.id)
  .then(movie => {
    res.render('movies/', { movies: movie });
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

moviesController.new = (req, res) => {
  res.render('movies/new')
};

moviesController.create = (req, res) => {
  Movie.create({
      imdb_id: req.body.imdb_id,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      runtime: req.body.runtime,
      tagline: req.body.tagline,
      genres: req.body.genres,
      user_id: req.user.id
    })
    .then(movie => {
      res.redirect(`movies/${movie.id}`)
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

moviesController.show = (req, res) => {
  Movie.findById(req.params.id)
    .then(movies => {
      // console.log(moviescontrollershow);
      res.render(`movies/show`, { movies:movies })
    })
    .catch(err => {
      res.status(400).json(err);
    });
};


moviesController.edit = (req,res) => {
  Movie.findById(req.params.id)
    .then(movies => {
      res.render(`movies/edit`, {
        goals:goals
      })
    })
    .catch(err => {
      res.status(400).json(err)
    })
}


moviesController.update = (req, res) => {
  Movie.update({
      imdb_id: req.body.imdb_id,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      runtime: req.body.runtime,
      tagline: req.body.tagline,
      genres: req.body.genres,
    }, req.params.id)
    .then( movies => {
      res.redirect(`${req.params.id}`)
    })
    .catch(err => {
      res.status(400).json(err);
    });
};


moviesController.delete = (req, res) => {
  Movie.delete(req.params.id)
    .then(() => {
      res.redirect('/')
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

module.exports = moviesController;
