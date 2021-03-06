import {getUrl, postUrl} from '../api'
import {
  REQ_DOG_MESSAGE,
  REQ_SURPRISE,
  REQ_DOG_FOODS,
  REQ_CLASSIFY,
  REQ_VERIFICATION_CODE,
  REQ_LOGIN,
  REQ_ALL_GOODS
} from './types'

export default {
  reqDogMessage ({commit}, callback) {
    getUrl('/api/dog')
      .then((response) => {
        const result = response.data
        if (result.code === 0) {
          const dogs = result.data
          commit(REQ_DOG_MESSAGE, {dogs})
          callback && callback()
        }
      })
  },
  reqSurprise ({commit}) {
    getUrl('/api/surprise')
      .then((response) => {
        const result = response.data
        if (result.code === 0) {
          const surprise = result.data
          commit(REQ_SURPRISE, {surprise})
        }
      })
  },
  reqDogFoods ({commit}, callback) {
    getUrl('/api/dogFoods')
      .then((response) => {
        const result = response.data
        if (result.code === 0) {
          const dogFoods = result.data
          commit(REQ_DOG_FOODS, {dogFoods})
          callback && callback()
        }
      })
  },
  reqClassify ({commit}, callback) {
    getUrl('/api/classify')
      .then((response) => {
        const result = response.data
        if (result.code === 0) {
          const classify = result.data
          commit(REQ_CLASSIFY, {classify})
          callback && callback()
        }
      })
  },
  reqVerificationCode ({commit}, phone) {
    getUrl('/api/sendcode?phone='+phone)
      .then(request => {
        let users = request.data
        console.log(users);
        commit(REQ_VERIFICATION_CODE, {users})
      })
      .catch(error => {
        console.log(error);
      })
  },
  reqLogin ({commit}, users) {
    postUrl('/api/login', {
      phone: users.phone,
      code: users.code
    })
      .then(request => {
        let data = request.data
        commit(REQ_LOGIN, {data})
      })
      .catch(error => {
        console.log(error);
      })
  },
  reqAllGoods ({commit}, callback) {
    getUrl('/api/allGoods')
      .then(response => {
        const result = response.data
        if (result.code === 0) {
          const allGoods = result.data
          commit(REQ_ALL_GOODS, {allGoods})
          callback && callback()
        }
      })
      .catch(error => {
        console.log(error);
      })
  }
}
