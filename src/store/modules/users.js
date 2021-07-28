import Axios from 'axios'
import { sortByLastNameAsc, sortByLastNameDesc, sortByZipcode, sortByUsername, sortByEmail } from '../../sortingAlgorithms.js'

const state = {
  users: [],
  mostRecentSortType: 'LastNameAsc',
  sortingTypes: [
    {
      title: 'Last Name Ascending',
      callback: sortByLastNameAsc,
      type: 'LastNameAsc'
    },
    {
      title: 'Last Name Descending',
      callback: sortByLastNameDesc,
      type: 'LastNameDesc'
    },
    {
      title: 'Zipcode',
      callback: sortByZipcode,
      type: 'ZipcodeAsc'
    },
    {
      title: 'Username',
      callback: sortByUsername,
      type: 'UsernameDesc'
    },
    {
      title: 'Email',
      callback: sortByEmail,
      type: 'EmailDesc'
    }
  ]
}

const getters = {
  userList: state => {
    return state.users
  },
  userCount: state => {
    return state.users.length
  },
  mostRecentSortType: state => {
    return state.mostRecentSortType
  },
  sortingTypes: state => {
    return state.sortingTypes
  }
}

const mutations = {
  refresh_user_array (state, users) {
    state.users = users
  },
  add_user (state, newUserData) {
    state.users.push(newUserData)
  },
  set_latest_sort_type (state, sortType) {
    state.mostRecentSortType = sortType
  },
  sort_users_array (state, sortType) {
    let callback
    state.sortingTypes.forEach(el => {
      if (el.type === sortType) {
        callback = el.callback
      }
    })

    state.users.sort(callback)
  }
}

const actions = {
  retrieveUsers ({ commit }) {
    return new Promise((resolve, reject) => {
      Axios.get(process.env.VUE_APP_USER_DATA_API_URL)
        .then(resp => {
          commit('refresh_user_array', resp.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  addUser ({ commit }, newUserData) {
    // wrapped in a Promise since in a live app this would POST to a backend
    return new Promise((resolve, reject) => {
      commit('add_user', newUserData)
      resolve('Success')
    })
  },
  sortUsers ({ commit }, sortType) {
    commit('sort_users_array', sortType)
    commit('set_latest_sort_type', sortType)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
