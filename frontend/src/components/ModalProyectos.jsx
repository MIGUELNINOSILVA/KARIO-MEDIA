import { Button, Modal, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ModalProyectos = () => {
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
    const [categoria, setCategoria] = useState('')

    const handleChangeFormula = (event) => {
        setFormula(event.target.value);
    };

    const handleChangeArea = (event) => {
        setArea(event.target.value);
    };

    const handleChangeFrecuencia = (event) => {
        setFrecuencia(event.target.value);
    };

    const handleChangeCategoria = (event) => {
        setCategoria(event.target.value);
    };
    const body = (
        <div className="cajaModalProyecto" 
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
                <div className="tituloModalProyectos"><h2>Nuevo Proyecto</h2></div>
                <br />
                <TextField label='Indicador' {...register('indicador',{required:true})} style={{width:'100%'}} />
                <br />
                <br />
                <TextField label='Descripcion' {...register('descripcion',{required:true})} style={{width:'100%'}} />
                <br />
                <br />
                <div style={{display:'flex', gap:'10px', justifyContent:'space-between'}}>
                    <FormControl sx={{ m: 0, minWidth: 120 }} size="normal">
                        <InputLabel >Categoria</InputLabel>
                        <Select value={categoria} label="Formula" {...register('categoria',{required:true})} onChange={handleChangeCategoria} >
                            <MenuItem value={'Baja'}>Baja</MenuItem>
                            <MenuItem value={'Media'}>Media</MenuItem>
                            <MenuItem value={'Alta'}>Alta</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField 
                        label='Fecha Inicio'
                        type='date'
                        InputLabelProps={{
                        shrink: true,
                        }} {...register('fechaInicio',{required:true})} style={{width:'100'}} />
                    <TextField
                        label='Fecha Final'
                        type='date'
                        InputLabelProps={{
                        shrink: true,
                        }}
                       {...register('fechaFinal',{required:true})} style={{width:'100'}} />
                </div>
                <div style={{display:'flex'}}>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel >Fórmula</InputLabel>
                    <Select value={formula} label="Formula" {...register('formula',{required:true})} onChange={handleChangeFormula} >
                        <MenuItem value={'Metodologia Agil'}>Metodologia Agíl</MenuItem>
                        <MenuItem value={'Metodologia Expositiva'}>Metodologia Expositiva</MenuItem>
                        <MenuItem value={'Metodología Lean'}>Metodología Lean</MenuItem>
                        <MenuItem value={'Metodología Kanban'}>Metodología Kanban</MenuItem>
                        <MenuItem value={'Metodología Scrum'}>Metodología Scrum</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
                    <InputLabel >Área</InputLabel>
                    <Select value={area} label="Formula" {...register('area',{required:true})} onChange={handleChangeArea} >
                        <MenuItem value={'Marketing'}>Marketing</MenuItem>
                        <MenuItem value={'Diseño'}>Diseño</MenuItem>
                        <MenuItem value={'Developers'}>Developers</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel >Frecuencia</InputLabel>
                    <Select value={frecuencia} label="Formula" {...register('frecuencia',{required:true})} onChange={handleChangeFrecuencia} >
                        <MenuItem value={'1/4'}>1/4</MenuItem>
                        <MenuItem value={'2/2'}>2/2</MenuItem>
                        <MenuItem value={'1/2'}>1/2</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
                    <TextField  label='cumplimiento' {...register('cumplimiento',{required:true})} type='number' size='small' />
                </FormControl>
                </div>
                <Button style={{backgroundColor:'#FC7124' , color:'white'}}>Enviar</Button>
                <Button style={{color:'#FC7124'}}>Cancelar</Button>
            </form>
        </div>
    )
  return (
    <div style={{display:'flex',flexDirection:'row-reverse', margin:'10px',border:'#FC7124'}}>
        <Button variant="outlined" style={{color:'#FC7124'}} onClick={()=>abrirCerrarModal()}>Añadir Proyecto</Button>
        <Modal open={modal} onClose={()=>abrirCerrarModal()} >
            {body}
        </Modal>
    </div>
  )
}

export default ModalProyectos