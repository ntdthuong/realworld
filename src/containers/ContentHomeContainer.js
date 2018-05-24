import { connect } from 'react-redux';

import { fetchPagingAction } from '../actions';
import { ContentHome } from '../components/ContentHome';

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    user: state.user
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchPaging: (page) => {
      dispatch(fetchPagingAction(page));
    },
  }
};

export const ContentHomeContainer = connect(mapStateToProps, mapDispatchToProps)(ContentHome);