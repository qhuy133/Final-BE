const mongoose = require("mongoose");

const { Schema } = mongoose;
const movieSchema = new Schema({
  title: {
    type: String,
    required: false,
    trim: true,
  },
  image: {
    type: String,
  },
  language: {
    type: String,
    required: false,
    trim: true,
    lowercase: true,
  },
  genre: {
    type: String,
    required: false,
    trim: true,
    lowercase: true,
  },
  director: {
    type: String,
    required: false,
    trim: true,
  },
  cast: {
    type: String,
    required: false,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
  },
  duration: {
    type: Number,
    required: false,
  },
  releaseDate: {
    type: Date,
    required: false,
  },
  endDate: {
    type: Date,
    required: false,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
