console.log("app.js is running");

//JSX - JS XML 

const appObject = {
    title:"Indecision App!",
    options:[]
}

const onFormSubmit = (e) =>{
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if(option){
        appObject.options.push(option);
        e.target.elements.option.value = '';
        FormClickApp();
    }
};
const RemoveAll = ()=>{
    appObject.options = [];
    FormClickApp();
};

const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * appObject.options.length);
    const option = appObject.options[randomNum];
    alert(option);
};
let appRoot = document.getElementById('app');

const FormClickApp = () =>{
    const template = (
        <div>
            <h1>{appObject.title}</h1>
            {appObject.subtitle && <p>{appObject.subtitle}</p>}
            <p>{appObject.options.length > 0 ? "Here are your options":"No options"}</p>
            <button disabled={appObject.options.length == 0} onClick = {onMakeDecision}>What should I do</button>
            <button onClick = {RemoveAll}> Remove All</button>
            <ol>
                {
                    appObject.options.map((option) =>{
                        return <li key = {option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit = {onFormSubmit} >  
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            
        </div>
        );

    ReactDOM.render(template,appRoot); 

};

FormClickApp();
/*
let user ={
    name: "CHENG",
    age: 24, 
    location: " Houston"
};
function getLocation(location){
    if(location)
        return <p>Location:{location}</p>;
}

const template2 = (
    <div>
        <h1>{user.name? user.name : 'Anonymous'}</h1> 
        {(user.age && user.age >= 18) && <p>Age:{user.age}</p>}
        {getLocation(user.location)}
    </div>
)*/
/*
const myid = "my-id"; 
let count = 0;
const addOne = () =>{
    count = count + 1;
    renderCounterApp();
};

const minusOne = () =>{
    count --;
    renderCounterApp();
}
const reset = ()=>{
    count = 0;
    renderCounterApp();
}



let appRoot2 = document.getElementById('app2');
//ReactDOM.render(template,appRoot); // render jsx 到 id所在的地方
//ReactDOM.render(template2,appRoot2);
//


const renderCounterApp = () =>{
    const templateTwo = (  //this is an object
        <div>
            <h1>Count:{count}</h1>
            <button id={myid} className = "button" onClick={addOne}>+1</button>
            <button onClick = {minusOne}> -1 </button>
            <button onClick = {reset}> Reset </button>
        </div>
    );

    ReactDOM.render(templateTwo,appRoot2);
};

renderCounterApp();*/