import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header = props => {
    const {Title}=props
  return (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>{Title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 45,
        paddingTop: 7.5,
        backgroundColor:'#ea1519',
        alignItems:'center',
        justifyContent: 'center'
    },

    headerTitle:{
        color:'white',
        fontSize: 22,
    }

}

)