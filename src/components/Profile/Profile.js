import React, { useEffect, useState } from "react";
import { db, auth } from "../../config/firebase";
import Auth from "../Auth/auth";
import { getDocs, collection, addDoc } from "firebase/firestore";
import "./Profile.css";

const Profile = (props) => {
  const [scoreList, setScoreList] = useState([]);
  const scoresCollectionRef = collection(db, "scores");

  const sortScoreList = (list) => {
    const sortedList = list.sort((a, b) => {
      if (a.memory + a.scramble + a.response > b.memory + b.scramble + b.response) {
        return -1;
      }
      if (a.memory + a.scramble + a.response < b.memory + b.scramble + b.response) {
        return 1;
      }
      return 0;
    });
    setScoreList(sortedList);
  }

  const getScoreList = async () => {
    try {
      const data = await getDocs(scoresCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setScoreList(filteredData);
      sortScoreList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line
    getScoreList();
    // eslint-disable-next-line
  }, []);

  const onSubmitScore = async () => {
    if (props.p) {
      try {
        await addDoc(scoresCollectionRef, {
          user: auth?.currentUser?.displayName
            ? auth?.currentUser?.displayName
            : "Anonymous",
          userId: auth?.currentUser?.uid,
          memory: props.m,
          scramble: props.s,
          response: props.r,
        });
        getScoreList();
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  // if (props.p) console.log(props);

  return (
    <div className="profile-block">
      <Auth />
      {auth?.currentUser && (
        <div className="profile-submit">
          <h3>Current User: {auth?.currentUser?.email}</h3>
          <div className="score-section">
            <button onClick={onSubmitScore} className="profile-btn">
              Submit your Scores
            </button>

            {scoreList.map(
              (score) =>
                score.userId === auth?.currentUser?.uid && (
                  <div key={score.id} className="user-scores">
                    <p>User: {score.user}</p>
                    <p>
                      Memory: {score.memory}, Scramble: {score.scramble},
                      Response: {score.response}
                    </p>
                  </div>
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
