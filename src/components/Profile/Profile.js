import React from "react";
import { useContext } from "react";
import Context from "../../common/context";

function Profile() {
  const { leng, returs, classSet, categories, lenCategories, number } =
    useContext(Context);

  return <div>Profile</div>;
}

export default Profile;
