# LUNAR LANDER


__Autor__: Mariano Palliser.
__Cliente__: Guillermo cirer.


###DESCRIPCIÓN CLIENTE:

Para realizar el trabajo, el grupo de Guillermo me facilita varias opciones en cuanto a la colocación de los elementos en el __HTML__.

![alt tag](https://github.com/mpalliser/LLM-Class/blob/master/LunarLander/img/imgmd/fondo1.png)
![alt tag](https://github.com/mpalliser/LLM-Class/blob/master/LunarLander/img/imgmd/fondo2.png)
_(distribuciones posibles del html facilitadas por el grupo de Guillermo)_

A partir de estas dos opciones me he decantado por la primera ya que me pareció la forma mas sencilla de poder distribuir los distintos elementos en la pantalla de una forma ordenada.

También incluyen un mockup de como quieren que quede el juego en la versión móvil, del cual me he basado para crear el juego. Todas las imágenes del mockup me las proporcionan por separado y ya sin fondo.

![alt tag](https://github.com/mpalliser/LLM-Class/blob/master/LunarLander/img/imgmd/mockup.jpg)


###DESARROLLO DEL PROYECTO:

Una vez claras las bases del proyecto, he tenido que añadir o realizar varias tareas como:

* La imágen de la nave que me proporcionan es de un tamaño distinto a la nave con el motor encendido, así que he redimensinado la imagen con el motor encendido al mismo tamaño que la nave apagada para que no cree conflicto de tamaños al cambiar de una a otra.

![alt tag](https://github.com/mpalliser/LLM-Class/blob/master/LunarLander/img/nave.png)
![alt tag](https://github.com/mpalliser/LLM-Class/blob/master/LunarLander/img/naveFuego.png)

* En los indicadores de velocidad, altura y gasolina no indican como tienen que ser los "contadores" así que he creado los contadores de gasolina y velocidad.
  * Contador de Gasolina: Va desde 100 hasta 0 en relación al tiempo que el motor esta encendido.
  * Contador de Velocidad: Para este contador la altura es (v * 6,9) ya que el máximo de v(velocidad) del juego es 14,5 aprox, de este modo al llegar a 14,5 v que es el tope el div estará lleno al 100%.
  * Contador de Altura: Este contador lo he omitido ya que me parece redundante, el jugador ya tiene la nave como referencia de la altura que le falta para llegar a la luna, no necesita otro indicador.
