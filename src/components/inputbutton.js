export const Button = ({val,clk}) =>{
    return(<input className="btn" type={"button"} value={val} onClick={clk}></input>);
}