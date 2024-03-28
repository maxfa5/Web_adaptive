<script >
import V_header from '@/components/V-header.vue';
import V_promo from './components/V-promo.vue';
import V_new from './components/V-new.vue';
import V_projects from './components/V-projects.vue';
import V_tech from './components/V-tech.vue';
import V_feedback from './components/Vfeed-back.vue';
import V_footer from './components/V-footer.vue';

export default {
 components: {
    V_new,
    V_header,
    V_promo,
    V_projects,
    V_tech,
    V_feedback,
    V_footer
 }
}
</script>

<template>
        <V_header></V_header>
        <V_tech></V_tech>
        <V_promo></V_promo>
        <V_new></V_new>
        <V_projects></V_projects>
        <V_feedback></V_feedback>
        <V_footer></V_footer>
</template>


<style>

</style>
