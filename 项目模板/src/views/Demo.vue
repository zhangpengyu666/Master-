<template>
  <div>
    <my-step v-model.number="value"></my-step>
    <my-pagination
      @currentChange="currentChange"
      :total="50"
      :page-size="pagesize"
      :page-num="pagenum"
      :page-sizes="[5, 10, 3, 4]"
      @sizeChange="sizeChange"
    ></my-pagination>
    <my-button @click.native="show = true">show mask</my-button>

    <my-add v-model="title" @click="add"></my-add>
    <my-mask :show="show" @hide="hide">
      <div>
        <h1>1111</h1>
        <h2>2222</h2>
      </div>
    </my-mask>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 10,
      pagenum: 3,
      show: false,
      title: "111",
      pagesize: 10,
    };
  },
  methods: {
    currentChange(val) {
      this.pagenum = val;
    },
    sizeChange(size) {
      this.pagesize = size;
      console.log(this.pagesize);
    },

    hide() {
      console.log(111);
      this.show = false;
    },
    add() {
      console.log(this.title);
    },
  },
  created() {},
};
</script>
<style lang="scss"></style>
