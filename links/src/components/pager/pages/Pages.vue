<template>
    <select name="pages">
        <page first="0" second="1"/>
        <page first="2" second="3"/>
        <page first="4" second="5"/>
    </select>
</template>
<script>
import Page from './Page.vue'

export default {
    components: {
        Page
    }
}
</script>