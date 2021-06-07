<template>
  <div class>
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="box">
      <el-button type="primary">添加角色</el-button>

      <el-table stripe border :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-row
              :class="['bdbottom', i1 === 0 ? 'bdtop' : '', 'vcenter']"
              v-for="(item1, i1) in scope.row.children"
              :key="item1.id"
            >
              <el-col :span="5">
                <el-tag closable @close="one(scope.row,item1.id)">{{ item1.authName}}</el-tag>
                <i class="el-icon-caret-right"></i>
              </el-col>
              <el-col :span="19">
                <el-row
                  :class="[i2 === 0 ? '' : 'bdtop', 'vcenter']"
                  v-for="(item2, i2) in item1.children"
                  :key="item2.id"
                >
                  <el-col :span="6 ">
                    <el-tag
                      @close="two(scope.row,item2.id)"
                      type="success"
                      closable
                    >{{ item2.authName }}</el-tag>
                    <i class="el-icon-caret-right"></i>
                  </el-col>
                  <el-col :span="18">
                    <el-tag
                      @close="three(scope.row,item3.id)"
                      type="warning"
                      v-for="(item3) in item2.children"
                      :key="item3.id"
                      closable
                    >{{ item3.authName}}</el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <el-table-column label="索引" type="index"></el-table-column>
        <el-table-column label="角色名称" prop="roleName"></el-table-column>
        <el-table-column label="角色描述" prop="roleDesc"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini">编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
            <el-button
              type="warning"
              icon="el-icon-setting"
              size="mini"
              @click="fpshow(scope.row)"
            >分配权限</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    this.$http
      .get("https://www.liulongbin.top:8888/api/private/v1/roles")
      .then(res => {
        console.log(res.data.data);
        this.tableData = res.data.data;
      });
  },
  methods: {
    one(obj, id) {
      this.$confirm("此操作将永久删除该权限, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(res => {
          if (res == "confirm") {
            this.$http
              .delete(
                "https://www.liulongbin.top:8888/api/private/v1/roles/" +
                  obj.id +
                  "/rights/" +
                  id
              )
              .then(res1 => {
                if (res1.data.meta.status == 200) {
                  this.$message.success(res1.data.meta.msg);
                } else {
                  this.$message.console.error(res1.data.meta.msg);
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
    two(obj, id) {
      this.$confirm("此操作将永久删除该权限, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(res => {
          if (res == "confirm") {
            this.$http
              .delete(
                "https://www.liulongbin.top:8888/api/private/v1/roles/" +
                  obj.id +
                  "/rights/" +
                  id
              )
              .then(res1 => {
                if (res1.data.meta.status == 200) {
                  this.$message.success(res1.data.meta.msg);
                } else {
                  this.$message.console.error(res1.data.meta.msg);
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
    three(obj, id) {
      this.$confirm("此操作将永久删除该权限, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(res => {
          if (res == "confirm") {
            this.$http
              .delete(
                "https://www.liulongbin.top:8888/api/private/v1/roles/" +
                  obj.id +
                  "/rights/" +
                  id
              )
              .then(res1 => {
                if (res1.data.meta.status == 200) {
                  this.$message.success(res1.data.meta.msg);
                } else {
                  this.$message.console.error(res1.data.meta.msg);
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
fpshow(obj){

//             this.$http
//               .post(
//                 "https://www.liulongbin.top:8888/api/private/v1/roles/:roleId/rights"
//               ).then(res=>{
// console.log(res)
// })
},
  }
};
</script>

<style lang='scss' scoped>
.box {
  width: 96%;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.el-tag {
  margin: 7px;
}
.bdtop {
  border-top: 1px solid #eee;
}
.bdbottom {
  border-bottom: 1px solid #eee;
}
.vcenter {
  display: flex;
  align-items: center;
}
</style>
