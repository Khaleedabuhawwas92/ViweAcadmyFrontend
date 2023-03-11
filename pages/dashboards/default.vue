<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div v-for="{
            title,
            value,
            description,
            icon: { component, background, shape },
          } of cardData" :key="title" class="col-lg-4 col-md-6 col-12">
            <MiniStatisticsCard :title="title" :value="value" :description="description" :icon="{
              component: component,
              background: background,
              shape: shape,
            }" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7 mb-lg">
            <div class="card z-index-2">
              <div class="mb-0 pb-0 card-header">
                <h6>assad</h6>
                <p class="text-sm">
                  <i class="fa fa-arrow-up text-success"></i>
                  <!-- <span class="font-weight-bold ms-1">4% more</span> in 2021 -->
                </p>
              </div>
              <div class="p-0 card-body">
                <div class="chart">
                  <GradientLineChart :chart-options="{
                    chart: {
                      type: 'area',
                    },
                    colors: ['#f0b52b'],
                    labels: [
                      'Apr',
                      'May',
                      'Jun',
                      'Jul',
                      'Aug',
                      'Sep',
                      'Oct',
                      'Nov',
                      'Dec',
                    ],
                    dataLabels: {
                      enabled: false,
                    },
                    stroke: {
                      curve: 'smooth',
                    },
                    legend: {
                      show: false,
                    },
                  }" :series="[
  {
    name: 'Mobile Apps',
    data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
  },
]" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="card">
              <div class=" pb-0 card-header">
                <div class="d-flex justify-content-between">
                  <h6 class="mb-0">Tags by title</h6>
                </div>
              </div>
              <div class=" card-body">
                <div class="chart">
                  <BarChartHorizontal height="290" :series="[
                    {
                      name: 'Mobile Apps',
                      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
                    },
                  ]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-4 col-sm-6">
        <ChannelsCard />
      </div>
          <div class="col-lg-8 col-md-6 mb-4 mb-lg-0">
            <TodoList :todos="[
              {
                label: 'Call with Dave',
                dateTime: '09:30 AM',
                isChecked: true,
              },
              {
                label: 'Brunch Meeting',
                dateTime: '11:00 AM',
              },
              {
                label: 'Argon Dashboard Launch',
                dateTime: '02:00 PM',
              },
              {
                label: 'Winter Hackaton',
                dateTime: '10:30 AM',
                isChecked: true,
              },
              {
                label: 'Winter Hackaton',
                dateTime: '10:30 AM',
                isChecked: true,
              },
              {
                label: 'Winter Hackaton',
                dateTime: '10:30 AM',
                isChecked: true,
              },
              {
                label: 'Winter Hackaton',
                dateTime: '10:30 AM',
                isChecked: true,
              },
            ]" title="Your Notes" />
          </div>
      
        </div>
        <div class="row mt-4">

        </div>
        <div class="row mt-4">
          <div class="col-lg-12 col-md-8 mb-4 mb-md-0">
            <AuthorsTable />
          </div>
          <div class="col-md-4">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

// import image2 from "~/assets/img/img-2.jpg";
// import image1 from "~/assets/img/img-1.jpg";
// import image3 from "~/assets/img/img-3.jpg";

import team1 from "~/assets/img/team-1.jpg";
import team2 from "~/assets/img/team-2.jpg";
import team5 from "~/assets/img/team-5.jpg";
import team4 from "~/assets/img/team-4.jpg";

import jira from "~/assets/img/small-logos/logo-jira.svg";
import asana from "~/assets/img/small-logos/logo-asana.svg";
import spotify from "~/assets/img/small-logos/logo-spotify.svg";
import bootstrap from "~/assets/img/small-logos/bootstrap.svg";
import invision from "~/assets/img/small-logos/logo-invision.svg";
import slack from "~/assets/img/small-logos/logo-slack.svg";
import adobe from "~/assets/img/small-logos/logo-xd.svg";

import US from "~/assets/img/icons/flags/US.png";
import DE from "~/assets/img/icons/flags/DE.png";
import GB from "~/assets/img/icons/flags/GB.png";
import BR from "~/assets/img/icons/flags/BR.png";

import CategoriesList from "@/examples/cards/CategoriesList.vue";
import MiniStatisticsCard from "~~/examples/cards/MiniStatisticsCard.vue";
import GradientLineChart from "~~/examples/charts/GradientLineChart.vue";
import BarChartHorizontal from "~~/examples/charts/BarChartHorizontal.vue";
import DoughnutChart from "~~/examples/charts/DoughnutChart.vue";
// import Carousel from "~~/pagesComponents/dashboards/default/Carousel.vue";
import MemberCard from "~~/pagesComponents/dashboards/default/MemberCard.vue";
import AuthorsTable from "~~/pagesComponents/dashboards/default/AuthorsTable.vue";
import PostCard from "~~/examples/cards/PostCard.vue";
import TodoList from "~~/pagesComponents/dashboards/default/TodoList.vue";
import ProgressTrackCard from "~~/pagesComponents/dashboards/default/ProgressTrackCard.vue";
import ChannelsCard from "~~/pagesComponents/ecommerce/overview/ChannelsCard.vue";
import ProjectCard from "~~/pagesComponents/dashboards/default/ProjectCard.vue";
import CreditCard from "~~/pagesComponents/dashboards/default/CreditCard.vue";
import InfoCard from "~~/pagesComponents/dashboards/default/InfoCard.vue";

definePageMeta({
  layout: "default",
});
const series = [
  {
    name: "hi",
    data: [15, 20, 12, 60, 20, 15],
  },
];
const cardData = [
 
  {
    title: "Enrolled Courses",
    value: "56",
    description: `<span
                class='text-sm font-weight-bolder text-success'
                >+3%</span> since last week`,
    icon: {
      component: "ni ni-world",
      background: "bg-gradient-danger",
      shape: "rounded-circle",
    },
  },
  {
    title: "Completed Courses",
    value: "0",
    description: `<span
                class='text-sm font-weight-bolder text-danger'
                >-2%</span> since last quarter`,
    icon: {
      component: "ni ni-paper-diploma",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Your Score",
    value: "30%",
    description: `<span
                class='text-sm font-weight-bolder text-info'
                >Your Score For All Quastions</span>`,
    icon: {
      component: "ni ni-cart",
      background: "bg-gradient-warning",
      shape: "rounded-circle",
    },
  },
];

const sales = {
  us: {
    country: "United States",
    sale: 2500,
    value: "$230,900",
    bounce: "29.9%",
    flag: US,
  },
  germany: {
    country: "Germany",
    sale: "3.900",
    value: "$440,000",
    bounce: "40.22%",
    flag: DE,
  },
  britain: {
    country: "Great Britain",
    sale: "1.400",
    value: "$190,700",
    bounce: "23.44%",
    flag: GB,
  },
  brasil: {
    country: "Brasil",
    sale: "562",
    value: "$143,960",
    bounce: "32.14%",
    flag: BR,
  },
};
</script>
