<template>
    <div style="background-color: #ffffff;">
        <div>
            <video controls="controls" width="100%" :poster="videoInfo.poster" muted>
                <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4">
            </video>

            <div class="top">
                <div>
                    <span :class="selected ? 'active' : ''" style="padding: 5px 0;" @click="goDetail">简介</span>
                    <span style="margin-left:30px;padding: 5px 0;" :class="!selected ? 'active' : ''"
                        @click="goComment">评论</span>
                </div>
                <van-icon name="chat-o" />
            </div>
            <div class="detail">
                <div class="fline">
                    <van-image round width="30" height="30"
                        src="https://i.postimg.cc/8PM5f3Pb/1300ff9c3e45014f54ab5bd3602790a378ce6ac4.jpg" />
                    <div style="margin-left: 10px;">
                        <div>
                            {{ videoInfo.author }}
                        </div>
                        <div class="font">
                            100粉丝 18视频
                        </div>
                    </div>
                </div>

                <div class="activity">
                    <span class="act">活动</span>
                    <span class="secondline">{{ videoInfo.title }}</span>
                </div>

                <div class="thirdline">
                    <van-icon name="video-o" />{{ videoInfo.videocount }}
                    <van-icon name="notes-o" />{{ videoInfo.danmu }}
                    <span style="font-size: 14px;color:#939393">{{ videoInfo.pubtime }}</span>
                </div>

                <div class="fourline">
                    <div class="demo">
                        <van-icon name="good-job" size="30" color="#61666d" />
                        <div>{{ videoInfo.like }}</div>
                    </div>
                    <div class="demo">
                        <van-icon name="gold-coin" size="30" color="#61666d" />
                        <div>{{ videoInfo.coin }}</div>
                    </div>
                    <div class="demo">
                        <van-icon name="star" size="30" color="#61666d" />
                        <div>{{ videoInfo.star }}</div>
                    </div>
                    <div class="demo">
                        <van-icon name="share" size="30" color="#61666d" />
                        <div>{{ videoInfo.share }}</div>
                    </div>

                </div>
            </div>
            <div>
                <van-divider />
            </div>

            <div class="detailnew">
                <div>
                    <span class="actnew">编程</span>
                    <span class="actnew">职场加油站</span>
                    <span class="actnew">WEB</span>
                </div>
                <div>
                    <span style="color: #939393;">更多8个 ></span>
                </div>
            </div>

            <div class="bigRecommend">
                <div v-for="(item, index) in recommendData" :key="index">
                    <div class="intro">
                        <van-image width="130" height="80" radius="5" :src="item.attributes.poster" />
                        <div class="recommend">
                            <div><span class="retitle">{{ item.attributes.title }}</span></div>
                            <div class="recommendname">
                                <van-icon name="smile-comment-o" />
                                <span>{{ item.attributes.author }}</span>
                            </div>
                            <div class="recommendicon">
                                <div>
                                    <van-icon name="video-o" />
                                    <span style="margin-right: 10px;">{{ item.attributes.watchcount }}</span>
                                    <van-icon name="notes-o" />
                                    <span>{{ item.attributes.danmu }}</span>
                                </div>
                                <div>
                                    <van-icon name="ellipsis" />
                                </div>
                            </div>
                        </div>
                        <van-divider />
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Detail",
    data() {
        return {
            selected: true,
            videoId: '',
            videoInfo: {},
            recommendData: []
        }
    },
    created() {
        if (this.$route.query && this.$route.query.id) {
            this.videoId = this.$route.query.id
        }
        this.getData()
        this.getRecommendData()
    },
    methods: {
        getData() {
            axios.get(`api/videos/${this.videoId}`).then(res => {
                this.videoInfo = res.data.data.attributes
            })
        },
        getRecommendData() {
            axios.get('api/recommends').then(res => {
                this.recommendData = res.data.data
            })
        },
        goDetail() {
            this.selected = true
        },
        goComment() {
            this.selected = false
        }
    }
}
</script>

<style scoped>
body {
    background-color: #ffffff;
}

.detail {
    padding: 20px 10px 0;
}

.active {
    color: #fb7299;
    border-bottom: 2px solid #fb7299;
}

.top {
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
}

.fline {
    display: flex;
    justify-content: flex-start;
}

.font {
    margin-top: 5px;
    color: #939393;
    font-size: 14px;
}

.secondline {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
}

.activity {
    display: flex;
    margin-top: 10px;
    align-items: center;
}

.act {
    color: #fb7299;
    background: #f4f4f4;
    font-size: 14px;
    padding: 5px;
    width: 40px;
    text-align: center;
    border-radius: 10px;
    margin-right: 5px;
}

.thirdline {
    color: #939393;
    font-size: 14px;
    margin-top: 5px;
}

.thirdline>* {
    margin-left: 10px
}

.fourline {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px;
}

.demo {
    text-align: center;
}

.demo>div {
    font-size: 14px;
    margin-top: 5px;
    color: #939393;
}

.detailnew {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
}

.actnew {
    /* color: #fb7299; */
    background: #f4f4f4;
    font-size: 14px;
    padding: 5px 10px;
    width: 40px;
    text-align: center;
    border-radius: 10px;
    margin-right: 5px;
}

.intro {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-top: 20px;
}

.bigRecommend{
    padding-bottom: 70px;
}

.recommend {
    margin-left: 5px;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.retitle {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.recommendname {
    font-size: 14px;
    color: #939393;
    margin-top: 5px;
}

.recommendicon {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-top: 5px;
    color: #939393;
}
</style>