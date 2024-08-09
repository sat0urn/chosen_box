import {Route, Routes} from "react-router-dom"
import Layout from "./Layout.jsx"
import Survey from "./Survey.jsx";
import Export from "./Export.jsx";
import Main from "./Main.jsx";
import BlackBox from "./BlackBox.jsx";
import WhiteBox from "./WhiteBox.jsx";
import Blog from "./Blog.jsx";
import Profile from "./Profile.jsx";
import BlogPage from "./BlogPage.jsx";
import Test from "./Test.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path={'black'} element={<BlackBox/>}/>
        <Route path={'white'} element={<WhiteBox/>}/>
        <Route path={'survey'} element={<Survey/>}/>
        <Route path={'export'} element={<Export/>}/>
        <Route path={'blog'} element={<Blog/>}/>
        <Route path={'profile'} element={<Profile/>}/>
        <Route path={'test'} element={<Test/>}/>
        {/* Blogs */}
        <Route path={'blog/:name'} element={<BlogPage/>}/>
      </Route>
    </Routes>
  )
}

export default AppRouter