<template>
	<v-row align-self="center" class="d-flex justify-center">
		<v-col xs="9" sm="9" md="7" lg="7" xl="5">
			<v-text-field v-model="input" class="mt-8" />
		</v-col>
		<v-col cols="1">
			<v-btn block style="height: 50px;" class="mt-8" @click="addNote">
				送出
			</v-btn>
		</v-col>
		<v-col xs="10" sm="10" md="8" lg="8" xl="6">
			<v-list>
				<eventEle v-for="(item, index) in notes" :content="item" :idx="index"
					@delete-event="deleteNote($event)" />
			</v-list>
		</v-col>
	</v-row>
</template>
<script>
import eventEle from './eventEle.vue';
export default {
	components: {
		eventEle
	},
	data() {
		return {
			notes: [],
			input: "",
			notesToShow: []
		}
	},
	methods: {
		addNote() {
			this.notes.push(this.input)
		},
		editNote() {

		},
		deleteNote(props) {
			this.notes.splice(props, 1)
		},
		searchNotes() {

		}
	}
}
</script>