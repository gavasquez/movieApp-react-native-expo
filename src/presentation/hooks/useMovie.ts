import { useEffect, useState } from "react";
import { movieDBFetcher } from "../../config/adapters/movieDB.adpater";
import * as UseCases from '../../core/use-cases';
import { FullMovie } from '../../core/entities/movie.entity';
import { Cast } from '../../core/entities/cast.entity';

export const useMovie = (movieId: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);
    const fullMoviePromise = UseCases.getByIdUseCase(movieDBFetcher, Number(movieId));
    const castPromise = UseCases.getMovieCastUseCase(movieDBFetcher, Number(movieId));

    const [ fullMovie, cast ] = await Promise.all([fullMoviePromise, castPromise]);

    setMovie(fullMovie);
    setCast(cast);
    setIsLoading(false);
  };

  return {
    isLoading,
    movie,
    cast,
  };
};
