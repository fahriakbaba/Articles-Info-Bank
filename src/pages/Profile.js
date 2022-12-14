import React from 'react';
import { useParams } from 'react-router';

function Profile({ data }) {
  const { profileID } = useParams();
  const findProfile = data.find(item => item.id === Number(profileID));
   
  return (
    <section className="profile">
      <h4>{findProfile.author} Bio</h4>
      <article>
        <img src={findProfile["profile-image"]} alt="profile" />
        <p>{findProfile.bio}</p>
      </article>
    </section>
  )
}

export default Profile;