class Counter extends React.Component{
    constructor(props){
        super(props);
        this.plusOne = this.plusOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count : 0 //props.count
        };
    }

    componentDidMount(){
        try{
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount,10);
            if(!isNaN(count)){
                this.setState(() => ({count}));
            }
        }catch(e){

        }
        
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            console.log('update');
            localStorage.setItem('count',this.state.count);
        }
    }
    plusOne(){
        this.setState((prevState)=>{
            return {
               count : prevState.count + 1
            };
        });
        console.log(this.state.count);
    }

    minusOne(){
        this.setState((prevState)=>{
            return {
                count : prevState.count - 1
            };
        });
    }
    reset(){
        this.setState(() =>{
            return {
                count:0
            };
        });

        this.setState((prevState) =>{
            return{
                count : prevState.count + 1
            }
        })
    /*    this.setState({
            count:0
        });
        this.setState({
            count : this.state.count + 1
        });*/
    }
    render(){
        return (
            <div>
                <h1>Counter:{this.state.count}</h1>
                <button onClick={this.plusOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}
/*
Counter.defaultProps = {
    count : 10
}*/
ReactDOM.render(<Counter count = {-10}/>, document.getElementById('app'));