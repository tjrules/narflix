//movie controller
const Movie = require('../models/movie');
const moviesController = {};

moviesController.index = (req, res) => {
 // console.log('inside movie index', req.user)
 Movie.findAll(req.user.id)
   .then(movies => {
     // console.log('this is movies', movies)
     res.json({
       message: 'jase is the greatest',
       movies
     })
   // console.log('this is movies',movies)
   })
   .catch(err => {
     console.log(err);
     res.status(400).json({ err });
   });
};

moviesController.new = (req, res) => {
 res.render('movies/new')
};

moviesController.create = (req, res) => {
 Movie.create({
     title: req.body.title,
     imdb_id: req.body.imdb_id,
     overview: req.body.overview,
     poster_path: req.body.poster_path,
     runtime: req.body.runtime,
     tagline: req.body.tagline,
     genres: req.body.genres,
     user_id: req.user.id
   })
   .then(movie => {
     res.json({
       message: 'commas suck',
       movie
     })
   })
   .catch(err => {
     console.log('ya messed it up, TJ', err)
     res.status(400).json(err);
   });
};

moviesController.show = (req, res) => {
 Movie.findById(req.params.id)
   .then(movies => {
     console.log('show controller working');
     res.json({ movies:movies })
   })
   .catch(err => {
    console.log('why is show controller is not working')
    console.log(req.params)
     res.status(400).json(err);
   });
};


moviesController.edit = (req,res) => {
 Movie.findById(req.params.id)
   .then(movies => {
    console.log('edit this is controller')
     res.json({
      data:movies,
     })
   })
   .catch(err => {
    console.log('controller is not working')
     res.status(400).json(err)
   })
}


moviesController.update = (req, res) => {
 Movie.update({
     title: req.body.title,
     imdb_id: req.body.imdb_id,
     overview: req.body.overview,
     poster_path: req.body.poster_path,
     runtime: req.body.runtime,
     tagline: req.body.tagline,
     genres: req.body.genres,
   }, req.params.id)
   .then( movies => {
     res.redirect(`favorites/${req.params.id}`)
   })
   .catch(err => {
     res.status(400).json(err);
   });
};


moviesController.delete = (req, res) => {
 Movie.delete(req.params.id)
   .then(mov => {
     res.redirect('/')
   })
   .catch(err => {
     res.status(400).json(err);
   });
};

module.exports = moviesController;
