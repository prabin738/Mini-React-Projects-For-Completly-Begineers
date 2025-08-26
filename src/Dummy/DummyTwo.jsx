import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { IoHeartDislike } from "react-icons/io5";

const DummyTwo = () => {
  const [likes, setLikes] = useState(0);
  const [dislike, setDislike] = useState(0);

  let difference = "";
  if (likes > dislike) {
    difference = `Likes are greater by ${likes - dislike} `;
  } else if (dislike > likes) {
    difference = `Dislikes are greater by ${dislike - likes}`;
  } else {
    difference = "Likes and dislikes are equal";
  }

  return (
    <div>
      <div className="count">
        <h2>Your Likes: {likes} </h2>
        <h2>Your Dislikes: {dislike} </h2>
      </div>
      <div className="button">
        <button
          onClick={() => {
            setLikes(likes + 1);
          }}
        >
          <FcLike />
        </button>
        <button
          onClick={() => {
            setDislike(dislike + 1);
          }}
        >
          <IoHeartDislike />
        </button>
      </div>
      <h2>Differences: {difference} </h2>
    </div>
  );
};

export default DummyTwo;
