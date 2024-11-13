// export default function Todo() {
//     return (
//         <h1>Todo</h1>
//     )
// }


// const Todo = ({task}) => {

//     return (
//         <div>
//             <li>Todo : {task}</li>
//         </div>
//     );
// };

// const Todo = ({task,isDone}) => {
//     console.log(task,isDone);

//     if(isDone){
//         return <li>Finished : {task}</li>
//     }else{
//         return <li>Work On : {task}</li>
//     }
// };

const Todo = ({ task, isDone }) => {
    if (isDone) {
        return <li>Finish : {task}</li>
    } return <li>Work On : {task}</li>
};


export default Todo;