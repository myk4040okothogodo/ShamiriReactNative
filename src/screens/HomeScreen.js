import React, {useState} from 'react';
import { CircularProgressWithChild } from 'react-native-circular-progress-indicator';
import {ImageBackground, View,Image, Text,FlatList, Pressable,StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import HomeHeader from '../components/HomeHeader';
import StatuzBar from '../components/StatuzBar';
import {colors, parameters} from '../global/styles'
import {filterData} from '../global/Data';

  


export default function HomeScreen({ navigation  }){

  const props = {
  activeStrokeWidth: 16,
  inActiveStrokeWidth: 30,
  inActiveStrokeOpacity: 0.1
};
    
    return (
        <View style={{ flex:1, justifyContent: 'center',
                        //backgroundColor: " #367588"
                        }}>
                        <View
                           style={{
                              flex:1,
                               //backgroundColor:" #367588"
                           }}
                        >
                          <View style={{paddingTop:12, paddingLeft:15}}>
                             <Text style={{ color:"white", fontSize:24}}>Hey mike,</Text>
                          </View>
                       </View>
                       
                       
                       
                                            
             
                         <View  
                             style={{
                                 flex:2,
                                 alignItems:"center",
                                backgroundColor:"grey",
                                 borderTopLeftRadius: 0,
                                 borderTopRightRadius: 80,
                             }}
                         >   
                           <View
                            style ={{
                            
                            }}
                            >
                           <Text style={{ fontSize:16, 
                             color: colors.black,
                             paddingHorizontal:5,
                             paddingTop:2,
                             }}>TODAY.</Text>
                           </View>
      
                         <View
                           style ={{
                            

                           }}
                         >
                          <CircularProgressWithChild
                              {...props}
                              value={80}
                              radius={125}
                              activeStrokeColor={'#e84118'}
                              inActiveStrokeColor={'#e84118'}
                          >
                          <CircularProgressWithChild
                          {...props}
                          value={87}
                          radius={100}
                          activeStrokeColor={'#03f4fc'}
                          inActiveStrokeColor={'#03f4fc'}
                          >
                          <CircularProgressWithChild
                          {...props}
                          value={62}
                           radius={75}
                           activeStrokeColor={'#8803fc'}
                           inActiveStrokeColor={'#8803fc'}
                           />
                             </CircularProgressWithChild>
                          </CircularProgressWithChild>
                        </View>
                        
                          <View
                              style={{
                                borderTopRightRadius:30,
                                 borderTopLeftRadius:30,
                                  borderBottomLeftRadius: 30,
                                  borderBottomRightRadius:30,
                                 flex:1,
                                 backgroundColor:"#999999", 
                                 width:300,
                                  height:100,
                                 //alignItem:"", 
                              }}
                          >
                         <StatuzBar />
                         </View> 
                    </View>


                    
                 </View>
    )
}

const styles = StyleSheet.create({
   container:{
     flex:1,
     
   },  
})
