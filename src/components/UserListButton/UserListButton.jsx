import './UserListButton.css';

// Sacarlo a otro sitio
// Estos botones deberian de usar el componente Button
// https://github.com/ryanmcdermott/clean-code-javascript

const UserListButton = ({ onCreateUser, onPreviousPage, onNextPage, isFirstPage }) => {
    return (
      <div className="userlist-buttons">
        <button onClick={onCreateUser}>Create user</button>
        <button onClick={onPreviousPage} disabled={isFirstPage}>
          Previous
        </button>
        <button onClick={onNextPage}>
          Next
        </button>
      </div>
    );
  };
  
  export default UserListButton;
  