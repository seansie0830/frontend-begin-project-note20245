<template>
	<div>
		<v-row v-for="(row, rowIndex) in rows" :key="rowIndex" class="mx-0">
			<v-col v-for="(item, colIndex) in row" :key="colIndex" cols="3" class="my=0">
				<v-btn block style="height: 50px;" class="ma-1" @click="upSendKey(item)">
					<div class="text-h6">
						{{ item }}
					</div>
				</v-btn>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
	data() {
		return {
			symbol: ['(', ')', '%', 'AC', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+']
		};
	},
	computed: {
		rows() {
			const result = [];
			for (let i = 0; i < this.symbol.length; i += 4) {
				result.push(this.symbol.slice(i, i + 4));
			}
			return result;
		}
	},
	methods: {
		upSendKey(keyName) {
			console.log("keySent")
			this.$emit("keyPressed", keyName);
		}
	}
};
</script>