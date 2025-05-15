import { useRoute } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { RootStackParam } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';

interface Props extends StackScreenProps<RootStackParam, 'Details'> { }


export const DetailsScreen = ( { route }: Props ) => {
  /* const { movieId } = useRoute().params; */
  const { movieId } = route.params;
  const { } = useMovie( movieId );
  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  );
};