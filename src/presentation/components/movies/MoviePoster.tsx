import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParam } from '../../navigation/Navigation';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ( { movie, height = 420, width = 300 }: Props ) => {

  const navigation = useNavigation<NavigationProp<RootStackParam>>();

  return (
    <Pressable onPress={ () => navigation.navigate( 'Details', { movieId: movie.id.toString() } ) }
      style={ ( { pressed } ) => ( { height, width, opacity: pressed ? 0.9 : 1, marginHorizontal: 4, paddingBottom: 20, paddingHorizontal: 7 } ) }>
      <View style={ { ...styles.imageContainer } }>
        <Image style={ styles.image } source={ { uri: movie.poster } } />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create( {
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9
  },
  image: {
    flex: 1,
    borderRadius: 18
  }
} );