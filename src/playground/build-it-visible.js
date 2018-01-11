class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility : true
        };
    };
    handleToggleVisibility(){
     //   alert("working");
        this.setState((prevState)=>{
            return {
                visibility:!prevState.visibility
            };
        });
    }
    
    render(){
        return(
            <div>
                <h1>VisibilityToggle</h1>
                <button onClick={this.handleToggleVisibility}>
                {this.state.visibility? "hide detail" : "show detail"}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>This is detal!</p>
                    </div>
                )}
            </div>
        );
    }
}
ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));



/*
let show = false;
let app = document.getElementById('app');
const changeDetail =()=>{
    show = !show;
    detailApp();    
};
const detailApp = () =>{
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={changeDetail}>{show? "hide detail" : "show detail"}</button>
            <p>{show && "detailhhhh"}</p>
            {show && (
                <div> 
                <p>hey. There are some details you can see.</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template,app);
};

detailApp();*/