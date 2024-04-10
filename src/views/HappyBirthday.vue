<template>
    <div>
        <v-sheet class="pt-5 text-center mx-auto px-4 text-center mx-auto px-4 mb-5 " elevation="4" height="150"
            height-xs="200" max-width="820" width="100%" color="#42b983">
            <h3 class="text-h6 text-sm-h3">Список желаний на день рождения</h3>
        </v-sheet>

        <WishListCards :wishCards="cards" />
    </div>
</template>

<script setup>
import WishListCards from '@/components/WishListCards.vue';


let cards = [{
    name: 'Желание на день рождения 1',
    description: 'Описание моего желания',
    isLiked: false
},
{
    name: 'Желание на день рождения 2',
    description: 'Описание моего желания',
    isLiked: false
},
{
    name: 'Желание на день рождения 3',
    description: 'Описание моего желания',
    isLiked: false
},
{
    name: 'Желание на день рождения 4',
    description: 'Описание моего желания',
    isLiked: false
},
]
</script>

<style></style>