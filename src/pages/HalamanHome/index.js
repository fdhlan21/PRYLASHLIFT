
import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Carousel from 'react-native-snap-carousel';
import TextTicker from 'react-native-text-ticker'
import colors from '../../utils/colors';
import { SliderBox } from 'react-native-image-slider-box';



function HalamanHome({navigation}) {






    const images = [

require('../../assets/img/potoslider1.png'),
require('../../assets/img/potoslider2revisi.png'),
require('../../assets/img/potoslider3revisi.png'),



    ]




  return (



    <View style={{ flex: 1, justifyContent: 'center',}}>

<View style={{padding:10, backgroundColor:colors.primary, paddingVertical:80, borderRadius:20, marginBottom:10 }}>

<Text style={{color:colors.white, fontSize:18, fontFamily:'Alata-Regular', position:'absolute', marginTop:60, marginLeft:20,}}>Selamat Datang</Text>
<Text style={{color:colors.white, fontSize:30, fontFamily:'Alata-Regular', position:'absolute', marginTop:80, marginLeft:20,}}>PRYLASHLIFT</Text>
<Image style={{width:50, height:50, position:'absolute', marginTop:70, marginLeft:290, borderRadius:30}} source={require('../../assets/img/potosplash.png')}/>
</View>
<Image style={{width:335, height:209, marginLeft:10, marginBottom:10}} source={require('../../assets/img/gambarmukauntukhome.png')}/>

<View style={{marginBottom:280}}>
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanOrder')} style={{padding:10, backgroundColor:colors.primary, position:'absolute', paddingHorizontal:50, paddingVertical:50, borderRadius:10, marginLeft:50, elevation:6}}>

<Image  style={{position:'absolute', width:50, height:45, marginLeft:20, marginTop:20}} source={require('../../assets/img/logochart.png')}/>
<Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15, position:'absolute', marginLeft:28, marginTop:68}}>Order</Text>

</TouchableOpacity>


<TouchableOpacity  onPress={()=>navigation.navigate('HalamanServiceProduk')} style={{padding:10, backgroundColor:colors.primary, position:'absolute', paddingHorizontal:50, paddingVertical:50, borderRadius:10, marginLeft:210, elevation:6 }}>

<Image  style={{position:'absolute', width:50, height:50, marginLeft:25, marginTop:20}} source={require('../../assets/img/logoservice.png')}/>
<Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:10, position:'absolute', marginLeft:11, marginTop:75,}}>Service & Product</Text>
</TouchableOpacity>


<TouchableOpacity onPress={()=>navigation.navigate('HalamanAbout')}  style={{padding:10, backgroundColor:colors.primary, position:'absolute', paddingHorizontal:50, paddingVertical:50, borderRadius:10, marginLeft:210, marginTop:150,  elevation:6}}>

<Image  style={{position:'absolute', width:50, height:20, marginLeft:25, marginTop:35}} source={require('../../assets/img/logoabout.png')}/>

<Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15, position:'absolute', marginLeft:20, marginTop:65}}>About Us</Text>

</TouchableOpacity>


<TouchableOpacity   onPress={()=>navigation.navigate('HalamanChat')}   style={{padding:10, backgroundColor:colors.primary, position:'absolute', paddingHorizontal:50, paddingVertical:50, borderRadius:10, marginLeft:50,marginTop:150,  elevation:6 }}>

<Image  style={{position:'absolute', width:50, height:50, marginLeft:20, marginTop:20}} source={require('../../assets/img/logochat.png')}/>

<Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15, position:'absolute', marginLeft:30, marginTop:68}}>Chat</Text>

</TouchableOpacity>

</View>



<TextTicker style={{fontSize:15, fontFamily:'Alata-Regular'}} duration={10000}
          loop
          bounce
          repeatSpacer={50}
          marqueeDelay={1000}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar neque et metus fringilla, vitae porttitor nulla vestibulum. Sed tincidunt a.</TextTicker>
<View style={{padding:0.5, backgroundColor:colors.primary}}>

</View>

<View style={{marginBottom:70  }}>
<TouchableOpacity style={{ marginLeft:250, marginTop:10, position:'absolute',}}>
    <Image style={{ width:30, height:39,}}  source={require('../../assets/img/logologutrevisi.png')}  />
</TouchableOpacity>

<TouchableOpacity style={{ marginLeft:73, marginTop:10, position:'absolute'}}>
    <Image   style={{ width:40, height:40}} source={require('../../assets/img/logorumahhome.png')}  />
</TouchableOpacity>
</View>

    </View>
  );
}

export default  HalamanHome;