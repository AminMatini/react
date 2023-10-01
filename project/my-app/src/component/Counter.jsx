import PropTypes from 'prop-types'

const Counter = ({inc , dec , res , count}) =>{
    return(
        <>
            <h2>شمارنده من : </h2>
            <p style={count <= 0 ? {color:'red'} : {color:'green'}}>{count}</p>
            <p style={{color: count <= 0 ? 'red' : 'green'}}>{count}</p>
            <br/>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
            <button onClick={res}>🎇</button>
        </>
    )
}

Counter.propTypes={
    inc: PropTypes.func ,
    dec: PropTypes.func , 
    res: PropTypes.func , 
    count: PropTypes.number
}

export default Counter;

