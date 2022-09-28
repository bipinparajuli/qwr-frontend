import jwtDecode from 'jwt-decode';

export const persistSession = (token) => localStorage.setItem('authentication-token-user',JSON.stringify(token));

export const storeSuscriber = () => {

  const authToken = JSON.parse(getSession());

  authToken.user.isAppStoreSubscriber = true; 

  // console.log(authToken);
  
  localStorage.setItem('authentication-token-user',JSON.stringify(authToken));

}


export const deleteSession = () => localStorage.removeItem('authentication-token-user');

export const getSession = () =>localStorage.getItem('authentication-token-user');


export const hasToken = () => {
  const authToken = getSession();
  JSON.parse(authToken)
  if (authToken && authToken !== '') {
    try {
      const decodedToken = authToken.token ? jwtDecode(authToken.token) : false;
      const currentTimestamp = new Date().getTime();
      const tokenExpTime = decodedToken.exp * 1000;
      if(currentTimestamp > tokenExpTime) {
        deleteSession();
      }

  return true
      // return decodedToken && tokenExpTime > currentTimestamp;
    } catch (err) {

      return false;
    }
  }
  return false;
};

export const getUserData = () => {
  const authToken = getSession();
  JSON.parse(authToken);
  // console.log(authToken);

  if (authToken && authToken !== '') {
    try {
      // const decodedToken = authToken.token ? jwtDecode(authToken.token) : false;
      // return decodedToken ? decodedToken.data : undefined;
      return JSON.parse(authToken).user;
    } catch (err) {
      return undefined;
    }
  }
  return undefined;
}

export const isAppStoreSubscriber = () => {
  const authToken = JSON.parse(getSession());
  if (authToken && authToken !== '') {
    try {

      // console.log("isAppStoreSuscriber",authToken.user.isAppStoreSubscriber);

      if(authToken.user.isAppStoreSubscriber)
      {
        return true
      }
      else{
        return false
      }

    } catch (err) {
      return undefined;
    }
  }
  return undefined;
}