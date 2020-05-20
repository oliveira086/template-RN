import {
    createAppContainer
  } from 'react-navigation';
  
  import {createStackNavigator} from 'react-navigation-stack'
  
  import Login from './screens/login/index'
  import Cadastro from './screens/cadastro/index'
  import Home from './screens/home/index'
  
  const RootStack = createStackNavigator({
  
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    }
  },
  Cadastro: {
    screen: Cadastro,
    navigationOptions: {
      headerShown: false,
    }
  },
  Home: {
      screen: Home,
      navigationOptions: {
          headerShown: false,
      }
  }
  
  });
  
  
  const App = createAppContainer(RootStack);
  
  export default App;
  