import React, { useEffect, useState } from "react";
import { UidContext } from "./components/AppContext";
import Routes from "./components/Routes/index";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user_actions";

function App() {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: 'GET',
        url: 'http://localhost:5000/jwtid',
        withCredentials: true
      })
      .then((res) => {
        setUid(res.data)
      })
      .catch((err) => console.log('No Token'))
    }
    fetchToken();

    if (uid) dispatch(getUser(uid))
  }, [uid, dispatch]);


  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
}

export default App;
