import React,{useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Text,Input,Button} from "@chakra-ui/react";
import styles from "./User.module.css";
import Layout from '../Components/Layout';
import { Get_Matrix,Update_Matrix } from '../Redux/action';

const User = () => {

 const [no_of_seats,setNumber]=useState(0);
 const {booked}=useSelector(store=>store);
 const dispatch=useDispatch();
 const handleChange=(e)=>{
    setNumber(Number(e.target.value))
 }
 const handleSubmit=()=>{
    dispatch(Update_Matrix({no_of_seats})).then((r)=>{
        dispatch(Get_Matrix);
    });
    
 }

 
  return (
    <div className={styles.parent}>
        <div>
            <Text fontSize={"xl"}>User</Text>
        </div>
        <div>
            <Input type="number" onChange={handleChange} placeholder="Enter number of seats to be booked"></Input>
        </div>
        <div>
             <Button _hover={{bg:"blue"}} onClick={handleSubmit}>Submit</Button>
        </div>
        <div>
            <Text fontSize={"2xl"}>Coach Layout</Text>
        </div>
        <div className={styles.ind}>
            <ul style={{color:"red"}}>
               <li><Text>Red Indicates Booked seats</Text></li> 
            </ul>
            
            <ul style={{color:"green"}}>
                <li><Text>Green Indicates Available seats to Book</Text></li>
            </ul>
            <ul style={{color:"blue"}}>
                <li><Text>Blue Indicates Currently Booked seats</Text></li>
            </ul>   
            <ul >
                <li><Text>No of seats left :- {80-booked}</Text></li>
            </ul> 
        </div>
        <div>
            <Layout/>
        </div>
    </div>
  )
}

export default User