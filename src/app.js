const obj = {
    name:'vikima',
    getName(){
        return this.name;
    }
};
let name = obj.getName();
let name2 = obj.getName.bind({name:'sdf'});
console.log(name2());

class IndecisionApp extends React.Component{
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hand of a computer';
        const options = ['Thing one', 'Thing Two'];
        return (
            <div>
                <Header title= {title} subtitle = {subtitle}/>
                <Action/>
                <Options options = {options}/>
                <AddOptions/>
            </div>
        )
    }
}
class Header extends React.Component { 
    render(){
        return (
            <div>
                <h1> {this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    handlePick(){
        alert("sdf");
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}> What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component{
    constructor(props){
        super(props);
        this.RemoveAll = this.RemoveAll.bind(this);//只bind一次
    }
    RemoveAll(){
        console.log(this.props.options);
        alert("remove");
    }
    render(){
        return (
            <div>
            {
                this.props.options.map((option) =>
                <Option key={option} optionText={option}/>)
            }
                <button onClick = {this.RemoveAll}> RemoveAll</button>
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return (
            <div>
                <p>{this.props.optionText}</p>
            </div>
        )
    }
}

class AddOptions extends React.Component{
    AddOptions(e){
        e.preventDefault();

        const value = e.target.elements.option.value.trim();
        

        if(value)
            alert(value);
    }
    render(){
        return (
            <div>
                <form onSubmit = {this.AddOptions}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
                
            </div>
        );
    }
}
const jsx = (
    <div>
        <Header/>
        <Action/>
        <Options/>
        <AddOptions/>
    </div>
)
//ReactDOM.render(jsx,document.getElementById('app'));
ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));