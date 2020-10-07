import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { select } from "./show-card-selectors";
import * as appActions from "../../dashboard/connect/dashboard-actions";
import { withRouter } from "react-router-dom";
import ShowCard from "../show-card-component";

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(appActions, dispatch);

  return { actions };
};

export default withRouter(connect(select, mapDispatchToProps)(ShowCard));
