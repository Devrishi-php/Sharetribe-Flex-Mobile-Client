import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'mobx-react/native';
import { lifecycle } from 'recompose';
import RootNavigation from './navigation/RootNavigation';
import createStore from './stores';
import { SharetribeFlexService } from './services';

const store = createStore();

const InitApp = () => (
  <Provider {...store}>
    <RootNavigation />
  </Provider>
);

const enhancer = lifecycle({
  async componentDidMount() {
    SharetribeFlexService.init();
    await store.bootstrap();
    SplashScreen.hide();
  },
});

export default enhancer(InitApp);
