import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBMoviesResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';

export const moviesPopularUseCase = async (fecther: HttpAdapter): Promise<Movie[]> => {
  try {
    const popular = await fecther.get<MovieDBMoviesResponse>("/popular");
    return popular.results.map(MovieMapper.fromMovieDbResultToEntity);
  } catch (error) {
    console.log({ error });
    throw new Error(`Error fetching movies - Popular`);
  }
};
