<template>
    <div class="links">
        <paginator/>
        <audio-area/>
        <weblinks-area/>
    </div>
</template>
<script>
import Paginator from './pager/Paginator.vue'
import AudioArea from './audio/Area.vue'
import WeblinksArea from './weblinks/Area.vue'

export default {
    components: {
        Paginator,
        AudioArea,
        WeblinksArea
    }
}
</script>