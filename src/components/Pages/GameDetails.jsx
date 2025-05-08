import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GameHeader } from "../../google-apis/constants";
import { getGamePptx } from "../../google-apis/drive-api";
import { getGameById } from "../../google-apis/sheet-api";
import { pageTitle } from "../../helpers/PageTitle";
import { getImageUrl, renderP, getVideoUrl } from "../../utils";
import Section from "../Section";
import BannerSectionStyle9 from "../Section/BannerSection/BannerSectionStyle9";
import GameDetailsSection from "../Section/DoctorDetailsSection";
import VideoEmbed from "../VideoEmbed";
import CommentSection from "../Comment";
import Spacing from "../Spacing";

export default function GameDetails() {
  const { gameId } = useParams();
  const type = "games";
  const [data, setData] = useState();
  const [gamePptx, setGamePptx] = useState();

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

  pageTitle(
    [data && data[GameHeader.NAME], "Game"].filter(Boolean).join(" - ")
  );
  // const videoUrl =
  //   data?.[GameHeader.VIDEO_URL] && getVideoUrl(data[GameHeader.VIDEO_URL]);
  // const isVideoAvailable = videoUrl !== undefined;
  const rawVideoUrl = data?.[GameHeader.VIDEO_URL];
  const videoUrl = rawVideoUrl?.trim() ? getVideoUrl(rawVideoUrl) : null;
  const isVideoAvailable = Boolean(videoUrl);
  const bgUrl = videoUrl ? "none" : "/images/doctors/doctor_details_bg.svg";
  return (
    <>
      {/* <BreadcrumbStyle2 /> */}
      {data &&
        data[GameHeader.VIDEO_URL] &&
        getVideoUrl(data[GameHeader.VIDEO_URL]) && (
          <Section>
            <VideoEmbed
              videoUrl={getVideoUrl(data[GameHeader.VIDEO_URL])}
              bgUrl={"/images/doctors/doctor_details_bg.svg"}
              name={data[GameHeader.NAME]}
            />
          </Section>
        )}
      <Section bottomMd={190} bottomLg={150} bottomXl={110}>
        {data && (
          <GameDetailsSection
            bgUrl={bgUrl}
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
            isVideo={isVideoAvailable}
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
      <Section bottomMd={150} bottomLg={150} bottomXl={110}>
        {data && <CommentSection type={type} id={gameId} />}
      </Section>
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
