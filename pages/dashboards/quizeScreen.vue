<template onLoad="noBack();" onpageshow="if (event.persisted) noBack();" onUnload="">
   <main class="main-content position-relative max-height-vh-100 h-100 ">
      <div class="mt-2">
         <nav id="navbarBlur" :class="
            navStore.navFixed
               ? `navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl shadow-none position-sticky left-auto top-2 z-index-sticky ${navStore.darkMode ? 'bg-default' : 'bg-white'
               }`
               : `navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl shadow-none`
         " v-bind="$attrs" data-scroll="true" class="bg-Navbar justify-content-center ">
            <div class="px-3 py-2 container-fluid  ">

               <div class="display-6 display-inline " id="minutes">00</div>
               <div class="display-6  ">:</div>
               <div class="display-6 display-inline " id="seconds">00</div>

               <div id="navbar" class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4">
                  <div class="pe-md-3 d-flex  ms-md-auto">

                  </div>
                  <ul class="navbar-nav">

                     <li class=" nav-item d-flex align-items-center">
                        <a class="p-0 nav-link" @click="toggleShowConfig">
                           <i class="fa fa-ban cursor-pointer fixed-plugin-button-nav marked" :class="
                              navStore.darkMode || !navStore.navFixed
                                 ? 'text-white'
                                 : 'text-dark opacity-8'
                           "> <span class="d-sm-inline d-none px-2">End Quiz</span></i>
                        </a>
                     </li>
                     <li class="nav-item dropdown d-flex align-items-center pe-2 marked">
                        <a id="dropdownMenuButton" href="#" :class="`p-0 nav-link text-white ${showMenu ? 'show' : ''}`"
                           data-bs-toggle="dropdown" aria-expanded="false" @click="showMenu = !showMenu">
                           <i class="fa fa-search-plus  " @click="zoomI()" :class="
                              navStore.darkMode || !navStore.navFixed
                                 ? 'text-white'
                                 : 'text-dark opacity-8'
                           "> <span class="d-sm-inline d-none px-2">Zoom In</span></i>
                        </a>
                     </li>
                     <li class="nav-item dropdown d-flex align-items-center pe-2 marked">
                        <a id="dropdownMenuButton" href="#" :class="`p-0 nav-link text-white ${showMenu ? 'show' : ''}`"
                           data-bs-toggle="dropdown" aria-expanded="false" @click="showMenu = !showMenu">
                           <i class="fa fa-search-minus  " @click="startIntariver()" :class="
                              navStore.darkMode || !navStore.navFixed
                                 ? 'text-white'
                                 : 'text-dark opacity-8'
                           "> <span class="d-sm-inline d-none px-2">dsadas</span></i>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
      <div id="countup">

      </div>
      <div class="d-flex justify-content-between align-items-center mt-2">
         <div class="mt-4 col-lg-3 col-md-6 col-12 mt-md-0 mx-4 right-auto">
            <MiniStatisticsCard class="bg-success" :title="{ text: 'Correct Answer', color: 'text-white' }"
               :value="{ text: correctAnswer, color: 'text-white' }" :icon="{
                  component: 'fa fa-thumbs-up text-dark',
                  background: 'bg-white',
                  shape: 'rounded-circle',
               }" />
         </div>
         <div class="mt-4 col-lg-3 col-md-6 col-12 mt-md-0 mx-4">
            <MiniStatisticsCard class="bg-danger" :title="{ text: 'Incorrect Answer', color: ' text-white' }"
               :value="{ text: incorrectAnswer, color: 'text-white' }" :icon="{
                  component: 'fa fa-thumbs-down text-dark',
                  background: 'bg-white',
                  shape: 'rounded-circle',
               }" />
         </div>
      </div>
      <!-- <NavbarTransparent /> -->
      <div class="mt-2 row">

         <div class="mx-auto text-center col-md-6">
            <h2>{{ titleq }}</h2>
         </div>
      </div>
      <div class="container my-6">
         <div class="row">
            <div class="mx-auto text-center col-8">

            </div>
         </div>
         <div class=" row">
            <ul class="nav nav-tabs" id="pills-tab" role="tablist">
               <li v-for="(item, index) of input" :key="index" class="nav-item " role="presentation">
                  <button class="nav-link" :class="index === 0 ? 'active' : null" :id="`${item.name}-tab`"
                     data-bs-toggle="pill" :data-bs-target="`#${item.name}`" type="button" role="tab"
                     :aria-controls="item.name" :aria-selected="index === 0">
                     {{ item.name }}
                  </button>
               </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
               <div v-for="(item, index) of input" :key="index" class="tab-pane fade"
                  :class="index === 0 ? 'show active' : null" :id="item.name" role="tabpanel"
                  aria-labelledby="pills-home-tab">
                  <div class="row">
                     <div class="mx-auto col-md-10">
                        <div id="accordionRental" class="accordion">
                           <accordion-item accordion-id="headingOne" active>
                              <template #question><strong id="qustion">{{ item.questiontext }}</strong></template>
                              <template #answer>
                                 <ol type="A">
                                    <li>
                                       <div class="form-check ">
                                          <input class="form-check-input" type="radio" :name="item.questiontext"
                                             :id="item.q1" :value="item.q1">
                                          <label class="form-check-label" :id="item.q1" :for="item.questiontext">
                                             <strong>{{ item.q1 }} </strong>
                                          </label>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="form-check">
                                          <input class="form-check-input" type="radio" :name="item.questiontext"
                                             :id="item.q2" :value="item.q2">
                                          <label class="form-check-label" :id="item.q2" :for="item.questiontext">
                                             <strong>{{ item.q2 }}</strong>
                                          </label>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="form-check">
                                          <input class="form-check-input" type="radio" :name="item.questiontext"
                                             :id="item.q3" :value="item.q3">
                                          <label class="form-check-label" :id="item.q3" :for="item.questiontext">
                                             <strong>{{ item.q3 }}</strong>
                                          </label>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="form-check">
                                          <input class="form-check-input" type="radio" :name="item.questiontext"
                                             :id="item.q4" :value="item.q4">
                                          <label class="form-check-label" :id="item.q4" :for="item.questiontext">
                                             <strong> {{ item.q4 }}</strong>
                                          </label>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="form-check ">
                                          <input class="form-check-input" type="radio" :name="item.questiontext"
                                             :id="item.q5" :value="item.q5">
                                          <label class="form-check-label" :id="item.q5" :for="item.questiontext">
                                             <strong> {{ item.q5 }}</strong>
                                          </label>
                                       </div>
                                    </li>
                                    <li v-if="!item.q6 == ''">
                                       <div class="form-check ">
                                          <input class="form-check-input" type="radio" :name="item.questiontext"
                                             :id="item.q6" :value="item.q6">
                                          <label class="form-check-label" :id="item.q6" :for="item.questiontext">
                                             <strong>{{ item.q6 }}</strong>
                                          </label>
                                       </div>
                                    </li>
                                    <li v-if="!item.q7 == ''">
                                       <div class="form-check ">
                                          <input class="form-check-input" type="radio" :name="item.questiontext"
                                             :id="item.q7" :value="item.q7">
                                          <label class="form-check-label" :id="item.q6" :for="item.questiontext">
                                             <strong>{{ item.q7 }}</strong>
                                          </label>
                                       </div>
                                    </li>
                                    <li v-if="!item.q8 == ''">
                                       <div class="form-check ">
                                          <input class="form-check-input" type="radio" :name="item.questiontext"
                                             :id="item.q8" :value="item.q8">
                                          <label class="form-check-label" :id="item.q8" :for="item.questiontext">
                                             <strong>{{ item.q8 }}</strong>
                                          </label>
                                       </div>
                                    </li>
                                 </ol>
                                 <div class="mt-4 button-row d-flex col-12">
                                    <button class="mb-0 btn submit1 js-btn-prev" data-bs-toggle="modal"
                                       :data-bs-target="`#` + item.id" :data-bs-whatever="item.id">
                                       Note For This Qusation
                                    </button>
                                    <button class="mb-0 btn submit  ms-auto" type="button" @click="showSwal(item)"
                                       title="Send">
                                       Submit
                                    </button>
                                 </div>

                              </template>

                           </accordion-item>
                           <div class="modal fade" :id="item.id" tabindex="-1" aria-labelledby="exampleModalLabel"
                              aria-hidden="true">
                              <div class="modal-dialog">
                                 <div class="modal-content">
                                    <div class="modal-header">
                                       <h5 class="modal-title" id="exampleModalLabel">New Note</h5>
                                       <button type="button" class="btn-close" data-bs-dismiss="modal"
                                          aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                       <form>
                                          <div class="mb-3">
                                             <label for="message-text" class="col-form-label">Note:</label>
                                             <textarea class="form-control" id="message-text" rows="15"
                                                v-model="Note"></textarea>
                                          </div>
                                       </form>
                                    </div>
                                    <div class="modal-footer">
                                       <button type="button" class="btn btn-secondary"
                                          data-bs-dismiss="modal">Close</button>
                                       <button type="button" class="btn btn-primary" id="confirmButton" @click="note(item)"
                                          data-bs-dismiss="modal">Save
                                          Note</button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div v-if="item.togeleexplanation">
                              <InfoCard title="Explanation" :description="item.explanation"
                                 :badge="{ text: `the Corecat Ansert is: ${item.answer1} `, }" />
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </main>
</template>
<script>
// function disableBack() { window.history.forward(); }
// setTimeout(disableBack(), 0);
// window.onunload = function () { null };
import NavbarTransparent from "@/examples/Navbar/Transparent.vue";
import PricingCard from "@/pagesComponents/pages/pricing/PricingCard.vue";
import AppFooter from "~~/examples/Footer/Centered.vue";
import InfoCard from "~~/examples/cards/InfoCard.vue";
import AccordionItem from "@/pagesComponents/pages/pricing//AccordionItem.vue";
import TodoList from "@/pagesComponents/pages/projects/TodoList.vue";
import setNavPills from "@/assets/js/nav-pills.js";
import Navbar from "~~/examples/Navbar";
import headerImg from "@/assets/img/pricing-header-bg.jpg";
import FooterCentered from "@/examples/Footer/Centered.vue";
import DefaultInfoCard from "~~/examples/cards/DefaultInfoCard.vue";
import MiniStatisticsCard from "~~/examples/cards/MiniStatisticsCard.vue";
import { useNavStore } from "~~/stores/NavStore";
import { mapGetters } from "vuex";


export default {
   name: "quizeScreen",
   components: { MiniStatisticsCard, AccordionItem, AppFooter, PricingCard, NavbarTransparent, headerImg, TodoList, InfoCard, Navbar, FooterCentered, DefaultInfoCard },

   props: ["data1"],
   data() {
      return {
         activeClass: "js-active position-relative",
         data: [],
         id: [],
         inputhalooo: [],
         array: [],
         input: [],
         correctAnswer: 0,
         incorrectAnswer: 0,
         navStore: "",
         totalSeconds: 0,
         startIntariver1: 0,
         titleq: "",
         coc: "",
         Note: "",


      };
   },
   computed: {
      ...mapGetters(["getUserInfo", "getId"]),
   },

   methods: {
      saveNote() {

      },
      note(res) {

         var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
         var today = new Date();
         var data = {
            Note: this.Note,
            labelId: res.labelId,
            questiontext: res.questiontext,
            explanation: res.explanation,
            correctAnswer: res.answer1,
            Date: today.toLocaleString('en-GB', { timeZone: 'UTC' })
         }


         $fetch("http://localhost:8000/api/user/note/" + this.id.id, {
            method: 'POST',
            body: data
         }).then(res => {
            this.$swal({
               title: "Saved successfully!",
               text: "The Notes is Saved",
               icon: "success",
               customClass: {
                  confirmButton: "btn bg-gradient-success",
               },
               buttonsStyling: false,
            });

         })


      },
      myTimer() {
         var minutesLabel = document.getElementById("minutes");
         var secondsLabel = document.getElementById("seconds");
         ++this.totalSeconds;
         secondsLabel.innerHTML = this.pad(this.totalSeconds % 60);
         minutesLabel.innerHTML = this.pad(parseInt(this.totalSeconds / 60));
      },
      pad(val) {
         var valString = val + "";
         if (valString.length < 2) {
            return "0" + valString;
         } else {
            return valString;
         }
      },

      correctAnswer2(el, res) {
         const v = "";
         switch (el.value === res.answer1) {
            case true:
               var ele12 = ele1[i].nextElementSibling;
               v = ele12.classList.add("corectAnswer");
         }
         console.log(v);
      },
      showSwal(res) {
         var ele1 = document.getElementsByName(res.questiontext);
         for (let i = 0; i < ele1.length; i++) {
            ele1[i].setAttribute("disabled", "")
            switch (ele1[i].checked) {
               case true:
                  switch (ele1[i].value === res.answer1) {
                     case true:
                        var ele12 = ele1[i].nextElementSibling;
                        var element2 = document.getElementById(`${res.name}-tab`);
                        element2.classList.add("corectAnswer");
                        ele12.classList.add("corectAnswer");
                        this.correctAnswer++;
                        break;
                     case false:
                        var name = ele1[i].nextElementSibling;
                        name.classList.add("notcorectAnswer");
                        var element3 = document.getElementById(`${res.name}-tab`);
                        element3.classList.add("notcorectAnswer");
                        this.incorrectAnswer++;
                        res.togeleexplanation = true;
                        break;
                     default:
                  }
                  break;
               // case false:
               // var element3 = document.getElementById(`${res.name}-tab`);
               // element3.classList.add("skapid2");
               // console.log(element3);
               // break;
               default:


            }


         }
      },

   },
   asyncData() {

   },
   computed() {
      clearTimeout();
      if (window.history.forward()) {  //If not authenticated
         clearTimeout(this.myTimer);
      }
   },
   mounted() {
      console.log(this.getId);

      this.startIntariver1 = 0
      this.startIntariver1 = clearTimeout(this.myTimer)
      this.startIntariver1 = setInterval(this.myTimer, 1000)
      this.navStore = useNavStore();
      this.array = JSON.parse(localStorage.getItem("authToken"));
      this.id = JSON.parse(sessionStorage.getItem("info"));
      this.titleq = localStorage.getItem("title");
      console.log(this.id);
      JSON.stringify(this.array)

      for (let index = 0; index < this.array.length; index++) {
         this.input.push({
            labelId: "Q" + Date.now(),
            togeleexplanation: false,
            id: "Q" + index,
            name: "Q" + (index + 1),
            questiontext: this.array[index].question[0].questiontext,
            q1: this.array[index].question[0].Answer1,
            q2: this.array[index].question[0].Answer2,
            q3: this.array[index].question[0].Answer3,
            q4: this.array[index].question[0].Answer4,
            q5: this.array[index].question[0].Answer5,
            q6: this.array[index].question[0].Answer6,
            q7: this.array[index].question[0].Answer7,
            q8: this.array[index].question[0].Answer8,
            answer1: this.array[index].question[0].Answer,
            explanation: this.array[index].question[0].explanation,
         })
      }
   }


}
definePageMeta({
   layout: false
});

</script>
<style>
.corectAnswer {
   background: linear-gradient(rgba(33, 220, 12, 0.4), rgb(34, 234, 3)) !important;
}

.notcorectAnswer {
   background: linear-gradient(rgba(57, 2, 2, 0.4), rgb(234, 3, 3)) !important;
}

.skapid2 {
   background: linear-gradient(rgba(4, 9, 145, 0.4), rgb(34, 3, 234)) !important;
}

.nav-link {
   margin: 0 6px;
   padding: 5px 20px;
}

.submit {
   background-color: #f0b52b;
   color: white;
}

.spinner1 {
   color: #f0b52b;
}

.submit1 {
   background-color: #15234d;
   color: white;
}

.ooo {
   background: linear-gradient(rgba(4, 9, 145, 0.4), rgb(34, 3, 234)) !important;
}

.bg-Navbar {
   background-color: #15234d;
   border-radius: 9px;
   color: white;

}

.zoom {
   zoom: 2;
   -moz-transform: scale(2);
   -moz-transform-origin: 0 0;
}

.time {
   background-color: #f0b52b;
   color: #15234d;
   padding: 5px;
   border-radius: 20px;


}

.stiker {

   height: 200px;
}

.marked {
   font-size: 30px;
}

.marked :hover {
   color: #f0b52b;
}
</style>


