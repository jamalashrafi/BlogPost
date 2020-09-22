import React, { useEffect } from 'react';
import { Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HomeScreen from './components/HomeScreen';
import Login from './containers/Login';
import Register from './containers/RegisterUser';
import { fetchAllPosts } from './actions/postsAction';
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute';
import CreatePosts from './containers/CreatePosts';
import MyPosts from './components/MyPosts';
import Sidebar from './components/Sidebar';
import HeaderContainer from './components/HeaderContainer';
import createHistory from './util/history';
import MyProfile from './containers/MyProfile';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  return (
    <Router history={createHistory}>
      <div>
        <HeaderContainer />
        <div className="dashboardContainer">
          <Sidebar />
          <div className="dashboardContainer__component">
            <Route exact path="/" component={HomeScreen} />
            <ProtectedRoute exact path="/createpost" component={CreatePosts} />
            <ProtectedRoute exact path="/mypost" component={MyPosts} />
            <ProtectedRoute exact path="/myprofile" component={MyProfile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <ProtectedRoute exact path="/logout" component={Logout} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
