import React from 'react'
import Navbar from './Navbar'

function ProfileComp() {
  
  return (
    <div>
        <Navbar/>
        <div>
            <div className='profile_upper'>
                <img src='https://cdn.britannica.com/95/127195-050-810993F9/Ratan-Tata-Group-Nano-9th-Auto-Expo-2008.jpg' style={{height:"8rem",width:"8rem",borderRadius:"50%"}}/>
                <div style={{flexBasis:"40%"}}>
                <h1>Harsh</h1>
                <h3>Posts</h3>
            </div>
            </div>
            <hr />
            <div className="profile_videos">
                <video src=""></video>
            </div>
        </div>
    </div>
  )
}

export default ProfileComp