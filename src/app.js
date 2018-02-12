


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
        this.handleDeleteOptionSingle = this.handleDeleteOptionSingle.bind(this);
        this.state = {
            options: props.options
        }
    };

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({ options}));
            }

        }catch(e){
            // do nothing at all
        }
        
    }
    
    componentDidUpdate(prevProps,prevState){ // will only be show after props / status is changed
       if(prevState.options.length !== this.state.options.length){
           const json = JSON.stringify(this.state.options);
           localStorage.setItem('options',json);
       }
       
    }

    componentWillUnmount(){ // will only execute when  the given component disappears
        console.log("componnetWillUnmount");

    }
    handleDeleteOptions(){
    /*    this.setState(()=>{
            return {
                options : []
            }
        });*/
        this.setState(()=>({
            options:[]
            })
        );
    };

    handleDeleteOptionSingle(optionToremove){
        this.setState((preState)=>({
            options : preState.options.filter((option)=>{
                return optionToremove !== option;
            })
        }));
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
        this.setState((preState) =>({//突然发现变量名不是很重要，似乎放再这里就是prev的意思
            options : preState.options.concat(option)
        })
        );
     /*   this.setState((preState)=>{
            return{
                options : preState.options.concat(option)
            }
        });*/
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
                    handleDeleteOptionSingle = {this.handleDeleteOptionSingle}
                />
                <AddOptions handleAddOption = {this.handleAddOption} />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props)=>{
    return (
        <div>
            <h1> {props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title : 'Indecision'
}
/*
class Header extends React.Component { 
    render(){
        return (
            <div>
                <h1> {this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
};
*/

const Action = (props) =>{
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled = {!props.hasOptions}
            > 
            What should I do?
            </button>
        </div>
    );
}
/*class Action extends React.Component{
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
*/
const Options =(props) => {
    return (
        <div>
            {props.options.length === 0 && <p> Please add an option to get started!</p>}
        {
            props.options.map(
                (option) =>
                <Option 
                    key={option} 
                    optionText={option}
                    handleDeleteOptionSingle = {props.handleDeleteOptionSingle}/>
            )
        }
            <button onClick = {props.handleDeleteOptions}> RemoveAll</button>
        </div>
    );
}
/*class Options extends React.Component{
 /*   constructor(props){
        super(props);
     //   this.RemoveAll = this.RemoveAll.bind(this);//只bind一次
    }*/
/*    render(){
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
}*/

const Option = (props) =>{
    return (
        <div>
            <p>{props.optionText}</p>
            <button 
                onClick = {(e) =>{
                    props.handleDeleteOptionSingle(props.optionText);
                }}
            >
            Delte</button>
        </div>
    );
}
/*
class Option extends React.Component{
    render(){
        return (
            <div>
                <p>{this.props.optionText}</p>
            </div>
        )
    }
}*/

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
        e.target.elements.option.value = "";
        this.setState(()=>({
            error
        }));

        if(!error){
            e.target.elements.option.value = '';
        }
        /*
        this.setState(() => {
            return { error }
        })*/
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



//stateless function components
/*user = function(){}*/
const User = (props)=>{
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: </p>
        </div>
    );
};
ReactDOM.render(<User name="mabel"/>, document.getElementById('app2'));
ReactDOM.render(<IndecisionApp /*options= {['devils den','second']}*/ />,document.getElementById('app'));