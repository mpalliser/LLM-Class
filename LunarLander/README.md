#LUNAR LANDER


En este repositorio se encuentra el proyecto correspondiente a la web Lunar Lander de __Guillermo Cirer__, realizado por __Mariano Palliser__.
Para realizar el trabajo, el grupo de Guillermo facilita varias opciones en cuanto a la colocación de los elementos en el __HTML__.

![alt tag](https://github.com/mpalliser/LLM-Class/blob/Lunar-Lander/LunarLander/img/imgmd/fondo1.png)
![alt tag](https://github.com/mpalliser/LLM-Class/blob/Lunar-Lander/LunarLander/img/imgmd/fondo2.png)
_(distribuciones posibles del html facilitadas por el grupo de Guillermo)_

A partir de estas dos opciones me he decantado por la primera ya que me pareció la forma mas sencilla de poder distribuir los distintos elementos en la pantalla de una forma ordenada.

##Versión horizontal
###Footer
En esta sección del html colocaré __la luna__ que será la base a la que la nave ha de llegar, el grupo de Guillermo me ha facilitado la imagen de la luna ya tratada con el único inconveniente que el tamaño de la luna no cubre el ancho total de una pantalla estándar.

###Body izquierdo
En esta sección colocare el __panel de control__, el grupo de Guillermo especifica que quieren los iconos anclados a la parte superior izquierda con un margen del 5% tanto al top como al lado izquierdo. __He realizado dos versiones__, una con los iconos tal como ellos me piden con los iconos colocados uno al lado del otro, y otra versión con los iconos con un margen del 50% al top y los iconos uno encima del otro para que los indicadores de velocidad/altura/fuel estén en el lateral del icono en vez de estar en la parte inferior.

###Body central
En esta sección la única instrucción que me dan es que __la nave__ quede en el centro de la pantalla. En vez de centrar la nave al centro de la pantalla, la he pegado lo máximo posible al margen superior de la pantalla, para que el juego tenga mas recorrido y le he puesto margen lateral para que quede centrada. No especifican el tamaño que ha de tener la nave, así que le he dado un tamaño lo suficientemente grande para que se pueda jugar con comodidad pero no excesivo para que no parezca muy grande en comparación a la luna.

(_También me han proporcionado una imagén de la nave con el motor encendido, la idea es que cuando el juego este en funcionamiento la imagén de la nave encendida sustituya a la nave estandar._)

###Body derecho
En el body derecho colocaré __los botones__ _play/pause/reiniciar/opciones_. El grupo de Guillermo me pide que aparezcan el boton play reiniciar y opciones mientras el juego esta parado y cuando el juego esta en funcionamiento el botón de play se sustituye por el botón de pause y los botones de play/reiniciar desaparecen. En base a estas instrucciones tengo varias versiones:
1. En esta primera he seguido sus instrucciones tal cual me piden.
2. En esta segunda opción, con el juego parado solo aparecen los botones play y opciones _(omitiendo el botón reiniciar)_ y una vez pulsamos el botón play, este y el de opciones desaparecen y aparece el botón pause en su lugar.

__En cuanto al botón pause__, cuando el juego esta funcionando la idea es que si pulsamos el pause se atenúe el fondo y aparezcan los botones play, opciones y reiniciar en el centro de la pantalla.


En general no me han pedido específicamente el tamaño ni de la nave ni de los botones, así que les he dado un tamaño acorde en relación al boceto que me han proporcionado de la versión de móvil.


##Versión vertical
Para esta versión, la base del html/css es la misma lo único que __he tenido que hacer pequeñas modificaciones__ para que se adapten tanto las imagenes como su posicionamiento a las peticiones que hacia el grupo de Guillermo.

1. Los botones que aparecian en el body derecho ahora estan en el izquierdo, y en vez de aparecer en horizontal estan en disposición vertical para ocupar menos espacio en la pantalla.
2. El panel de control aparecia en el body izquierdo, en está versión esta en el body derecho y en vez de aparecer pegados a la parte superior, estan colocados en la parte central de la pantalla pegados al lateral derecho y los parametros apareceran por encima.
3. Ya que esta versión esta pensada para pantallas verticales le he fijado el tamaño a las imagenes en _px_ en relacion a una pantalla de movil estandar para que queden mas o menos igual en la mayoria de dispositivos.


###Opciones
He añadido un html/css con la disposición de botones en la parte central que aparecerá cuando pulsen el pause y los créditos en la zona superior izquierda, mi idea es que esto aparezca por encima del juego y el juego se quede pausado y atenuado pero como no se hacerlo aun, lo pongo como un html/css mas por el momento.
