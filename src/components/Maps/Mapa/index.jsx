import React, { useCallback, useState } from 'react'

// API GOOGLE MAPS
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'


const center = {
  lat: -3.675904,
  lng: -45.380543

}

const containerStyle = {
  width: '100%',
  height: '100%'
}





const Mapa = () => {
  const [map, setMap] = useState(null)
  const [ error, setError ] = useState(null)

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCP8J7ov18X_m-ueXgQ6zqTTwAXCPf4N5E',
    // Caso ocorra algum erro
    loadError: (error) => {
      console.log('Erro ao carregar a API do Google Maps:', error)
      setError(error)
    }
  })


  //Esse trecho de código está utilizando o Hook useCallback do React para definir uma função chamada onLoad, que será executada quando o mapa do Google estiver carregado.
  const onLoad = useCallback(function callback(map) {

    // A função onLoad recebe um parâmetro map, que representa o objeto do mapa do Google. 
    // O objetivo dessa função é ajustar o zoom do mapa para que ele mostre uma determinada região, especificada por bounds. 
    // Para isso, são criados novos limites de visualização com o construtor LatLngBounds da API do Google Maps, a partir de uma variável center, que não está definida no trecho de código que você compartilhou. 
    // Porém, acredito que center possa ser um ponto central do mapa, por exemplo.
    const bounds = new window.google.maps.LatLngBounds(center)


    map.fitBounds(bounds)    
    //  A função fitBounds do objeto do mapa do Google é usada para ajustar o zoom do mapa de forma
    //  que ele mostre todo o conteúdo especificado pelas coordenadas passadas como argumento.Ou seja, 
    //  a função "encaixa" o mapa nas coordenadas passadas, ajustando o nível de zoom do mapa para que todas
    //  as coordenadas estejam visíveis na tela.

      setMap(map)
  }, [])


  //Executada quando o componente que contém o mapa do Google for desmontado da árvore de elementos da página.  
  const onUnmount = useCallback(() => {
    setMap(null)
  }, [])


  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={9}
          onLoad={onLoad} //Passa dados para função onLoad quando o mapa e carregado
          onUnmount={onUnmount}
          options={{
            disableDefaultUI: true, //Define se os controles padrão do mapa, como os botões de zoom e de controle de mapa, devem ser exibidos ou não. O valor padrão é false.
            mapTypeControl: false, //Define se o controle de tipo de mapa, que permite alternar entre os modos de visualização de mapa, deve ser exibido ou não. O valor padrão é true.
            streetViewControl: false, //Define se o controle de visão da rua, que permite ver imagens panorâmicas de ruas selecionadas, deve ser exibido ou não. O valor padrão é true.
            fullscreenControl: false, //Define se o controle de tela cheia deve ser exibido ou não. O valor padrão é true.
            styles: {
              
            }, //Permite definir um array de objetos de estilo para personalizar a aparência do mapa. Cada objeto de estilo pode conter propriedades para controlar a cor, o tamanho e outros aspectos do mapa.
            minZoom: 0, //Define o nível mínimo de zoom permitido no mapa. O valor padrão é 0.
            maxZoom: 25 //Define o nível máximo de zoom permitido no mapa. O valor padrão é 25.

            //FONT
            //https://react-google-maps-api-docs.netlify.app/
          }}
        >

        </GoogleMap>
      ) : <>CARREGANDO MAPA...</>
      }
      {error &&
        <div> O mapa não pode ser carregado agora , desculpe . </div>
      }
    </div>
  )
}

export default Mapa