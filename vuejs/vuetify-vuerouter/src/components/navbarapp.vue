<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-toolbar-title>萬用工具箱</v-toolbar-title>
    <v-spacer />
    <v-text-field prepend-inner-icon="mdi-magnify" label="搜尋..." variant="outlined" class="ma-4"/>
    <v-btn icon>
      <v-icon>mdi-flash</v-icon>
    </v-btn>

    <v-menu>
      <template #activator="{ props }">
        <v-btn icon v-bind="props">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in configs" :key="index" :value="item" :to="item.title">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary>
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index" :value="item" link :to="item.title">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: '簡易計算機' },
        { title: '單位換算' },
        { title: '簡易筆記本' },
        { title: "隨機密碼產生器" },
        { title: "井字遊戲" }
      ],
      configs: [
        { title: "設定" },
        { title: "關於本站" }
      ]
    }
  },
}
</script>