import {SET_BREADCRUBMBS} from "./actionTypes";


export function setBreadcrumbs(breadcrumbs) {

  return{
    type: SET_BREADCRUBMBS,
    breadcrumbsVisibility: breadcrumbs.visibility,
    breadcrumbsLinks: breadcrumbs.links
  }
}






// export function fetchBreadcrumbs(breadcrumbs) {
//   return async dispath => {
//     dispath(fetchBreadcrumbsStart())
//     try {
//       var breadcrumbs = [];
//
//
//
//       dispath(fetchBreadcrumbsSuccess(breadcrumbs))
//     } catch (e) {
//       dispath(fetchBreadcrumbsError())
//     }
//
//   }
// }
//
// export function fetchBreadcrumbsStart() {
//   return{
//     type: FETCH_BREADCRUBMBS_START
//   }
// }
//
// export function fetchBreadcrumbsSuccess(breadcrumbs) {
//   return{
//     type: FETCH_BREADCRUBMBS_SUCCESS,
//     breadcrumbs
//   }
// }
//
// export function fetchBreadcrumbsError() {
//   return{
//     type: FETCH_BREADCRUBMBS_ERROR
//   }
// }
