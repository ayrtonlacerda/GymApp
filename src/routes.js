import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Login from './pages/login';
import Feed from './pages/feed';
import Workout from './pages/workout';
import Coach from './pages/coach';
import Item from './pages/item';


const Routes = StackNavigator(
  {
    Login: { screen: Workout, headerMode: 'none', header: null },
    Logged: DrawerNavigator(
      {
        Feed: { screen: Feed },
        Workout: { screen: Workout },
      }, {
        navigationOptions: {
          header: null,
        }
      }
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
