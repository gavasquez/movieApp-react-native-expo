import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParam } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParam, 'Details'> { }


export const DetailsScreen = ( { route }: Props ) => {
  /* const { movieId } = useRoute().params; */
  const { movieId } = route.params;
  const { movie, cast = [], isLoading } = useMovie( movieId );

  if ( isLoading ) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView>
      <MovieHeader originalTitle={ movie!.originalTitle } poster={ movie!.poster } title={ movie!.title } />

      <MovieDetails movie={ movie! } cast={ cast } />
    </ScrollView>
  );
};