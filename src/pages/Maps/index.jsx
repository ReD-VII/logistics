import React from 'react'


// COMPONENTS
import Mapa from '../../components/Maps/Mapa'
import NewOperationForm from '../../components/Forms/NewOperationForm'
import MenuLat from '../../components/Menu/MenuLat'

const Maps = () => {
  return (
    <div>
      {/* <NewOperationForm/> */}
      <MenuLat />
      <Mapa />
    </div>
  )
}

export default Maps