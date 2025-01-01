<template>
  <v-app>
    <v-app-bar :elevation="2" color="brown-darken-4">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>My notebook</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row justify="center">
        <v-col cols="12" xs="12" sm="8" md="8" lg="6" xl="6">
          <v-sheet>
            <v-container>
              <v-row>
                <v-col cols="10">
                  <v-text-field label="請輸入要新增的筆記" v-model="input"></v-text-field>
                </v-col>
                <v-col cols="2">
                  <v-btn size="large" @click="addnote()" color="blue-darken-4">
                    送出
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
            <v-list>
              <note v-for="(item,index) in notes" 
              :content="item" 
              :idx="index" 
              @editContent="editContent($event)" 
              @deleteContent="deleteContent($event)"
            />
            </v-list>
          </v-sheet>
        </v-col>
      </v-row>
      </v-container>
    </v-main>

  </v-app>
</template>

<script >
import note from './components/note.vue'
  export default{
    components:{
      note
    },
    data(){
      return{
        notes :[],
        input : ""
      }
    },
    methods:{
      addnote(){
        this.notes.push(this.input)
        console.log(this.notes)
      },
      editContent(props){
        this.notes[props.idx]=props.input
      },
      deleteContent(props){
        this.notes.splice(props,1);
      }
    }
  }
</script>
<style>

</style>