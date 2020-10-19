import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../store/actions/userActions";

const UserList = ({ userData, fetchUsers }) => {
  console.log(userData);
  const wow = userData.users.map((user) => user.first_name);
  console.log(wow);
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => <p>{user.first_name}</p>)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
