import * as React from "react"
import Feed from "./components/Feed/Feed"
import Navbar from "./components/Navbar/Navbar"
import UserProfile from "./components/UserProfile/UserProfile"
import Advertisements from "./components/Advertisements/Advertisements"
import { codepathUserProfile, firstTweet, navLinks } from "./constants"
import { useState } from "react"

export default function App() {
  const [tweets, setTweets] = useState([firstTweet]);
  const [tweetText, setTweetText] = useState('');
  const [userProfile, setUserProfile] = useState(codepathUserProfile);

  return (
    <div className="app">
      <Navbar navLinks={navLinks}/>
      <main>
        <UserProfile userProfile={userProfile}/>
        <Feed tweets={tweets} setTweets={setTweets} userProfile={userProfile} setUserProfile={setUserProfile} tweetText={tweetText} setTweetText={setTweetText}/>
        <Advertisements />
      </main>
    </div>
  )
}
