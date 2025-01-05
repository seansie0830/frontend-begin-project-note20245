<template>
	<v-list-item>
		<v-row>
			<v-col cols="10">
				<v-list-item-title>
					{{ content }}
				</v-list-item-title>
			</v-col>
			<v-col cols="2">
				<v-btn icon>
					<v-icon>mdi-pencil</v-icon>
				</v-btn>
				<v-btn>
					<v-icon @click="emitDelEl(idx)">
						mdi-delete
					</v-icon>
				</v-btn>
			</v-col>
		</v-row>
	</v-list-item>
</template>
<script>
export default {
	props: {
		content: {
			type: String,
			required: true
		},
		idx: {
			type: Number,
			required: true
		}
	},
	data() {
		return {
			input: ""
		}
	}
	, methods: {
		emitDelEl(idx) {
			this.$emit("deleteEvent", idx)
		},
		emitEditEl(contnet, idx) {

		},
		showEdit() {

		}
	}
}
</script>