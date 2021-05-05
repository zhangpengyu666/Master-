<!--  -->
<template>
<div class=''>
<div class="box">

<div>
<img src="@/assets/image/images/切图\house_info.jpg" class="img">
</div>
<div class="font-buju">
房先森 / 装修攻略 / 装修预算 / 正文
</div>
<div class="font-among">
装修预算注意事项
</div>
<div class="font-figure">
<div class="font-figuer1">
<span>2016-07-09</span>
<span>115</span>
</div>
</div>
<div class="font-poin">
<div>客厅装修隔断</div>
<div>客厅装修图</div>
<div>客厅装修效果</div>
<div>客厅装修隔断</div>
</div>
<div class="font-poin2">
<div>客厅装修隔断</div>
<div>客厅装修图</div>
</div>
<div class="foot-tips">

导语:在装修时如果没有提前最好装修预算，很容易造成最后开支过大，
添置很多没必要的增项。那么在做预算的时候又有什么需要注意的地方呢?
</div>
<div class="font-img">
<img src="@/assets/image/images/切图/banner1.jpg" class="font-img">
</div>
<div class="font-expansion">
点击展开全文
</div>
<div class="font-sltub-flex">
<div>
<div class="iconfont icon-pingjia font-altub"></div>
<div class="font-altub-pingjia">评价</div>
</div>
<div>
<div class="iconfont icon-fenxiang font-altub1"></div>
<div class="font-altub-pingjia1">分享</div>
</div>
</div>
<div class="font-expansion1">
进入装修预算
</div>
<div class="hr"></div>
<div class="font-love">猜你喜欢</div>





</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import mySwiper from "@/components/Tools/Swiper/Swiper.vue";
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>

.box{
    width: 100%;
    height: 100%;
}
.img{
    width: 100%;
}
.font-buju{
    width: 90%;
    height: 30px;
    font-size: 0.3rem;
    margin-top: 0.2rem;
    background-color: #f4f4f4;
     line-height: 30px;
    margin:auto;
    text-align: center;
}
.font-among{
    width: 100%;
    height: 30px;
    margin-top: 0.36rem;
    font-size: 0.36rem;
    color: #000;
    text-align: center;
    // border: 1px solid red;
    box-sizing: border-box;
    line-height: 30px;
}
.font-figure{
    width: 100%;
    height: 30px;
    // border: 1px solid red;
}
.font-figuer1{
    width: 200px;
    height: 28px;
    font-size: 0.24rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    // border: 1px solid red;
    flex-direction: row;
    align-items: center;
}
.font-poin{
    margin-top:0.3rem;
    border-top: 1px #eaeaea solid;
    width: 100%;
    height: 40;
    font-size: 0.24rem;
    display: flex;
    justify-content: space-evenly;
    div{
        border: 1px solid #eaeaea;
        width: 90px;
        border-radius: 44%;
        text-align: center;
        line-height: 32px;
        margin-top: 10px;
        height: 32px;
    }

}
.font-figuer1{
    width: 200px;
    height: 28px;
    font-size: 0.24rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    // border: 1px solid red;
    flex-direction: row;
    align-items: center;
}
.font-poin2{
    width: 100%;
    height: 40;
    font-size: 0.24rem;
    display: flex;
    div{
        border: 1px solid #eaeaea;
        width: 90px;
        border-radius: 44%;
        text-align: center;
        line-height: 32px;
        margin-top: 10px;
        height: 32px;
        margin-left: 9px;
    }
}
.foot-tips {
    padding: 3%;
    margin-bottom: 0;
    font-size: 0.24rem;
    line-height: 1.6;
    text-indent: 1rem;
    color: #666;
    background: #fff;
}
.font-img{
    width: 100%;
    height: 100%;
    margin-top: 5px;
}
.font-expansion{
    width: 99%;
    height: 40px;
    border:1px solid #5ED3A7;
    font-size: 0.36rem;
    color: #5ED3A7;
    text-align: center;
    line-height:40px ;
}
.font-altub{
    width:80px;
    height: 80px;
    font-size: 58px;
    border: 3px solid #1B9BF7;
    text-align: center;
    line-height: 80px;
    border-radius: 50%;
    color: #1B9BF7;
    
}
.font-altub1{
    width:80px;
    height: 80px;
    font-size: 58px;
     border: 3px solid #FEB605;
    text-align: center;
    line-height: 80px;
    border-radius: 50%;
    color: #FEB605;
}
.font-altub-pingjia{
    font-size: 24px;
    // border: 1px solid #1B9BF7;
    text-align: center;
    color: #1B9BF7;
    margin-top:0.23rem ;
}
.font-altub-pingjia1{
    font-size: 24px;
     text-align: center;
    color: #FEB605;
    margin-top:0.23rem ;
}
.font-sltub-flex{
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}
.font-expansion1{
     width: 99%;
    height: 40px;
    border:1px solid #5ED3A7;
    font-size: 0.36rem;
    color: #5ED3A7;
    text-align: center;
    line-height:40px ;
    margin-top: 0.36rem;
}
.hr{
    width: 100%;
    height: 20px;
    background-color: #F4F4F4;
    margin-top: 15px;
}
.font-love{
    width: 100%;
    height: 30px;
    border-left: 3px solid #5ED3A7;
    font-size: 30px;
    margin-top: 20px;
    line-height: 30px;
}

</style>