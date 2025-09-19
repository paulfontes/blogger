<script setup>
import { AppState } from '@/AppState.js';
import { profilesService } from '@/services/ProfilesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';


const profile = computed(() => AppState.activeprofile)

const route = useRoute()

onMounted(() =>
    getProfileById()
)

async function getProfileById() {
    try {
        await profilesService.getProfile(route.params.profileId)
    }
    catch (error) {
        Pop.error(error);
        logger.log(error)
    }
}



</script>


<template>
    <div class="container">
        <section v-if="profile" class="row justify-content-center">
            <div class="col-8 text-center">
                <img :src="profile.coverImg" class="img-fluid cover-img" alt="">
                <img :src="profile.picture" class="img-fluid profile-img" alt="">
                <h1>{{ profile.name }}</h1>
                <p>{{ profile.bio }}</p>
                <p>{{ profile.linkedin }}</p>

            </div>
        </section>
    </div>




</template>


<style lang="scss" scoped>
.profile-img {
    width: 20%;
    object-fit: fill;
    aspect-ratio: 1/1;
    border-radius: 50%;
    position: absolute;
    top: 10;
}
</style>