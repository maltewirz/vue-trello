export function uuid () {
  return Math.random().toString(16).slice(2)
}

export function saveStatePlugin (store) {
  console.log('store inside saveStatePlugin', store)
  store.subscribe(
    (mutation, state) => localStorage.setItem('boards', JSON.stringify(state.boards))
  )
}
