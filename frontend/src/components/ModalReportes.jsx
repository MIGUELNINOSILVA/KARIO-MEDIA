import { Button, Modal, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ModalReportes = () => {
    const {register , handleSubmit, formState:{errors} , reset} = useForm();
    console.log(errors);

    const [modal, setModal] = useState(false)

    const abrirCerrarModal = () =>{
        setModal(!modal);
    }

    const onSubmit = handleSubmit((data) =>{
        console.log('Formulario enviado',data);

    })
    const [formula, setFormula] = React.useState('');
    const [area, setArea] = React.useState('');
    const [frecuencia, setFrecuencia] = useState('');
    const handleChangeFormula = (event) => {
        setFormula(event.target.value);
    };

    const handleChangeArea = (event) => {
        setArea(event.target.value);
    };

    const handleChangeFrecuencia = (event) => {
        setFrecuencia(event.target.value);
    };
    const body = (
        <div className="cajaModalReporte" 
        style={{
            position:'absolute',
            maxWidth:'1600px',
            background:'white',
            border: '2px solid #FC7124',
            borderRadius:'15px',
            padding:'16px 32px 24px',
            top:'50%',
            left:'50%',
            transform: 'translate(-50%,-50%)'
        }}>
            <form action="" onSubmit={onSubmit}>
                <div className="tituloModalReportes"><h2>Nuevo Reporte</h2></div>
                <br />
                <TextField label='Indicador' {...register('indicador',{required:true})} style={{width:'100%'}} />
                <br />
                <br />
                <TextField label='Descripcion' {...register('descripcion',{required:true})} style={{width:'100%'}} />
                <br />
                <br />
                <div style={{display:'flex', gap:'10px'}}>
                    <TextField label='Categoria' {...register('categoria',{required:true})} style={{width:'100'}} />
                    <TextField 
                        label='Fecha Inicio'
                        type='date'
                        defaultValue="2023-10-10"
                        InputLabelProps={{
                        shrink: true,
                        }} {...register('fecha inicio',{required:true})} style={{width:'100'}} />
                    <TextField
                        label='Fecha Final'
                        type='date'
                        defaultValue="2023-11-10"
                        InputLabelProps={{
                        shrink: true,
                        }}
                       {...register('fecha final',{required:true})} style={{width:'100'}} />
                </div>
                <div>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel >Fórmula</InputLabel>
                    <Select value={formula} label="Formula" onChange={handleChangeFormula} >
                        <MenuItem value={'Metodologia Agil'}>Metodologia Agíl</MenuItem>
                        <MenuItem value={'Metodologia Expositiva'}>Metodologia Expositiva</MenuItem>
                        <MenuItem value={'Metodología Lean'}>Metodología Lean</MenuItem>
                        <MenuItem value={'Metodología Kanban'}>Metodología Kanban</MenuItem>
                        <MenuItem value={'Metodología Scrum'}>Metodología Scrum</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel >Área</InputLabel>
                    <Select value={area} label="Formula" onChange={handleChangeArea} >
                        <MenuItem value={'Marketing'}>Marketing</MenuItem>
                        <MenuItem value={'Diseño'}>Diseño</MenuItem>
                        <MenuItem value={'Developers'}>Developers</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel >Frecuencia</InputLabel>
                    <Select value={frecuencia} label="Formula" onChange={handleChangeFrecuencia} >
                        <MenuItem value={'1/4'}>1/4</MenuItem>
                        <MenuItem value={'2/2'}>2/2</MenuItem>
                        <MenuItem value={'1/2'}>1/2</MenuItem>
                    </Select>
                </FormControl>
                </div>
                <Button style={{backgroundColor:'#FC7124' , color:'white'}}>Enviar</Button>
                <Button style={{color:'#FC7124'}}>Cancelar</Button>
            </form>
        </div>
    )
  return (
    <div style={{display:'flex',flexDirection:'row-reverse', margin:'10px',border:'#FC7124'}}>
        <Button variant="outlined" style={{color:'#FC7124'}} onClick={()=>abrirCerrarModal()}>Añadir reporte</Button>
        <Modal open={modal} onClose={()=>abrirCerrarModal()} >
            {body}
        </Modal>
    </div>
  )
}

export default ModalReportes