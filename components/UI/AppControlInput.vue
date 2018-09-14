<template>
  <div class="input-control">
    <label><slot /></label>
    <input
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)">
    <textarea
      v-if="controlType === 'textarea'"
      rows="5"
      :value="value"
      @input="$emit('input', $event.target.value)"></textarea>
    <div v-if="controlType === 'image'">
      <input
      type="file"
      v-bind="$attrs"
      :value="value"
      @change = "onFileSelected"
      @input="$emit('input', $event.target.value)">
      <button @click.prevent="onUpload">Add</button>
      <button @click.prevent="onRemove">Remove</button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'AppInputControl',
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.input-control {
  margin: 10px 0;
}

.input-control label {
  display: block;
  font-weight: bold;
}

.input-control input,
.input-control textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid #ccc;
  padding: 5px;
}

.input-control input:focus,
.input-control textarea:focus {
  background-color: #eee;
  outline: none;
}
</style>


