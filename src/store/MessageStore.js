import {makeAutoObservable} from "mobx";

export default class MessageStore {
  constructor() {
    this._blackMessages = []
    this._whiteMessages = []
    this._isChanged = false
    makeAutoObservable(this)
  }

  toggleChanged() {
    this._isChanged = !this._isChanged
  }

  setBlackMessages(blackMessage) {
    this._blackMessages = blackMessage
  }

  setWhiteMessages(whiteMessage) {
    this._whiteMessages = whiteMessage
  }

  get blackMessages() {
    return this._blackMessages
  }

  get whiteMessages() {
    return this._whiteMessages
  }

  get isChanged() {
    return this._isChanged
  }
}