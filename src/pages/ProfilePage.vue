<script setup>
import { AppState } from '@/AppState.js';
import { profilesService } from '@/services/ProfilesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';
import { useRoute } from 'vue-router';


const profile = computed(() => AppState.account)

const route = useRoute()

async function getProfile() {
    try {
        await profilesService.getProfile()
    }
    catch (error) {
        Pop.error(error);
        logger.log(error)
    }
}



</script>


<template>
    <div class="container">
        <section class="row">
            <div class="col-12">
                <H1>Profile Page</H1>
            </div>
            <div class="col-12">
                <img src="" alt="">
            </div>
        </section>
    </div>




</template>


<style lang="scss" scoped></style>