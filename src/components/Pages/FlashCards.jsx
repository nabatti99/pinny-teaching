import React, { useEffect, useState } from "react";
import BannerSectionStyle5 from "../Section/BannerSection/BannerSectionStyle5";
import Section from "../Section";
import DepartmentSectionStyle3 from "../Section/DepartmentSection/DepartmentSectionStyle3";
import BannerSectionStyle6 from "../Section/BannerSection/BannerSectionStyle6";
import { pageTitle } from "../../helpers/PageTitle";
import { getFlashCards } from "../../google-apis/sheet-api";
const departmentData = [
    {
        iconUrl: "images/departments/icon_1.svg",
        title: "Topic",
        subTitle: "Description",
        href: "/flash-cards/flash-card-1",
    },
    {
        iconUrl: "images/departments/icon_1.svg",
        title: "Topic",
        subTitle: "Description",
        href: "/flash-cards/flash-card-2",
    },
    {
        iconUrl: "images/departments/icon_1.svg",
        title: "Topic",
        subTitle: "Description",
        href: "/flash-cards/flash-card-3",
    },
];

export default function FlashCards() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getFlashCards(40, 0).then((res) => {
            setData(res);
        });
    }, []);

    pageTitle("Departments");
    return (
        <>
            <BannerSectionStyle5
                bgUrl="/images/departments/banner_bg.svg"
                imgUrl="/images/departments/banner_img.png"
                title="Access a Variety of Flashcards"
                subTitle="At Pinny Teaching, we offer a wide range of flashcards on diverse topics that are designed to build your vocabulary and improve your memory."
            />
            <Section bottomMd={140} bottomLg={100} bottomXl={60}>
                <DepartmentSectionStyle3 data={data} />
            </Section>
            <Section className="cs_footer_margin_0">
                <BannerSectionStyle6
                    imgUrl="/images/departments/banner_img_2.png"
                    title="TEACH WITH EASE"
                    subTitle="We are committed to providing you with innovative and effective teaching resources to help you inspire and engage your students."
                />
            </Section>
        </>
    );
}
