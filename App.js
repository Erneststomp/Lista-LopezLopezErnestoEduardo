import { useState } from 'react';
import { StyleSheet, TextInput, Text, View , Button, FlatList, TouchableOpacity, Modal} from 'react-native';
import Header from './assets/Componens/Header';
import Inicio from './pages/Inicio';
import RegisterScreen from './pages/registro';


export default function App() {
  const [content,setContent] = useState(<Inicio/>)
  const[selection,setSelection] =useState(0)
  const handlerSelection = proofOfAge=>{
    setSelection(proofOfAge)
  }

 if (handlerSelection==3){
  setContent(<RegisterScreen/>)
 }
 

  return (
    
     <View style={styles.container}>
      <Header/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    backgroundColor: '#585858',
  },})
