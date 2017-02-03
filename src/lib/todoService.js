const baseUrl = 'http://localhost:8083/todos'

export const loadTodos = () => {
  return fetch(baseUrl)
    .then(res => res.json())
}

//save data to server
export const createTodo = (todo) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  }).then(res => res.json())
}
