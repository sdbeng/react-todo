// export const addTodo = (list, item) => {
//   return list.concat(item)
// }
//refactoring
export const addTodo = (list, item) => [...list, item]
