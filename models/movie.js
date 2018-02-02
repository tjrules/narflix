const db = require('../db/config');

const Movie = {};

Movie.findAll = id => {
  return db.query(`
    SELECT *, movies.id FROM movies
    JOIN users ON movies.user_id = users.id
    WHERE users.id = $1
    `, id)
};


Movie.findById = id => {
  return db.oneOrNone(`SELECT * FROM movies WHERE id = $1`, [id])
};

Movie.create = (movies) => {
  console.log("inside create movie");
  return db.one(
    ` 
      INSERT INTO movies
      (title, imdb_id, overview, poster_path, runtime, tagline, genres, user_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *
    `,
    [movies.title, movies.imdb_id, movies.overview, movies.poster_path, movies.runtime, movies.tagline, movies.genres, movies.user_id]
  );
};


Movie.update = (goals, id) => {
  console.log("update working");
  return db.none(
  `
    UPDATE movies SET
    title = $1,
    imdb_id = $2,
    overview = $3,
    poster_path = $4,
    runtime = $5,
    tagline = $6,
    genres = $7
    WHERE id = $8
  `,
  [movies.title, movies.imdb_id, movies.overview, movies.poster_path, movies.runtime, movies.tagline, movies.genres, movies.user_id]
    );
};


Movie.delete = id => {
  console.log('model delete running');
  return db.none(
    `
      DELETE FROM movies
      WHERE id = $1
    `,
    [id]
  );
};



module.exports = Movie;
//movie model
