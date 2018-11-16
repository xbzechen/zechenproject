<template>
  <Layout :style="{height: allHeight + 'px', width: allWidth + 'px'}">
    <!-- 顶部 -->
    <LayoutPanel class="all-north" region="north">
      <headerBar></headerBar>
    </LayoutPanel>
    <!-- 左侧 -->
    <!-- <LayoutPanel class="all-west" region="west" :style="{height: westHeight}">
    </LayoutPanel> -->
    <!-- 右侧 -->
    <LayoutPanel class="all-center" region="center" :style="{height: westHeight}">
      <Tabs :style="{height: westHeight}">
        <TabPanel :title="'监管咨询合同管理'"><!-- -->
       <TreeGrid class="easyui-treegrid" style="height:300px" :data="treeData" idField="id" treeField="name" >
          <GridColumn field="id" title="id" hidden="true" ></GridColumn>
          <GridColumn field="name" title="项目类型"  ></GridColumn>
       </TreeGrid>
        </TabPanel>
        <TabPanel :title="'ERP咨询合同管理'">

        </TabPanel>
      </Tabs>
    </LayoutPanel>
    <!-- 底部 -->
    <LayoutPanel class="all-footer" region="south">
      <p>Copyright © 2016-2018 www.zechen.name All Rights Reserved. 河南泽辰软件科技有限公司. 版权所有</p>
    </LayoutPanel>
  </Layout>
</template>

<script>
import './main.css'
import headerBar from './components/header-bar'
import { getXiangMuLeiXing } from './main.js'
export default {
  name: 'home',
  components: {
    headerBar,
  },
  data() {
    return {
      allHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
      allWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      treeData:[]
    }
  },
  computed: {
    westHeight () {
      return this.allHeight - 80 + 'px'
    }
  },
  methods:{
    // 查询项目树列表
    getxingmuList () {
      getXiangMuLeiXing().then(res => {
        if(res.data.status==200){
          this.treeData=res.data.data;
        }else{
          alert("失败")
        }
      })
    }
  },
  mounted () {
    this.getxingmuList();
  }
}
</script>
