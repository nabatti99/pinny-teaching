import React, { useEffect, useState } from "react";
import BannerSectionStyle9 from "../Section/BannerSection/BannerSectionStyle9";
import Section from "../Section";
import BlogSectionStyle2 from "../Section/BlogSection/BlogSectionStyle2";
import Breadcrumb from "../Breadcrumb";
import { pageTitle } from "../../helpers/PageTitle";
import { getClassRoomTips } from "../../google-apis/sheet-api";

export default function ClassroomTip() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getClassRoomTips(40, 0).then((res) => {
            setData(res);
        });
    }, []);

    pageTitle("Blog");
    return (
        <>
            <Section topMd={170} bottomMd={96} bottomLg={70}>
                <Breadcrumb title="Classroom Tips" />
            </Section>
            <Section bottomMd={200} bottomLg={150} bottomXl={110}>
                {data && <BlogSectionStyle2 data={data} />}
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
