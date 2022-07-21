
import { useState } from 'react';
import { StyleSheet, TextInput, Text, View , Button, FlatList, TouchableOpacity, Modal} from 'react-native';
import Header from '../assets/Componens/Header';
import Card from '../assets/Componens/Card';

export default function Inicio() {
  const [proofOfAge, setProofOfAge] = useState(0)


  return (
    
    <View style={styles.container}>
      <Header Title={'Red Thread'}/>
       {proofOfAge==0 &&(
        <Card>
          <Text style={styles.textTitle}>Bienvenido</Text>
          <Text style={styles.textBody}>Es usted mayor de edad?</Text>
          <View style={styles.containerButton}>
            <Button  onPress={()=>setProofOfAge(1)} style={styles.Button} color="red" title='Si'/>
            <Button onPress={()=>setProofOfAge(9)} style={styles.Button} color="red" title='No'/>
          </View>
      </Card>
      )}

      {proofOfAge==1 &&(
        <Card>
          <Text style={styles.textTitle}>Desea Crear una cuenta?</Text>
          <Text style={styles.textBody}>Solo es posible crear una cuenta por persona, si ha olvidado su usuario no podra acceder</Text>
          <View style={styles.containerButton}>
            <Button  onPress={()=>setProofOfAge(2)} style={styles.Button} color="red" title='Si'/>
            <Button onPress={()=>setProofOfAge(0)} style={styles.Button} color="red" title='No'/>
            <Button onPress={()=>setProofOfAge(3)} style={styles.Button} color="red" title='Ya tengo cuenta'/>
          </View>
      </Card>
      )}
       {proofOfAge==9 &&(
        <Card>
          <Text style={styles.textTitle}>Usted no Puede usar la APP</Text>
      </Card>
      )}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    alignItems:'center',
    backgroundColor: '#585858',
  },

  containerButton: {
    flexDirection:'row',
    width:'80%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal:30,
  },

  Button: {
    
    alignItems:'center',
    borderRadius: 10,

  },
  textBody:{
    padding:30
  },
  textTitle:{
    fontWeight:"bold",
    fontSize:30,
    padding:10
  }


});
