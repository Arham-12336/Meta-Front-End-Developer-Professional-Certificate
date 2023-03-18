function Heading(props)
{
    // const asideStyle={
    //     background:"azure",
    //     color:"black",
    // }


    return (
        <aside>
            {/* style={asideStyle} */}
             <h1>Hello,{props.firstname} </h1>
        </aside>
       
    );

};
export default Heading;