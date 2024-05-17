<script setup>
import "../assets/menu.js";
</script>

<template>
    <div id="nav">
        <div class="cover"></div>

        <header>
            <nav class="nav mb-5 mt-5">
                <div class="container">
                    <div class="nav__wrap">
                        <div class="nav__logo">
                            <img src="/logo.svg" alt="">
                        </div>

                        <button class="nav__menu-button" id="nav__menu-button" title="nav__menu-button">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div class="nav__menu">
                            <ul class="nav__list">
                                <li><a href="">Возможности</a></li>
                                <li><a href="">Как это работает?</a></li>
                            </ul>
                            <div class="nav__refs">
                                <ul class="nav__refs-list">
                                    <li>г Сургут, ул Базовая, д. 34, офис 10</li>
                                    <li>ОГРН 1238600001200ИНН</li>
                                    <li>8602309464</li>
                                    <li>ООО Дотсолюшн © 2023</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<style scoped></style>