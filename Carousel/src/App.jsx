import { useState } from 'react'
import './App.css'

function App() {

  const [index,setIndex] = useState(0);

  const images = [
    'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg', // Example: Direct Link
    'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg', // Example: Direct Link
    'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q%3D', // Example: Direct Link
    'https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg', // Example: Direct Link
  ];

  const handlePreviousClicked = ()=>{
    if(index===0){
      setIndex(images.length-1);
    }else setIndex(index-1);
  }

  const handleNextClicked = ()=>{
    if(index===images.length-1){
      setIndex(0);
    }else setIndex(index+1);
  }

  return (
    <div>
      <div className="imageContainer">
          <img className='images' src={images[index]} alt='some random image'/>
      </div>
      <div className='buttons'>
        <button className='previous' onClick={handlePreviousClicked}>Previous</button>
        <button className='next' onClick={handleNextClicked}>Next</button>
      </div>
    </div>
  )
}

export default App
