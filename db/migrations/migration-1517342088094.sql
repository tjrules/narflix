
\c narflixdb

DROP TABLE IF EXISTS movies;

CREATE TABLE IF NOT EXISTS movies (
  id BIGSERIAL PRIMARY KEY,
  title TEXT,
  imdb_id INTEGER,
  overview TEXT,
  poster_path TEXT,
  runtime INTEGER,
  tagline TEXT,
  genres TEXT,
  user_id INTEGER REFERENCES users(id)
)
