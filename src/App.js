import './App.css';
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { getEmployers as getEmployersAction } from "./store/employers/action";
import { Home } from "./components/Home"

function App(props) {
  useEffect(() => {
    props.getEmployers()
  }, [])

  return (
    <div className="App">
      <Home />
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    employers: store.employers.employers,
    isLoading: store.employers.isEmployersLoading,
    error: store.employers.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEmployers: () => dispatch(getEmployersAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);