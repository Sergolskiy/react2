import React, {Component} from 'react'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";


class Breadcrumbs extends Component {

  render() {

    return (
      <React.Fragment>
        {this.props.breadcrumbs.breadcrumbsVisibility ?
          <div className={'content-wrap  breadcrumb'}>
            <div className="breadcrumb__inner">
              <NavLink className="breadcrumb__link" to="/" title="Главная страница">
                Главная
              </NavLink>
              {this.props.breadcrumbs.breadcrumbsLinks.map(function (item) {
                return(
                  <NavLink className="breadcrumb__link" to={item.link} title="Каталог">
                    {item.name}
                  </NavLink>
                )
              })}

            </div>
          </div>
          :
          null
        }

      </React.Fragment>


    )
  }
}

function mapStateToProps(state) {
  return{
    breadcrumbs: state.breadcrumbsReducer
  }
}

export default connect(mapStateToProps)(Breadcrumbs)
