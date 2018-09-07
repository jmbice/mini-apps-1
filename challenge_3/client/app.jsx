const FormShell = (props) => {
  var currentView = props.fullState.currentView;
  var fullState = props.fullState;
  var onChange = props.handleChange;

  if (currentView === 1) {
    return (
      <div>
        <form>
          <h3>Account Details</h3>
          Name: <input onChange={props.handleChange} name="user_name" type="text"></input> <br />
          {fullState.user_name} <br />
          Email: <input onChange={props.handleChange} name="email" type="text"></input> <br />
          {fullState.email} <br />
          Password: <input type="text"></input> <br />
        </form>
        <button onClick={props.passedHandleNextClick}>Next</button>
      </div>
    );

  } else if (currentView === 2) {
    return (
      <div>
        <div>
          <h3>Delivery Address:</h3>
          Address: <input type="text" name="address1"></input> <br />
          {fullState.address1} <br />
          Address (optional): <input type="text" name=""></input> <br />
          City: <input type="text"></input> <br />
          State: <input type="text"></input> <br />
          Zip: <input type="text"></input> <br />
          <h3>Phone</h3>

          Your Phone Number: <input type="text"></input>
        </div>
        <button onClick={props.passedHandlePreviousClick}>Previous</button>
        <button onClick={props.passedHandleNextClick}>Next</button>

      </div>
    );
    //
  } else if (currentView === 3) {
    return (
      <div>
      <div>
        <h3>Payment Information:</h3>
        Credit Card: <input type="text" name="cc"></input> <br />
        CVV: <input type="text"></input> <br />
        Expiration Date: <input type="text"></input>

        <h3>Billing Address:</h3>
        Address: <input type="text"></input> <br />
        Address (optional): <input type="text"></input> <br />
        City: <input type="text"></input> <br />
        State: <input type="text"></input> <br />
        Zip: <input type="text"></input> <br />
        Your Phone Number: <input type="text"></input>
      </div>
        <button onClick={props.passedHandlePreviousClick}>Previous</button>
        <button onClick={props.passedHandleNextClick}>Next</button>
      </div>
    );
    //
  } else if (currentView === 4) {
    return (
      <div>
        <h3>Account Details</h3>
        Name: {fullState.user_name} <br />
        Email: {fullState.email} <br />
        Password: {fullState.password} <br />

        <h3>Delivery Address:</h3>
        Address: {fullState.address1} <br />
        Address {fullState.address2} <br />
        City: {fullState.city} <br />
        State: {fullState.state} <br />
        Zip: {fullState.zip}

        <h3>Phone</h3>
        Phone: {fullState.phone}

        <h3>Payment Information:</h3>
        Credit Card: {fullState.cc} <br />
        CVV: {fullState.cvv} <br />
        Expiration Date:{fullState.exp}

        <h3>Billing Address:</h3>
        Address: {fullState.b_address1} <br />
        Address {fullState.b_address2} <br />
        City: {fullState.b_city} <br />
        State: {fullState.b_state} <br />
        Zip: {fullState.b_zip} <br /><br />

        <button onClick={props.passedHandlePreviousClick}>Previous</button>
        <button> Submit </button>
      </div>
    );
    //
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 1,
      user_name: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      cc: '',
      cvv: '',
      exp: '',
      b_address1: '',
      b_address2: '',
      b_city: '',
      b_state: '',
      b_zip: ''
    }
  }


  passedHandleNextClick(e) {
    var current = this.state.currentView;
    if (current <= 3){
      this.setState({ currentView: current + 1});
    }
  }

  passedHandlePreviousClick(e) {
    var current = this.state.currentView;
    if (current >= 2){
      this.setState({ currentView: current - 1});
    }
  };

  handleChange(e) {
    var field = e.target.name;
    var value = e.target.value;
    console.log(field, value);
    this.setState({ [field]: [value]});
  }
 //
 //  handleSubmit(e) {
 //   alert('A name was submitted: ' + this.state.value);
 //   e.preventDefault();
 // }


  render() {
    return (
      <div>
        <h1>Welcome to Checkout</h1>
        <div>
          <FormShell
            fullState={this.state}
            handleChange={this.handleChange.bind(this)}
            passedHandleNextClick={this.passedHandleNextClick.bind(this)}
            passedHandlePreviousClick={this.passedHandlePreviousClick.bind(this)}
          />
        </div>
      </div>
    );
  };
}


ReactDOM.render(<App />, document.getElementById('app'));
