import React, { useEffect, useState } from "react";
import { pageTitle } from "../../helpers/PageTitle";
import Section from "../Section";
import AboutSectionStyle2 from "../Section/AboutSection/AboutSectionStyle2";
import BannerSectionStyle7 from "../Section/BannerSection/BannerSectionStyle7";
import { useParams } from "react-router-dom";
import { getFlashCardById } from "../../google-apis/sheet-api";
import { FlashCardHeader } from "../../google-apis/constants";
import { getFlashCardPdf } from "../../google-apis/drive-api";
import { getImageUrl } from "../../utils";

export default function FlashCardDetails() {
    const { flashCardId } = useParams();

    const [data, setData] = useState();
    const [flashCardPdf, setFlashCardPdf] = useState();

    useEffect(() => {
        getFlashCardById(Number(flashCardId)).then((res) => {
            setData(res);
        });
    }, [flashCardId]);

    useEffect(() => {
        if (!data) return;

        getFlashCardPdf(data[FlashCardHeader.DRIVE_FOLDER_ID]).then((res) => {
            setFlashCardPdf(res);
        });
    }, [data]);

    pageTitle(`${data[FlashCardHeader.NAME]} - Flash Card`);
    return (
        <>
            {/* <BreadcrumbStyle2 /> */}
            <Section topMd={135} topLg={100} topXl={100}>
                {data && (
                    <AboutSectionStyle2
                        name={data[FlashCardHeader.NAME]}
                        subTitle={data[FlashCardHeader.DESCRIPTION]}
                        imgUrl={getImageUrl(data[FlashCardHeader.THUMBNAIL_FILE_ID])}
                        pdfUrl={flashCardPdf}
                    />
                )}
            </Section>

            {/* End Appointment Section */}
            <Section className="cs_footer_margin_0" topMd={200} topLg={160} topXl={140}>
                <BannerSectionStyle7
                    imgUrl="/images/departments/banner_img_3.png"
                    bgUrl="/images/departments/banner_bg_3.svg"
                    title="TEACH WITH EASE"
                    subTitle="We are committed to providing you with innovative and effective teaching resources to help you inspire and engage your students."
                />
            </Section>
        </>
    );
}
