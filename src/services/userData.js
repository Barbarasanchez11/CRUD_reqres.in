const userData = (data) => {
  return {
    id: data.id,
    firstName: data.first_name,
    lastName: data.last_name,
    email: data.email,
    avatar: data.avatar,
  };
};

export default userData;
