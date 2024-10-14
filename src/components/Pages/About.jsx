import React, { useEffect, useState } from "react";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import BannerSectionStyle4 from "../Section/BannerSection/BannerSectionStyle4";
import Section from "../Section";
import DepartmentSectionStyle2 from "../Section/DepartmentSection/DepartmentSectionStyle2";
import FeaturesSectionStyle2 from "../Section/FeaturesSection/FeaturesSectionStyle2";
import FunFactSection from "../Section/FunFactSection";
import TeamSection from "../Section/TeamSection";
import GallerySection from "../Section/GallerySection";
import AwardSectionStyle2 from "../Section/AwardSection/AwardSectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";
import BannerSectionStyle5 from "../Section/BannerSection/BannerSectionStyle5";
import { getMembers } from "../../google-apis/sheet-api";

const featureListData = [
    {
        title: "Comprehensible Resource Library",
        subTitle:
            "Our platform offers a vast collection of high-quality teaching resources, covering a wide range of subjects and learning styles. From interactive games to beautiful flashcards and useful classroom tips, we have everything you need to enhance your lessons.",
        iconUrl: "images/icons/professional.svg",
    },
    {
        title: "Accessible Materials",
        subTitle:
            "All of our resources are available for free, ensuring that quality education is accessible to everyone. You can also easily customize our materials to fit your specific teaching needs and preferences, making them adaptable to various classroom settings.",
        iconUrl: "images/icons/comprehensive.svg",
    },
    {
        title: "User-Friendly Platform",
        subTitle:
            "Our website is designed with teachers in mind, making it easy to navigate and find the resources you need. With a teacher-centered approach, they can quickly access the materials that best suit their teaching goals.",
        iconUrl: "images/icons/patient.svg",
    },
    {
        title: "Regular Updates And Innovations",
        subTitle:
            "We are committed to staying ahead of the curve by regularly updating our resource library and incorporating the latest teaching methodologies. Pinny Teaching is your go-to source for fresh and innovative teaching ideas.",
        iconUrl: "images/icons/facilities.svg",
    },
];

export default function About() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getMembers(40, 0).then((res) => {
            setData(res);
        });
    }, []);

    pageTitle("About");
    return (
        <>
            <BannerSectionStyle3 bgUrl="/images/about/banner_bg.svg" imgUrl="/images/about/banner_img.png" title="Welcome to Pinny Teaching" subTitle="Teach with ease" />
            <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
                <FeaturesSectionStyle2 sectionTitle="Why Choose Us" imgUrl="images/about/why_choose_us.png" data={featureListData} />
            </Section>
            <Section topMd={190} topLg={145} topXl={105}>
                <TeamSection sectionTitle="Pinny Team" sectionTitleUp="MEET OUR" data={data} />
            </Section>
            <Section className="cs_footer_margin_0 mt-5">
                <BannerSectionStyle4
                    bgUrl="images/about/banner_bg_2.jpeg"
                    title="TEACH WITH EASE"
                    subTitle="We are committed to providing you with innovative and effective teaching resources to help you inspire and engage your students."
                />
            </Section>
        </>
    );
}
