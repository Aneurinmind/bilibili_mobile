<template>
    <div class="home">
        <div class="top">
            <van-image round width="35" height="35" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            <van-field v-model="value" label="" left-icon="search" placeholder="请输入内容" class="search" />
            <van-icon name="envelop-o" size="25" />
        </div>

        <!-- tab -->
        <div>
            <van-tabs v-model="active" title-active-color="#fb7299" color="#fb7299" @change="tabChange">
                <van-tab title="直播"></van-tab>
                <van-tab title="推荐"></van-tab>
                <van-tab title="热门"></van-tab>
                <van-tab title="追番"></van-tab>
                <van-tab title="番剧"></van-tab>
                <van-tab title="影视"></van-tab>
            </van-tabs>
        </div>

        <div class="content-all">
            <div class="content" v-for="(item, index) in article" :key="index" @click="goDetail(item.id)">
                <div class="all-content">
                    <img :src="item.poster" alt="" class="img" /> <!--:src="item.poster"-->
                    <div class="iconfont">
                        <div class="iconfont-left">
                            <div><van-icon name="play-circle-o"/>{{item.videocount}}</div>
                            <div style="margin-left:10px"><van-icon name="idcard"/>{{item.danmu}}</div>
                        </div>
                        <div>{{item.time}}</div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="demotitle">{{item.title}}</div>
                    <div class="bottom-intr">
                        <div>{{item.author}}</div>
                        <div>
                            <van-icon name="ellipsis" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Home",
    data() {
        return {
            value: '',
            active: 1,
            article: [],
            activeBottom: 0
        }
    },

    created(){
        this.getData()
    },

    methods:{
        tabChange(){
            
        },
        getData(){
            axios.get('api/videos').then(res => {
                this.article = res.data.data
                this.handleData()
            })
        },
        handleData(){
            if(this.article.length){
                this.article.map(item => {
                    Object.keys(item.attributes).forEach(itemObj => {
                        item[itemObj] = item.attributes[itemObj]
                    })
                })
            }
        },
        goDetail(value){
            this.$router.push({
                path:'/detail',
                query:{
                    id:value
                }
            })
        }
    }
}
</script>

<style scoped>
.top {
    display: flex;
    padding: 10px 10px;
    align-items: center;
    justify-content: space-between;
    background: #ffff;
}

.search {
    background: #f4f4f5;
    border-radius: 30px;
    height: 30px;
    width: 250px;
    align-items: center;
}

/deep/ .van-tab {
    font-size: 16px;
    font-weight: bold;
}

.content-all {
    /* display: flex; */
    /* margin-left: 2px; */
    margin-top: 10px;
    width: 100%;
}

.content {
    background: #ffffff;
    /* padding: 10px 5px; */
    display: flex;
    display: inline-block;
    flex-direction: column;
    width: 47%;
    margin-bottom: 10px;
    height: 180px;

}

.content:nth-child(even) {
    margin-left: 10px;
}

.content:nth-child(odd) {
    margin-left: 5px;
}

.all-content{
    position: relative;
}

.img {
    width: 100%;
    height: 100px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.iconfont{
    width: 100%;
    position: absolute;
    bottom: 5px;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    
}

.iconfont-left{
    display: flex;
    
}

.bottom {
    font-size: 14px;
    font-weight: bold;
    padding: 5px 5px 0;
}

.demotitle{
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.bottom-intr {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    color: #979797;

}
</style>