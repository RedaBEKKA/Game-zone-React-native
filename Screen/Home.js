import React,{useState} from "react"
import {StyleSheet,View,Text,FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback,Keyboard} from "react-native"
import {globalStyles} from '../Styles/global'
import Card from "../shared/Card"
import {MaterialIcons} from '@expo/vector-icons'
import ReviewForm from './reviewsForm'


export default function Home({navigation}){
    const [modalOpen,setModelOpen] = useState(false)
    const[reviews,setReviews] = useState([
        {title:'La data science selon BigNova',rating:5,body:'Je suis reda BEKKA',key:'1'},
        {title:'Design des moteurs',rating:2,body:'Je suis Nassim BEKKA',key:'2'},
        {title:'La medecine moderne',rating:3,body:'Je suis Sonia BEKKA',key:'3'}
    ])

    const addReview = (review) =>{
        review.key = Math.random().toString()
        setReviews((currentReviews)=>{
            return [review,...currentReviews]
        })
        setModelOpen(false)
    }

    const press =() =>{
        //navigation.navigate('ReviewDetail')
        navigation.push('ReviewDetail')//.goBack() pour revenir en arriére
    }
    return(
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <Text>Azul g Modal</Text>
                        <MaterialIcons
                            name='close'
                            size={24}
                            onPress={()=>setModelOpen(false)}
                            style={{...styles.modalToggle,...styles.modalCLose}}
                        />

                        <ReviewForm addReview={addReview}/>
                    </View>
                </TouchableWithoutFeedback>
                

                
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                onPress={()=>setModelOpen(true)}
                style={styles.modalToggle}
            />

            <FlatList
            data={reviews}
            renderItem={({item})=>(
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetail',item)}>
                    <Card>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </Card>
                    
                </TouchableOpacity>
            )}
        
            
            />
            
        </View>
    )
}


const styles = StyleSheet.create({
    modalToggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor:"#323232",
        padding:10,
        borderRadius:10,
        alignSelf:'center'
    },
    modalCLose:{
        marginTop:20,
        marginBottom:0
    },
    modalContent:{
        flex:1
    }
})

