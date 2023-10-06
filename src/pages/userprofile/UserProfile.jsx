import React, { useEffect, useState } from "react";
import { Footer } from "../../components/headerPage/footer";
import Header from "../../components/headerPage/header";

import ProfileShow from "../Profile/profileShow";


const UserProfile = () => {
   
    return (
        <>
            <Header />  
            <ProfileShow />
            <Footer />
        </>
    );
}

export default UserProfile;
