<template>
	<v-list-item>
		<v-list-item-content>
			<v-list-item-title>
				{{ content }}
			</v-list-item-title>
		</v-list-item-content>
		<v-list-action>
			<v-btn class="ma-2" color="green-darken-4"icon="mdi-pencil" size="x-small" @click="editElement()"></v-btn>
			<v-btn class="ma-2" color="red-darken-4" icon="mdi-delete" size="x-small" @click="deleteElement()"></v-btn>
		</v-list-action>
	</v-list-item>
</template>
<script>
export default{
	props:{
		idx:{
			type:Number,
			required: true
		},
		content:{
			type:String,
			required :true
		}
	},
	data(){
		return{
			input :""
		}
	},
	methods:{
		editElement(){
			let box={}
			box.idx=this.idx
			box.input=this.input
			this.emit("editContent",box)
		},
		deleteElement(){
			this.$emit("deleteContent",this.idx)
		}
	}
}
</script>
<style>
</style>