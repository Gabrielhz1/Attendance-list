import React, {useEffect, useState} from 'react';

import './styles.css'


import {Card} from '../../components/Card' 


 export function Home() {

  const [studentName,setStudentName] = useState('');
  
  const [students, setStudents] = useState([]);

  const[user,SetUser] = useState({name:'',avatar:''})




  function handleAddStudent(){
    const newStudent = {

      name:studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit'

      } )
    };



    setStudents(prevState=>[...prevState, newStudent]);


  }

  useEffect (()=>{
    fetch('https://api.github.com/users/Gabrielhz1')
    .then ((response)=> response.json())
    .then (data => {
      SetUser({
        name:data.name,
        avatar:data.avatar_url
      })
    })
  },[])


  return (
    <div className='container'>

      <header>
        <h1>Lista de Presença</h1>

        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar}  alt="profile picture" />
        </div>
      </header>


      
      <input type="text" placeholder="Digite o nome..." onChange={e => setStudentName (e.target.value)} />
      <button onClick={handleAddStudent} >Adicionar</button>

      {
          students.map(student =>  <Card key={student.time} name ={student.name}   time = {student.time}/>) 
      }
    
      

  </div>
    
   
    
  )
}


