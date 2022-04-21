<template>
	<section class="flex flex-col justify-between h-20 cacl-display">
		<header class="h-15 text-yellow-400">{{ resurt }}</header>
		<footer class="text-black-400 text-right">{{ caclAction }}</footer>
	</section>
</template>

<script>
export default {
	name: "cacl-display",
	computed: {
		caclAction() {
			return this.$store.getters.getCaclAction;
		},
		resurt() {
			return this.$store.getters.getResurt;
		},
	},
};
</script>

<style></style>
