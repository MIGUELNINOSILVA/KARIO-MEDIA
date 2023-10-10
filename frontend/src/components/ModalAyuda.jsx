import { Button, Modal, TextField } from '@mui/material'
import React, { useState } from 'react'
import {useForm} from 'react-hook-form';

const ModalAyuda = () => {
    const {register, handleSubmit} = useForm();


    const [modal, setModal] = useState(false);
    const abrirCerrarModal = () =>{
        setModal(!modal )
    }

    const onSubmit = (data) => {
        console.log('formulario enviado', data);
        abrirCerrarModal(); 
    };

    const body = (
        <div className="cajaModal" 
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
            }}
        >
            <form onSubmit={handleSubmit((data)=>{
                console.log('formulario enviado', data);
                abrirCerrarModal()
            })}>
            <div><h2>Ingresa tu solicitud de Ayuda</h2></div>
            <br/>
            <TextField label='Titulo' {...register('titulo')} style={{width:'100%'}}/>
            <br/>
            <br/>
            <TextField label='Descripcion' {...register('descripcion')} style={{width:'100%'}}/>
            <br/>
            <Button type='submit'>Enviar</Button>
            <Button onClick={()=>abrirCerrarModal()}>Cancelar</Button>
            </form>

        </div>
    )
   
  return (
    <div style={{display:'flex',flexDirection:'row-reverse', margin:'10px',border:'#FC7124'}}>
        <Button variant="outlined" style={{color:'#FC7124'}} onClick={()=>abrirCerrarModal()}>Añadir ayuda</Button>
        <Modal open={modal} onClose={abrirCerrarModal}>
            {body}
        </Modal>
    </div>
  )
}

export default ModalAyuda
