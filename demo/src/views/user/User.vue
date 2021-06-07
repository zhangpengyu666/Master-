<template>
  <div class>
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="list">
      <el-input class="inp" v-model="info.query" @clear="clear" placeholder="请输入内容" clearable>
        <el-button @click="search" slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button class="add" @click="showflag=true" type="primary">添加用户</el-button>

      <el-table :data="userlist" stripe border style="width: 100%">
        <el-table-column type="index" label="#" width="50"></el-table-column>
        <el-table-column prop="username" label="姓名" width="160"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column prop="role_name" label="角色"></el-table-column>
        <el-table-column prop="address" label="状态">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.mg_state" @change="changestate(scope.row)"></el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini" circle @click="bj(scope.row)"></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              circle
              @click="sc(scope.row.id)"
            ></el-button>
            <el-tooltip
              class="item"
              effect="dark"
              content="角色分配"
              :enterable="false"
              placement="top"
            >
              <el-button
                type="warning"
                icon="el-icon-setting"
                size="mini"
                circle
                @click="set(scope.row)"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="sizechange"
        @current-change="pagenum"
        :current-page="info.pagenum"
        :page-sizes="[2, 5, 10, 15]"
        :page-size="info.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>

      <el-dialog title="添加用户" :visible.sync="showflag" width="50%" @close="close">
        <el-form :model="addinfo" ref="addUserFormRef" :rules="userrules" label-width="100px">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="addinfo.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="addinfo.password"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="addinfo.email"></el-input>
          </el-form-item>
          <el-form-item label="手机" prop="mobile">
            <el-input v-model="addinfo.mobile"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="showflag = false">取 消</el-button>
          <el-button type="primary" @click="add">确 定</el-button>
        </span>
      </el-dialog>

      <el-dialog title="修改用户信息" :visible.sync="bjflag" width="50%" @close="bjclose">
        <el-form :model="bjinfo" ref="bjUserFormRef" label-width="100px" :rules="editUserFormRules">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="bjinfo.username" disabled></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="bjinfo.email"></el-input>
          </el-form-item>
          <el-form-item label="手机" prop="mobile">
            <el-input v-model="bjinfo.mobile"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="bjflag = false">取 消</el-button>
          <el-button type="primary" @click="subbj">确 定</el-button>
        </span>
      </el-dialog>

      <el-dialog title="分配角色" :visible.sync="fpflag" width="50%" @close="fpclose">
        <div>
          <p>当前用户：{{fpinfo.username}}</p>
          <p>当前角色：{{fpinfo.role_name}}</p>
          <p>
            分配角色：
            <el-select
              v-model="fpid"
              filterable
              allow-create
              default-first-option
              placeholder="请选择文章标签"
            >
              <el-option
                v-for="item in rolelist"
                :key="item.id"
                :label="item.roleName"
                :value="item.id"
              ></el-option>
            </el-select>
          </p>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="fpflag = false">取 消</el-button>
          <el-button type="primary" @click="subfp">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkEmail = (rule, value, callback) => {
      const regEmail = /^\w+@\w+(\.\w+)+$/;
      if (regEmail.test(value)) {
        return callback();
      }
      callback(new Error("请输入合法邮箱"));
    };
    var checkMobile = (rule, value, callback) => {
      const regMobile = /^1[34578]\d{9}$/;
      if (regMobile.test(value)) {
        return callback();
      }
      callback(new Error("请输入合法的手机号码"));
    };
    return {
      userrules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "用户名的长度在2～10个字",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入用户密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "用户密码的长度在6～18个字",
            trigger: "blur"
          }
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { validator: checkEmail, trigger: "blur" }
        ],
        mobile: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          { validator: checkMobile, trigger: "blur" }
        ]
      },
      info: {
        pagenum: 1,
        pagesize: 5,
        query: ""
      },
      addinfo: {
        username: "",
        password: "",
        email: "",
        mobile: ""
      },
      total: 0,
      userlist: [],
      showflag: false,
      bjflag: false,
      bjinfo: {},
      fpid: "",
      fpinfo: {},
      fpflag: false,
      rolelist: [],
      editUserFormRules: {
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { validator: checkEmail, trigger: "blur" }
        ],
        mobile: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          { validator: checkMobile, trigger: "blur" }
        ]
      }
    };
  },
  mounted() {
    this.$http
      .get("https://www.liulongbin.top:8888/api/private/v1/users", {
        params: this.info
      })
      .then(res => {
        console.log(res.data.data);
        this.total = res.data.data.total;
        this.userlist = res.data.data.users;
      });
  },
  methods: {
    sizechange(n) {
      console.log(n);
      this.info.pagesize = n;
      this.$http
        .get("https://www.liulongbin.top:8888/api/private/v1/users", {
          params: this.info
        })
        .then(res => {
          console.log(res.data.data.users);
          this.userlist = res.data.data.users;
        });
    },
    pagenum(m) {
      console.log(m);
      this.info.pagenum = m;
      this.$http
        .get("https://www.liulongbin.top:8888/api/private/v1/users", {
          params: this.info
        })
        .then(res => {
          console.log(res.data.data.users);
          this.userlist = res.data.data.users;
        });
    },
    search() {
      this.$http
        .get("https://www.liulongbin.top:8888/api/private/v1/users", {
          params: this.info
        })
        .then(res => {
          console.log(res.data.data.users);
          this.userlist = res.data.data.users;
        });
    },
    clear() {
      this.$http
        .get("https://www.liulongbin.top:8888/api/private/v1/users", {
          params: this.info
        })
        .then(res => {
          console.log(res.data.data.users);
          this.userlist = res.data.data.users;
        });
    },
    add() {
      this.$http
        .post(
          "https://www.liulongbin.top:8888/api/private/v1/users",
          this.addinfo
        )
        .then(res => {
          console.log(res);
          if (res.data.meta.status == 201) {
            this.$http
              .get("https://www.liulongbin.top:8888/api/private/v1/users", {
                params: this.info
              })
              .then(res => {
                console.log(res.data.data);
                this.total = res.data.data.total;
                this.userlist = res.data.data.users;
              });
            this.$message.success("添加成功");
            this.showflag = false;
          } else {
            this.$message.error("添加失败");
            this.showflag = false;
          }
        });
    },
    close() {
      this.$refs.addUserFormRef.resetFields();
    },
    sc(id) {
      console.log(id);
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(res => {
          // console.log('11111')
          if (res == "confirm") {
            this.$http
              .delete(
                "https://www.liulongbin.top:8888/api/private/v1/users/" + id
              )
              .then(res1 => {
                console.log(res1);
                if (res1.data.meta.status == 400) {
                  this.$message.error(res1.data.meta.msg);
                } else {
                  this.$http
                    .get(
                      "https://www.liulongbin.top:8888/api/private/v1/users",
                      {
                        params: this.info
                      }
                    )
                    .then(res => {
                      console.log(res.data.data);
                      this.total = res.data.data.total;
                      this.userlist = res.data.data.users;
                    });
                  this.$message.success(res1.data.meta.msg);
                }
              });
          }
        })
        .catch(err => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    bj(obj) {
      this.bjflag = true;
      console.log(obj);
      this.bjinfo = obj;
    },
    bjclose() {
      this.$refs.bjUserFormRef.resetFields();
    },
    subbj() {
      this.$http
        .put(
          "https://www.liulongbin.top:8888/api/private/v1/users/" +
            this.bjinfo.id,
          {
            email: this.bjinfo.email,
            mobile: this.bjinfo.mobile
          }
        )
        .then(res => {
          console.log(res);
          if (res.data.meta.status == 200) {
            this.$message.success(res.data.meta.msg);
            this.$http
              .get("https://www.liulongbin.top:8888/api/private/v1/users", {
                params: this.info
              })
              .then(res => {
                console.log(res.data.data);
                this.total = res.data.data.total;
                this.userlist = res.data.data.users;
              });
          } else {
            this.$message.error(res.data.meta.msg);
          }
          this.bjflag = false;
        });
    },
    fpclose() {},
    set(obj) {
      this.fpflag = true;
      this.fpinfo = obj;
      this.$http
        .get("https://www.liulongbin.top:8888/api/private/v1/roles")
        .then(res => {
          console.log(res);
          this.rolelist = res.data.data;
        });
    },
    subfp() {
      this.$http
        .put(
          "https://www.liulongbin.top:8888/api/private/v1/users/" +
            this.fpinfo.id +
            "/role",
          { rid: this.fpid }
        )
        .then(res => {
          console.log(res);
          if (res.data.meta.status == 200) {
            this.$message.success(res.data.meta.msg);
          } else {
            this.$message.error(res.data.meta.msg);
          }
        });
      this.fpflag = false;
    },
    changestate(obj) {
      console.log(obj.mg_state);
      this.$http
        .put(
          "https://www.liulongbin.top:8888/api/private/v1/users/" +
            obj.id +
            "/state/" +
            obj.mg_state
        )
        .then(res => {
          console.log(res);
          if (res.data.meta.status == 200) {
            this.$message.success(res.data.meta.msg);
          } else {
            this.$message.error(res.data.meta.msg);
          }
        });
    }
  }
};
</script>

<style lang='scss' scoped>
.list {
  width: 96%;
  height: 450px;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
}
.inp {
  width: 270px;
}
.add {
  margin-left: 15px;
}
</style>
