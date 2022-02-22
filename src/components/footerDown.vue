<template>
<footer>
    <div class="footer_center_color">
        <div class="footer_center container">
            <div class="footer_center_left">
                <div class="footer_center_picture">
                    <img src="../assets/Intersect.png" alt="girl">
                </div>
                <div class="footer_center_left_text">
                    <p class="footer_center_text">“Vestibulum quis porttitor dui! Quisque<br>viverra nunc mi, a pulvinar purus<br>condimentum“
                    </p>
                </div>
            </div>
            <div class="footer_center_right">
                <p class="footer_center_text_right"><span class="subscribe">SUBSCRIBE</span><br>FOR OUR NEWLETTER AND PROMOTION</p>
                <div class="footer_button">
                    <div class="input-form">
                        <div class="footer_button_left"><input type="text" class="form-control" placeholder="Enter Your Email" aria-label="Recipient's username" ></div>
                        <div class="footer_button_right"><span class="input-group-text" id="basic-addon2">Subscribe</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer_bottom_color">
        <div class="footer_bottom container">
            <div class="footer_bottom_content">© 2021  Brand  All Rights Reserved.</div>
            <div class="footer_bottom_content"></div>
        </div>
    </div>
</footer>  
</template> 


<script>
import Footer from './Footer.vue'
export default {
  components: { Footer },

}
</script>

<style lang="scss">
.footer_center_color {
  background-image: url(../assets/footer_background.jpg);
  background-position: bottom;
  height: 448px;
  background-repeat: no-repeat;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }

.footer_center_left {
  -ms-flex-item-align: center;
      align-self: center; }

.footer_bottom {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 79px; }

.footer_bottom_content {
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #fbfbfb; }

.footer_bottom_color {
  background-color: #222224; }

.footer_center_left {
  -ms-flex-item-align: center;
      align-self: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center; }

.footer_center_text {
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  margin-top: 30px; }

.footer_center {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  width: 100%; }

.footer_center_picture {
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }

.footer_center_text_right {
  text-align: center;
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px; }

.footer_center_right {
  -ms-flex-item-align: center;
      align-self: center; }

.subscribe {
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 40px; }

.input-form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-item-align: center;
      align-self: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin-top: 30px;
  width: 100%; }

.footer_button_right {
  background-color: #f16d7f;
  color: #ffffff;
  border: 1px solid #f16d7f;
  justify-self: center;
  border-radius: 0 30px 30px 0;
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding: 8px;
  width: 82px; }

.footer_button_left {
  padding: 8px;
  background: #E1E1E1;
  border-radius: 30px 0 0 30px;
  width: 225px; }

.form-control {
  border: none;
  background: #E1E1E1; }
</style>

