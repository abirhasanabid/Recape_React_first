
// const Todo = ({task}) => {
//     return (
//         <div>
//             <li>Todo : {task}</li>
//         </div>
//     );
// };

//consditional rendaring option : 1
/* const Todo = ({task,isDone}) => {
    if(isDone){
        return <li>Finished : {task}</li>
    }else{
        return <li>Work On : {task}</li>
    }
}; */

//consditional rendaring option : 2
/* const Todo = ({ task, isDone }) => {
    if (isDone) {
        return <li>Finish : {task}</li>
    } return <li>Work On : {task}</li>
};
 */

 //consditional rendaring option : 3
const Todo = ({ task, isDone }) => {
    return (
        <li>{isDone ? 'Finished' : 'Word On'}: {task}</li>
    )
};


export default Todo;