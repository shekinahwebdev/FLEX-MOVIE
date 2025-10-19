// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// interface Movie {
//   id: number;
//   title: string;
//   overview: string;
//   poster_path: string;
//   backdrop_path: string;
//   trailerUrl: string;
// }
// interface MovieState {
//   list: Movie[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: MovieState = {
//   list: [],
//   loading: false,
//   error: null,
// };

// const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// export const fetchMoviesWithTrailers = createAsyncThunk(
//   "movies/fetchWithTrailers",
//   async () => {
//     const movieRes = await axios.get(
//       `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
//     );

//     const movies = movieRes.data.results.slice(0, 7);
//     console.log(movies);

//     const moviesWithTrailers = await Promise.all(
//       movies.map(async (movie: any) => {
//         const res = await axios.get(
//           `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${TMDB_API_KEY}`
//         );

//         // const trailer = res.data.results.find(
//         //   (v: any) => v.type === "Trailer" && v.site === "Youtube"
//         // );
//         const trailer =
//           movieRes.data.results.find(
//             (v: any) => v.type === "Trailer" && v.site === "YouTube"
//           ) || movieRes.data.results.find((v: any) => v.site === "YouTube");

//         console.log(trailer);

//         return {
//           id: movie.id,
//           title: movie.title,
//           overview: movie.overview,
//           poster_path: movie.poster_path,
//           backdrop_path: movie.backdrop_path,
//           trailerUrl: trailer
//             ? `https://www.youtube.com/watch?v=${trailer.key}`
//             : null,
//         } as Movie;
//       })
//     );
//     return moviesWithTrailers;
//   }
// );

// const movieSlice = createSlice({
//   name: "movies",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchMoviesWithTrailers.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchMoviesWithTrailers.fulfilled, (state, action) => {
//         state.loading = false;
//         state.list = action.payload;
//       })
//       .addCase(fetchMoviesWithTrailers.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message ? action.error.message : null;
//       });
//   },
// });

// export default movieSlice.reducer;

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
  activeMovie: Movie | null;
}

const initialState: MovieState = {
  list: [],
  loading: false,
  error: null,
  activeMovie: null,
};

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMoviesWithTrailers = createAsyncThunk(
  "movies/fetchWithTrailers",
  async () => {
    const movieNames = [
      "RRR",
      "Avatar",
      "Jawan",
      "Jurassic World",
      "Meg 2 The Trench",
      "Adipurush",
      "Virupaksha",
    ];

    const moviesWithTrailers = (
      await Promise.all(
        movieNames.map(async (name: any) => {
          const searchRes = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(
              name
            )}`
          );

          const movie = searchRes.data.results[0];

          const res = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${TMDB_API_KEY}`
          );

          const trailer =
            res.data.results.find(
              (v: any) => v.type === "Trailer" && v.site === "YouTube"
            ) || res.data.results.find((v: any) => v.site === "YouTube");

          if (!trailer) return null;

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
    ).filter((movie): movie is Movie => movie !== null); //

    return moviesWithTrailers;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setActiveMovieByName: (state, action) => {
      const found = state.list.find(
        (movie) => movie.title.toLowerCase() === action.payload.toLowerCase()
      );

      state.activeMovie = found ?? null;
    },
    clearActiveMovie: (state) => {
      state.activeMovie = null;
    },
  },
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

export const { setActiveMovieByName, clearActiveMovie } = movieSlice.actions;
export default movieSlice.reducer;
