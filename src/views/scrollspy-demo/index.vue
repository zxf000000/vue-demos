<template>
  <b-container fluid>
    <b-row class="d-flex justify-center">
      <b-col cols="4">
        <div id="listgroup-ex" style="position:relative; top: 10px; overflow-y:auto; width: 200px">
          <h4 id="list-item-1">Item 1</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-2">Item 2</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-3">Item 3</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-4">Item 4</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-5">Item 5</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-6">Item 6</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-7">Item 7</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-8">Item 8</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-9">Item 9</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-10">Item 10</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-11">Item 11</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-12">Item 12</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-13">Item 13</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-14">Item 14</h4>
          <p>{{ text }}</p>
        </div>
      </b-col>
      <b-col cols="4" style="position: sticky; top: 10px">
        <b-list-group v-b-scrollspy="{element: 'body', offset: 50}" style="position: sticky; top: 10px">
          <b-list-group-item href="#list-item-1">Item 1</b-list-group-item>
          <b-list-group-item href="#list-item-2">Item2</b-list-group-item>
          <b-list-group-item href="#list-item-3">Item 3</b-list-group-item>
          <b-list-group-item href="#list-item-4">Item 4</b-list-group-item>
          <b-list-group-item href="#list-item-5">Item 5</b-list-group-item>
          <b-list-group-item href="#list-item-6">Item 5</b-list-group-item>
          <b-list-group-item href="#list-item-7">Item 6</b-list-group-item>
          <b-list-group-item href="#list-item-8">Item 7</b-list-group-item>
          <b-list-group-item href="#list-item-9">Item 8</b-list-group-item>
          <b-list-group-item href="#list-item-10">Item 9</b-list-group-item>
          <b-list-group-item href="#list-item-11">Item 10</b-list-group-item>
          <b-list-group-item href="#list-item-12">Item 11</b-list-group-item>
          <b-list-group-item href="#list-item-13">Item 12</b-list-group-item>
          <b-list-group-item href="#list-item-14">Item 13</b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
    <div style="height: 800px; background: blue">
    </div>
  </b-container>
</template>

<script>
export default {
  name: "ScrollspyDemo",
  data() {
    return {
      text: `
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
          consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
          laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
          Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
          nisi sit est tempor laborum mollit labore officia laborum excepteur
          commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
          ipsum commodo tempor sunt in proident.
        `
    }
  }
}
</script>

<style scoped>

.container {
  width: 100%;
  background: gray;
}

span {
  color: black;
  font-size: 20px;
  font-weight: bold;
}

#list1 {
  position: sticky;
  top: 0;
}

.scroll {
}

.list-group-item.active {
  background-color: blue;
}

</style>
