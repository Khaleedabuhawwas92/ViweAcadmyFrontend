<template>
    <main class="main-content position-relative max-height-vh-100 h-100">
        <div class="mt-n8">
            <div class="container">
                <div class="tab-content tab-space">
                    <div id="monthly" class="tab-pane active">
                        <div class="row">
                            <div class="mb-4 col-lg-4 mb-lg-0">
                                <!-- secation one -->

                            </div>
                            <div class="mb-4 col-lg-4 mb-lg-0">
                                <!-- secation tow -->

                            </div>
                            <div class="mb-4 col-lg-4 mb-lg-0">
                                <!-- secation three -->
                            </div>
                        </div>
                    </div>
                    <div id="annual" class="tab-pane">
                        <div class="row">
                            <div class="mb-4 col-lg-4 mb-lg-0">

                            </div>
                            <div class="mb-4 col-lg-4 mb-lg-0">

                            </div>
                            <div class="mb-4 col-lg-4 mb-lg-0">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container my-6">
            <div class="row">
                <div class="mx-auto text-center col-8">

                </div>
            </div>

            <div class="mt-8 row" >
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                            type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>


                    </div>
                </nav>
                <div class="tab-content" id="messages" >
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <accordion-item accordion-id="headingOne" collapse-id="collapseOne" active>
                            <template #question>
                                <h3>
                                   sssss
                                </h3>
                            </template>
                            <template #answer>
                                <div class="m-3 row text-start">
                                    <div class="form-check">
                                        <div class="row text-start">
                                            <div class="mt-3 col-lg-3 col-md-5  text-start" >
                                                <input type="radio" :id="choice" @change="onChange($event)"
                                                    v-model="Courses" :name="choices" :value="choice">
                                                <label class="form-check-label" :for="choice">
                                                   sssss
                                                </label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="mt-4 button-row d-flex col-12">
                                                <button class="mb-0 btn bg-gradient-dark ms-auto js-btn-next" type="button"
                                                    title="Next" @click="clickme()">
                                                    Next
                                                </button>
                                            </div>
                                            <div class="mt-4 button-row d-flex col-12">
                                                <p>asadsadksadksajdjkj</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </accordion-item>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">ssssss
                    </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        ddddddd
                    </div>
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
import setNavPills from "@/assets/js/nav-pills.js";

import headerImg from "@/assets/img/pricing-header-bg.jpg";
export default {
    name: "generate-quiz",
    components: { AccordionItem, AppFooter, PricingCard, NavbarTransparent, headerImg },
    props: {
    light: Boolean,
  },
    data() {
        return {
            activeClass: "js-active position-relative",
            activeStep: 0,
            formSteps: 3,
            user: {
                email: 'test@test.com',
                roles2: [{ id: 1, name: 'Client' }]
            },
            mChoice: null,
            sel: null,
            subjects: [],
            systems: [],
            topics: [],
            noOfPersons: 2,
            selected: '',

            questionsArray: [],
            insatrQuastion: [],
            Subjects: [],
            Systems: [],
            Topics: [],
            Courses: [],
            filtring: {},
            data: []
        };
    },
    methods: {
        clickme() {
            alert(this.quize)

        }
    },

}
</script>
  