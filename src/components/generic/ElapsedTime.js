import convertSeconds from "../../utils/helpers";

//------------------------------------------
// 
//------------------------------------------

const ElapsedTime = ({ style={}, label, seconds, seconds2, rounds}) => {
  const defaultStyle = {
    padding: 1,
    backgroundColor: "lightblue",
    border: "1px solid black",
    fontSize: 18,
  }

  return (
    <div style={{...defaultStyle, ...style}}>
       {label} {rounds} {convertSeconds({seconds: seconds})} {convertSeconds({seconds: seconds2})}
    </div>
  );
};

export default ElapsedTime;
