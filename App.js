import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView} from 'react-native';
import Constants from 'expo-constants'

export default function App(){


  return(
    <SafeAreaView style={styles.container}>
      <Text>StatusBar tehtävä</Text>
      <StatusBar style= "auto"
      backgroundColor='red'
     // hidden={true}
     />
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },

});
