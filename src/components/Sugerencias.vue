<template>
  <div>
    <h3>Ideas del Pastelero</h3>
    <dl>
      <dt>
        {{ $store.state.premadeCakes[0].name }}
        ................................... ${{
          $store.state.premadeCakes[0].price
        }}
      </dt>
      <dd>*{{ $store.state.premadeCakes[0].description }}</dd>
      <dt>
        {{ $store.state.premadeCakes[1].name }}
        ................................... ${{
          $store.state.premadeCakes[1].price
        }}
      </dt>
      <dd>*{{ $store.state.premadeCakes[1].description }}</dd>
      <dt>
        {{ $store.state.premadeCakes[2].name }}
        ................................... ${{
          $store.state.premadeCakes[2].price
        }}
      </dt>
      <dd>*{{ $store.state.premadeCakes[2].description }}</dd>
      <dt>
        {{ $store.state.premadeCakes[3].name }}
        ................................... ${{
          $store.state.premadeCakes[3].price
        }}
      </dt>
      <dd>*{{ $store.state.premadeCakes[3].description }}</dd>
      <dt>
        {{ $store.state.premadeCakes[4].name }}
        ................................... ${{
          $store.state.premadeCakes[4].price
        }}
      </dt>
      <dd>*{{ $store.state.premadeCakes[4].description }}</dd>
      <dt>
        {{ $store.state.premadeCakes[5].name }}
        ................................... ${{
          $store.state.premadeCakes[5].price
        }}
      </dt>
      <dd>*{{ $store.state.premadeCakes[5].description }}</dd>
      <dt>
        {{ $store.state.premadeCakes[6].name }}
        ................................... ${{
          $store.state.premadeCakes[6].price
        }}
      </dt>
      <dd>*{{ $store.state.premadeCakes[6].description }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "SugerenciasMain",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
dl {
  background-color: #8b7169;
  width: 50%;
  border-radius: 15px;
  list-style-type: none;
  margin-left: 30px;
  padding: 15px;
  color: #7be6dc;
  font-weight: bold;
  -webkit-text-stroke: 1px #56a19a;
  text-shadow: 0px 0px 8px black;
}
dd {
  margin: 10px 15px 20px;
}
</style>
