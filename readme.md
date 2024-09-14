Esta es una página web que muestra información sobre los primeros 100 pokémon.

Mi página web utiliza la API de Pokémon para obtener los datos de los pokémon y mostrarlos en tarjetas. Cada tarjeta contiene la imagen del pokémon, su nombre, tipo y peso.

En el archivo script.js, utilicé JavaScript para realizar una solicitud GET a la API de Pokémon y obtener los datos de los pokémon. Luego, recorrí los datos obtenidos y creé una tarjeta para cada pokémon. En sintesis: 
Utilicé la función fetch para realizar una solicitud GET a la API de Pokémon.
La URL https://pokeapi.co/api/v2/pokemon?limit=100 indica que quiero obtener sólo los datos de los primeros 100 pokémon.
Utilicé el método then para manejar la respuesta de la API.
Utilicé La función response.json() que convierte la respuesta en formato JSON.
Con un forEach recorrí los datos obtenidos y creé una tarjeta para cada pokémon.
Creé un elemento div para la tarjeta y le agregué la clase card.
Creé elementos img, h2 y p para la imagen, nombre, tipo y peso del pokémon.
Agregué los elementos a la tarjeta y luego la tarjeta al contenedor #pokemon-container.
Por último, utilicé catch, para el manejo de cualquier error que ocurra durante la solicitud.

En el archivo style.css, utilicé CSS para estilizar los elementos de la página y hacer que se vean atractivos.

Documentación de la API de Pokémon: Aquí puedes acceder a la documentación oficial de la API para obtener más información sobre su funcionamiento y posibilidades. https://pokeapi.co/docs/v2
