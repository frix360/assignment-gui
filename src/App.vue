<template>
  <div id="app">
    <div class="container">


      <div class="row align-items-center justify-content-center">
        <div class="col-lg-4 col-lg-offset-4">
          <div class="form-group">
            <label for="elementsCount">Elements count </label>
            <input id="elementsCount" type="number" class="form-control" v-model="elementsCount"
                   placeholder="Elements count">
          </div><!-- /input-group -->
        </div><!-- /.col-lg-4 -->
      </div><!-- /.row -->
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-4 col-lg-offset-4">
          <div class="form-group">
            <label for="randFrom">From </label>
            <input id="randFrom" type="number" class="form-control" v-model="randFrom" placeholder="Number from">
          </div><!-- /input-group -->
        </div><!-- /.col-lg-4 -->
      </div><!-- /.row -->
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-4 col-lg-offset-4">
          <div class="form-group">
            <label for="randTo">To </label>
            <input id="randTo" type="number" class="form-control" v-model="randTo" placeholder="Number to">
          </div><!-- /input-group -->
        </div><!-- /.col-lg-4 -->
      </div><!-- /.row -->


      <div class="py-3">
        <button class="btn btn-primary" @click="generateArray">Generate array</button>
      </div>

      <div  style="overflow: auto">
        <table class="table">
          <tr>
            <th v-for="index in this.elements.length" :key="index">{{ index }}</th>
          </tr>

          <tr>
            <td v-for="(value, index) in this.elements" :key="index">{{ value }}</td>
          </tr>
        </table>
      </div>

      <div class="py-3">
        <scatter-chart :data="this.formatData()" xtitle="Index" ytitle="Value"></scatter-chart>
      </div>

    </div>
  </div>
</template>

<script>

  import Random from 'random-js'

  export default {
    name: 'app',
    data() {
      return {
        elementsCount: 5,
        elements: [],
        randFrom: 1,
        randTo: 100
      }
    },
    methods: {
      generateArray() {
        this.elements = [];
        const r = new Random();
        for (let i = 0; i < this.elementsCount; i++) {

          this.elements[i] = r.integer(this.randFrom, this.randTo);

        }
      },

      formatData() {
        let array = [];

        for (let i = 0; i < this.elements.length; i++) {
          let subArray = [
            i,
            this.elements[i]
          ];
          array.push(subArray);
        }

        return array;
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
