
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { DetailsScreen } from '../screens/details/DetailsScreen';


export type RootStackParam = {
  Home: undefined;
  Details: { movieId: string; };
};

const Stack = createStackNavigator<RootStackParam>();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={ { headerShown: false } }>
      <Stack.Screen name="Home" component={ HomeScreen } />
      <Stack.Screen name="Details" component={ DetailsScreen } />
    </Stack.Navigator>
  );
};