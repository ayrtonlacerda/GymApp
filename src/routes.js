import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Login from './pages/login';
import Feed from './pages/feed';
import Workout from './pages/workout';

import Perfil from './pages/perfil';



const Routes = StackNavigator(
  {
    Login: { screen: Workout },
    Logged: DrawerNavigator(
      {
        Feed: { screen: Feed },
        Perfil: { screen: Perfil },
        Workout: { screen: Workout },
        Sair: { screen: Login },
      },
    ),
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      header: null,
    }
  }
);

export default Routes;
