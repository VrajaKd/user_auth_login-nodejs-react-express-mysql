// check Local Storage for user item
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  // If there is a logged in user with accessToken (JWT), return HTTP Authorization header
  if (user && user.accessToken) {
    // for Node.js Express back-end
    return { 'x-access-token': user.accessToken };

  // Otherwise, return an empty object
  } else {
    return {};
  }
}