import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import "./LikeDislikeCount.css";
import { useState } from "react";

const LikeDislikeCount = () => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  //conditional statement to check like and dislike
  let difference = "";
  if (like > dislike) {
    difference = `Likes are higher by ${like - dislike}`;
  } else if (dislike > like) {
    difference = `Dislikes are higher by ${dislike - like}`;
  } else {
    difference = "likes and Dislikes both are equal";
  }

  return (
    <div className="count">
      <h2>Total Like: {like}</h2>

      <h2>Total Dislike: {dislike}</h2>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        <BiLike />
      </button>
      <button
        onClick={() => {
          setDislike(dislike + 1);
        }}
      >
        <BiDislike />
      </button>
      <h2>Difference: {difference} </h2>
    </div>
  );
};

export default LikeDislikeCount;
