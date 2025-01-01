<template>
<li class="list-group-item">
	<div class="row">
		<div class="col-10">
		{{ noteObj }}
		</div>
		<div class="col-1">
			<button class="btn btn-success m" v-on:click="editing()" >
				<i class="bi bi-pencil-square"></i>
			</button>
		</div>
		<div class="col-1">
			<button class="btn btn-danger m" @click="deleting()">
				<i class="bi bi-x-square"></i>
			</button>
		</div>
	</div>
	<br>
	<div class="row" v-if="showInputBox">
		<div class="form-floating mb-3 col-11">
		<input type="email" class="form-control" id="floatingInput" v-model="editContent">
		<label for="floatingInput">請輸入修改過的數值</label>
		</div>
		<div class="col-1">
			<button class="btn btn-primary" v-on:click="edited()">
				<i class="bi bi-check"></i>
			</button>
		</div>
	</div>
	<div class="row">
		<small>{{ noteObj.time }}</small>
	</div>
</li>
</template>
<script>
export default{
	props:{
		noteObj:{
			type:String,
			required: true
		},
		noteIdx:{
			type:Number,
			required: true
		}
	},
	data(){
		return{
			showInputBox :false,
			errorPrompt :false,
			input: "",
			editContent: ""
		}
	},
	methods:{
		edited(){
			let upSend={}
			console.log("edited() executed")
			this.showInputBox=false
			upSend.editContent=this.editContent
			upSend.id=this.noteIdx
			this.$emit("modify",upSend);
			
		},
		editing(){
			this.showInputBox=true;
		},
		deleting(){
			this.$emit("delete",this.noteIdx)
		}
	}
}
</script>

<style>

</style>