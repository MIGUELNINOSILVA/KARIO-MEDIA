import { Button, Modal, TextField } from '@mui/material'
import React, { useState } from 'react'

const ModalAyuda = () => {
    const [modal, setModal] = useState(false);
    const abrirCerrarModal = () =>{
        setModal(!modal )
    }
    const body = (
        <div className="cajaModal" 
        style={{
            position:'absolute',
            width:400,
            background:'white',
            border: '2px solid #FC7124',
            padding:'16px 32px 24px',
            top:'50%',
            left:'50%',
            transform: 'translate(-50%,-50%)'
            }}
        >
            <form action="">
            <div><h2>Ingresa tu solicitud de Ayuda</h2></div>
            <TextField label='Titulo' style={{width:'100%'}}/>
            <br/>
            <TextField label='Descripcion' style={{width:'100%'}}/>
            <br/>
            <Button type='submit'>Enviar</Button>
            <Button onClick={()=>abrirCerrarModal()}>Cancelar</Button>
            </form>

        </div>
    )
   
  return (
    <div>
        <Button variant="outlined" style={{color:'#FC7124'}} onClick={()=>abrirCerrarModal()}>Añadir ayuda</Button>
        <Modal open={modal} onClose={abrirCerrarModal}>
            {body}
        </Modal>
    </div>
  )
}

export default ModalAyuda
