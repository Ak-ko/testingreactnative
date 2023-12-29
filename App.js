import { PaperProvider } from 'react-native-paper';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json'
import Home from './src/screens/Home/Index'

export default function App() {
  return(
    <PaperProvider>
      <Home />
    </PaperProvider>
  )
}

AppRegistry.registerComponent(appName, () => App);

