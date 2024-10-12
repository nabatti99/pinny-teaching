import React from "react";
import BreadcrumbStyle2 from "../Breadcrumb/BreadcrumbStyle2";
import Section from "../Section";
import BannerSectionStyle9 from "../Section/BannerSection/BannerSectionStyle9";
import GameDetailsSection from "../Section/DoctorDetailsSection";
import AppointmentSectionStyle2 from "../Section/AppointmentSection/AppointmentSectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";

export default function GameDetails() {
    pageTitle("Game Details");
    return (
        <>
            {/* <BreadcrumbStyle2 /> */}
            <Section bottomMd={190} bottomLg={150} bottomXl={110}>
                <GameDetailsSection
                    bgUrl="/images/doctors/doctor_details_bg.svg"
                    imgUrl="/images/doctors/doctor_details.jpeg"
                    name="Game 2"
                    designation="Type game 1"
                    description="comment"
                    social={[
                        { icon: "fa6-brands:facebook-f", href: "/about" },
                        { icon: "fa6-brands:linkedin-in", href: "/about" },
                        { icon: "fa6-brands:twitter", href: "/about" },
                    ]}
                    contactInfo={[
                        { iconUrl: "/images/icons/call.svg", title: "+123+456-7890" },
                        {
                            iconUrl: "/images/icons/envlope.svg",
                            title: "sarahlee@prohealth.com",
                        },
                    ]}
                    contactInfoHeading="Contact Info"
                    schedules={[
                        { day: "Monday", time: "09.00-12.00" },
                        { day: "Wednesday", time: "15.00-18.00" },
                        { day: "Friday", time: "09.00-12.00" },
                    ]}
                    scheduleHeading="Appointment Schedules"
                    degrees={[
                        {
                            title: "University of California, San Francisco.",
                            subTitle: "Medical degree",
                        },
                        {
                            title: "University of California, Los Angeles (UCLA) Medical Center.",
                            subTitle: "Completed residency training in psychiatry",
                        },
                        {
                            title: "University of California, Berkeley.",
                            subTitle: "Master of Public Health degree",
                        },
                    ]}
                    degreesHeading="Details"
                    experiences={[
                        {
                            title: "Worked in community mental health clinics, private practice, and academic medical centers.",
                        },
                        {
                            title: "Expertise in the treatment of mood disorders, anxiety disorders, and psychotic disorders.",
                        },
                        {
                            title: `Special interest in women's mental health and perinatal psychiatry.`,
                        },
                        {
                            title: "Experience managing complex cases that involve both mental health and medical issues.",
                        },
                    ]}
                    experiencesHeading="How to play"
                    awards={[
                        { title: "Fellow of the American Psychiatric Association (FAPA)." },
                        {
                            title: "Recognized for research contributions with grants from the National Institute of Mental Health (NIMH) and the American Foundation for Suicide Prevention.",
                        },
                    ]}
                    awardHeading="Notes"
                />
            </Section>
            {/* <Section bottomMd={200} bottomLg={150} bottomXl={110}>
                <AppointmentSectionStyle2
                    bgUrl="/images/home_2/appointment_bg.svg"
                    imgUrl="/images/home_2/appointment_img.png"
                    sectionTitle="Appointment"
                    sectionTitleUp="BOOK AN"
                />
            </Section> */}

            <Section className="cs_footer_margin_0">
                <BannerSectionStyle9
                    title="TEACH WITH EASE"
                    subTitle="We are committed to providing you with innovative and effective teaching resources to help you inspire and engage your students."
                    imgUrl="/images/doctors/banner_img_3.png"
                />
            </Section>
        </>
    );
}
