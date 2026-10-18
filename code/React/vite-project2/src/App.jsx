import './index.css'
// import Toolbar from './Toolbar';
import PackingList from "./PackingList";
import Panel from './Panel';
// let App = function(){
//   // function handleClick(){
//   //   alert('You Click Button!')
//   // }
//   // return(
//   //   <button onClick={handleClick}>
//   //     Click
//   //   </button>
//   // );


//   // return(
//   //   <button onClick={()=>alert('You click button!')}>Click</button>
//   // );
  
// }


// function App(){
//   return(
//     <Toolbar
//     onPlayMovie={()=>alert('Playing!')}
//     onUploadImage={()=>alert('Uploading!')}
//     />
//   );
// }


function App() {
  return (
    <div>
      <PackingList />
      <Panel />
    </div>
  );
}


export default App;