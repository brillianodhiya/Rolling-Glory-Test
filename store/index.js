import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            gift: {}
        },
        mutations: {
            setGift (state, data) {
                state.gift = data
            }
        }
    })
}

export default createStore