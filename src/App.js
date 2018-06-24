import React from 'react';
import {BackHandler} from 'react-native';

import {Root, StyleProvider} from 'native-base';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';

import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import {Provider, connect} from 'react-redux';
import {search} from './states/search';
import {toast} from './states/toast';
import {post, postForm, postItem} from './states/post-reducers';
import {createReduxBoundAddListener, createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import {StackNavigator, NavigationActions, addNavigationHelpers} from 'react-navigation';

import {borrow} from './states/borrow-reducers';
import Login from './components/Login';
import Register from './components/Register';
import BorrowForm from './components/BorrowForm';
import ArrearForm from './components/ArrearForm';
import HistoryForm from './components/HistoryForm';
import NewlendForm from './components/NewlendForm';

const AppNavigator = StackNavigator({
    Login: {screen: Login},
    Register: {screen: Register},
    BorrowForm: {screen: BorrowForm},
    ArrearForm: {screen: ArrearForm},
    HistoryForm: {screen: HistoryForm},
    NewlendForm: {screen: NewlendForm}
}, {
    headerMode: 'none'
});
export const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

export const addListener = createReduxBoundAddListener('root');

class AppWithStyleAndNavigator extends React.Component {
    render() {
        return (
            <StyleProvider style={getTheme(platform)}>
                <AppNavigator navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                    addListener,
                })}/>
            </StyleProvider>
        );
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            const {dispatch, nav} = this.props;
            if (nav.index === 0)
                return false;
            dispatch(NavigationActions.back())
            return true;
        });
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress');
    }
}

const AppWithNavState = connect(state => ({
    nav: state.nav
}))(AppWithStyleAndNavigator);

// Nav reducer
const initialState = AppNavigator.router.getStateForAction(NavigationActions.navigate({routeName: 'BorrowForm'}));
const nav = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};

// Create Redux store
const store = createStore(combineReducers({
    nav, borrow,
}), compose(applyMiddleware(thunkMiddleware, loggerMiddleware)));

export default class App extends React.Component {
    render() {
        return (
          <Root>
            <Provider store={store}>
                <AppWithNavState/>
            </Provider>
          </Root>
        );
    }
}
