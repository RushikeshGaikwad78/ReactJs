import React from "react";

// step 1
const UserContext = React.createContext('Codevolution')   //by default the value will be Codevolution

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider , UserConsumer}
export default  UserContext