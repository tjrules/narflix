const options = {
  receive: (data, result, e) => {
    // console.log("this is from receive: ", e.query)
  },
  query: (e) => {
    // console.log("this is e.query:", e.query)
  }
};


const pgp = require('pg-promise')(options);

function setDatabase() {
  if(process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    return pgp({
      database:'narflixdb',
      port:5432,
      host:'localhost'
    });
  } else if (process.env.NODE_ENV === 'production') {
      return pgp(process.env.DATABASE_URL);
  }
}

const db = setDatabase();

module.exports = db;



