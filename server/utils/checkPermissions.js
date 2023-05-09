const checkPermissions = (user, todo) => (field) => {
  if (user.roles === 'manager' || todo.creatorId === user.id) {
    return true;
  }
  return field === status;
};

module.exports = {
  checkPermissions,
};
