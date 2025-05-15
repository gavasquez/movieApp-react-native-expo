import { useEffect, useState } from "react";
import { Movie } from "../../core/entities/movie.entity";
import * as UseCases from "../../core/use-cases";
import { movieDBFetcher } from "../../config/adapters/movieDB.adpater";

let popularPageNumber = 1;

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlagingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBFetcher);
    const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetcher);
    const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher);

    const [nowPlagingMovies, popularMovies, topRatedMovies, upcomingMovies] =
      await Promise.all([
        nowPlagingPromise,
        upcomingPromise,
        topRatedPromise,
        popularPromise,
      ]);

    setNowPlaying(nowPlagingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpcoming(upcomingMovies);
    setIsLoading(false);
  };

  const popularNextPage = async () => {
    popularPageNumber++;
    const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher, {
      page: popularPageNumber,
    });
    setPopular((prev) => [...prev, ...popularMovies]);
  };

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    // metodos
    popularNextPage,
  };
};
