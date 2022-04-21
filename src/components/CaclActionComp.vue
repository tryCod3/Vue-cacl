<template>
	<section class="grid grid-cols-4 gap-4 cacl-action">
		<div
			v-for="i in actionType"
			:key="i"
			class="bg-indigo-500 text-white text-center rounded-lg hover:bg-violet-600"
			@click="setCacl(i)"
		>
			{{ i }}
		</div>
	</section>
</template>

<script>
export default {
	name: "cacl-action",
	data() {
		return {
			actionType: [
				"AC",
				"DEL",
				".",
				"+",
				"7",
				"8",
				"9",
				"-",
				"4",
				"5",
				"6",
				"*",
				"1",
				"2",
				"3",
				"/",
				"0",
				"=",
			],
		};
	},
	methods: {
		setCacl(sign) {
			if (sign === "AC") this.$store.dispatch("setReset");
			else if (sign === "=") this.$store.dispatch("setResurt");
			else if (sign == "DEL") this.$store.dispatch("setCaclAction");
			else this.$store.dispatch("setCaclAction", sign);
		},
	},
};
</script>

<style></style>
