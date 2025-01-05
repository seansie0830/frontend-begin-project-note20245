<template>
	<v-row align-self="center" class="d-flex justify-center">
		<v-col xs="12" sm="10" md="8" lg="6" xl="6" xxl="6">
			<v-card class="ma">
				<v-card-title class="text-center">
					{{ newPWD }}
				</v-card-title>
				<v-card-subtitle class="text-center"> the generated password </v-card-subtitle>
			</v-card>
			<h4 class="justify-center my-10">Generation Setting</h4>
			<v-row>
				<v-col cols="10">
					<v-slider v-model="length" max="30" min="8" step="1" label="長度" />
				</v-col>
				<v-col cols="2">
					<v-text-field v-model="length" />
				</v-col>
			</v-row>
			<v-checkbox v-for="(value, key) in constraint" v-model="constraint[key]" :label="key" />
			<v-btn block @click="genPassWord()" class="my-10"> Generate </v-btn>
		</v-col>
	</v-row>
</template>
<script>
export default {
	data() {
		return {
			length: 0,
			constraint: {
				symbols: true,
				numbers: true,
				UpperCase: true,
				LowerCase: true,
			},
			newPWD: "12345678",
		};
	},
	methods: {
		genPassWord() {
			let length = this.length;
			let chars = "";
			if (this.constraint.UpperCase) {
				chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			}
			if (this.constraint.LowerCase) {
				chars += "abcdefghijklmnopqrstuvwxyz";
			}
			if (this.constraint.numbers) {
				chars += "0123456789";
			}
			if (this.constraint.symbols) {
				chars += "!@#$%^&*()_-+={}[]|;:'\",.<>/?";
			}
			chars = [...new Set(chars.split(''))].join('');
			let password = "";
			for (let i = 0; i < length; i++) {
				const randomIndex = Math.floor(Math.random() * chars.length);
				password += chars[randomIndex];
			}
			console.log("the password is" + password);
			this.newPWD = password;
		},
	},
};
</script>
