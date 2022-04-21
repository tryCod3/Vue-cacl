<template>
	<div class="container">
		<Cacl />
	</div>
</template>

<script>
export default {
	name: "App",
	components: {
		Cacl: () => import("@/view/CaclView.vue"),
	},
};
</script>

<style>
* {
	margin: 0 !important;
	padding: 0 !important;
	box-sizing: border-box !important;
}
</style>
