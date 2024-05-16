<template>
  <div class="prod_select">
    <button type="button" class="btn_select" @click="selectOpen">옵션을 선택하세요.</button>
    <ul class="op_list">
      <li v-for="(select, i) in options" :key="i">
        <input :id="select.val" type="radio" :name="select.name"><label :for="select.val">{{ select.txt }}</label>
      </li>
    </ul>

    <ul class="selected_list">
      <li><span class="name">1호 샐먼 베이지</span><span class="price">9,750원</span>
        <div class="quantity_control">
          <span class="name">수량</span>
          <div class="count">
            <Quantity _id="detail_1" quantity="3" />
          </div>
        </div>
        <button type="button" class="btn_del">옵션 삭제</button>
      </li>
      <li><span class="name">2호 피치 베이지</span><span class="price">9,750원</span>
        <div class="quantity_control">
          <span class="name">수량</span>
          <div class="count">
            <Quantity _id="detail_2" quantity="1" />
          </div>
        </div>
        <button type="button" class="btn_del">옵션 삭제</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  options: Array,
});

//옵션(버튼) 선택 시 open 클래스 추가
const selectOpen = () => {
  const el = event.target;
  el.classList.toggle("open");
}

onMounted(()=> {
  //옵션 리스트 선택 후 리스트 닫힘
  const radios = document.querySelectorAll(".prod_select input[type='radio']");
  const btnSelect = document.getElementsByClassName("btn_select")[0];
	radios.forEach((radio) => {
		radio.addEventListener("change", () => {
			btnSelect.classList.remove("open");
		});
	});
})
</script>

<style lang="scss" scoped>
.prod_select {
  position: relative;

  .btn_select {
    width: 100%;
    text-align: left;
    font-size: 14px;
    height: 42px;
    padding: 0 15px;
    border: 1px solid #eee;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;

    &.open {
      border-color: #000;

      &+ul {
        // display: block;
        height: auto;
        opacity: 1;
      }
    }

    &:after {
      content: '';
      width: 12px;
      height: 12px;
      margin-top: -4px;
      border: 1px solid #222;
      border-top: 0;
      border-left: 0;
      position: absolute;
      top: 50%;
      right: 16px;
      transform: translateY(-50%) rotate(45deg);
    }
  }

  .op_list {
    width: 100%;
    max-height: 286px;
    height: 0;
    border: 1px solid #AAA;
    background: #fff;
    overflow-y: auto;
    opacity: 0;
    position: absolute;
    top: 41px;
    left: 0;
    z-index: 1;
    transition: all .2s;

    li {
      &+li {
        border-top: 1px solid #f5f5f5;
      }

      input {
        display: none;

        &:checked+label {
          background: #f3f3f3;
        }
      }

      label {
        width: 100%;
        font-size: 13px;
        padding: 14px 20px;
        display: block;
        cursor: pointer;
      }
    }
  }

  .selected_list {
    margin: 10px 0 0;

    li {
      margin-top: 3px;
      padding: 10px 15px;
      background-color: #F7FAFA;
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > * {
        flex-shrink: 0;
      }

      .name {
        font-size: 14px;
        line-height: 24px;
        color: #666;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        flex: 1;
      }

      .price {
        margin-left: 10px;
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
        color: #000;
        flex: none;
      }

      .quantity_control {
        width: auto;
        margin-left: 20px;
        background-color: #fff;
        display: inline-block;

        .name {
          display: none;
        }

        .count {
          width: 100px;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;

          :deep(button) {
            width: 28px;
            height: 28px;
            background: #fff;
            font-size: 0;
            flex: none;
            position: relative;

            &:before,
            &.btn_inc:after {
              content: '';
              width: 8px;
              height: 1px;
              background-color: #000;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
            }

            &.btn_inc:after {
              width: 1px;
              height: 8px;
            }
          }
          :deep(.count_wrap) {
            flex:1;
            input {
              height: 28px;
              padding: 0;
              font-weight: 600;
              font-size: 13px;
              text-align: center;
              color: #000;
              border: none;
            }
          }
        }

        dd {
          .price {
            font-weight: 600;
            font-size: 13px;
            line-height: 20px;
            letter-spacing: -0.16px;
            display: inline-flex;
            align-items: center;

            em {
              font-size: 16px;
              margin-right: 3px;
            }
          }
        }
      }

      .btn_del {
        width: 20px;
        height: 20px;
        margin-left: 10px;
        font-size: 0;
        background: url("~/assets/images/common/icon_split.png") -460px -40px no-repeat;
        flex: none;
      }
    }
  }
}
</style>
