import { Button, Modal, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form';

const ModalAyuda = ({nuevoElemento,ListaDeAyudas,setMiFuncion}) => {
    const {register, handleSubmit, formState:{errors},reset} = useForm();


    const [modal, setModal] = useState(false);

    useEffect(()=>{
        if(setMiFuncion){
            setMiFuncion(()=> abrirCerrarModalAyuda);
        }
    },[setMiFuncion])

    const abrirCerrarModalAyuda = () =>{
        setModal(!modal )
    }

    const resetForm = () => {
        reset({ titulo: '', descripcion: '' }); 
        abrirCerrarModalAyuda();
    };
    
    const onSubmit = handleSubmit((data) => {
        console.log('formulario enviado', data);
        alert('enviando datos...');
        nuevoElemento(data);
        resetForm()
    });


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
            <form onSubmit={onSubmit}>
            <div><h2>Ingresa tu solicitud de Ayuda</h2></div>
            <br/>
            <TextField label='Titulo' {...register('titulo',{required:true})} style={{width:'100%'}}/>
            <br/>
            <br/>
            <TextField label='Descripcion' {...register('descripcion',{required:true})} style={{width:'100%'}}/>
            <br/>
            <br />
            <Button variant='contained' type='submit' style={{backgroundColor:'#FC7124'}}>Enviar</Button>
            <Button variant='text' style={{color:'#FC7124'}} onClick={()=>abrirCerrarModalAyuda()} >Cancelar</Button>
            </form>

        </div>
    )
   
  return (
    <div style={{display:'flex',flexDirection:'row-reverse', margin:'10px',border:'#FC7124'}}>
        <Modal open={modal} onClose={()=>abrirCerrarModalAyuda()}>
            {body}
        </Modal>
    </div>
  )
}

export default ModalAyuda
