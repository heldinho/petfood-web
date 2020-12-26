import { takeLatest, all, call, put } from 'redux-saga/effects'
import types from './types'
import api from '../../../services/api'
import { setPetshops } from './actions'

export function* requestPetshops() {
  const { data } = yield call(api.get, '/petshops')
  yield put(setPetshops(data.petshops))
}

export default all([takeLatest(types.REQUEST_PETSHOPS, requestPetshops)])
