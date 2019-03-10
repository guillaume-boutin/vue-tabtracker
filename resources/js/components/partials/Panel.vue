<template>
    <div class="white elevation-2">
        <v-toolbar flat dense dark class="light-blue">
            <v-toolbar-title>
                {{ title }}
            </v-toolbar-title>
        </v-toolbar>

        <div class="pt-2 pr-4 pb-2 pl-4">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>