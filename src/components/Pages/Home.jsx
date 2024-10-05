import React from "react";
import Hero from "../Hero";
import AboutSection from "../Section/AboutSection";
import BrandsSection from "../Section/BrandsSection";
import Banner from "../Section/BannerSection";
import Section from "../Section";
import FeaturesSection from "../Section/FeaturesSection";
import TestimonialSection from "../Section/TestimonialSection";
import BlogSection from "../Section/BlogSection";
import AppointmentSection from "../Section/AppointmentSection";
import FaqSection from "../Section/FaqSection";
import AwardSection from "../Section/AwardSection";
import DepartmentSection from "../Section/DepartmentSection";
import { pageTitle } from "../../helpers/PageTitle";
const featureListData = [
    {
        iconSrc: "/images/home_1/compassion.svg",
        title: "Accessibility",
        subTitle: "We understand the challenges teachers face in finding quality teaching resources, so we've made our materials freely accessible worldwide.",
    },
    {
        iconSrc: "/images/home_1/excellence.svg",
        title: "Diversity",
        subTitle:
            "We are committed to providing excellent medical care and services to our patients. We believe in continuously improving our skills, knowledge, and resources to ensure that we deliver the highest quality care possible.",
    },
    {
        iconSrc: "/images/home_1/integrity.svg",
        title: "Adaptability",
        subTitle: `We are committed to providing adaptable resources that can be easily modified to fit different teaching styles, subjects, and grade levels.`,
    },
    {
        iconSrc: "/images/home_1/respect.svg",
        title: "Creativity",
        subTitle: "We believe that creativity is essential for engaging students, so we provide resources that inspire and encourage innovative teaching approaches.",
    },
    {
        iconSrc: "/images/home_1/teamwork.svg",
        title: "Efficiency",
        subTitle: "We acknowledge the time constraints educators face, so we offer efficient resources that can streamline lesson planning and preparation to save more time.",
    },
];
const brandData = [
    { imgUrl: "images/brand_1.png", imgAlt: "Brand" },
    { imgUrl: "images/brand_2.png", imgAlt: "Brand" },
    { imgUrl: "images/brand_3.png", imgAlt: "Brand" },
    { imgUrl: "images/brand_4.png", imgAlt: "Brand" },
    { imgUrl: "images/brand_5.png", imgAlt: "Brand" },
    { imgUrl: "images/brand_6.png", imgAlt: "Brand" },
    { imgUrl: "images/brand_7.png", imgAlt: "Brand" },
    { imgUrl: "images/brand_8.png", imgAlt: "Brand" },
];
const faqData = [
    {
        title: "What services does ProHealth offer?",
        content:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
    },
    {
        title: "How do I schedule an appointment with ProHealth?",
        content:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
    },
    {
        title: "Do you accept insurance?",
        content:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
    },
    {
        title: "What should I bring to my appointment?",
        content:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
    },
    {
        title: "How do I request a prescription refill?",
        content:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
    },
];
const blogData = [
    {
        title: "The Benefits of Mindfulness Meditation for Stress and Anxiety",
        thumbUrl: "images/home_1/post_1.jpeg",
        date: "May 1, 2023",
        btnText: "Learn More",
        href: "/blog/blog-details",
        socialShare: true,
    },
    {
        title: "Healthy Eating on a Budget: Tips and Strategies",
        thumbUrl: "images/home_1/post_2.jpeg",
        date: "May 4, 2023",
        btnText: "Learn More",
        href: "/blog/blog-details",
        socialShare: true,
    },
    {
        title: "The Importance of Regular Cancer Screenings and Early Detection",
        thumbUrl: "images/home_1/post_3.jpeg",
        date: "May 1, 2023",
        btnText: "Learn More",
        href: "/blog/blog-details",
        socialShare: true,
    },
];
const awardData = [
    {
        title: "Malcolm Baldrige National Quality Award",
        subTitle:
            "This award recognizes healthcare organizations that have demonstrated excellence in leadership, strategic planning, customer and employee satisfaction, and operational efficiency.",
        iconUrl: "images/icons/award.svg",
    },
    {
        title: "HIMSS Davies Award",
        subTitle: "This award recognizes healthcare organizations that have used health information technology to improve patient outcomes and reduce costs.",
        iconUrl: "images/icons/award.svg",
    },
    {
        title: "Healthgrades National’s Best Hospital",
        subTitle: "This recognition is given to hospitals that have achieved high ratings for clinical quality and patient safety across multiple specialties and procedures.",
        iconUrl: "images/icons/award.svg",
    },
    {
        title: "Joint Commission Gold Seal of Approval",
        subTitle: "This recognition is given to hospitals that have met rigorous standards for patient safety and quality of care.",
        iconUrl: "images/icons/award.svg",
    },
];
const departmentData = [
    {
        title: "Auditory Learners",
        iconUrl: "images/home_1/department_icon_1.svg",
        href: "/departments/department-details",
    },
    {
        title: "Visual Learners",
        iconUrl: "images/home_1/department_icon_2.svg",
        href: "/departments/department-details",
    },
    {
        title: "Kinesthetic Learners",
        iconUrl: "images/home_1/department_icon_3.svg",
        href: "/departments/department-details",
    },
    {
        title: "Kindergarten",
        iconUrl: "images/home_1/department_icon_4.svg",
        href: "/departments/department-details",
    },
    {
        title: "Young Learners",
        iconUrl: "images/home_1/department_icon_5.svg",
        href: "/departments/department-details",
    },
    {
        title: "Adults",
        iconUrl: "images/home_1/department_icon_6.svg",
        href: "/departments/department-details",
    },
];

export default function Home() {
    pageTitle("Home");
    return (
        <>
            <Hero
                title="Teach With Ease"
                subTitle="We are committed to providing you with innovative and effective teaching resources to help you inspire and engage your students."
                bgUrl="/images/home_1/hero_bg.jpeg"
                imgUrl="/images/home_1/hero_img.png"
                videoBtnText="See how we work"
                videoUrl="https://www.youtube.com/embed/VcaAVWtP48A"
                infoList={[
                    {
                        title: "Hotline",
                        subTitle: "123-456-7890",
                        iconUrl: "/images/contact/icon_1.svg",
                    },
                    {
                        title: "Ambulance",
                        subTitle: "876-256-876",
                        iconUrl: "/images/icons/ambulance.svg",
                    },
                    {
                        title: "Location",
                        subTitle: "New York, US",
                        iconUrl: "/images/icons/pin.svg",
                    },
                ]}
                btnText="Book Now"
                btnUrl="/appointments"
            />
            {/* Start Feature Section */}
            <Section topMd={185} topLg={140} topXl={100} bottomMd={185} bottomLg={140} bottomXl={100}>
                <FeaturesSection sectionTitle="Our Values" data={featureListData} />
            </Section>
            {/* End Feature Section */}
            {/* Start About Section */}
            {/* <Section>
                <AboutSection
                    imgUrl="/images/home_1/about.png"
                    spiningImgUrl="/images/home_1/about_mini.svg"
                    title="About Us"
                    subTitle="PRO HEALTH"
                    featureList={[
                        {
                            featureListTitle: "ProHealth is a team of experienced medical professionals",
                            featureListSubTitle:
                                "Dedicated to providing top-quality healthcare services. We believe in a holistic approach to healthcare that focuses on treating the whole person, not just the illness or symptoms.",
                        },
                    ]}
                />
            </Section> */}
            {/* End About Section */}
            {/* Start Departments Section */}
            <Section topMd={185} topLg={150} topXl={110}>
                <DepartmentSection sectionTitle="Games" bgUrl="images/home_1/department_bg.svg" data={departmentData} />
            </Section>

            {/* End Departments Section */}
            {/* Start Award Section */}
            <Section topMd={185} topLg={140} topXl={100}>
                <AwardSection sectionTitle="Flash Cards" data={awardData} />
            </Section>
            {/* End Award Section */}
            {/* Start Testimonial */}
            {/* <Section topMd={185} topLg={140} topXl={100} bottomMd={200} bottomLg={150} bottomXl={110}>
                <TestimonialSection sectionTitle="Some Reviews" sectionTitleDown="Of our clients" />
            </Section> */}
            {/* End Testimonial */}
            {/* Start Banner Section */}
            {/* <Section>
                <Banner
                    bgUrl="images/home_1/cta_bg.svg"
                    imgUrl="images/home_1/cta_img.png"
                    title="Don’t Let Your Health Take a Backseat!"
                    subTitle="Schedule an appointment with one of our experienced medical professionals today!"
                />
            </Section> */}
            {/* End Banner Section */}
            {/* Start Blog Section */}
            <Section topMd={190} topLg={145} topXl={105}>
                <BlogSection sectionTitle="Latest Update" sectionTitleUp="CLASSROOM TIPS" data={blogData} />
            </Section>
            {/* End Blog Section */}
            {/* Start Appointment Section */}
            {/* <Section topMd={190} topLg={145} topXl={105} id="appointment">
                <AppointmentSection sectionTitle="Appointment" sectionTitleUp="BOOK AN" imgUrl="/images/home_1/appointment.jpeg" />
            </Section> */}
            {/* End Appointment Section */}
            {/* Start FAQ Section */}
            {/* <Section topMd={190} topLg={145} topXl={105}>
                <FaqSection data={faqData} sectionTitle="Usually Asked" sectionTitleUp="What People" />
            </Section> */}
            {/* End FAQ Section */}
            {/* Start Brand Section */}
            {/* <Section topMd={200} topLg={150} topXl={110} bottomMd={200} bottomLg={150} bottomXl={110}>
                <BrandsSection data={brandData} />
            </Section> */}
            {/* End Brand Section */}
        </>
    );
}
