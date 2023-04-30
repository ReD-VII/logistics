import React, { useState } from 'react'
import { FormConteiner } from './styles'

const NewOperationForm = () => {
    const [ dataForm, setDataForm ] = useState({
        nome: '',
        city: '',
        lat: '',
        lng: '',
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`
            NOME: ${dataForm.nome}
            CIDADE: ${dataForm.city}
            LAT: ${dataForm.lat}
            LNG: ${dataForm.lng}
        `)
        
    }

    return (
        <FormConteiner>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" placeholder='nome da base' onChange={(e) => setDataForm({... dataForm, nome: e.target.value})} />
                </label>
                <label>
                    Cidade:
                    <input type="text" placeholder='Nome da cidade' onChange={(e) => setDataForm({... dataForm, city: e.target.value})} />
                </label>
                <label>
                    Latitude  e Longitude:
                    <input type="text" placeholder='latitude' onChange={(e) => setDataForm({... dataForm, lat: parseFloat(e.target.value.replace(',', '.'))})} />
                    <input type="text" placeholder='longitude' onChange={(e) => setDataForm({... dataForm, lng: parseFloat(e.target.value.replace(',', '.'))})} />
                </label>

                <input type="submit" value="Enviar" />
            </form>
        </FormConteiner>
    )
}

export default NewOperationForm