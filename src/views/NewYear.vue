<template>
  <div>
    <v-sheet class="pt-5 text-center mx-auto px-4 text-center mx-auto px-4 mb-5" elevation="4" height="100"
      max-width="800" width="100%" color="#89CFF0">
      <h3 class="text-h6 text-sm-h3">Список желаний на Новый год</h3>
    </v-sheet>
    <WishListCards :wishCards="cards" />
  </div>

</template>

<script setup>
import WishListCards from '@/components/WishListCards.vue';

let cards = [{
  name: 'Желание на Новый год 1',
  description: 'Описание моего желания',
  isLiked: false
},
{
  name: 'Желание на Новый год 2',
  description: 'Описание моего желания',
  isLiked: false
},
{
  name: 'Желание на Новый год 3',
  description: 'Описание моего желания',
  isLiked: false
},
{
  name: 'Желание на Новый год 4',
  description: 'Описание моего желания',
  isLiked: false
},
{
  name: 'Желание на Новый год 5',
  description: 'Описание моего желания',
  isLiked: false
},
{
  name: 'Желание на Новый год 6',
  description: 'Описание моего желания',
  isLiked: false
},
]
</script>

<style></style>