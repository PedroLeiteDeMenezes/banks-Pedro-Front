import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3003/'
})


//Interceptor para adicionar o token nas requisições

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')//obtem o token do localStorage
    if(token){
      config.headers[`authorization`] = `bearer ${token}` //Adicionando o token ao cabeçalho
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance