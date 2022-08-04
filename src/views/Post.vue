<template>
    <div>
        <div class="top">
            <div class="top-f">
                <div class="regular">最常访问</div>
                <div class="more">查看更多 ></div>
            </div>
            <div>
                <div class="horizontal-container">
                    <div class="scroll-wrapper" ref="scroll">
                        <div class="scroll-content">
                            <div class="scroll-item" v-for="(item, index) in swiperArr" :key="index">
                                <div class="icon">
                                    <!-- <img src="item.iconUrl" @load="imgLoad"/> -->
                                    <van-image round width="55" height="55"
                                        src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                                    <div style="margin-top:5px">昵称</div>
                                </div>
                                <div>
                                    {{ item.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="article" v-for="(item, index) in articleArr " :key="index">
            <div class="intr">
                <div class="font">
                    <van-image round width="45" height="45" :src="item.attributes.avatar" />
                    <div style="margin-left: 10px;">
                        <div class="author">{{ item.attributes.author }}</div>
                        <div style="color: #b4b4b4;font-size:14px">{{ item.attributes.posttime }}·投稿了视频</div>
                    </div>
                </div>

                <div>
                    <van-icon name="ellipsis" />
                </div>
            </div>
            <div class="poster">
                <div class="father">
                    <!-- <van-image radius="5" width="100%" height="220" src="https://img01.yzcdn.cn/vant/cat.jpeg" /> -->
                    <video controls="controls" width="100%" height="220" :poster="item.attributes.poster" muted>
                        <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4">
                    </video>
                    <div class="child">
                        <div class="childtop">
                            <span class="time">{{ item.attributes.time }}</span>
                            <span>{{ item.attributes.watchcount }}次观看</span>
                            <span>{{ item.attributes.danmu }}弹幕</span>
                        </div>
                        <div>
                            <van-icon name="video" size="30" style="right: 8px;" />
                        </div>
                    </div>
                </div>

                <p class="title">
                    {{ item.attributes.title }}
                </p>
                <div class="comment">
                    <div class="line"></div>
                    <van-icon name="chat-o" style="margin-left: 10px;" />
                    <div>
                        <span class="commentelse">
                            <span
                                style="font-weight: bold;">{{ item.attributes.author }}：</span>{{ item.attributes.comment }}
                        </span>
                    </div>
                </div>
                <div class="icon-bottom">
                    <div class="iconnew">
                        <van-icon name="share-o" size="23" />{{ item.attributes.share }}
                    </div>
                    <div class="iconnew">
                        <van-icon name="more-o" size="23" />{{ item.attributes.commentcount }}
                    </div>
                    <div class="iconnew">
                        <van-icon name="good-job-o" size="23" />{{ item.attributes.like }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import BScroll from '@better-scroll/core'
import axios from 'axios'

export default {
    name: "Post",
    mounted() {
        this.init()
    },
    data() {
        return {
            swiperArr: [1, 1, 1, 1, 1, 1, 1],
            articleArr: [],
        }
    },
    created() {
        this.initData()
    },
    methods: {
        init() {
            this.bs = new BScroll(this.$refs.scroll, {
                scrollX: true,
                probeType: 3,
            })
        },
        beforeUnmount() {
            this.bs.destroy()
        },
        imgLoad() {
            this.bs.refresh()
        },
        initData() {
            axios.get('api/dongtais').then(res => {
                this.articleArr = res.data.data
            })
        }
    }
}
</script>

<style scoped>
.top {
    padding: 20px 10px 10px;
    background: #FFFFFF;
}

.top-f {
    display: flex;
    justify-content: space-between;
}

.regular {
    font-weight: bold;
}

.more {
    color: #9b9b9b;
}

.horizontal-container {
    margin-top: 10px;
}

.scroll-wrapper {
    position: relative;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
}

.scroll-content {
    display: inline-block;
}

.scroll-item {
    font-size: 12px;
    display: inline-block;
    text-align: center;
    padding: 0 10px;
}

.icon {
    width: 50px;
    height: 50px;
    background: #fdedf0;
    border-radius: 50px;
    margin: 5px 0;
}

.icon>img {
    width: 50px;
    filter: invert(52%) sepia(82%) saturate(5725%) hue-rotate(334deg) brightness(100%) contrast(106%);
}

.article {
    padding: 10px 5px;
    background: #FFFFFF;
    margin-top: 10px;
}

.intr {
    display: flex;
    justify-content: space-between;

}

.font {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.father {
    position: relative;
}

.child {
    width: 100%;
    position: absolute;
    bottom: 10px;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* left: 5px; */
}

.childtop>span {
    margin-left: 8px;
    font-size: 14px;
}

.time {
    background: #201912;
    border-radius: 5px;
    padding: 2px;
    opacity: 0.4;
}

.author {
    margin-bottom: 5px;
    color: #fb7299;
    font-weight: bold;
}

.poster {
    margin-top: 15px;
}

.title {
    font-weight: bold;
    font-size: 18px;
    margin-top: 7px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.line {
    height: 15px;
    width: 2px;
    background: #b4b4b4;
}

.comment {
    margin-top: 10px;
    display: flex;
    /* align-items: center; */
}

.icon-bottom {
    display: flex;
    margin-top: 15px;
    padding: 5px 40px;
    justify-content: space-between;
    font-size: 14px;
}

.iconnew {
    display: flex;
    align-items: center;
}

.commentelse {
    margin-left: 5px;
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
</style>