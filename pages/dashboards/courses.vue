<template>
   <main class="main-content position-relative max-height-vh-100 h-100">

      <div class="page-header position-relative" :style="{
         backgroundImage: 'url(' + headerImg + ')',
         backgroundSize: 'cover',
      }">
         <span class="mask bg-color opacity-8"></span>
         <div class="container pb-10 pb-lg-9 pt-7 postion-relative z-index-2">
            <div class="row">
               <div class="mx-auto text-center col-md-6 mt-4">
                  <h2 class="text-white">Pricin page</h2>
                  <p class="text-white">
                     You have Free Unlimited Updates and Premium Support on each
                     package.
                  </p>
               </div>
            </div>

         </div>
      </div>
      <div class="mt-n4">
         <div class="container">
            <div class="tab-content tab-space">
               <div class="tab-pane active">
                  <div class="row">
                     <div class="row mt-4">
                        <ComplexBackgroundCard v-for="corse of getCourses" :key="corse"
                           image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/window-desk.jpg"
                           :description="corse.discrption" :price=corse.price :name="corse.name" class="mt-5"
                           @click="cl(corse)" />
                     </div>
                  </div>
               </div>
               <div id="annual" class="tab-pane">
                  <div class="row">
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="container my-6">
         <div class="row">
            <div class="mx-auto text-center col-8">
               <h6 class="opacity-5">More than 50+ brands trust Soft</h6>
            </div>
         </div>
      </div>
   </main>
</template>
<script>
import NavbarTransparent from "@/examples/Navbar/Transparent.vue";
import PricingCard from "@/pagesComponents/pages/pricing/PricingCard.vue";
import AppFooter from "~~/examples/Footer/Centered.vue";
import AccordionItem from "@/pagesComponents/pages/pricing//AccordionItem.vue";
import ComplexBackgroundCard from "~~/pagesComponents/ecommerce/referral/ComplexBackgroundCard.vue";
import { mapGetters } from "vuex";

import headerImg from "@/assets/img/pricing-header-bg.jpg";
export default {
   name: "courses",
   components: { NavbarTransparent, PricingCard, AppFooter, AccordionItem, ComplexBackgroundCard, headerImg },
   data() {
      return {

      }
   },
   methods: {
      async cl(corse) {

         var data = {
            userEmail: this.getEmail,
            userName: this.getUserName,
            userID: this.getId,
            courseName: corse.name,
            price: corse.price,
            numberPhone: this.getPhone,
            // numberPhone:
         }
         this.$swal({
            title: "Are you sure?",
            text: "You won Send this Request!",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true,
            customClass: {
               confirmButton: "btn bg-gradient-success",
               cancelButton: "btn bg-gradient-danger",
            },
            buttonsStyling: false,
         }).then((result) => {
            if (result.isConfirmed) {
               $fetch('http://localhost:8000/api/order/', {
                  method: 'POST',
                  body: data

               }).then(res => {
                  this.$store.dispatch("SetNotes");
                  this.$swal({
                     title: "Send successfully!",
                     text: "The Notes is Deleted",
                     icon: "success",
                     customClass: {
                        confirmButton: "btn bg-gradient-success",
                     },
                     buttonsStyling: false,
                  });
               })
            } else if (
               /* Read more about handling dismissals below */
               result.dismiss === this.$swal.DismissReason.cancel
            ) {
               this.$swal({
                  title: "Cancelled!",
                  text: "Your imaginary file is safe :)",
                  icon: "error",
                  customClass: {
                     confirmButton: "btn bg-gradient-success",
                  },
                  buttonsStyling: false,
               });
            }
         })

      }

   },

   computed: {
      ...mapGetters(["getUserInfo", "getCourses", "getId", "getEmail", "getId", "getPhone", "getUserName"]),
   },
   mounted() {
      this.$store.dispatch("SetCourses");
      var x = sessionStorage.getItem("info");
      this.$store.dispatch("yourAction", JSON.parse(x));
      console.log(this.getId);





   },

}

definePageMeta({
   layout: false,
});

</script>
<style scoped>
.bg-color {
   background: linear-gradient(rgba(57, 2, 2, 0.4), rgb(83, 72, 72)) !important;
}
</style>
  