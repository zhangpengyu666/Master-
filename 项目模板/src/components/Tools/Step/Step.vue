<template>
  <div class="step">
    <span class="left center" @click="minum">-</span>
    <div>
      <input type="text" v-model="val" @input="change($event)" />
    </div>
    <span class="center" @click="plus">+</span>
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      val: 0,
    };
  },
  mounted() {
    this.val = this.value;
  },
  methods: {
    change(e) {
      this.$emit("input", e.target.value);
    },
    plus() {
      this.val++;
      this.$emit("input", this.val);
    },
    minum() {
      this.val--;
      this.$emit("input", this.val);
    },
  },
};
</script>

<style lang="scss" scoped>
.step {
  width: 180px;
  height: 38px;
  display: flex;

  span {
    width: 40px;
    height: 100%;

    z-index: 1;

    width: 40px;
    height: auto;
    text-align: center;
    background: #f5f7fa;
    color: #606266;
    cursor: pointer;
    font-size: 20px;
    line-height: 38px;
  }
  .left {
    border-radius: 4px 0 0 4px;
    border-right: 1px solid #dcdfe6;
  }
  .right {
    border-radius: 0 4px 4px 0;
    border-left: 1px solid #dcdfe6;
  }
  div {
    flex: 1;
    overflow: hidden;
    input {
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      float: left;
      border: 1px solid #dcdfe6;
      text-align: center;
      line-height: 38px;
    }
  }
}
</style>
