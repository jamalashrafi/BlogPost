import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMyPosts } from '../actions/postsAction';
import BlogView from './BlogView';
const MyPosts = () => {
  const postState = useSelector((state) => state.postReducer);
  const { loading, myposts, error } = postState;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyPosts());
  }, [dispatch]);

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>error</div>}
      <div className="blogViewContainer">
        {myposts.length > 0
          ? myposts.map((post) => <BlogView key={post._id} post={post} />)
          : ''}
      </div>
    </>
  );
};

export default MyPosts;
