import { Button, Modal, TextField } from '@mui/material'
import React, { useState } from 'react'
import {useForm} from 'react-hook-form';


const ModalReportes = ({nuevoElemento,listaReportes}) => {

  const {register,handleSubmit,formState:{errors},reset} = useForm();
  

  const [modal, setModal] = useState(false);
  const abrirCerrarModal = () =>{
    setModal(!modal);
  }

  const resetForm = () =>{
    reset({titulo_reporte:'',descripcion_reporte:''});
    abrirCerrarModal()
  }
  
  const onSubmit = handleSubmit((data) =>{
      console.log('formulario enviado',data);
      nuevoElemento(data)
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
        <Button variant='text' style={{color:'#FC7124'}}>Cancelar</Button>
      </form>
    </div>
  )
  return (
    <div style={{display:'flex',flexDirection:'row-reverse', margin:'10px',border:'#FC7124'}}>
      <Button variant='outlined' style={{color:'#FC7124'}} onClick={()=>abrirCerrarModal()}>Añadir Reporte</Button>
      <Modal open={modal} onClose={()=>abrirCerrarModal()}>
        {body}
      </Modal>
    </div>
  )
}

export default ModalReportes