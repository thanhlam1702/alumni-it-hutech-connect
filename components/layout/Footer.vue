<template>
  <footer>
    <div class="footer__top">
      <div class="logo"></div>
      <div class="contact">
        <h3 class="title --line-style">Contact</h3>
        <div class="content">
          <div class="location">
            <a-icon type="environment" class="contact__icon location__icon" />
            <div>
              <p v-for="(item, index) in contact" :key="index">{{ item }}</p>
            </div>
          </div>
          <div class="mail">
            <a-icon class="contact__icon mail__icon" type="mail" />
            <span>{{ mail }}</span>
          </div>
          <div class="phone">
            <a-icon type="phone" class="contact__icon phone__icon" />
            <span>{{ phone }}</span>
          </div>
        </div>
      </div>
      <div class="follow__us">
        <h3 class="title --line-style">Follow us</h3>
        <div class="content">
          <a href="https://www.facebook.com/hutechuniversity"
            ><a-icon type="facebook"
          /></a>
          <a href="https://www.instagram.com/hutechuniversity/"
            ><a-icon type="instagram"
          /></a>
        </div>
      </div>
    </div>
    <div class="footer__bottom --line-style">
      <p class="cre">{{ cre }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      contact: [
        'Trụ sở: 475A Điện Biên Phủ, P.25, Q.Bình Thạnh, TP.HCM',
        'Cơ sở 475B:475B Điện Biên Phủ, P.25, Q.Bình Thạnh, TP.HCM',
        'Cơ sở Ung Văn Khiêm: 31/36 Ung Văn Khiêm, P.25, Q.Bình Thạnh, TP.HCM',
      ],
      mail: 'hutech@hutech.edu.vn',
      phone: '(028) 5445 7777 - Fax: (028) 5445 4444',
      cre: '2020 Hutech IT Alumni Association by The Immortal team',
    }
  },
}
</script>
