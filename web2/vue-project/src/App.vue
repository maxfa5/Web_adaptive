<script >
import VHeader from '@/components/VHeader.vue';
import VFooter from '@/components/VFooter.vue';
import VService from '@/components/VService.vue';
import VClass from '@/components/VClass.vue';
import VHistory from '@/components/VHistory.vue';
import VPossible from '@/components/VPossible.vue';
import How_it_work from '@/components/How_it_work.vue';
import VReviews from '@/components/VReviews.vue';

export default {
 components: {
  VHeader,
  VService,
  VClass,
  VHistory,
  VPossible,
  How_it_work,
  VReviews,
  VFooter
 }
}
</script>

<template>
  <VHeader></VHeader>
  <VService></VService>
  <VClass></VClass>
  <VHistory></VHistory>
  <VPossible></VPossible>
  <How_it_work></How_it_work>
  <VReviews></VReviews>
  <VFooter></VFooter>
</template>


<style>

</style>
