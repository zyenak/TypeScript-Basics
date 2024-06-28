// Define the Task interface
interface Task {
    id: number;            
    title: string;         
    description: string;   
    completed: boolean;    
    dueDate?: Date;      //optional
}

// Define type aliases
type TaskUpdate = Partial<Task>;  //All properties optional
type ReadOnlyTask = Readonly<Task>;
type TaskSummary = Pick<Task, 'id' | 'title' | 'completed'>;  // Pick some properties


// Create Task function
const createTask = (id: number, title: string, description: string, dueDate?: Date): Task => {
    return {
        id,
        title,
        description,
        completed: false,
        dueDate
    };
}
const task1 = createTask(1, "Task 1", "This is the first task", new Date("2023-12-31"));
console.log("Task created:", task1);


// Update Task function
const updateTask = (task: Task, updates: TaskUpdate): Task => {
    return { ...task, ...updates };  // (merges task and updates and follows return type Task)
}
const updatedTask1 = updateTask(task1, { description: "Updated description", dueDate: new Date("2024-01-15") });
console.log("Updated Task:", updatedTask1);


// Readonly task marked true
const markAsComplete = (task: Task): ReadOnlyTask => {
    return { ...task, completed: true } as ReadOnlyTask;
}
const completedTask1 = markAsComplete(updatedTask1);
console.log("Completed Task:", completedTask1);



// Return TaskSumary 
function getTaskSummary(task: Task): TaskSummary {
    const { id, title, completed } = task;  //destructure
    return { id, title, completed };
}
const taskSummary1 = getTaskSummary(completedTask1);
console.log("Task Summary:", taskSummary1);
