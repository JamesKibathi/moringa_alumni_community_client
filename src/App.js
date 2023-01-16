import './App.css';

import MainDisplay from './Components/MainDisplay';
import { Route, Switch  } from 'react-router-dom'; 
import SignUp from './Components/SignUpForm';
import Login from './Components/LoginForm';
import AdminLogin from './Components/AdminLogin';
import About from './Components/About';
import AdminAnnouncementsDashboard from './Components/AdminAnnouncementsDashboard';
import AdminPostsDashboard from './Components/AdminPostsDashboard'
import AdminUsersDashboard from './Components/AdminUsersDashboard'



function App() {
  return (
    <div className="App alto-500 font-sans leading-snug text-center justify-center items-center  min-h-screen text-slate-300">
    <Switch>
      <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/aboutus">
          <About />
        </Route>

        {/* <Route path="/updateprofile">
          <UpdateProfile />
        </Route> */}
        

      <Route path="/login">
          <Login />
      </Route>

      <Route path="/admindashboard/announcements">
          <AdminAnnouncementsDashboard />
        </Route>

      <Route path="/adminstrators">
          <div>
              <h1 className='text-3xl p-4 text-orange-600 animate-pulse'> Login Only For Admins</h1>
          </div>
          <AdminLogin />
      </Route>
      
        <Route path="/admindashboard/posts">
          <AdminPostsDashboard />
        </Route>

        <Route path="/admindashboard/users">
          <AdminUsersDashboard />
        </Route>
        
      <Route path="/">
        <MainDisplay />
      </Route>
  </Switch>
   </div>
  );
}

export default App;
