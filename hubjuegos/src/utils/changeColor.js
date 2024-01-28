export const changeColorRGB = () => {
  const randomNumber = (min, max) => {
    min = Math.ceil(min);
    console.log(min);
    max = Math.floor(max);
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
  };

  let R = randomNumber(0, 255);
  let G = randomNumber(0, 255);
  let B = randomNumber(0, 255);

  const color = `rgb(${R},${G},${B})`;
  return color;
};

//**Este código exporta una función llamada **`changeColorRGB`** que genera un color RGB aleatorio y
//  devuelve el valor resultante como una cadena. Aquí está una explicación detallada:

// 1. **Función `randomNumber`:**
// - Es una función auxiliar que toma dos parámetros (**`min`** y **`max`**) y devuelve un número entero aleatorio dentro del rango [min, max].
// - Utiliza **`Math.random()`** para generar un número decimal entre 0 y 1.
// - Multiplica este número por la diferencia entre **`max`** y **`min`** y lo redondea hacia abajo con **`Math.floor`**.
// - Luego, suma **`min`** al resultado para ajustar el rango y asegurarse de que el número esté en el intervalo deseado.
// 2. **Generación de Colores RGB:**
// - Se utilizan tres llamadas a **`randomNumber`** para obtener valores aleatorios para los componentes Rojo (**`R`**), Verde (**`G`**), y Azul (**`B`**) del modelo de color RGB.
// - Los valores de los componentes se encuentran en el rango de 0 a 255, que son los valores válidos para los componentes RGB.
// - Se crea una cadena **`color`** utilizando estos valores en el formato **`rgb(R, G, B)`**.
// 3. **Resultado:**
// - La función devuelve la cadena **`color`**, que representa un color RGB aleatorio cada vez que se llama a la función.

// En resumen, la función **`changeColorRGB`** genera y devuelve un color RGB aleatorio en cada llamada.
