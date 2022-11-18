import React, { useState } from 'react';
import calculate from '../logic/calculate';

// refactor from class to function using hooks useState;
const Calc = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handPress = (e) => {
    const newState = e.target.innerText;
    setState((state) => calculate(state, newState));
  };

  const { total, next, operation } = state;

  return (
    <div className="calculator-box">
      <table id="calculator" cellSpacing="0">
        <tbody id="calculator-body">
          <tr className="result-box">
            <td colSpan="4" className="result">
              <span>{total}</span>
              <span>{next}</span>
              <span>{operation}</span>
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
  );
};
export default Calc;
