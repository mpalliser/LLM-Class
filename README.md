# LUNAR LANDER


__Autor__: Mariano Palliser.

__Cliente__: Guillermo cirer.



###DESCRIPCIÓN CLIENTE:

Para realizar el trabajo, el grupo de Guillermo me facilita varias opciones en cuanto a la colocación de los elementos en el __HTML__.


![alt tag](https://github.com/mpalliser/LunarLander/blob/master/img/imgmd/fondo1.png)
![alt tag](https://github.com/mpalliser/LunarLander/blob/master/img/imgmd/fondo2.png)
_(distribuciones posibles del html facilitadas por el grupo de Guillermo)_



A partir de estas dos opciones me he decantado por la primera ya que me pareció la forma mas sencilla de poder distribuir los distintos elementos en la pantalla de una forma ordenada.

También incluyen un mockup de como quieren que quede el juego en la versión móvil, del cual me he basado para crear el juego. Todas las imágenes del mockup me las proporcionan por separado y ya sin fondo.

![alt tag](https://github.com/mpalliser/LunarLander/blob/master/img/imgmd/mockup.jpg)


###DESARROLLO DEL PROYECTO:

Una vez claras las bases del proyecto, he tenido que añadir o realizar varias tareas como:

* La imagen de la nave que me proporcionan es de un tamaño distinto a la nave con el motor encendido, así que he re-dimensionado la imagen con el motor encendido al mismo tamaño que la nave apagada para que no cree conflicto de tamaños al cambiar de una a otra.

![alt tag](https://github.com/mpalliser/LunarLander/blob/master/img/imgmd/nave.png)
![alt tag](https://github.com/mpalliser/LunarLander/blob/master/img/imgmd/naveFuego.png)

* En los indicadores de velocidad, altura y gasolina no indican como tienen que ser los "contadores" así que he creado los contadores de gasolina y velocidad que son un div con un degradado para darle mejor apariencia.
  * Contador de Gasolina: Va desde 100 hasta 0 en relación al tiempo que el motor esta encendido.
  * Contador de Velocidad: Para este contador la altura es (v * 6,9) ya que el máximo de v(velocidad) del juego es 14,5 aprox, de este modo al llegar a 14,5 v que es el tope el div estará lleno al 100%. 
  * Para mayor facilidad, __he modificado la imagen de velocidad, en color verde/rojo así, si la velocidad es inferior a 5 tanto la imagen como el contador de velocidad aparecen en verde, y si es mayor que 5 aparecen en rojo.__
  
    ![alt tag](https://github.com/mpalliser/LunarLander/blob/master/img/imgmd/velocidadGreen.png)
    ![alt tag](https://github.com/mpalliser/LunarLander/blob/master/img/imgmd/velocidadRed.png)

  * Contador de Altura: Este contador lo he omitido ya que me parece redundante, el jugador ya tiene la nave como referencia de la altura que le falta para llegar a la luna, no necesita otro indicador, que ademas puede confundir al tener tres contadores "barras" que se mueven a parte también de la propia nave que va cayendo.

* En cuanto a los botones, los he colocado en el lado derecho de la pantalla. También he tenido que añadir dos botones. Uno para las instrucciones y otro para el acerca de. __Los he creado desde 0 con el Gimp__, y les he dado el mismo color que los botones que me facilitaron.

![alt tag](https://github.com/mpalliser/LunarLander/blob/master/img/imgmd/info.png)
![alt tag](https://github.com/mpalliser/LunarLander/blob/master/img/imgmd/acercade.png)

* He añadido un *div* del 100% con opacity para que se atenúe el juego a excepción de los botones.
* A la imagen de la tierra añadida le he tratado los colores usando gimp.

![alt tag](https://github.com/mpalliser/LunarLander/blob/master/img/imgmd/tierra.png)
![alt tag](https://github.com/mpalliser/LunarLander/blob/master/img/imgmd/tierraTratada.png)

* Para crear la imagen de la explosión de la nave he tenido que crear un gift a partir de una serie de imágenes de la nave modificadas con el Gimp, las imágenes que forman el gift están en el siguiente [directorio](https://github.com/mpalliser/LunarLander/blob/master/img/explosion/)

####A la hora de testear el juego he encontrado varios bugs que no he podido resolver como:

* El juego ha sido creado utilizando Firefox.
* Al iniciar el juego en Chrome los botones de retroceso de instrucciones / Acerca de, no aparecen en la posición que deberían.
* Con el juego pausado, al volver al juego, el motor se enciende automáticamente.


### Una pequeña preview de como se ve el juego // juego pausado.
![alt tag](https://github.com/mpalliser/LunarLander/blob/master/img/imgmd/pantalla.png)
![alt tag](https://github.com/mpalliser/LunarLander/blob/master/img/imgmd/apagada.png)

### Preview versión para móvil.
![alt tag](https://github.com/mpalliser/LunarLander/blob/master/img/imgmd/movil.png)


