import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { select } from "./dashboard-selectors";
import * as appActions from "./dashboard-actions";
import { withRouter } from "react-router-dom";
import Dashboard from "../dashboard-component";

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(appActions, dispatch);

  return { actions };
};

export default withRouter(connect(select, mapDispatchToProps)(Dashboard));
