import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  

  const [text, setText] = useState('');
  //proptype of incoming method through props
  //use to basically proofread incoming props and make app more robust

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    //onSubmit automatically refreshes page. preventDefault prevents it
    event.preventDefault();
    //if field is empty, send alert
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      //otherwise proceed regularly
      githubContext.searchUsers(text);
      setText(text);
    }
  };
  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search user...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};


export default Search;
