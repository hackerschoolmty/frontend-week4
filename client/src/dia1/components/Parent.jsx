import React from 'react';
import Child from './Child';

class Parent extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data: 0
      }
      this.incrementNumber = this.incrementNumber.bind(this);
      this.decrementNumber = this.decrementNumber.bind(this);
   }

   incrementNumber() {
      this.setState({data: this.state.data + 1})
   }

   decrementNumber() {
      this.setState({data: this.state.data - 1})
   }

   render() {
      return (
         <div>
            <button type="button" className="btn btn-default btn-lg" onClick={this.incrementNumber}>
             <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Increment
            </button>
            <button type="button" className="btn btn-default btn-lg" onClick={this.decrementNumber}>
             <span className="glyphicon glyphicon-minus" aria-hidden="true"></span> Decrement
            </button>
            {
              this.state.data > 0 ?
                <Child number={this.state.data} />
              :
                null
            }
         </div>
      );
   }
}

export default Parent;
