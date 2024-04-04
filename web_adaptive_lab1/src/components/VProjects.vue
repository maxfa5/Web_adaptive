<script setup>
const projects = [
    {
        img:{
            src:"/eduKesha.png",
            alt:""
        },
        link:{
            href:"#",
            title:"EduKesha"
        },
        description:"Разработали сервис для проведения онлайн-занятий"
    },
    {
        img:{
            src:"/doantlike.svg",
            alt:""
        },
        link:{
            href:"#",
            title:"donatlike"
        },
        description:"Разработали телеграмм-бота для отправки платных реакций"
    },
    {
        img:{
            src:"/surgu.png",
            alt:""
        },
        link:{
            href:"#",
            title:"surgu"
        },
        description:"Разработали сайт приемной комиссии СурГУ"
    }
]
</script>

<template>
       <section class="projects">
                <div class="container">
                    <h2>Проекты</h2>
                    <div class="row">
                        <div class="col-12 col-sm-6 col-lg-4" v-for="(obj, index) in projects" :key="index">
                            <div class="projects__cards">
                                <img :src="obj.img.src" :alt="obj.img.alt">
                                <a href="#"> {{obj.link.title }}</a>
                                <p>{{ obj.description }} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
</template>

<style scoped>
</style>