import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBMoviesResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';

export const moviesTopRatedUseCase = async (fecther: HttpAdapter): Promise<Movie[]> => {
  try {
    const topRated = await fecther.get<MovieDBMoviesResponse>("/top_rated");
    return topRated.results.map(MovieMapper.fromMovieDbResultToEntity);
  } catch (error) {
    console.log({ error });
    throw new Error(`Error fetching movies - TopRated`);
  }
};
