<template>
	<section class="flex flex-col w-80 cacl__view">
		<div class="flex justify-around">
			<h3>Casino</h3>
			<h4>Fx - 570ES Plus</h4>
		</div>
		<header class="bg-amber-100 cacl__view__header">
			<CaclDisplayComp />
		</header>
		<footer class="cacl__view__footer">
			<CaclActionComp />
		</footer>
	</section>
</template>

<script>
// import LoadingState from "@/components/LoadingState.vue";
// import ErrorState from "@/components/ErrorState.vue";
// const CaclDisplay = import("@/components/CaclDisplayComp.vue").default;
// const CaclAction = require("@/components/CaclActionComp.vue").default;
import CaclDisplayComp from "@/components/CaclDisplayComp.vue";
import CaclActionComp from "@/components/CaclActionComp.vue";

export default {
	name: "cacl-root",
	components: {
		CaclDisplayComp,
		CaclActionComp,
	},
};
</script>

<style>
.cacl__view {
	margin: auto !important;
	background: #b8acac;
}
.cacl__view__header {
	padding: 1rem !important;
	margin-bottom: 1rem !important;
}
</style>
