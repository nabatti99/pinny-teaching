import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGamePptx, getGameThumbnail } from "../../google-apis/drive-api";
import { getGameById } from "../../google-apis/sheet-api";
import { pageTitle } from "../../helpers/PageTitle";
import { getImageUrl, renderP } from "../../utils";
import Section from "../Section";
import BannerSectionStyle9 from "../Section/BannerSection/BannerSectionStyle9";
import GameDetailsSection from "../Section/DoctorDetailsSection";
import { GameHeader } from "../../google-apis/constants";

export default function GameDetails() {
    const { gameId } = useParams();

    const [data, setData] = useState();
    const [gamePptx, setGamePptx] = useState();

    console.log(gamePptx);

    useEffect(() => {
        getGameById(Number(gameId)).then((res) => {
            setData(res);
        });
    }, [gameId]);

    useEffect(() => {
        if (!data) return;

        getGamePptx(data[GameHeader.DRIVE_FOLDER_ID]).then((res) => {
            setGamePptx(res);
        });
    }, [data]);

    pageTitle("Game Details");
    return (
        <>
            {/* <BreadcrumbStyle2 /> */}
            <Section bottomMd={190} bottomLg={150} bottomXl={110}>
                {data && (
                    <GameDetailsSection
                        bgUrl="/images/doctors/doctor_details_bg.svg"
                        imgUrl={getImageUrl(data[GameHeader.THUMBNAIL_FILE_ID])}
                        pptxUrl={gamePptx}
                        name={data[GameHeader.NAME]}
                        designation="Type game 1"
                        description="comment"
                        degrees={[
                            {
                                title: "Age",
                                subTitle: data[GameHeader.AGE],
                            },
                            {
                                title: "Learning Style",
                                subTitle: data[GameHeader.LEARNING_STYLE],
                            },
                            {
                                title: "Storyline",
                                subTitle: renderP(data[GameHeader.STORYLINE]),
                            },
                        ]}
                        degreesHeading="Details"
                        experiences={
                            data[GameHeader.HOW_TO_PLAY]?.split("\n").map((item) => ({
                                title: item,
                            })) || []
                        }
                        experiencesHeading="How to play"
                        awards={
                            data[GameHeader.NOTES]?.split("\n").map((item) => ({
                                title: item,
                            })) || []
                        }
                        awardHeading="Notes"
                    />
                )}
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
