import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import type { Movie } from '../../entities/movie.entity';

export const moviesNowPlayingUseCase = async (fecther: HttpAdapter): Promise<Movie[]> => {
  try {
    const nowPlaying = await fecther.get<NowPlayingResponse>("/now_playing");
    console.log({ nowPlaying });
    return [];
  } catch (error) {
    console.log({ error });
    throw new Error(`Error fetching movies - NowPlaying`);
  }
};
