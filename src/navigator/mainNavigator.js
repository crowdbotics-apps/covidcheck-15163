import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps23709Navigator from '../features/Maps23709/navigator';
import NotificationList23701Navigator from '../features/NotificationList23701/navigator';
import Maps23693Navigator from '../features/Maps23693/navigator';
import ArticleList23590Navigator from '../features/ArticleList23590/navigator';
import NotificationList23506Navigator from '../features/NotificationList23506/navigator';
import ArticleList23487Navigator from '../features/ArticleList23487/navigator';
import ArticleList23486Navigator from '../features/ArticleList23486/navigator';
import ArticleList23485Navigator from '../features/ArticleList23485/navigator';
import ArticleList23453Navigator from '../features/ArticleList23453/navigator';
import ArticleList23452Navigator from '../features/ArticleList23452/navigator';
import ArticleList23451Navigator from '../features/ArticleList23451/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Maps23709: { screen: Maps23709Navigator },
NotificationList23701: { screen: NotificationList23701Navigator },
Maps23693: { screen: Maps23693Navigator },
ArticleList23590: { screen: ArticleList23590Navigator },
NotificationList23506: { screen: NotificationList23506Navigator },
ArticleList23487: { screen: ArticleList23487Navigator },
ArticleList23486: { screen: ArticleList23486Navigator },
ArticleList23485: { screen: ArticleList23485Navigator },
ArticleList23453: { screen: ArticleList23453Navigator },
ArticleList23452: { screen: ArticleList23452Navigator },
ArticleList23451: { screen: ArticleList23451Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
