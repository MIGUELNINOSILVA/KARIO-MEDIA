
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function BotonAAyuda() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Ayuda = [
    {
      titulo_ayuda:'Modificacion del Proyecto',
      descripcion_ayuda: 'Quiero modificar las bases de mi proyecto pero no puedo',
      fecha_creacion_ayuda:'2023-10-05',
      nombre_usuario:'Miguel Niño'
    },
    {
      titulo_ayuda:'Modificacion diseño mobile',
      descripcion_ayuda: 'no me estan siriviendo las mediaqueries',
      fecha_creacion_ayuda:'2023-10-05',
      nombre_usuario:'Deiby Parada'
    }
  ]

  return (
   <>
     <div style={{display:'flex',flexDirection:'row-reverse', margin:'10px',border:'#FC7124'}}>
      <Button variant="outlined" onClick={handleClickOpen} style={{color:'#FC7124'}}>
        Agregar Ayuda
      </Button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Inserta tu solicitud de ayuda"}
        </DialogTitle>
        <DialogContent>
        
        <label htmlFor="ayuda">Describe tu solicitud</label>
        <input type="text" placeholder='Necesito ayuda urgente con ...' />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{color:'#FC7124'}}>Cancelar</Button>
          <Button onClick={handleClose} autoFocus style={{color:'#FC7124'}}>Añadir</Button>
        </DialogActions>
      </Dialog>
  
    </div>
   </>
  );
}
