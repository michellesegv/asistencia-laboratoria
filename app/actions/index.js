import {
  SIGN_IN_CONFIRM,
  MARK_ASSISTANCE
} from './types'

export const signInConfirm = (user) => {
  return {
    type: SIGN_IN_CONFIRM,
    payload: user
  }
}

export const markAssistance = (value) => {
  return {
    type: MARK_ASSISTANCE,
    payload: value
  }
}

