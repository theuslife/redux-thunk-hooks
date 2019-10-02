import { store } from '../'

function thunkDispatch(action) {

    store.dispatch(async (dispatch) => {

        //Async code here...
        return dispatch(action)
    })

}

export const getAsyncCep = (type) => {

    fetch('https://viacep.com.br/ws/01001000/json')
        .then((res) => res.json())
        .then(({ cep }) => {

            return thunkDispatch({ type, payload: cep })

        }).catch((err) => console.log('erro'))

}