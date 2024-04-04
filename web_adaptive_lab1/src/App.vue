<script >
import VHeader from '@/components/VHeader.vue';
import VPromo from './components/VPromo.vue';
import VNew from './components/VNew.vue';
import VProjects from './components/VProjects.vue';
import VTech from './components/VTech.vue';
import VFeedback from './components/VFeedback.vue';
import VFooter from './components/VFooter.vue';

export default {
 components: {
    VNew,
    VHeader,
    VPromo,
    VProjects,
    VTech,
    VFeedback,
    VFooter
 }
}
</script>

<template>
        <VHeader></VHeader>
        <VTech></VTech>
        <VNew></VNew>
        <VProjects></VProjects>
        <VPromo></VPromo>
        <VFeedback></VFeedback>
        <VFooter></VFooter>
</template>


<style>

</style>
