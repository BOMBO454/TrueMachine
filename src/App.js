import React from 'react'
import Router from './Pages/Router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import "./styles/styles.scss"

const initialState = {
    friends: [1, 2, 3],
    friendsById: {
        1: {
            id: 1,
            name: 'Theodore Roosevelt'
        }
    }
}

function initState(state = initialState, action) {
    switch (action.type) {
        case 'ADD_NOTE':
            const newId = state.friends[state.friends.length-1] + 1
            return {
                friends: state.friends.concat(newId),
                friendsById: {
                    ...state.friendsById,
                    [newId]: {
                        id: newId,
                        name: action.name
                    }
                }
            }

        default:
            return state
    }
}

const store = createStore(initState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
    console.log('subscribe123', store.getState())
})

store.dispatch({type: 'ADD_MUSIC', payload: 'hello1'})
store.dispatch({type: 'ADD_MUSIC', payload: 'hello2'})

store.dispatch({type: 'ADD_MUSIC', payload: 'hello3'})

function App() {
    return (
        <div>
            <Provider store={store}>
                <Router/>
                {console.log(store)}
            </Provider>
        </div>
    )
}

export default App
