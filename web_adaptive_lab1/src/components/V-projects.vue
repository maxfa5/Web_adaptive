<script setup>

</script>
const projects = {
    {
        img:{
            src:"../img/eduKesha.png",
            alt:""
        },
        link{
            href:"#",
            title:"EduKesha"
        },
        description:"Разработали сервис для проведения онлайн-занятий"
    },
    {
        img:{
            src:"../img/doantlike.svg",
            alt:""
        },
        link{
            href:"#",
            title:"donatlike"
        },
        description:"Разработали телеграмм-бота для отправки платных реакций"
    },
    {
        img:{
            src:"../img/surgu.png",
            alt:""
        },
        link{
            href:"#",
            title:"surgu"
        },
        description:"Разработали сайт приемной комиссии СурГУ"
    }
}
<template>
       <section class="projects">
                <div class="container">
                    <h2>Проекты</h2>
                    <div class="row">
                        <div class="col-12 col-sm-6 col-lg-4" v-for="(item, index) in projects"
                        :key="index" )>
                            <div class="projects__cards">
                                <img :src="item.img.src" :alt="item.img.alt">
                                <a href="#"> {{item.link.title }}</a>
                                <p>{{ item.description }} </p>
                            </div>

                        </div>
                        <div class="col-12 col-sm-6 col-lg-4">
                            <div class="projects__cards">
                                <img :src="item.img.src" alt="">
                                <a href="#">{{item.link.title  }} </a>
                                <p>{{item.description}}</p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4">
                            <div class="projects__cards">
                                <img :src="item.img.src" alt="">
                                <a href="#">{{ item.link.title }}} </a>
                                <p>{{item.description}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
</template>

<style scoped>
</style>