<template>
  <div>
    <h1>Haz aqui tu pedido!</h1>
    <form action="pedido.js">
      <p>Datos de contacto.</p>
      <label for="fname">Nombre:</label><br />
      <input type="text" id="fname" name="fname" placeholder="John" /><br />
      <label for="lname">Apellido:</label><br />
      <input type="text" id="lname" name="lname" placeholder="Doe" /><br />
      <label for="mail">Email:</label><br />
      <input
        type="email"
        id="mail"
        name="mail"
        placeholder="cliente@email.com"
      /><br />
      <label for="phone">Teléfono:</label><br />
      <input
        type="number"
        id="phone"
        name="phone"
        placeholder="5512345678"
      /><br />
      <p>
        Elige una de las sugerencias del pastelero o personaliza tu propio
        pastel!
      </p>
      <input type="radio" id="sug-chef" name="tipo-pedido" value="sug-chef" />
      <label for="sug-chef">Sugerencia del pastelero</label><br />
      <input type="radio" id="custom" name="tipo-pedido" value="custom" />
      <label for="custom">Personalizado</label><br />
      <p>Elige tu opción favorita:</p>
      <input type="radio" id="chef1" name="opcion-pastel" value="chef1" />
      <label for="chef1">Pastel sabor rojo</label><br />
      <input type="radio" id="chef2" name="opcion-pastel" value="chef2" />
      <label for="chef2">Pastel Vocho tuneado</label><br />
      <input type="radio" id="chef3" name="opcion-pastel" value="chef3" />
      <label for="chef3">Pastel Maruchan con coca</label><br />
      <p>Elige el sabor de tu pan:</p>
      <input type="checkbox" id="sabor1" name="sabor1" value="fresa" />
      <label for="sabor1">Fresa</label><br />
      <input type="checkbox" id="sabor2" name="sabor2" value="chocolate" />
      <label for="sabor2">Chocolate</label><br />
      <input type="checkbox" id="sabor3" name="sabor3" value="vainilla" />
      <label for="sabor3">Vainilla</label><br />
      <input type="checkbox" id="sabor4" name="sabor4" value="cajeta" />
      <label for="sabor4">Cajeta</label><br />
      <input type="checkbox" id="sabor5" name="sabor5" value="naranja" />
      <label for="sabor5">Naranja</label><br />
      <input type="checkbox" id="sabor6" name="sabor6" value="tresleches" />
      <label for="sabor6">Tres Leches</label>
      <br />
      <p>Elige los adornos de tu pastel:</p>
      <input type="checkbox" id="adorno1" name="adorno1" value="ch-chocolate" />
      <label for="adorno1">Chispas de chocolate</label><br />
      <input type="checkbox" id="adorno2" name="adorno2" value="texto" />
      <label for="adorno2">Texto</label>
      <input
        type="text"
        id="adorno2txt"
        name="adornor2txt"
        placeholder="¿Qué mensaje?"
      /><br />
      <input type="checkbox" id="adorno3" name="adorno3" value="betun" />
      <label for="adorno3">Figuras de betún</label><br />
      <input type="checkbox" id="adorno4" name="adorno4" value="fruta" />
      <label for="adorno4">Rebanadas de fruta</label>
      <input
        type="text"
        id="adorno4txt"
        name="adornor4txt"
        placeholder="¿Cuáles frutas?"
      /><br />
      <input
        type="checkbox"
        id="adorno5"
        name="adorno5"
        value="hoj-chocolate"
      />
      <label for="adorno5">Hojuelas de chocolate</label><br />
      <input type="checkbox" id="adorno6" name="adorno6" value="imagen" />
      <label for="adorno6">Imagen personalizada</label>
      <input type="file" id="adorno6img" name="adorno6img" /><br />
      <input type="checkbox" id="adorno7" name="adorno7" value="figura" />
      <label for="adorno6">Figurín de plástico</label>
      <br />
      <p>Elige el color del betún:</p>
      <input type="radio" id="blanco" name="betun" value="blanco" />
      <label for="blanco">Blanco</label><br />
      <input type="radio" id="color" name="betun" value="color" />
      <label for="color">Otro color</label>
      <label for="sel-color">:</label>
      <input type="color" id="sel-color" name="sel-color" />
      <br />
      <label for="descripcion"
        >Describe con detalle como te gustaría que se viera tu pastel o adjunta
        una imagen de referencia:</label
      ><br />
      <input
        type="text"
        id="descripcion"
        name="descripcion"
        size="300"
        width="50"
      /><br />
      <input type="file" id="descripcionimg" name="descripcionimg" /><br />
      <br />
      <p>Total:</p>
      <p>$150.00</p>
      <input type="submit" value="Confirmar y Pagar" />
      <input type="reset" value="Comenzar de nuevo" />
    </form>
  </div>
</template>

<script>
export default {
  name: "FormularioMain",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
