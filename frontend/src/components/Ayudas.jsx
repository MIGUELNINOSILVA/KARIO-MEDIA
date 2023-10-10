import React from 'react'
import usu from './../assets/img/VectorUsuario.svg'
const ListaDeAyudas = [
    {
        titulo:'Titulo de la ayuda',
        descripcion:'Aqui va la descripcion de la ayuda',
        creador:'UsuarioX',
        fecha:'2023/04/19'
    }
]
const Ayudas = () => {
  return (
    {ListaDeAyudas.map(ayuda=>
        <div>
            <img src="" alt="" />
        </div>
        )}
  )
}

export default Ayudas
