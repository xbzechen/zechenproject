<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body {
    font-family: 'Microsoft Yahei', Helvetica, Arial, sans-serif;
    line-height:1.6em;
    color:#656565;
    font-size: 13px;
    margin:0;
    padding:0;
    overflow-x:hidden;
    /* background:#F2F2F3 url("./assets/img/timg.jpg") no-repeat; */
    background-size:cover;
}
ul,li,p,h1,h2,h3,h4,h5,h6{
    margin:0;
    padding:0;
    list-style:none;
}
input {border:none;outline:none;}
.lf{float:left;}
.rt{float:right;}
.clearfix:after {
    content: " ";
    display: table;
}
.clearfix:after {
    clear: both;
}
img{
    max-width: 100%;
}
a{text-decoration:none; color:#666;}
a:hover{text-decoration:none; color:#3071D1;}
a:focus{
    text-decoration:none;
}
/* 图标 */
.icon{
    font-size:14px;
    margin-right:10px;
}
.white{
    color:#fff;
}
/* 按钮 */
.btn{
    display:inline-block;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border:1px solid transparent;
    border-radius:3px;
}
.btn-primary{
    background-color:#4EABF5;
    border-color:#4EABF5;
    color:#fff;
}

</style>
