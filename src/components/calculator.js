import React, { useState } from 'react';
import calculate from '../logic/calculate';

// refactor from class to function using hooks useState;
const Calc = () => {
  const [state, setState] = useState({
    next: 0,
    operation: null,
    total: null,
  });

  const handPress = (e) => {
    const newState = e.target.innerText;
    setState((state) => calculate(state, newState));
  };

  const { next, operation, total } = state;

  return (
    <div className="general-container">
      <p className="general-paragraph">Let's do some maths !</p>
    <div className="calculator-box">
      <table id="calculator" cellSpacing="0">
        <tbody id="calculator-body">
          <tr className="result-box">
            <td colSpan="4" className="result">
              <span>{next}</span>
              <span>{operation}</span>
              <span>{total}</span>
            </td>
          </tr>

          <tr>
            <td>
              <button type="button" className="no-color" onClick={handPress}> AC </button>
            </td>
            <td>
              <button type="button" className="no-color" onClick={handPress}> +/- </button>
            </td>
            <td>
              <button type="button" className="no-color" onClick={handPress}> % </button>
            </td>
            <td>
              <button type="button" className="color" onClick={handPress}> ÷ </button>
            </td>
          </tr>

          <tr>
            <td>
              <button type="button" className="no-color" onClick={handPress}> 7 </button>
            </td>
            <td>
              <button type="button" className="no-color" onClick={handPress}> 8 </button>
            </td>
            <td>
              <button type="button" className="no-color" onClick={handPress}> 9 </button>
            </td>
            <td>
              <button type="button" className="color" onClick={handPress}> x </button>
            </td>
          </tr>

          <tr>
            <td>
              <button type="button" className="no-color" onClick={handPress}> 4 </button>
            </td>
            <td>
              <button type="button" className="no-color" onClick={handPress}> 5 </button>
            </td>
            <td>
              <button type="button" className="no-color" onClick={handPress}> 6 </button>
            </td>
            <td>
              <button type="button" className="color" onClick={handPress}> - </button>
            </td>
          </tr>

          <tr>
            <td>
              <button type="button" className="no-color" onClick={handPress}> 1 </button>
            </td>
            <td>
              <button type="button" className="no-color" onClick={handPress}> 2 </button>
            </td>
            <td>
              <button type="button" className="no-color" onClick={handPress}> 3 </button>
            </td>
            <td>
              <button type="button" className="color" onClick={handPress}> + </button>
            </td>
          </tr>

          <tr>
            <td colSpan="2">
              <button type="button" className="no-color" onClick={handPress}> 0 </button>
            </td>
            <td>
              <button type="button" className="no-color" onClick={handPress}> . </button>
            </td>
            <td>
              <button type="button" className="color" onClick={handPress}> = </button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
    </div>
  );
};
export default Calc;
