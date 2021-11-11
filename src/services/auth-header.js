export default function authHeader() {
  const user = JSON.stringify(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return { "x-access-token": +user.accessToken };
  } else {
    return {};
  }
}
