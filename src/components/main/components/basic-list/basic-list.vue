<template>
  <div class="">
    <TreeGrid style="height:300px" :data="treeData" idField="id" treeField="pNum">
      <GridColumn field="id" title="id"></GridColumn>
      <GridColumn field="pNum" title="编号"></GridColumn>
      <GridColumn field="text" title="项目名称"></GridColumn>
      <GridColumn field="hetongmingcheng" title="合同名称"></GridColumn>
      <GridColumn field="hetongbianhao" title="合同编号"></GridColumn>
      <GridColumn field="gongsiname" title="委托单位"></GridColumn>
      <GridColumn field="JIEDIANNAME" title="服务类型"></GridColumn>
      <GridColumn field="heTongQianDingZhuangTai" title="签订状态"></GridColumn>
      <GridColumn field="YuanHeTongBianHao" title="原主合同编号"></GridColumn>
      <GridColumn field="hetongguishu" title="合同归属"></GridColumn>
      <GridColumn field="hetongid" title="主合同"></GridColumn>
      <GridColumn field="hetongfuzhuid" title="辅合同"></GridColumn>
      <GridColumn field="createTime" title="创建日期"></GridColumn>
    </TreeGrid>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
