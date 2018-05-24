import { connect } from 'react-redux';

import { fetchPagingAction, profileAction } from '../actions';
import { ContentHome } from '../components/ContentHome';

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    user: state.user,
    profile: state.profile,
    tags: state.tags
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchPaging: (page) => {
      dispatch(fetchPagingAction(page));
    },
    onGetProfile: (username) => {
      dispatch(profileAction(username));
    }
  }
};

export const ContentHomeContainer = connect(mapStateToProps, mapDispatchToProps)(ContentHome);