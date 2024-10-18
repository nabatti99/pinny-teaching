import React, { useEffect, useState } from "react";
import { getGames } from "../../google-apis/sheet-api";
import { pageTitle } from "../../helpers/PageTitle";
import Section from "../Section";
import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";
import BannerSectionStyle5 from "../Section/BannerSection/BannerSectionStyle5";
import TeamSectionStyle2 from "../Section/TeamSection/TeamSectionStyle2";

export default function Games() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getGames(40, 0).then((res) => {
            setData(res);
        });
    }, []);

    pageTitle("Games");
    return (
        <>
            <BannerSectionStyle5
                bgUrl="/images/doctors/banner_bg.svg"
                imgUrl="/images/doctors/banner_img.png"
                title="Introduce You to Our Creative Games"
                subTitle="The collection of engaging games catered to diverse learning styles and ages."
            />
            <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
                <TeamSectionStyle2 data={data} />
            </Section>
            <Section className="cs_footer_margin_0">
                <BannerSectionStyle4
                    bgUrl="images/doctors/banner_bg_2.jpeg"
                    title="TEACH WITH EASE"
                    subTitle="We are committed to providing you with innovative and effective teaching resources to help you inspire and engage your students."
                />
            </Section>
        </>
    );
}
