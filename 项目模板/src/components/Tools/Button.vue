<template>
  <div class="myButton">
    <button
      :class="['my-btn', 'my-btn-' + type]"
      :style="{ borderRadius: radius }"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "",
    },
    round: String,
    square: String,
  },
  data() {
    return {
      radius: 0,
    };
  },
  mounted() {},
  created() {
    if (this.round == "") {
      this.radius = "999px";
    } else if (this.square == "") {
      this.radius = "0";
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.my-button {
  overflow: hidden;
}
.my-btn {
  width: 1.8rem;
  color: #323233;
  background-color: #fff;
  border: 1px solid #ebedf0;
  padding: 0 0.3rem;
  font-size: 0.28rem;
  box-sizing: border-box;
  height: 0.88rem;
  text-align: center;
  line-height: 1.2;
  outline: none;
  float: left;
}
.my-btn-success {
  color: #fff;
  background-color: #07c160;
  border: 1px solid #07c160;
}

.my-btn-info {
  color: #fff;
  background-color: #1989fa;
  border: 1px solid #1989fa;
}
</style>
