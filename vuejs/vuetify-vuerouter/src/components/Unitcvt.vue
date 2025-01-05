<template>
	<v-row align-self="center" class="d-flex justify-center">
		<v-col xs="8" sm="8" md="6" lg="6" xl="4">
			<div class="text-h3 my-8 text-center">
				本頁面施工中，敬請期待
			</div>
			
			<v-row>
				<v-col rols="4">
					<v-select class="mt-8" />
				</v-col>
				<v-col cols="8">
					<div />
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="10">
					<v-text-field label="From" />
				</v-col>
				<v-col cols="2">
					<v-select />
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="10">
					<v-text-field label="To" />
				</v-col>
				<v-col cols="2">
					<v-select />
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>
<script>
import { onMounted } from 'vue';
import unitCvtjson from "../assets/unitCvt.json"
export default {
	setup() {
		onMounted(() => {
			//this.unitTable=unitCvtjson
		})
	},
	data() {
		return {
			from: 0,
			to: 0,
			rate: 0,
			catograry: "",
			fromUnit: "",
			toUnit: "",
			unitTable: 0
		}
	},
	computed: {
		destValUpdate() {

		},
		CatogorytList() {

		},
		UnitList() {

		}
	}
}
</script>