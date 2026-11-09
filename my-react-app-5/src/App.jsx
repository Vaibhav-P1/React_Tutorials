//conditional rendering - allows you to control what gets rendered in you application based don certain conditions 
//(Show,hide or change components)

import UserGreeting from './UserGreeting.jsx'

function App() {
  return(
    <>
      <UserGreeting isLoggedIn={true} username = "VaibhvaP1"/>
    </>
  );
}

export default App