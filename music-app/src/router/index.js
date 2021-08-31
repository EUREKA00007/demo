import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Search from '@/pages/search/Search'
import Login from '@/pages/login/Login'
import Song from '@/pages/song/Song'
import Playlist from '@/pages/Playlist/Playlist'
import Djradio from '@/pages/djradio/Djradio'
import Artist from '@/pages/artist/Artist'
import Album from '@/pages/album/Album'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/song/:id',
      name: 'Song',
      component: Song
    },
    {
      path: '/playlist/:id',
      name: 'Playlist',
      component: Playlist
    },
    {
      path: '/djradio/:id',
      name: 'Djradio',
      component: Djradio
    },
    {
      path: '/artist/:id',
      name: 'Artist',
      component: Artist
    },
    {
      path: '/album/:id',
      name: 'Album',
      component: Album
    },


  ]
})
