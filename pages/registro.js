import react from "react";
import { View, Text, StyleSheet } from "react-native";

const RegisterScreen = props =>{
    return(
        <View style={styles.container}>
      <Header Title={'Red Thread'}/>
       {proofOfAge==3 &&(
        <Card>
          <Text style={styles.textTitle}>Bienvenido</Text>
          <Text style={styles.textBody}>Es usted mayor de edad?</Text>
          <View style={styles.containerButton}>
            <Button  onPress={()=>setProofOfAge(1)} style={styles.Button} color="red" title='Si'/>
            <Button onPress={()=>setProofOfAge(9)} style={styles.Button} color="red" title='No'/>
          </View>
      </Card>
      )}




    </View>
    )

}


export default RegisterScreen
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