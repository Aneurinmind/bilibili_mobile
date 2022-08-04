<template>
    <div>
        <div class="content">
            <div class="icon">
                <van-icon name="scan" size="25" />
                <van-icon name="setting-o" class="iconnew" size="25" />
                <van-icon name="gift-o" class="iconnew" size="25" />
            </div>
            <div class="info">
                <div class="my">
                    <div>
                        <van-image round width="60" height="60" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
                    </div>
                    <div class="right">
                        <div style="font-weight:bold;font-size:16px">不知道</div>
                        <div class="member">正式会员</div>
                        <div class="fontcolor">B币: 0.0 硬币: 100</div>
                    </div>
                </div>
                <div class="fontcolor">空间 ></div>
            </div>

            <div class="center">
                <div style="text-align: center">
                    <div class="number">51</div>
                    <div class="state">动态</div>
                </div>
                <div class="line"></div>
                <div style="text-align: center">
                    <div class="number">51</div>
                    <div class="state">关注</div>
                </div>
                <div class="line"></div>
                <div style="text-align: center">
                    <div class="number">51</div>
                    <div class="state">粉丝</div>
                </div>

            </div>


        </div>
        <div class="bottom">
            <van-grid square :border="false">
                <van-grid-item v-for="value in arr" :key="value" :icon="value.icon" :text="value.label" style="color:#fc8aaa"/>
            </van-grid>
        </div>
    </div>
</template>

<script>
export default {
    name: "Mine",
    data() {
        return {
            arr: [
                {
                    icon: 'location-o',
                    label: '离线缓存',
                },
                {
                    icon: 'star-o',
                    label: '历史记录',
                },
                {
                    icon: 'location-o',
                    label: '我的收藏',
                },
                {
                    icon: 'location-o',
                    label: '稍后再看',
                },
                {
                    icon: 'location-o',
                    label: '离线缓存',
                },

            ]
        }
    }

}
</script>

<style scoped>

.content {
    padding: 5px 10px;
}

.icon {
    text-align: right;
}

.iconnew {
    margin-left: 20px;
}

.info {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.my {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.right {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 14px;
}

.right>div {
    margin-bottom: 7px;
}

.member {
    color: #fb7299;
    border: 1px solid #fb7299;
    padding: 2px 4px;
    width: 52%;
    text-align: center;

}

.fontcolor {
    color: #b4b4b4
}

.center {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    align-items: center;
}

.number {
    font-weight: bold;
}

.state {
    margin-top: 10px;
    color: #b4b4b4;
}

.line {
    height: 20px;
    width: 1px;
    background: #b4b4b4;
}

/deep/ .van-grid-item__content{
    background-color: #f4f4f4;
}


</style>