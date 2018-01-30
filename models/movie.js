const db = require('../db/config');

const Movie = {};

Movie.findAll = id => {
  return db.query(`SELECT *, goals.id FROM goals JOIN users ON goals.user_id = users.id WHERE goals.user_id = $1`, id)
};


Movie.findById = id => {
  return db.oneOrNone(`SELECT * FROM goals WHERE id = $1`, [id])
};

Movie.create = (movies) => {
  console.log("created movie");
  return db.one(
    `
      INSERT INTO movies
      (imdb_id, overview, poster_path, runtime, tagline, genres, user_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *
    `,
    movies.imdb_id, movies.overview, movies.poster_path, movies.runtime, movies.tagline, movies.genres, movies.user_id]
  );
};


Movie.update = (goals, id) => {
  console.log("update working");
  return db.none(
  `
    UPDATE movies SET
    description = $1,
    step1 = $2,
    step2 = $3,
    step3 = $4,
    step4 = $5
    WHERE id = $6
  `,
  [goals.description, goals.step1, goals.step2, goals.step3, goals.step4, id]
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
