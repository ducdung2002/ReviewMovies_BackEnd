import movieModel from "../models/movieModel.js";

class MovieRepo {
  async getAllMovies() {
    try {
      return await movieModel.find().populate("categories");
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getMovieById(id) {
    try {
      return await movieModel.findById(id).populate("categories");
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async searchByName(name) {
    try {
      const regex = new RegExp(name, "i");
      return await movieModel.find({ name: regex });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new MovieRepo();
