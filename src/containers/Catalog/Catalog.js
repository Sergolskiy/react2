import React, {Component} from 'react'
import {setBreadcrumbs} from "../../store/action/breadcrumbs";
import {connect} from "react-redux";


class Catalog extends Component {

  componentDidMount() {
    this.props.setBreadcrumbs({
      links: [
        {
          name: 'Каталог',
          link: '/catalog'
        },
      ],
      visibility: true
    })
  }


  render() {

    return (
      <div>

      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return{
    setBreadcrumbs: setProps => dispatch(setBreadcrumbs(setProps))
  }
}

export default connect(null, mapDispatchToProps)(Catalog)


