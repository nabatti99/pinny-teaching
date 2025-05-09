import React from "react";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import MenuWidget from "../Widget/MenuWidget";
import SocialWidget from "../Widget/SocialWidget";
import Newsletter from "../Widget/Newsletter";
import TextWidget from "../Widget/TextWidget";
const menuDataOne = [
    { title: "Games", href: "/games" },
    { title: "Visual Learners", href: "/games?learningStyle=Visual Learners" },
    { title: "For Kids", href: "/games?forKids=1" },
    { title: "Flash Cards", href: "/flash-cards" },
];
const menuDataTwo = [
    { title: "Classroom Tips", href: "/classroom-tips" },
    { title: "About Us", href: "/about-us" },
];

export default function Footer() {
    return (
        <footer className="cs_footer cs_style_1 cs_heading_color">
            <div className="cs_footer_logo_wrap" style={{ backgroundImage: "url(/images/footer_bg_1.svg)" }}>
                <div className="cs_footer_brand" style={{ backgroundImage: "url(/images/footer_logo_bg.png)", filter: "drop-shadow(2px 4px 24px #ffffff)" }}></div>
            </div>
            <div className="cs_footer_main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="cs_footer_item">
                                <TextWidget text="Pinny Teaching" />
                                <ContactInfoWidget />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="cs_footer_item">
                                <MenuWidget data={menuDataOne} />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="cs_footer_item">
                                <MenuWidget data={menuDataTwo} />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cs_footer_item">
                                <Newsletter title="Follow Us" subTitle="Get in touch with us to get free games, flash cards and new class tips." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cs_footer_bottom cs_accent_bg">
                <div className="container">
                    <div className="cs_footer_bottom_in">
                        <SocialWidget />
                        <div className="cs_copyright">Copyright © 2024 Pinny Teaching. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
