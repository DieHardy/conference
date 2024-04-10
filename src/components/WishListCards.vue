<template>
    <div>
        <v-dialog max-width="400">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn v-bind="activatorProps" color="success" text="Добавить новое желание" variant="flat"></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card title="Добавить новое желание">
                    <v-form @submit.prevent="addCard" class="pa-5">
                        <v-text-field v-model="newCard.name" width="344"
                            :rules="[(v) => !!v || 'Необходимо ввести название']" required label="Название желания"
                            clearable></v-text-field>
                        <v-text-field v-model="newCard.description"
                            :rules="[(v) => !!v || 'Необходимо ввести описание желания']" label="Описание желания"
                            required clearable></v-text-field>
                        <v-btn text="Закрыть" color="warning" @click="isActive.value = false" class="mr-2"></v-btn>
                        <v-btn text="Добавить" color="success" type="submit"></v-btn>
                    </v-form>
                </v-card>
            </template>
        </v-dialog>
        <div class="text-h6 mt-5">Количество желаний: {{ allCards.length }}</div>
        <div class="d-flex flex-row ga-3 mt-5 justify-space-around flex-wrap" max-width="800">
            <v-card v-for="card in allCards" :key="card.name" :text="card.description" :title="card.name"
                max-width="400" width="100%" color="#ADD8E6"></v-card>
        </div>
    </div>
</template>
<script setup>
import { defineProps, ref } from 'vue';
const props = defineProps({
    wishCards: {
        type: Array,
        required: true,
    },
});
let allCards = ref([])
allCards.value = [...props.wishCards]
let newCard = ref({ name: '', description: '', isLiked: '' })
const addCard = () => {
    if (newCard.value.name && newCard.value.description) {
        allCards.value = [...allCards.value, newCard.value]
        newCard.value = {}
    }
}


</script>

<style></style>