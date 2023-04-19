import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/">
              <Route index element={<Home />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="users">
                  <Route index element={<List />}></Route>
                  <Route path=":userId" element={<Single />}></Route>
                  <Route path="new" element={<New />}></Route>
              </Route>
              <Route path="products">
                  <Route index element={<List />}></Route>
                  <Route path=":productId" element={<Single />}></Route>
                  <Route path="new" element={<New />}></Route>
              </Route>
            </Route>  
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;

// 1:42:28 youtube -> https://www.youtube.com/watch?v=yKV1IGahXqA