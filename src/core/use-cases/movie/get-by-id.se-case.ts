import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMovie } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { FullMovie } from '../../entities/movie.entity';

export const getByIdUseCase = async (fectcher: HttpAdapter, movieId: number): Promise<FullMovie> => {
  try {
    const movie = await fectcher.get<MovieDBMovie>(`/${movieId}`);
    return MovieMapper.formMovieDBToEntity(movie);
  } catch (error) {
    console.log({ error });
    throw new Error(`Error fetching movie - ${movieId}`);
  }
};
