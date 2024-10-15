import React, { useEffect, useState } from "react";
import { getClassRoomTips, getFlashCards, getGames } from "../../google-apis/sheet-api";
import { pageTitle } from "../../helpers/PageTitle";
import Hero from "../Hero";
import Section from "../Section";
import AwardSection from "../Section/AwardSection";
import BlogSection from "../Section/BlogSection";
import DepartmentSection from "../Section/DepartmentSection";
import FeaturesSection from "../Section/FeaturesSection";
import { GameHeader } from "../../google-apis/constants";
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

export default function Home() {
    const [flashCards, setFlashCards] = useState([]);

    useEffect(() => {
        getFlashCards(40, 0).then((res) => {
            setFlashCards(res);
        });
    }, []);

    const [games, setGames] = useState([]);

    useEffect(() => {
        getGames(40, 0).then((res) => {
            setGames(res);
        });
    }, []);

    const gamesData = games.map((game) => ({
        title: game[GameHeader.NAME],
        iconUrl: "images/home_1/puzzle-alt.svg",
        href: `/games/${game[GameHeader.NO]}`,
    }));

    const [classroomTips, setClassroomTips] = useState([]);

    useEffect(() => {
        getClassRoomTips(40, 0).then((res) => {
            setClassroomTips(res);
        });
    }, []);

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
                {gamesData.length > 0 && <DepartmentSection sectionTitle="Games" bgUrl="images/home_1/department_bg.svg" data={gamesData} />}
            </Section>

            {/* End Departments Section */}
            {/* Start Award Section */}
            <Section topMd={185} topLg={140} topXl={100}>
                <AwardSection sectionTitle="Flash Cards" data={flashCards} />
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
                <BlogSection sectionTitle="Latest Update" sectionTitleUp="CLASSROOM TIPS" data={classroomTips} />
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
