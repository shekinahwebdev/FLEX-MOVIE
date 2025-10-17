import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  trailerUrl: string | null;
}

interface MovieState {
  list: Movie[];
  loading: boolean;
  error: string | null;
}

const initialState: MovieState = {
  list: [],
  loading: false,
  error: null,
};

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMoviesWithTrailers = createAsyncThunk(
  "movies/fetchWithTrailers",
  async () => {
    const movieRes = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
    );

    const movies = movieRes.data.results.slice(0, 7);

    const moviesWithTrailers = (
      await Promise.all(
        movies.map(async (movie: any) => {
          const res = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${TMDB_API_KEY}`
          );

          const trailer =
            res.data.results.find(
              (v: any) => v.type === "Trailer" && v.site === "YouTube"
            ) || res.data.results.find((v: any) => v.site === "YouTube");

          if (!trailer) return null; // skip movies with no trailer

          return {
            id: movie.id,
            title: movie.title,
            overview: movie.overview,
            poster_path: movie.poster_path,
            backdrop_path: movie.backdrop_path,
            trailerUrl: `https://www.youtube.com/watch?v=${trailer.key}`,
          } as Movie;
        })
      )
    ).filter(Boolean); // remove nulls

    return moviesWithTrailers;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesWithTrailers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMoviesWithTrailers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchMoviesWithTrailers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export default movieSlice.reducer;
