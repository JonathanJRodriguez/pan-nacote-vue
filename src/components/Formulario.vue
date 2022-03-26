<template>
  <div class="formDiv">
    <h1>Haz aqui tu pedido!</h1>
    <h3>Datos de contacto.</h3>
    <label for="fname">Nombre:</label><br />
    <input type="text" v-model="nameChange" placeholder="John" /><br />
    <label for="lname">Apellido:</label><br />
    <input type="text" v-model="lname" placeholder="Doe" /><br />
    <label for="email">Email:</label><br />
    <input type="email" v-model="email" placeholder="cliente@email.com" /><br />
    <label for="phone">Teléfono:</label><br />
    <input type="number" v-model="phone" placeholder="5512345678" /><br />
    <h3>
      Elige una de las sugerencias del pastelero o personaliza tu propio pastel!
    </h3>
    <input type="radio" v-model="tipoPedido" value="sug-chef" />
    <label for="sug-chef">Sugerencia del pastelero</label><br />
    <input type="radio" v-model="tipoPedido" value="custom" />
    <label for="custom">Personalizado</label><br />
    <div v-if="tipoPedido === 'sug-chef'">
      <p>Elige tu opción favorita:</p>
      <input type="radio" v-model="opcionPastel" value="chef1" />
      <label for="chef1">Pastel sabor rojo</label><br />
      <input type="radio" v-model="opcionPastel" value="chef2" />
      <label for="chef2">Pastel Vocho tuneado</label><br />
      <input type="radio" v-model="opcionPastel" value="chef3" />
      <label for="chef3">Pastel Maruchan con coca</label><br />
    </div>
    <div v-if="tipoPedido === 'custom'">
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
      <h3>Elige los adornos de tu pastel:</h3>
      <input type="checkbox" id="adorno1" name="adorno1" value="ch-chocolate" />
      <label for="adorno1">Chispas de chocolate</label><br />
      <input type="checkbox" />
      <label for="adorno2">Texto</label>
      <input
        v-show="checked"
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
      <h3>Elige el color del betún:</h3>
      <input type="radio" id="blanco" name="betun" value="blanco" />
      <label for="blanco">Blanco</label><br />
      <input type="radio" id="color" name="betun" value="color" />
      <label for="color">Otro color</label>
      <label for="sel-color">:</label>
      <input type="color" id="sel-color" name="sel-color" />
      <br />
      <label for="descripcion"
        >Describe con detalle como te gustaría que se viera tu pastel y/o
        adjunta una imagen de referencia:</label
      ><br />
      <textarea
        class="userDesc"
        maxlength="300"
        placeholder="Escriba aqui su descripción..."
      ></textarea
      ><br />
      <input type="file" id="descripcionimg" name="descripcionimg" /><br />
    </div>
    <br />
    <div class="totalDiv">
      <h2>Total:</h2>
      <p class="totalPrice">$150.00</p>
      <button>Confirmar y pagar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormularioMain",
  data() {
    return {
      checked: true,
    };
  },
  computed: {
    nameChange: {
      get() {
        return this.$store.state.user.name;
      },
      set(name) {
        this.$store.dispatch("nameChange", name);
      },
    },
    lname: {
      get() {
        return this.$store.state.user.lname;
      },
      set(lname) {
        this.$store.dispatch("lname", lname);
      },
    },
    email: {
      get() {
        return this.$store.state.user.email;
      },
      set(email) {
        this.$store.dispatch("email", email);
      },
    },
    phone: {
      get() {
        return this.$store.state.user.phone;
      },
      set(phone) {
        this.$store.dispatch("phone", phone);
      },
    },
    tipoPedido: {
      get() {
        return this.$store.state.order.type;
      },
      set(orderType) {
        this.$store.dispatch("orderType", orderType);
      },
    },
    opcionPastel: {
      get() {
        return this.$store.state.order.chefOption;
      },
      set(chefOption) {
        this.$store.dispatch("chefOption", chefOption);
      },
    },
  },
};
</script>

<style scoped>
.formDiv {
  margin: 40px;
}

.totalPrice {
  font-size: 24pt;
}

label {
  margin-right: 20px;
}

input {
  border-radius: 5px;
  margin-bottom: 10px;
}

.userDesc {
  width: 90%;
  height: 200px;
  padding: 12px 20px;
  box-sizing: border-box;
  resize: none;
}

.totalDiv {
  padding: 0;
  text-align: center;
}

.totalDiv button {
  background-color: green;
  border-radius: 5px;
  padding: 15px;
  color: white;
  font-size: 20px;
}
</style>
