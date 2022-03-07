import React, {useState} from 'react';
import { CircularProgressWithChild } from 'react-native-circular-progress-indicator';
import {ImageBackground, View,Image, Text,FlatList, Pressable,StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import HomeHeader from '../components/HomeHeader';
import StatusBar from '../components/StatusBar';
import {colors, parameters} from '../global/styles'
import {filterData} from '../global/Data';

  


export default function HomeScreen({navigation  }){

    const props = {
  activeStrokeWidth: 16,
  inActiveStrokeWidth: 30,
  inActiveStrokeOpacity: 0.1
};
    
    return (
        <View style={{
                        flex:1,
                        
                        justifyContent: 'center',
                        //backgroundColor: "brown"
                        }}
                    >
                      <>
                       <View
                       style={{
                                 flex:1, 
                                 //backgroundColor: "black",
                                 borderBottomLeftRadius: 40,
                                 borderBottomRightRadius: 60,
                             }
                       >
                        
                           <View style={{paddingTop:12, paddingLeft:15}}>
                          <Text style={{ color:"white", fontSize:24}}>Hey mike,</Text>
                  
                      </View>
                         </>
                   </View>
                       
                       
                       
                       
                                            
             
                         <View  
                             style={{
                                 flex:2,
                                 alignItems:"center",
                                 justifyContent: "flex-start", 
                                 backgroundColor:"gray",
                                 borderTopLeftRadius: 6,
                                 borderTopRightRadius: 60,
                             }}
                         >   
                         <View>
                         <Text style={{ fontSize:16, 
                      color: colors.black,
                      paddingHorizontal:5,
                      paddingTop:5,
                  }}>TODAY.</Text>
                         </View>
                         <View>
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
                         {/* <View>
                         <StatusBar />
                         </View> */} 
                    </View>


                    
                 </View>
    )
}

const styles = StyleSheet.create({
   container:{
     flex:1,
     
   },
   deliveryButton:{
     paddingHorizontal: 20,
     borderRadius: 14,
     paddingVertical:5
   
   },
    clockview:{
    flexDirection:"row", 
    alignItems:"center", 
    backgroundColor:"white", 
    borderRadius:10,
    marginRight:10
    },
    headertext:{
      
    color:"green",
    fontSize:26,
    fontWeight:"bold",
    paddingLeft:20,
    
    },
  
})
