<template>
  <div class="formItem">
    <input
      class="inp"
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @keydown.enter="handlerFun"
    />
    <my-button class="btn" type="success" @click.native="handlerFun">
      {{ msg }}</my-button
    >
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: "添加",
    },
    value: {
      type: String,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    handlerFun() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.formItem {
  width: 100%;
  display: flex;

  padding-left: 0.4rem;
  padding-right: 0.4rem;
  box-sizing: border-box;
  .inp {
    flex: 3;
    border: none;
    outline: none;
    border: 1px solid #ebedf0;
    border-radius: 5px;
    color: #323233;
    line-height: inherit;
    padding-left: 0.2rem;
    height: 0.88rem;
    margin-right: 20px;
  }
  .btn {
    flex: 1;
  }
}
</style>
