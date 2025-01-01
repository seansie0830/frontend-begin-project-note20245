<template>
<h3>my notebook system</h3>
<br>
<div class="row m-5" style="width: 800px;">
  <div class="col-10">
    <div class="form-floating mb-3">
    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="input">
    <label for="floatingInput">筆記內容</label>
</div>
  </div>
  <div class="col-2">
    <button class="btn btn-primary" @click="addNewNote()">
      送出
    </button>
  </div>
</div>
<br>
<div class="row">
  <div class="list-group">
    <note v-for="(item,index) in notes" @modify="editNote($event)" :noteObj="item" :noteIdx="index" @delete="deleteNote()"></note>
  </div>
</div>

</template>

<style>
</style>

<script>
import note from './components/note.vue';

export default {
  components: {
    note 
  },
  data(){
    return{
      notes: [],
      input : ""
    }
  },
  methods:{
    addNewNote(){
      this.notes.push(this.input)
    },
    deleteNote(prop){
      this.notes.splice(prop,1)
    },
    editNote(prop){
      console.log(prop)
      this.notes[prop.id]=prop.editContent;
    }
  }
}
</script>