import './UserListButton.css';

const UserListButtons = ({ onCreateUser, onPreviousPage, onNextPage, isFirstPage }) => {
    return (
      <div className="userlist-buttons">
        <button onClick={onCreateUser}>Crear usuario</button>
        <button onClick={onPreviousPage} disabled={isFirstPage}>
          Previous
        </button>
        <button onClick={onNextPage}>
          Next
        </button>
      </div>
    );
  };
  
  export default UserListButtons;
  