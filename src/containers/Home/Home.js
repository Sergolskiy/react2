import React, {Component} from 'react'
import TopSlider from "../../components/Home/TopSlider/TopSlider";
import HomeNews from "../../components/Home/HomeNews/HomeNews";
import {connect} from "react-redux";
import {setBreadcrumbs} from "../../store/action/breadcrumbs";


class Home extends Component {

  componentDidMount() {
    this.props.setBreadcrumbs({
      links: [],
      visibility: false
    })
  }

  render() {

    return (
      <div className="content-wrap">
        <TopSlider/>
        <HomeNews/>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return{
    setBreadcrumbs: setProps => dispatch(setBreadcrumbs(setProps))
  }
}

export default connect(null, mapDispatchToProps)(Home)

