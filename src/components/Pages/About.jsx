import React from "react";
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
const departmentData = [
    {
        title: "Diagnostic testing",
        subTitle: "Blood tests, imaging studies, and other tests to diagnose health conditions",
        iconUrl: "/images/icons/calendar_white.svg",
        href: "/departments/department-details",
    },
    {
        title: "Rehabilitation services",
        subTitle: "Physical therapy, occupational therapy, and other services to help patients recover from injuries",
        iconUrl: "/images/icons/calendar_white.svg",
        href: "/departments/department-details",
    },
    {
        title: "Preventive care",
        subTitle: "Annual checkups, immunizations, and health screenings care preventive",
        iconUrl: "/images/icons/calendar_white.svg",
        href: "/departments/department-details",
    },
    {
        title: "Treatment for acute and chronic conditions",
        subTitle: "Medication management, disease management, and other treatments to improve health outcomes",
        iconUrl: "/images/icons/calendar_white.svg",
        href: "/departments/department-details",
    },
    {
        title: "Mental health services",
        subTitle: "Counseling, therapy, and other services to help patients manage mental health conditions",
        iconUrl: "/images/icons/calendar_white.svg",
        href: "/departments/department-details",
    },
];

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

const funFactData = [
    { number: "20+", title: "Years of experience" },
    { number: "95%", title: "Patient satisfaction rating" },
    { number: "5000+", title: "Patients served annually" },
    { number: "10+", title: "Healthcare providers on staff" },
    { number: "22+", title: "Convenient locations in the area" },
];

const teamData = [
    {
        imgUrl: "images/about/doctor_1.png",
        name: "Dr. James Lee, MD",
        designation: "Head of Cardiologist",
        description: "With expertise in managing complex heart conditions and performing advanced cardiac procedures",
        social: [
            { icon: "fa6-brands:facebook-f", href: "/about" },
            { icon: "fa6-brands:linkedin-in", href: "/about" },
            { icon: "fa6-brands:twitter", href: "/about" },
        ],
    },
    {
        imgUrl: "images/about/doctor_2.png",
        name: "Dr. John Smith, MD",
        designation: "Emergency Medicine Physician",
        description: "With expertise in treating acute illnesses and injuries in medicine physician",
        social: [
            { icon: "fa6-brands:facebook-f", href: "/about" },
            { icon: "fa6-brands:linkedin-in", href: "/about" },
            { icon: "fa6-brands:twitter", href: "/about" },
        ],
    },
    {
        imgUrl: "images/about/doctor_3.png",
        name: "Dr. Susan Bones, MD",
        designation: "Board-certified Pediatrician",
        description: "With experience in managing complex medical conditions in children",
        social: [
            { icon: "fa6-brands:facebook-f", href: "/about" },
            { icon: "fa6-brands:linkedin-in", href: "/about" },
            { icon: "fa6-brands:twitter", href: "/about" },
        ],
    },
];

const galleryData = [
    { imgUrl: "/images/about/portfolio_2_lg.jpeg" },
    { imgUrl: "/images/about/portfolio_3_lg.jpeg" },
    { imgUrl: "/images/about/portfolio_1_lg.jpeg" },
    { imgUrl: "/images/about/portfolio_4_lg.jpeg" },
    { imgUrl: "/images/about/portfolio_5_lg.jpeg" },
];
const awardData = [
    {
        iconUrl: "/images/icons/award.svg",
        title: "Malcolm Baldrige National Quality Award",
    },
    { iconUrl: "/images/icons/award.svg", title: "HIMSS Davies Award" },
    {
        iconUrl: "/images/icons/award.svg",
        title: "Healthgrades National’s Best Hospital",
    },
    {
        iconUrl: "/images/icons/award.svg",
        title: "Joint Commission Gold Seal of Approval",
    },
];

export default function About() {
    pageTitle("About");
    return (
        <>
            <BannerSectionStyle3 bgUrl="/images/about/banner_bg.svg" imgUrl="/images/about/banner_img.png" title="Welcome to Pinny Teaching" subTitle="Teach with ease" />
            {/* <Section topMd={200} topLg={150} topXl={110}>
                <DepartmentSectionStyle2 sectionTitle="Provides Our Best Services" sectionTitleUp="SERVICES" data={departmentData} />
            </Section> */}
            <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
                <FeaturesSectionStyle2 sectionTitle="Why Choose Us" imgUrl="images/about/why_choose_us.jpeg" data={featureListData} />
            </Section>
            {/* <Section>
                <FunFactSection bgUrl="images/about/fun_fact_bg.jpeg" data={funFactData} />
            </Section> */}
            <Section topMd={190} topLg={145} topXl={105}>
                <TeamSection sectionTitle="Pinny Team" sectionTitleUp="MEET OUR" data={teamData} />
            </Section>
            {/* <Section topMd={170} topLg={120} topXl={80}>
                <GallerySection sectionTitle="Our Facilities and <br />Latest Activities" sectionTitleUp="HAVE A LOOK AT" data={galleryData} />
            </Section> */}
            {/* <Section topMd={190} topLg={145} topXl={105} bottomMd={200} bottomLg={150} bottomXl={110}>
                <AwardSectionStyle2
                    sectionTitle="Winning Awards and <br />Recognition"
                    sectionTitleUp="AWARDS"
                    sectionSubTitle="We have been recognized for our commitment to <br />excellence in healthcare."
                    data={awardData}
                />
            </Section> */}
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
