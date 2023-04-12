// import { useEffect, useState } from 'react';
import {Routes,Route,BrowserRouter,Navigate,} from 'react-router-dom';
import { getPosts } from '../api';
import { Home, Login,Signup, Settings,UserProfile } from '../pages';
import { Loader, Navbar } from './';
import { useAuth } from '../hooks';
// import Signup from '../pages/Signup';



// function PrivateRoute({ children, ...rest }) {
//   const auth = useAuth();

//   return (
//     <Route
//       {...rest}
//       render={() => {
//         if (auth.user) {
//           return children;
//         }

//         return <Navigate to="/login" />;
//       }}
//     />
//   );
// }


// function PrivateRoute({ children }) {
//   // const { user: authUser } = useSelector(x => x.auth);
//   const authUser = useAuth();
//   if (!authUser) {
//       // not logged in so redirect to login page with the return url
//       return <Navigate to="/login" 
//        />
//   }

//   // authorized so return child components
//   return children;
// }

function PrivateRoute({ children}){
  const auth = useAuth();
  return auth.user ? children : <Navigate to="/login" />;
}

const About = () => {
  return <h1>About</h1>;
};

const UserInfo = () => {
  return <h1>User</h1>;
};

const Page404 = () => {
  return <h1>404</h1>;
};

function App() {
  const auth = useAuth();
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  
  //   const fetchPosts = async () => {
  //     const response = await getPosts();

  //     if (response.success) {
  //       setPosts(response.data.posts);
  //     }

  //     setLoading(false);
  //   };

  //   fetchPosts();
  // }, []);

  if (auth.loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route exact path="/" element={
        <Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path="/about" element={ <About/>} ></Route>
        <Route path='/register' element={<Signup></Signup>}></Route>
        <Route path='/settings' element={<PrivateRoute><Settings/></PrivateRoute>}> </Route>
        <Route path='/user/:userId' element={<PrivateRoute><UserProfile/></PrivateRoute>}> </Route>
        <Route path="/user/asdasd" element={ <UserInfo/>} ></Route>
        <Route path="/page404" element={ <Page404/>} ></Route>
      </Routes>
     
     
      </BrowserRouter>
    </div>
  );

        }

        export default App;


