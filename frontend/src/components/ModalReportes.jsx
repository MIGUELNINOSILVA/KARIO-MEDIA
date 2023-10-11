import { Button, Modal, TextField } from '@mui/material'
import React, { useState } from 'react'
import {useForm} from 'react-hook-form';


const ModalReportes = () => {

  const {register,handleSubmit,formState:{errors},reset} = useForm();
  console.log(errors);

  const [modal, setModal] = useState(false);
  const abrirCerrarModal = () =>{
    setModal(!modal);
  }
  
  const onSubmit = handleSubmit((data) =>{
      console.log('formulario enviado',data);
  })
  const body = (
    <div className="cajaModalReporte" 
    style={{
      position:'absolute',
            maxWidth:600,
            background:'white',
            border: '2px solid #FC7124',
            borderRadius:'15px',
            padding:'16px 32px 24px',
            top:'50%',
            left:'50%',
            transform: 'translate(-50%,-50%)'
    }}>
      <form action="" onSubmit={onSubmit}>
        <div><h2>Ingresa nuevo Reporte</h2></div>
        <br />
        <TextField label='Nombre del proyecto a reportar'{...register('titulo_reporte',{required:true})} />
        <br />
        <br />
        <TextField label='Descripcion del reporte'{...register('descripcion_reporte',{required:true})} />
        <Button variant='contained' type='sumbit' style={{backgroundColor:'#FC7124'}}>Enviar</Button>
        <Button variant='text' style={{color:'#FC7124'}}>Cancelar</Button>
      </form>
    </div>
  )
  return (
    <div>ModalReportes</div>
  )
}

export default ModalReportes