import React from "react";
import BannerSectionStyle5 from "../Section/BannerSection/BannerSectionStyle5";
import Section from "../Section";
import DepartmentSectionStyle3 from "../Section/DepartmentSection/DepartmentSectionStyle3";
import BannerSectionStyle6 from "../Section/BannerSection/BannerSectionStyle6";
import { pageTitle } from "../../helpers/PageTitle";
const departmentData = [
    {
        iconUrl: "images/departments/icon_1.svg",
        title: "Topic",
        subTitle: "Description",
        href: "/departments/department-details",
    },
    {
        iconUrl: "images/departments/icon_1.svg",
        title: "Topic",
        subTitle: "Description",
        href: "/departments/department-details",
    },
    {
        iconUrl: "images/departments/icon_1.svg",
        title: "Topic",
        subTitle: "Description",
        href: "/departments/department-details",
    },
];

export default function FlashCards() {
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
                <DepartmentSectionStyle3 data={departmentData} />
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
