<template>
	<h1>{{ msg }}</h1>

	<a-button danger shape="round" @click="count++">首页按钮{{ count }}</a-button>
	<a-pagination v-model:current="current" :total="50" show-less-items />
</template>

<style lang="less" scoped>
h1{
	font-size: 12px;
}
</style>
<script setup>
import { ref } from 'vue'

defineProps({
	msg: String
})

const count = ref(0)
const current = ref(2)
</script>
