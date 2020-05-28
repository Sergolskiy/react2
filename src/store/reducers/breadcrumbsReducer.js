import {SET_BREADCRUBMBS} from "../action/actionTypes";


const initialState = {

  breadcrumbsVisibility: false,
  breadcrumbsLinks: [
    {
      name: 'Каталог',
      link: '/catalog'
    },
  ],

}

export default function mainReducer (state = initialState, action) {
  switch (action.type) {

    case SET_BREADCRUBMBS:
      return{
        ...state, breadcrumbsVisibility: action.breadcrumbsVisibility, breadcrumbsLinks: action.breadcrumbsLinks
      }
    // case FETCH_BREADCRUBMBS_SUCCESS:
    //   return{
    //     ...state, loading: false, breadcrumbs: action.breadcrumbs
    //   }
    // case FETCH_BREADCRUBMBS_ERROR:
    //   return{
    //     ...state, loading: false, error: action.error
    //   }
    default:
      return {
        ...state
      }
  }
}
