import React from "react";
import {useNavigate} from 'react-router-dom';
import Button from "../Reusable Components/Button";
import Card from "../Reusable Components/Card";

function Profile() {
    const navigate = useNavigate();
    // alert("You clicked me!")
   

    return(
        <div>Profile
            <Button onClick={() => navigate("/")} variant="default">Hello</Button>
            <Button onClick={() => navigate("/")} variant="danger">Hello</Button>
            <h2>Todays Tasks</h2>
            <Card variant="primary">11am</Card>
            <h2>Completed Tasks</h2>
            <Card variant="complete">11am</Card>
            <h2>Outstanding Tasks</h2>
            <Card variant="cancelled">11am</Card>
           
            {/* <button onClick={() => {navigate("/about")}} >Change to About Page</button> */}
        </div>
    )
}

export default Profile;