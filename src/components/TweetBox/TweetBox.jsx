import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"
import { sampleNewTweet } from "../../constants";

export default function TweetBox(props) {
  console.log(props)

    function handleOnSubmit(event){
      console.log('beforrre', props.tweets)

      let newTweet = {...sampleNewTweet};

      newTweet.name = props.userProfile.name;
      newTweet.handle = props.userProfile.handle;
      newTweet.id = props.tweets.length;
      newTweet.text = props.tweetText;

      console.log('neweee', newTweet)
      props.setTweets([...props.tweets,newTweet]);
      console.log('afteeeeer', props.tweets)

      props.setTweetText('');
      console.log(props);
      if(props.setUserProfile){
        props.setUserProfile((prevState)=>({...prevState, 'numTweets' : (prevState.numTweets+1)}));
      }

    }

    function handleOnTweetTextChange(event){
      props.setTweetText(event.target.value);
    }


  return (
    <div className="tweet-box">
      <TweetInput value={props.tweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount value={props.tweetText}/>
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} numChars={props.tweetText.length}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  return <span>{props.value.length === 0? '': (140 - props.value.length )}</span>
}

export function TweetSubmitButton({handleOnSubmit, numChars}) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={handleOnSubmit} disabled={numChars > 140 || numChars === 0? true: false}>Tweet</button>
    </div>
  )
}
