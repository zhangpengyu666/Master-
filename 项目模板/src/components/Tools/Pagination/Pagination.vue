<template>
  <div class="pagination">
    <span class="total">共{{ total }}条</span>
    <select v-model="pagesize" name="" id="" @change="sizeChange">
      <option v-for="(item, index) in pageSizes" :key="index" :value="item"
        >每页{{ item }}条</option
      >
    </select>
    <ul class="pager">
      <span @click="min">&laquo;</span>
      <li
        v-for="(item, index) in pagecount"
        :key="index"
        @click="change(item)"
        :class="{ active: item == pagenum }"
      >
        <a v-if="item != 0"> {{ item }}</a>
        <a v-else> ...</a>
      </li>
      <span @click="add">&raquo;</span>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
    },
    pageSize: {
      type: Number,
    },
    pageNum: {
      type: Number,
    },
    pageSizes: {
      type: Array,
    },
  },
  data() {
    return {
      pagenum: 0,
      pagesize: 0,
    };
  },
  mounted() {
    this.pagenum = this.pageNum;
    this.pagesize = this.pageSize;
  },
  computed: {
    pages() {
      return Math.ceil(this.total / this.pageSize);
    },
    pagecount() {
      let pages = this.pages;
      if (pages <= 5) {
        return [...new Array(pages)].map((v, i) => i + 1);
      } else {
        if (this.pagenum <= 2) return [1, 2, 3, 0, pages];
        if (this.pagenum >= pages - 1)
          return [1, 0, pages - 2, pages - 1, pages];
        if (this.pagenum === 3) return [1, 2, 3, 4, 0, pages];
        if (this.pagenum === pages - 2)
          return [1, 0, pages - 3, pages - 2, pages - 1, pages];
        return [
          1,
          0,
          this.pagenum - 1,
          this.pagenum,
          this.pagenum + 1,
          0,
          pages,
        ];
      }
    },
  },
  methods: {
    change(i) {
      if (i != 0) {
        this.pagenum = i;
      }
      console.log(i);
      this.$emit("currentChange", this.pagenum);
    },
    min() {
      this.pagenum--;
      if (this.pagenum < 1) {
        this.pagenum = 1;
        alert("已经是第一页了");
        return false;
      }

      this.$emit("currentChange", this.pagenum);
    },
    add() {
      this.pagenum++;
      if (this.pagenum > this.pages) {
        this.pagenum = this.pages;
        alert("已经是最后一页了");
        return false;
      }

      this.$emit("currentChange", this.pagenum);
    },
    sizeChange() {
      this.$emit("sizeChange", this.pagesize);
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  width: 70%;
  display: flex;
  .total {
    font-size: 13px;
    color: #606266;
    line-height: 28px;
    margin-right: 5px;
  }
  select {
    border: 1px solid #606266;
    color: #606266;
  }
}
.pager {
  display: flex;
  width: 60%;

  .active {
    background-color: #409eff;
    color: #fff;
  }
  li,
  span {
    flex: 1;

    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    min-width: 30px;
    border-radius: 2px;
    padding: 0 4px;

    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
  }
}
</style>
