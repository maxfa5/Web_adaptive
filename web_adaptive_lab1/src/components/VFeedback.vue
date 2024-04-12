
<script setup>

</script>

<template>
        <section class="feedback">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6">
                <div class="feedback__text">
                    <h2>Остались вопросы?</h2>
                    <p>Свяжитесь с нами!</p>
                </div>
            </div>
            <div class="col-lg-9 col-xl-6">
                <form class="form">
                    <label for="textarea" class="mb-3">
                        <textarea placeholder="Введите ваш вопрос"  title="Ваш вопрос" required></textarea>
                    </label>
                    <div class="form_group">
                        <label for="textarea" class="mb-3">
                            <input type="text" placeholder="Ваше имя" title="Ваше имя" required >
                        </label>
                        <label class="mb-3">
                            <input type="tel" placeholder="+7(___)___-____"
                            pattern="[0-9]{11}"
                            required
                            title="Ваш номер телефона"
                            maxlength="11" >
                        </label>
                        <label class="mb-3">
                            <input type="email" placeholder="Электронная почта" required  title="Ваша почта">   
                        </label>
                    </div>
                    <button class="button-primary" type="submit">Отправить</button>
                </form>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
</style>