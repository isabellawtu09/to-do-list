


import React, {useState} from 'react';


function Todo(){

    // variable and its setter function , the inital state of the array "tasks" is an empty array
    const[tasks, setTasks] = useState([]);
    //a variable that will hold the newTask's string
    const[newTask, setNewTask] = useState("");



    //handler functions to be called upon once an action has been taken 
    
    function handleInputChange(event){

        // will allow the text to be visible when inputting the text in the input box

        setNewTask(event.target.value);

    }


    function handleAddtask(){


        //verifying that the newTask to be added when stripped of any whitespace
        // is not still an empty string , since an empty task holds no text
        if(newTask.trim() != ""){
        setTasks(prevTask => [...prevTask, newTask]);
        setNewTask("");
        }

        

    }

    function handleTaskurgency(index){
        //we will move a task up if we determine it to be important and of urgency

        if(index > 0){

            const updatedTasks = [...tasks];
            //swapping index
            [updatedTasks[index] , updatedTasks[index - 1]] = 
                [updatedTasks[index - 1] , updatedTasks[index]];

            setTasks(updatedTasks);

        }



    }



    function handleTaskpostpone(index){


        // we will move a task down if we determine it to not be of great urgency in 
        //comparison to other tasks

        if(index < tasks.length - 1){

            const updatedTasks = [...tasks];
            //swapping index
            [updatedTasks[index] , updatedTasks[index + 1]] = 
                [updatedTasks[index + 1] , updatedTasks[index]];

            setTasks(updatedTasks);

        }


    }


    function handleRemovetask(index){

       const updateTasks =  tasks.filter((_ , i) => i !== index );
        setTasks(updateTasks);


    }



return(
    <div className = "todo-list">
        <h1>To-Do List</h1>

        {/* div element that contains our input and button elements */}

        <div>

            <input type = "text" placeholder = "Enter a task" value = {newTask}
                onChange = {handleInputChange}/>

            <button onClick = {handleAddtask} className = "addbutton" >Add Task</button>

        </div>


        {/* displaying the list of tasks */}


        <ol>
            {/* mappingo out each element into a list item in the ordered list  */}
            {/* react:  must add a key for each list element , which should be unique  */}

            {tasks.map((task, index) => <li key = {index} >
                
                {/* displaying text of element */}
                <span className = "text"> 
                    
                    {task} 
                 </span>
                    {/* button to remove task */}
                    {/* arrow function ensures function isnt called right away */}
                    <button onClick = { () =>handleRemovetask(index)} 
                    className = "delbutton">
                         Delete 
                    </button>

                    {/* button to move up task */}
                    <button onClick = { () => handleTaskurgency(index)} 
                    className = "moveupbutton">
                         ☝️
                    </button>


                    {/* button to move down task */}
                    <button onClick = {() => handleTaskpostpone(index)} 
                    className = "movedownbutton">
                         👇
                    </button>

                    
                
                    </li>)}
        </ol>

    </div>
);


}

export default Todo