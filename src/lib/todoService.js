const baseUrl = 'http://localhost:8083/todos'

export const loadTodos = () => {
  return fetch(baseUrl)
    .then(res => res.json())
}
