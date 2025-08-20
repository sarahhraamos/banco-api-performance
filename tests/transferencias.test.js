import http from 'k6/http'
import { getBaseURL } from '../utils/variaveis.js'
import { sleep, check } from 'k6'
import { getToken } from '../helpers/autenticacao.js'

export const options = {
  iterations: 1
};

export default function () {
  const token = getToken()

  const url = getBaseURL() + '/transferencias'

  const payload = JSON.stringify({
    contaOrigem: 1,
    contaDestino: 2,
    valor: 11,
    token: ""
  })

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
  }

  let res = http.post(url, payload, params)

  check(res, {
    'Validar que o status é 201': (r) => r.status === 201
  })

  sleep(1)
}
