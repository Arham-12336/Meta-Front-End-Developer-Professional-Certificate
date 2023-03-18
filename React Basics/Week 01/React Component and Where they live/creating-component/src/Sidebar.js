function Sidebar(props)
{

    const asideStyle={
        background:"azure",
        width: "50px",
        marginLeft: "10px",
    }
    return(
        <aside>
        style={asideStyle}
        <h1>This is Sidebar,{props.name}</h1>

        </aside>
       
    );


};
export default Sidebar;