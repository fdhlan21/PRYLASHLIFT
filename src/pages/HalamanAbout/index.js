
import React , { useState, useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors';
import { SliderBox } from 'react-native-image-slider-box';
import { SafeAreaView } from 'react-native-safe-area-context';



function HalamanAbout({navigation}) {

    const images = [

require('../../assets/img/potoslider1.png'),
require('../../assets/img/potoslider2revisi.png'),
require('../../assets/img/potoslider3revisi.png'),



    ]

  return (


  
    <View style={{ flex: 1, justifyContent: 'center',}}>
 
<View style={{padding:10, backgroundColor:colors.primary, paddingVertical:80, borderRadius:20,marginBottom:60 }}>
<TouchableOpacity   onPress={()=>navigation.navigate('HalamanHome')} style={{position:'absolute', marginTop:110, marginLeft:20}}>
<Image   style={{width:16, height:14, }}  source={require('../../assets/img/logoback.png')}  />
</TouchableOpacity>
<Text style={{color:colors.white, fontSize:30, fontFamily:'Alata-Regular', position:'absolute', marginTop:90, marginLeft:135,}}>About</Text>

</View>


<View style={{marginBottom:500}}>

<Text style={{color:colors.primary, fontFamily:'Alata-Regular', fontSize:20, marginLeft:20 }}>Follow us on :</Text>
<Image  style={{width:24, height:24, position:'absolute', marginTop:50, marginLeft:20 }} source={require('../../assets/img/iconinstagram.png')} /> 
<Text style={{color:colors.primary, fontSize:15, position:'absolute', fontFamily:'Alata-Regular', marginTop:50, marginLeft:50  }}>Prylashlift</Text>


<Image  style={{width:24, height:17, position:'absolute', marginTop:100, marginLeft:20 }} source={require('../../assets/img/iconyt.png')} /> 
<Text style={{color:colors.primary, fontSize:15, position:'absolute', fontFamily:'Alata-Regular', marginTop:95, marginLeft:50  }}>PryLashLift.id</Text>

<Image  style={{width:22, height:28, position:'absolute', marginTop:145, marginLeft:20 }} source={require('../../assets/img/iconmaps.png')} /> 
<Text style={{color:colors.primary, fontSize:15, position:'absolute', fontFamily:'Alata-Regular', marginTop:145, marginLeft:50  }}>Jalan Banda No. 30 Kota Tegal,</Text>
<Text style={{color:colors.primary, fontSize:15, position:'absolute', fontFamily:'Alata-Regular', marginTop:160, marginLeft:50  }}>Jawa Tengah, Indonesia</Text>



</View>







<View style={{padding:0.5, backgroundColor:colors.primary}}>

</View>

<View style={{marginBottom:130, }}>
<TouchableOpacity  style={{ marginLeft:250, marginTop:10, position:'absolute',}}>
    <Image style={{ width:30, height:39,}}  source={require('../../assets/img/logologutrevisi.png')}  />
</TouchableOpacity>

<TouchableOpacity   onPress={()=>navigation.navigate('HalamanHome')} style={{ marginLeft:73, marginTop:10, position:'absolute'}}>
    <Image   style={{ width:40, height:40}} source={require('../../assets/img/logorumahhome.png')}  />
</TouchableOpacity>
</View>





    </View>
    
   
  );
}

export default  HalamanAbout;