import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Firebase from 'firebase'
Vue.use(Vuex)

/*persistencia
import createPersistedState from 'vuex-persistedstate'
const store = new Vuex.Store({
  plugins: [createPersistedState()],
});
persistencia*/

export default new Vuex.Store({
  state: {
    shows: [],
    favs: [],
  },
  mutations: {
    SET_SHOWS(state, shows) {
      state.shows = shows
    },
    MAKE_LIKE(state, data) {
      let indice = data[0]
      let ID = data[1]
      let shows = state.shows[indice]
      shows.Id = ID
      shows.like = true
    },
    DELETE_LIKE(state, i) {
      state.shows[i].like = false
    },
    SET_FAVS(state, favs) {
      state.favs = favs
    },
  },
  actions: {
    setShows({ commit }, shows) {
      commit('SET_SHOWS', shows)
    },
    setFavs({ commit }, favs) {
      commit('SET_FAVS', favs)
    },
    makeLike({ commit, state, dispatch }, id) {
      let poster = state.shows.find((s) => s.id == id)
      let payload = {
        email: 'usuario@gmail.com',
        favoritos: {
          postersFavoritos: [
            poster
          ]
        }
      };
      axios.post('https://us-central1-pacientes-4d4bb.cloudfunctions.net/usuarios/usuario', payload).then((data) => {
        console.log(data)
      })
      /*let payload = state.shows.find((s) => s.id == id)
      payload.like
        ? dispatch('deleteLike', payload)
        : axios.post('https://us-central1-pacientes-4d4bb.cloudfunctions.net/usuarios/usuario', payload).then((data) => {
            state.shows.forEach((s, index) => {
              s.id === id ? commit('MAKE_LIKE', [index, data.data]) : false
            })
          })*/
        },
    deleteLike({ commit, state }, data) {
      let indiceShows = state.shows.indexOf(data)
      console.log(state.favs)
      let ID = (state.favs.find( f => f.data.id === data.id)).id
      axios.delete('https://us-central1-apirest-808ed.cloudfunctions.net/posters/poster/' + ID).then(() => {
        commit('DELETE_LIKE', indiceShows)
      })
    },
  },
  modules: {},
})
