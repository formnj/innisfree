<template>
    <div class="categorylist pc">
        <div class="inner">
            <div class="snb">
                <div class="mo_sub_header">
                    <div class="headerAside">
                        <button class="btn_back"></button>
                        <button class="btnNav">스킨케어</button>
                    </div>
                    <div class="myBox">
                        <button class="btn_search"></button>
                        <button class="btn_cart">
                            <span class="count">0</span>
                        </button>
                    </div>
                    <ul>
                        <li class="all"><a href="#none">전체</a></li>
                        <li><a href="#none">에센스/세럼/앰플</a></li>
                        <li><a href="#none">로션/크림</a></li>
                        <li><a href="#none">스킨/토너/미스트</a></li>
                        <li><a href="#none">립/아이케어</a></li>
                        <li><a href="#none">선케어</a></li>
                        <li><a href="#none">오일/마사지</a></li>
                        <li><a href="#none">클렌징</a></li>
                        <li><a href="#none">팩/마스크</a></li>
                        <li><a href="#none">기획 세트</a></li>
                        <li><a href="#none">기타</a></li>
                    </ul>

                </div>
            </div>
            <div class="content">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.categorylist{  
    &.pc{
        .inner {
            max-width:1280px;
            margin:0 auto;
            border:1px solid red;
        }
    } //pc
    &.mo{

    } //mo
}

</style>