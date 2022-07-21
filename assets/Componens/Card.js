import React from "react";
import { View,  StyleSheet } from "react-native";

const Card = props => (
    <View style={{...styles.CardContainer, ...props.style}}>
        {props.children}
    </View>
)

const styles =StyleSheet.create({
    CardContainer:{
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowRadius:6,
    shadowOpacity:0.26,
    elevation:5,
    width:'80%',
    alignItems:'center',
    padding:30,
    marginTop:'40%',
}
})


export default Card
