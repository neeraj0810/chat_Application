import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
import Header from './components/Header';

const projectID = '5f5dc0b6-ffee-4b41-9eec-f4f949459314';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <div>
      <Header userName = {localStorage.getItem('username')} />
      <ChatEngine
        height="92vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
};

// infinite scroll, logout, more customizations...

export default App;
