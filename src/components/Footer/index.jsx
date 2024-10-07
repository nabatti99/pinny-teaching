import React from "react";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import MenuWidget from "../Widget/MenuWidget";
import SocialWidget from "../Widget/SocialWidget";
import Newsletter from "../Widget/Newsletter";
import TextWidget from "../Widget/TextWidget";
const menuDataOne = [
    { title: "Games", href: "/games" },
    { title: "Game 1", href: "/games?type=GAME1" },
    { title: "Game 2", href: "/games?type=GAME2" },
    { title: "Flash Cards", href: "/flash-cards" },
];
const menuDataTwo = [
    { title: "Timetable", href: "/timetable" },
    { title: "Blog", href: "/blogs" },
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
                                <Newsletter title="Be Our Subscribers" subTitle="To get the latest news about health from our experts" />
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
