
<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination} from 'swiper/modules';
import '@/../node_modules/swiper/swiper-bundle.min.css';

const cards = [
    {
        src: "/connect.svg",
        title: "Общение с классом",
        text: "Видеосвязь<br>Чат с классом",
        color: "possibilities__card__blue"
    },

    {
        src: "/lessons.svg",
        title: "Проведение занятий",
        text: "Презентация файлов <br> Демонстрация экрана",
        color: "possibilities__card__orange"
    },

    {
        src: "/posec.svg",
        title: "Посещаемость",
        text: "Автоматическое <br>отслеживание<br> присутствующих",
        color: "possibilities__card__blue"
    },

    {
        src: "/reverse.svg",
        title: "История занятий",
        text: "Материалы урока",
        color: "possibilities__card__orange"
    }
]

</script>

<template>

    <section class="possibilities">
        <div class="container">
            <div class="possibilities__header">
                <h3>Возможности</h3>
            </div>
            <swiper :modules="[Pagination]" :space-between="30"  :pagination="{ el: '.possibilities__swiper-pagination',clickable: true }"
                :breakpoints="{
                0: { slidesPerView: 1 },
                560: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 }
            }" 
                >

                <swiper-slide v-for="(item,index) in cards" :key="index">
                    <div class="possibilities__swiper-slide">
                        <div class="possibilities__card" :class="item.color">
                            <img :src="item.src" alt="" class="possibilities__logo">
                            <h4>{{item.title}}</h4>
                            <p v-html="item.text"></p>
                        </div>
                    </div>
                </swiper-slide>
                <div class="possibilities__swiper-pagination swiper-pagination"></div>
            </swiper>
        </div>
    </section>
</template>