import {useState}from 'react'

export const useCounter =()  =>{
    const initialState=0
const [state,setState]=useState(initialState)   

const add = ()=>{
  setState(state+1)
}
const substract = () =>{
  setState(state-1)
}
const reset = () =>{
  setState(initialState)
}
return{add,substract,reset,state}

}