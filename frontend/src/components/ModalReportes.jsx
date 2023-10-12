import { Button, Modal, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form';

const ModalReportes = ({postReporte,listaReportes , setMiFuncion}) => {

  const {register,handleSubmit,formState:{errors},reset} = useForm();
  
  useEffect(()=>{
    if(setMiFuncion){
        setMiFuncion(()=> abrirCerrarModalReportes);
    }
  },[setMiFuncion])


  const [modal, setModal] = useState(false);
  const abrirCerrarModalReportes = () =>{
    setModal(!modal);
  }

  const resetForm = () =>{
    reset({titulo_reporte:'',descripcion_reporte:''});
    abrirCerrarModalReportes()
  }
  
  const onSubmit = handleSubmit((data) =>{
      console.log('formulario enviado',data);
      postReporte(data)
      resetForm();
  })
  const body = (
    <div className="cajaModalReporte" 
    style={{
      position:'absolute',
            maxWidth:800,
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
        <TextField style={{width:'100%'}} label='Nombre del proyecto a reportar'{...register('titulo_reporte',{required:true})} />
        <br />
        <br />
        <TextField style={{width:'100%'}} label='Descripcion del reporte'{...register('descripcion_reporte',{required:true})} />
        <br />
        <br />
        <Button variant='contained' type='submit' style={{backgroundColor:'#FC7124'}}>Enviar</Button>
        <Button variant='text' style={{color:'#FC7124'}} onClick={()=>abrirCerrarModalReportes()}>Cancelar</Button>
      </form>
    </div>
  )
  return (
    <div style={{display:'flex',flexDirection:'row-reverse', margin:'10px',border:'#FC7124'}}>
      <Modal open={modal} onClose={()=>abrirCerrarModalReportes()}>
        {body}
      </Modal>
    </div>
  )
}

export default ModalReportes