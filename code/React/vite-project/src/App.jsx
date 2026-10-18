
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Dashboard from './Dashboard'
import Home from './Home'
import Protected from './Protected';
import Product from './Product';
import MarkdownEditor from './MarkdownEditor';
import Component1 from './Component1';
import RefDemo from './useRef/RefDemo';
import RefDemo2 from './useRef/RefDemo2';
import CountRender from './useRef/CountRender';



function App() {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const signin = () => {
    setIsSignedIn(true)
  }
  const signout = () => {
    setIsSignedIn(false)
  }
  return (
    <div>
      <h2>React Protected Routes Example</h2>

      <BrowserRouter>
        <Link to='/home'>Home</Link> {' | '}
        <Link to='/dashboard'>Dashboard</Link> {' | '}
        <Link to='/product'>Product</Link> {' | '}
        <Link to='/contextdemo'>Context Demo</Link> {' | '}
        <Link to='/refdemo'>Ref Demo</Link> {' | '}
        <Link to='/refdemo2'>Ref demo 2</Link> {' | '}
        <Link to='countrender'>Count Render</Link>
        {isSignedIn ? (
          <div>
            <button onClick={signout}>Sign out</button></div>
        ) : (
          <div>
            <button onClick={signin}>Sign in</button></div>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/dashboard" element={
          <Protected isSignedIn={isSignedIn}><Dashboard /></Protected>
          } />
          <Route path='/contextdemo' element={<Component1 />} />
          <Route path='/Getlazy' element={<MarkdownEditor />}/>
          <Route path="/refdemo" element={<RefDemo />} />
          <Route path="/refdemo2" element={<RefDemo2 />} />
          <Route path='./countrender' element={<CountRender />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App
