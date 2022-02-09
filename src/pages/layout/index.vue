<template>
	<!--这里面需要单独写一个导航组件，然后引入进来-->
	<div class="layout">
		<p>首页</p>
		<p>课程中心</p>
	</div>
	<router-view />
</template>

<style lang="less" scoped>
.layout{
	display: flex;
	justify-content: center;
	p{
		padding-right: 30px;
	}
}
</style>

<script setup>
</script>


