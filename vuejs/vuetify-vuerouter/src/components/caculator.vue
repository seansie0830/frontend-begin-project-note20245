<template>
	<v-sheet>
		<v-row align-self="center" class="d-flex justify-center">
			<v-col xs="12" sm="10" md="8" lg="6" xl="6" xxl="5">
				<v-text-field v-model="expression" reverse class="mt-6" />
				<cacuBtn @key-pressed="updateExpression($event)" />
			</v-col>
		</v-row>
	</v-sheet>
</template>
<script>
import cacuBtn from './cacuBtn.vue';
import { evaluate } from 'mathjs'; // Import the evaluate function specifically
export default {
	components: {
		cacuBtn
	},
	data() {
		return {
			expression: ""
		}
	},
	methods: {
		updateExpression(props) {
			if (props === "AC") {
				this.expression = ""
			}
			else if (props === "=") {
				this.expression = String(this.safeEvaluate(this.expression))
			}
			else {
				this.expression = this.expression.concat(props)
			}

		},
		safeEvaluate(expression) {
			try {
				const result = evaluate(expression);
				return result;
			} catch (error) {
				console.error("Evaluation error:", error);
				return "error";
			}
		}
	}
}
</script>
