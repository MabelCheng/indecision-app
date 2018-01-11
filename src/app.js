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
    constructor(props){
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    };

    handleDeleteOptions(){
        this.setState(()=>{
            return {
                options : []
            }
        });
    };
    
    handlePick(){
        this.setState(()=>{
            let randomNum = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[randomNum]);
        });
    };

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add iten';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exist';
        }
        this.setState((preState)=>{
            return{
                options : preState.options.concat(option)
            }
        });
    };
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hand of a computer';
       
        return (
            <div>
                <Header title= {title} subtitle = {subtitle}/>
                <Action 
                    hasOptions = {this.state.options.length > 0}
                    handlePick = {this.handlePick}
                />
                <Options 
                    options = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                />
                <AddOptions handleAddOption = {this.handleAddOption} />
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
    render(){
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled = {!this.props.hasOptions}
                > 
                What should I do?
                </button>
            </div>
        )
    }
}

class Options extends React.Component{
 /*   constructor(props){
        super(props);
     //   this.RemoveAll = this.RemoveAll.bind(this);//只bind一次
    }*/
    render(){
        return (
            <div>
            {
                this.props.options.map((option) =>
                <Option key={option} optionText={option}/>)
            }
                <button onClick = {this.props.handleDeleteOptions}> RemoveAll</button>
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
    constructor(props){
        super(props);
        this.AddOptions = this.AddOptions.bind(this);
        this.state = {
            error : undefined
        }
    }
    AddOptions(e){
        e.preventDefault();
        const value = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(value);

        this.setState(() => {
            return { error }
        })
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit = {this.AddOptions}>
                    <input type="text" name="option"/>
                    <button >Add option</button>
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