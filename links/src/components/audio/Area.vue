<template>
    <div class="audio">
        <topics/>
        <links/>
    </div>
</template>
<script>
import Topics from "./Topics.vue";
import Links from "./Links.vue";

export default {
    components: {
        Topics,
        Links
    }
}
</script>