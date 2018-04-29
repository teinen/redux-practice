import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBLITY_FILTER,
  VisiblityFilters
} from './actions'

const SHOW_ALL = VisiblityFilters

function visiblityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBLITY_FILTER:
      return action.filter

    default:
      return state
  }
}

function todo(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        }
      ]

    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if(index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          })
        }
      })

    default:
      return state
  }
}

const todoApp = combineReducers({
  visiblityFilter,
  todo
})

export default todoApp