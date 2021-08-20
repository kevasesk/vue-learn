<template>
    <div class="paginator">
        <strong class="ql-pdp-too__title">Choose a page</strong><br/>
        <prev/><pages/><next/>
    </div>
</template>
<script>
import Prev from './Prev.vue'
import Pages from './pages/Pages.vue'
import Next from './Next.vue'

export default {
    components: {
        Prev,
        Pages,
        Next,
    }
}
</script>