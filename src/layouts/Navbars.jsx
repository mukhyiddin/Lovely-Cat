import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";

function Navbars() {
    const [openNavbar, setOpenNavbar] = useState(false);

    const user = localStorage.getItem("token")

    return (
        <div class="w-full backdrop-blur-sm bg-blue-800 bg-opacity-40 fixed-top">
            <Navbar color="" navbar>
                <NavbarContainer>
                    <NavbarWrapper>
                        <div class="pl-32">
                            <a href="/">
                                <img style={{ width: 50 }} src={require("../assets/catbrand.png")} alt="" />
                            </a>
                        </div>


                        <NavbarToggler
                            color="white"
                            onClick={() => setOpenNavbar(!openNavbar)}
                            ripple="light"
                        />
                    </NavbarWrapper>

                    <NavbarCollapse open={openNavbar}>
                        <Nav>

                            <div class=" pr-96">
                                <NavLink href="/konsultasi" ripple="light">Konsultasi</NavLink>
                            </div>


                            <NavLink href="/#aboutus" ripple="light">About Us</NavLink>
                            <NavLink href="/#services" ripple="light">Services</NavLink>
                            <NavLink href="/#ourteam" ripple="light">Our Team</NavLink>
                            <NavLink href="news" ripple="light">News</NavLink>
                            {/* <NavLink href="catshop" ripple="light">Cat Shop</NavLink> */}
                            {user ?
                                <>
                                    <NavLink href="/catshop" ripple="light">Cat Shop  </NavLink>
                                    {/* <Login /> */}
                                </>
                                : <>
                                    <NavLink href="/login">Cat Shop</NavLink>
                                </>}

                            {user ?
                                <a href="login"><div class="pl-3 pr-6"> <img style={{ width: 35 }} src={require("../assets/user.png")} alt="" /> </div></a>
                                :
                                <> <NavLink href="login" ripple="light">Login </NavLink> </>
                            }


                            {/* <NavLink href="login" ripple="light">Login </NavLink> */}
                            {/* <img style={{ width: 35 }} src={require("../assets/user.png")} alt="" /> */}
                        </Nav>
                    </NavbarCollapse>
                </NavbarContainer>
            </Navbar>

        </div>

    );
}
export default Navbars;