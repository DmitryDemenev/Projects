<template>
  <div class="order__form">
        <div class="order__form-wrap">
          <form class="order__form_elements">
            <h3 class="order__form_title">SHIPPING ADRESS</h3>
            <input
              class="form-input"
              name="sity"
              type="text"
              required
              placeholder="Bangladesh"
            /><input
              class="form-input"
              name="stat"
              type="text"
              required
              placeholder="State"
            /><input
              class="form-input"
              name="zipcode"
              type="text"
              required
              placeholder="Postcode"
            /><button class="order__form_submit" type="submit">
              GET A QUOTE
            </button>
          </form>
          <div class="order__total">
            <p class="order__sub-total">SUB TOTAL<span>$900</span></p>
            <p class="order__total-price">GRAND TOTAL <span> $900</span></p>
            <button class="order__control_link order__form-submit">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: "OrderForm"
}
</script>

<style lang="scss">
.order__form{
  margin-top: 96px;
  width: 356px;
}
.order__form_title{
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #222222;
    margin-bottom: 20px;
  }
.form-input{
  width: 100%;
  height: 45px;
  margin-bottom: 20px;
  border: 1px solid #A4A4A4;
}
.order__form_submit{
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 11px;
  padding-bottom: 11px;
  width: 104px;
  font-weight: 300;
  font-size: 11px;
  line-height: 13px;
  color: #4a4a4a;
  border: 1px solid #a4a4a4;
  background: #ffffff;
  cursor: pointer;
    &:hover {
      color: white;
      background-color: #f16d7f;
    }
}
.order__total {
  width: 290px;
  margin-top: 38px;
  background: #f5f3f3;
  padding: 37px 34px 42px 44px;
  margin-top: 57px;
}

.order__sub-total {
  text-align: right;
  font-size: 11px;
  line-height: 13px;
  color: #4a4a4a;
  padding-bottom: 12px;
  span {
      padding-left: 26px;
  }
}
.order__total-price {
  text-align: right;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #222222;
  padding-bottom: 21px;
  border-bottom: 1px solid #e2e2e2;
  margin-bottom: 17px;
  padding-right: 3px;
  span {
    padding-left: 26px;
    color: #f16d7f;
  }
}
.order__control_link {
  padding: 17px 40px;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  border: 1px solid #a4a4a4;
  color: #000000;
  text-transform: uppercase;
  &:hover {
      background-color: #f16d7f;
      color: #ffffff !important;
       border: 1px solid #f16d7f;
  }
}
.order__form_submit{
  margin-top: 20px;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 11px;
  padding-bottom: 11px;
  width: 104px;
  font-weight: 300;
  font-size: 11px;
  line-height: 13px;
  color: #4a4a4a;
  border: 1px solid #a4a4a4;
  background: #ffffff;
  cursor: pointer;
    &:hover {
      color: white;
      background-color: #f16d7f;
    }
}


</style>