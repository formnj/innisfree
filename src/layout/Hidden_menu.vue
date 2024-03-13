<template>
    <ul id="hidden_menu">
        <li><a href="/">Front</a></li>
        <li><a href="/guide">Guide</a></li>
    </ul>
</template>
<script setup>
import {onMounted} from 'vue'

onMounted(() => {
    window.addEventListener("keydown", (e) => {
        if(e.keyCode == 16){
            console.log('if : '+e.keyCode)
            if(e.keyCode == 79){
                console.log(e.keyCode)
            }
        }
        console.log('a : '+e.keyCode)
    });
});
</script>
<style lang="scss"></style>