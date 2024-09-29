import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Get_Matrix } from '../Redux/action';
import {Heading} from "@chakra-ui/react";
import "./Layout.css";

const Layout = () => {
    const [array,setArray]=useState([]);
    const [diff,setDiff]=useState([]);
    const dispatch=useDispatch();
    const {matrix,booked,isLoading,isError}=useSelector(store=>store);

    useEffect(()=>{
        let arr=[];
        if(matrix.length>0){
            for (let i=0;i<matrix.length;i++){
                for (let j=0;j<matrix[i].length;j++){
                    arr.push(matrix[i][j]);
                }
            }
        }
        setArray(arr);
       if(booked){
        setDiff([...diff,Number(booked)])
       }
        
    },[matrix,booked])

    useEffect(()=>{
        let arr=new Array(80).fill(0);
        setArray(arr)
        dispatch(Get_Matrix);
    },[dispatch]);

    if(isLoading){
        return <Heading>....Loading...</Heading>
    }
    if(isError){
        return <Heading>...Error..</Heading>
    }
    
  return (
    <div className='container'>
            {array.length>0 && array.map((item,ind)=>{
                return (
                    (ind+1>diff[0] && ind+1<=diff[diff.length-1]?<div key={ind} className={"blue1"}>{ind+1}</div>:((ind+1-3)%7===0?<div key={ind}  className={item===0?"gap":"gap1"}>{ind+1}</div>:<div key={ind} className={item===0?'child':'child1'}>{ind+1}</div> ))     
                )
            })}
    </div>
  )
}

export default Layout