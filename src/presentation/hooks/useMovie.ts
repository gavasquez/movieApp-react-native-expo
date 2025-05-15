import { useEffect, useState } from "react";
import { movieDBFetcher } from "../../config/adapters/movieDB.adpater";
import * as UseCases from '../../core/use-cases';
import { FullMovie } from '../../core/entities/movie.entity';

export const useMovie = (movieId: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);
    const fullMovie = await UseCases.getByIdUseCase(movieDBFetcher, Number(movieId));
    setMovie(fullMovie);
    setIsLoading(false);
  };

  return {
    isLoading,
    movie,
  };
};
