import { useState } from 'react';
import { StyleSheet, TextInput, Text, View , Button, FlatList, TouchableOpacity, Modal} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function App() {
  const [textItem,setTextItem]=useState('');
  const [itemList,setItemList]=useState([]);
  const [isSelected, setSelection] = useState(false);
  const[modalVisible,setModalVisible]=useState(false);
  const[itemSelected,setItemSelected]=useState({});

  const onHndlerChangeItem=(text)=>setTextItem(text)
  const onHndlerAddItem=()=>{
    setItemList(currentItems=>[...currentItems,{id:itemList.length,value:textItem,status:'undone'}])
    setTextItem('')
  }
  const onHndlerDeleteItem=id=>{
    setItemList(currentItems=>currentItems.filter(item=>item.id !==id))
    setItemSelected({});
    setModalVisible(!modalVisible)
  }
  const onHndlerModal=id=>{
    setItemSelected(itemList.find(item=>item.id===id))
    setModalVisible(!modalVisible)
  }


      const CheckItem = (object) => {
        const newState = itemList.map(obj => {
          if (obj === object) {
            if(obj.status==='done'){
              return {...obj, status: 'undone'};
              }
              else{
                return {...obj, status: 'done'};
              }
          } 
          else{
            return {...obj};
          }
        });
    
        setItemList(newState);
      };




  return (
    
    <View style={styles.container}>
      <Modal  animationType='slide' transparent={true} visible={modalVisible}>
        <View style={styles.modals}>
          <View style={styles.modalsview}> 
          
          <View>
            <Text>Modal</Text>
          </View>
          <View>
            <Text>
              Estas seguro de que deseas borrar?
            </Text>
          </View>
          <View>
            <Text>{itemSelected.value}</Text>
          </View>
          <View>
            <Button onPress={()=>onHndlerDeleteItem(itemSelected.id)} title='Confirmar'/>
          </View>
            
          </View>
        </View>
      </Modal>

      <View style={styles.header}>
        <TextInput style={styles.textinput} placeholder='Agregar Tarea' value={textItem} onChangeText={onHndlerChangeItem} />
        <Button style={styles.buttonadd} title='Add' onPress={onHndlerAddItem} disabled={textItem.length==0?true:false}/>
      </View>
      <FlatList style={styles.flat}
        data={itemList}
        renderItem={data=>(
          <TouchableOpacity onPress={()=>onHndlerModal(data.item.id)}>
            <View style={styles.textdeployer}>  
              <BouncyCheckbox onPress={()=>CheckItem(data.item)} value={isSelected}  style={styles.checkbox}/> 
                <Text style={styles.textdeploy}>
                  <Text style={styles.textout}>{data.item.value}</Text>
                </Text>
            </View>
            
          </TouchableOpacity>
        )}
        keyExtractor={item=> item.id}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    marginTop:'10%',
    paddingLeft:'5%',
    paddingRight:'5%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flexDirection: "row",
    flexWrap: "wrap",
    width:'95%',
    marginTop:'10%',
    paddingLeft:'5%',
    paddingRight:'5%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'red',
    backgroundColor: "aliceblue",

  },
  textinput:{
  width:'80%',
  },
  textout:{
    width:'80%',
    },
  buttonadd:{
    width:'20%',
    paddingRight:'0px',
    marginEnd:'0px',
  },
  flat:{
    paddingTop:'1%',
    width:'95%',
    height:'90%',
  },
  textdeploy:{
    width:'80%',
  },
  textdeployer:{
    marginTop:'5%',
    width:'95%',
    backgroundColor: "aliceblue",
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
  }, 
  checkbox:{
    paddingLeft:'2%',
    fillColor:"red",
    unfillColor:"#FFFFFF"
  }, 
    modals: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column'


  },
  modalsview: {
    backgroundColor:'aliceblue',
    width:'80%',
    height:'50%',
    borderRadius:10,
    padding:'10%',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
},

});
