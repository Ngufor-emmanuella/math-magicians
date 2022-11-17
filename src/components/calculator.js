import React from 'react';

class Calculate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

    handPress = (eachButt) => {
      const whatHappened = button(this.state, eachButt.target.innerText);
      this.setState(whatHappened);
    };

    render() {
      const { total } = this.state;

      return (
        <div className="calculator-box">
          <table id="calculator" cellSpacing="0">
            <tbody id="calculator-body">
              <tr className="result-box">
                <td colSpan="4" className="result">
                  <span>{total}</span>
                </td>
              </tr>

              <tr>
                <td>
                  <button type="button" className="no-color" onClick={this.handPress}> AC </button>
                </td>
              </tr>

              <tr>
                <td>
                  <button type="button" className="no-color" onClick={this.handPress}> +/- </button>
                </td>
              </tr>

              <tr>
                <td>
                  <button type="button" className="no-color" onClick={this.handPress}> % </button>
                </td>
              </tr>

              <tr>
                <td>
                  <button type="button" className="no-color" onClick={this.handPress}> + </button>
                </td>
              </tr>

              <tr>
                <td>
                  <button type="button" className="no-color" onClick={this.handPress}> 7 </button>
                </td>
              </tr>

              <tr>
                <td>
                  <button type="button" className="no-color" onClick={this.handPress}> 8 </button>
                </td>
              </tr>

              <tr>
                <td>
                  <button type="button" className="no-color" onClick={this.handPress}> 9 </button>
                </td>
              </tr>

              <tr>
                <td>
                  <button type="button" className="no-color" onClick={this.handPress}> x </button>
                </td>
              </tr>

              <tr>
                <td>
                  <button type="button" className="no-color" onClick={this.handPress}> 4 </button>
                </td>
              </tr>

              <tr>
                <td>
                  <button type="button" className="no-color" onClick={this.handPress}> 5 </button>
                </td>
              </tr>

              <tr>
                <td>
                  <button type="button" className="no-color" onClick={this.handPress}> 6 </button>
                </td>
              </tr>

              <tr>
                <td>
                  <button type="button" className="no-color" onClick={this.handPress}> - </button>
                </td>
              </tr>

              <tr>
                <td>
                  <button type="button" className="no-color" onClick={this.handPress}> 1 </button>
                </td>
              </tr>

              <tr>
                <td>
                  <button type="button" className="no-color" onClick={this.handPress}> 2 </button>
                </td>
              </tr>

              <tr>
                <td>
                  <button type="button" className="no-color" onClick={this.handPress}> 3 </button>
                </td>
              </tr>

              <tr>
                <td>
                  <button type="button" className="no-color" onClick={this.handPress}> + </button>
                </td>
              </tr>

              <tr>
                <td>
                  <button type="button" className="no-color" onClick={this.handPress}> 0 </button>
                </td>
              </tr>

              <tr>
                <td>
                  <button type="button" className="no-color" onClick={this.handPress}> . </button>
                </td>
              </tr>

              <tr>
                <td>
                  <button type="button" className="no-color" onClick={this.handPress}> = </button>
                </td>
              </tr>

            </tbody>

          </table>
        </div>

      );
    }
}
export default Calculate;
