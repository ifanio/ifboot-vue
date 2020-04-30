<template>
  <div class="app-container">
    <el-table :data="tableData">
      <el-table-column type="selection" />

      <el-table-column
        v-for="item in tableHeader"
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
        :formatter="formatter1"
      />

      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button size="small" type="text" @click="handleClick(scope.row)">查看</el-button>
          <el-button type="text" size="small" @click="createForm">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-drawer title="新增数据发的" :visible.sync="drawer" direction="rtl" size="75%">
      <el-container>
        <el-header>新增数据</el-header>
        <el-main>
          <el-form>
            <el-input />
            <el-input />
            <el-input />
            <el-input />
            <el-input />
          </el-form>
        </el-main>
      </el-container>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: '',
          name: '系统管理',
          type: '菜单',
          icon: 'system',
          router: 'system',
          component: 'Layout',
          authority: '',
          enable: '1'
        }
      ],
      tableHeader: [
        { label: '名称', width: '', prop: 'name' },
        { label: '类型', width: '', prop: 'type' },
        { label: '图标', width: '', prop: 'icon' },
        { label: '路由', width: '', prop: 'router' },
        { label: '组件', width: '', prop: 'component' },
        { label: '权限', width: '', prop: 'authority' },
        { label: '启动', width: '', prop: 'enable' }
      ],
      drawer: false
    }
  },
  methods: {
    handleClick(row) {
      console.log(row.name)
    },
    formatter1(row, column, cellValue, index) {
      console.log(row)
      // console.log(column)
      // console.log(cellValue)

      if (column.property === 'enable') {
        if (cellValue === '1') {
          return '是'
        } else {
          return '否'
        }
      } else {
        return cellValue
      }
    },
    createForm() {
      this.drawer = true
      this.drawertitle = '新增权限'
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
:focus {
  outline: 0;
}

/*1.显示滚动条：当内容超出容器的时候，可以滚动：*/
.el-drawer__body {
  overflow: auto;
  /* overflow-x: auto; */
}
</style>
