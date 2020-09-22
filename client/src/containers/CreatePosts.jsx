import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost, fetchMyPosts } from '../actions/postsAction';

const CreatePosts = (props) => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateRequest())
      dispatch(
        createPost(description, () => {
          dispatch(fetchMyPosts());
          props.history.push('/mypost');
        })
      );
  };

  const validateRequest = () => {
    let submitFlag = true;
    if (description === '') {
      alert('Please write the post before submiting');
      submitFlag = false;
    }

    return submitFlag;
  };

  return (
    <div className="createPostContainer">
      <form onSubmit={(event) => handleSubmit(event)}>
        <textarea
          maxLength="1000"
          cols="30"
          rows="10"
          value={description}
          placeholder="Max 1000 charaters can be posted..."
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
        <div>
          <button type="button" onClick={() => setDescription('')}>
            Reset Post
          </button>
          <button type="submit">Create Post</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePosts;
