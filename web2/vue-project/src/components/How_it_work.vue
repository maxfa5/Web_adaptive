<script setup>
    const cards=[
        {
            title:'Составьте расписание',
            text:"Выберите время, предмет и класс. Ученики получат уведомление о предстоящем уроке.",
            src:"/schadule.png"
        },

        {
            title:'Подготовьте материал',
            text:'Загружайте необходимые материалы  к уроку.',
            src:"/docks.png"
        },

        {
            title:'Начните урок с учениками',
            text:'Задавайте вопросы и вызывайте «к доске» детей с поднятой рукой.',
            src:"/lesson.png"
        }]

</script>


<template>
    <section class="idea">
        <div class="container">
            <div class="idea__header">
                <h3>Как это работает?</h3>
            </div>
            <div class="idea__wrap">
                <div class="row">
                    <div class="col-12 col-lg-4" v-for="(item, index) in cards" :key="index">
                        <div class="idea__element">
                            <img :src="item.src" alt="">
                            <h4>{{item.title}}</h4>
                            <p>{{item.text}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
</style>