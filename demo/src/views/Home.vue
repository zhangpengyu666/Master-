<template>
  <el-container>
    <el-header>
      <div class="toubu">
        <img class="logo" src="../assets/logo.png" />
        电商后台管理系统
      </div>
      <el-button type="info" class="back" @click="back">退出</el-button>
    </el-header>

    <el-container>
      <el-aside :width="flag ? '65px' : '210px'">
        <div class="toggle" @click="toggle">|||</div>
        <el-menu
          unique-opened
          :collapse="flag"
          :collapse-transition="false"
          router
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409FFF"
        >
          <el-submenu :index="item.id+''" v-for="item in menu" :key="item.id">
            <template slot="title">
              <i :class="iconObj[item.id]"></i>
              <span>{{ item.authName}}</span>
            </template>
            <el-menu-item
              :index="'/' + subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      flag: false,
      menu: [],
      iconObj: {
        "125": "iconfont icon-user",
        "103": "iconfont icon-tijikongjian",
        "101": "iconfont icon-shangpin",
        "102": "iconfont icon-danju",
        "145": "iconfont icon-baobiao"
      }
    };
  },
  mounted() {
    this.$http
      .get("https://www.liulongbin.top:8888/api/private/v1/menus")
      .then(res => {
        console.log(res.data.data);
        this.menu = res.data.data;
      });
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toggle() {
      this.flag = !this.flag;
    },
    back() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    }
  }
};
</script>

<style lang='scss'>
.el-header {
  background-color: #373f41;
  color: white;
  line-height: 60px;
  font-size: 23px;
}
.iconfont {
  margin-right: 10px;
}
.back {
  margin-left: 300px;
  position: absolute;
  top: 10px;
  left: 860px;
}
.toggle {
  width: 99.5%;
  height: 24px;
  background-color: #4a5064;
  line-height: 24px;
  text-align: center;
  color: white;
  font-size: 10px;
  letter-spacing: 0.2em;
}
.toubu {
  width: 300px;
  display: flex;
}
.el-aside {
  background-color: #333744;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 600px;
  width: 210px;
}

.el-main {
  background-color: #e9eef3;
  height: 600px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.logo {
  height: 40px;
  margin: 10px auto;
}
.el-submenu__title {
  width: 100%;
  display: flex;
  font-size: 14px;
  color: #303133;
  padding: 0 20px;
  cursor: pointer;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  box-sizing: border-box;
}
.el-submenu {
  list-style: none;
  margin: 0;
  padding-left: 0;
}
</style>
