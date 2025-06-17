// authService.js
import axios from "axios";

axios.defaults.withCredentials = true;

const checkSession = async () => {
  try {
    const result = await axios.get("https://equiprentals-backend.onrender.com/session");
    return { sessionData: result.data.sessionData.session, isAuth: true }; // Session is valid
  } catch (error) {
    console.log("error", error);
    if (error.response && error.response.status === 401) {
      return { isAuth: false }; // Session is not valid
    } else {
      // Handle other errors silently
      return { isAuth: false }; // Or you can throw a custom error if needed
    }
  }
};

export default checkSession;
