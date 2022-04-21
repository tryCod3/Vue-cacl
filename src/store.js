import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		resurt: "0",
		caclAction: "",
	},
	getters: {
		getResurt(state) {
			return state.resurt;
		},
		getCaclAction(state) {
			return state.caclAction;
		},
	},
	mutations: {
		SET_resurt(state) {
			try {
				state.resurt = String(eval(state.caclAction || 0));

				state.caclAction = state.resurt;
			} catch (e) {
				state.resurt = state.caclAction + " is not a Math!";
				state.caclAction = "0";
			}
		},
		SET_CaclAction(state, payload) {
			state.caclAction += payload;
		},
		SET_DelAction(state) {
			if (state.caclAction.length > 0) {
				state.caclAction = state.caclAction.substring(
					0,
					state.caclAction.length - 1
				);
			}
		},
		SET_Reset(state) {
			state.resurt = 0;
			state.caclAction = "";
		},
	},
	actions: {
		setResurt({ commit }) {
			commit("SET_resurt");
		},
		setCaclAction({ state, commit }, payload) {
			if (state.resurt === "Infinity") {
				commit("SET_Reset");
			}
			if (!payload) commit("SET_DelAction");
			else commit("SET_CaclAction", payload);
		},
		setReset({ commit }) {
			commit("SET_Reset");
		},
	},
});

export default store;
