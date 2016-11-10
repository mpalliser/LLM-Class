#LUNAR LANDER


En este repositorio se encuentra el proyecto correspondiente a la web Lunar Lander de __Guillermo Cirer__, realizado por __Mariano Palliser__.
Para realizar el trabajo, el grupo de Guillermo facilita varias opciones en cuanto a la colocación de los elementos en el __HTML__.

![alt tag](https://github.com/mpalliser/LLM-Class/blob/master/LunarLander/img/imgmd/fondo1.png)
![alt tag](https://github.com/mpalliser/LLM-Class/blob/master/LunarLander/img/imgmd/fondo2.png)
_(distribuciones posibles del html facilitadas por el grupo de Guillermo)_

A partir de estas dos opciones me he decantado por la primera ya que me pareció la forma mas sencilla de poder distribuir los distintos elementos en la pantalla de una forma ordenada.

##Versión horizontal
###Footer
En esta sección del html me __proporcionaron la luna ya tratada sin fondo__, lista para colocar, el único problema es que el tamaño de la luna no era muy grande, por lo tanto tuve que meter la imagen dentro de una clase que ocupaba el 100& del ancho y 20% de alto en la parte inferior. Y una vez dentro de esa clase crear otra clase con la imagen que ocupara el 100% del ancho para estirar la imagen.

###Body izquierdo
En esta sección colocare el __panel de control__, el grupo de Guillermo especifica que quieren los iconos anclados a la parte superior izquierda con un margen del 5% tanto al top como al lado izquierdo. Pero no especificaban el tamaño de los iconos, por lo cual le di a los iconos un tamaño de width/height 10% de la parte izquierda, quedando asi los iconos del panel de control con un tamaño inferior a la nave.

###Body central
En esta sección la única instrucción que me dan es que __la nave__ quede en el centro de la pantalla. En vez de centrar la nave al centro de la pantalla, la he pegado lo máximo posible al margen superior de la pantalla, para que el juego tenga mas recorrido y le he puesto margen lateral para que quede centrada. No especifican el tamaño que ha de tener la nave, así que le he dado un tamaño del width:8% y height:15% dentro de la sección central.

(_También me han proporcionado una imagén de la nave con el motor encendido, la idea es que cuando el juego este en funcionamiento la imagén de la nave encendida sustituya a la nave estandar._)

###Body derecho
En el body derecho colocaré __los botones__ _play/pause/reiniciar/opciones_. El grupo de Guillermo me pide que aparezcan el boton play reiniciar y opciones mientras el juego esta parado y cuando el juego esta en funcionamiento el botón de play se sustituye por el botón de pause y el botón de play desaparece.
He omitido el boton de reiniciar, ya que cuando el juego esta parado no es necesario ese boton.

__En cuanto al botón pause__, cuando el juego esta funcionando la idea es que si pulsamos el pause se atenúe el fondo y aparezcan los botones play, opciones y reiniciar en el centro de la pantalla.



##Versión movil
Para esta versión, la base del html/css es la misma lo único que __he tenido que hacer pequeñas modificaciones__ para que se adapten tanto las imágenes como su posicionamiento a las peticiones que hacia el grupo de Guillermo.

1.  El grupo de Guillermo pedía que los botones de play/pause/opciones aparezcan en el lateral izquierdo, pero como la mayoría de personas cogen el movil con la mano derecha los he situado en el lateral izquierdo dándoles un margen al top de 200px y un width de 50 píxeles y los iconos tienen un tamaño de 50px tanto de alto como de ancho, uno debajo del otro pegados al margen derecho.
2. El __panel de control__ el grupo de Guillermo lo quieren que quede en la parte superior con un margen del 40% al top con los indicadores en la parte de encima en la parte derecha, y los he colocado en el lado izquierdo _(siguiendo el boceto que me pasaron por pdf)_

###Instrucciones
En este html aparecen las instrucciones del juego así como el creador y el cliente.
