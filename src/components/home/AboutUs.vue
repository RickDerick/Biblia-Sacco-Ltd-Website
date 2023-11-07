<template>
    <v-card elevation="0" class="mx-auto mt-15" flat>
      <v-container fluid>
        <v-row>
          <v-col cols="4" v-for="item in items" :key="item.title">
            <v-card>
              <v-img
                :src="item.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="item.title"></v-card-title>
              </v-img>
            </v-card>
          </v-col>
  
          <v-col cols="8">
            <v-card>
              <v-card-title class="text-h5">Who We Are</v-card-title>
              <v-card-text>
                <div class="text--primary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor sem eu justo vestibulum, ac vestibulum lorem aliquet. Fusce ultrices id justo nec elementum. Integer viverra id justo eu vestibulum. Nullam fringilla euismod lectus, vel lacinia ligula scelerisque in. In auctor, ligula eu vestibulum pharetra, augue ex fringilla nisi, eget auctor nisl eros non lorem. Nullam vehicula eleifend metus in cursus. Sed pellentesque, turpis eget hendrerit ultricies, felis elit tincidunt elit, quis ultrices felis elit ac elit. Sed sed pharetra dui, nec tincidunt ante. Proin in luctus nunc. Nullam nec erat non est dignissim tincidunt.
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
          <v-row>
            <v-col cols="3" v-for="item in items" :key="item.title">
              <v-card>
                <v-img
                  :src="item.src"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                  <v-card-title v-text="item.title"></v-card-title>
                </v-img>
              </v-card>
            </v-col>
            <v-col cols="3" v-for="item in items" :key="item.title">
              <v-card>
                <v-img
                  :src="item.src"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                  <v-card-title v-text="item.title"></v-card-title>
                </v-img>
              </v-card>
            </v-col>
            <v-col cols="3" v-for="item in items" :key="item.title">
              <v-card>
                <v-img
                  :src="item.src"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                  <v-card-title v-text="item.title"></v-card-title>
                </v-img>
              </v-card>
            </v-col>
            <v-col cols="3" v-for="item in items" :key="item.title">
              <v-card>
                <v-img
                  :src="item.src"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                  <v-card-title v-text="item.title"></v-card-title>
                </v-img>
              </v-card>
            </v-col>
          </v-row>

  
        <v-card elevation="0" class="mx-auto mt-10" flat>
          <v-card-title>Core Values</v-card-title>
          <v-card-text>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor sem eu justo vestibulum, ac vestibulum lorem aliquet. Fusce ultrices id justo nec elementum. Integer viverra id justo eu vestibulum. Nullam fringilla euismod lectus, vel lacinia ligula scelerisque in. In auctor, ligula eu vestibulum pharetra, augue ex fringilla nisi, eget auctor nisl eros non lorem. Nullam vehicula eleifend metus in cursus. Sed pellentesque, turpis eget hendrerit ultricies, felis elit tincidunt elit, quis ultrices felis elit ac elit. Sed sed pharetra dui, nec tincidunt ante. Proin in luctus nunc. Nullam nec erat non est dignissim tincidunt.
            </div>
          </v-card-text>
        </v-card>
      </v-container>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'AboutUs',
    data: () => ({
      items: [
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
        // You can add more items to the "items" array if needed
      ],
    }),
  }
  </script>
  