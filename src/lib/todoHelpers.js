// export const addTodo = (list, item) => {
//   return list.concat(item)
// }
//refactoring
export const addTodo = (list, item) => [...list, item]

//generate a randdom id number
export const generateId = () => Math.floor(Math.random()*100000)
