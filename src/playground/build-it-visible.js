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

detailApp();