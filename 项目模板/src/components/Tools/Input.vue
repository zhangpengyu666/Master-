<template>
  <div class="">
    <input
      class="inp"
      :placeholder="placeholder"
      :value="val"
      type="text"
      @input="getval($event)"
    />
  </div>
</template>

<script>
export default {
  props: {
    val: {
      type: String,
    },
    placeholder: {
      type: String,
      default: "请输入内容",
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    getval(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.inp {
  width: 70%;
  border: none;
  outline: none;
  border: 1px solid #ebedf0;
  border-radius: 5px;
  color: #323233;
  line-height: inherit;
  padding-left: 0.2rem;
  height: 0.8rem;
}
</style>
