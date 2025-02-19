import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClassroomTipHeader } from "../../google-apis/constants";
import { getClassroomTipDocument } from "../../google-apis/drive-api";
import { getClassRoomTipById } from "../../google-apis/sheet-api";
import { pageTitle } from "../../helpers/PageTitle";
import { getImageUrl } from "../../utils";
import Breadcrumb from "../Breadcrumb";
import Section from "../Section";
import BannerSectionStyle9 from "../Section/BannerSection/BannerSectionStyle9";
import Spacing from "../Spacing";
import CommentSection from "../Comment";

export default function ClassroomTipDetails() {
  const { classroomTipId } = useParams();
  const type = "tips";
  const [data, setData] = useState();
  const [contentHtml, setContentHtml] = useState();

  useEffect(() => {
    getClassRoomTipById(Number(classroomTipId)).then((res) => {
      setData(res);
    });
  }, [classroomTipId]);

  useEffect(() => {
    if (!data) return;

    getClassroomTipDocument(data[ClassroomTipHeader.DOCUMENT_FILE_ID]).then(
      (res) => {
        setContentHtml(res);
      }
    );
  }, [data]);

  pageTitle(
    [data && data[ClassroomTipHeader.NAME], "Classroom Tip"]
      .filter(Boolean)
      .join(" - ")
  );
  return data ? (
    <>
      <Section topMd={170} bottomMd={54} bottomLg={54}>
        <Breadcrumb title={data[ClassroomTipHeader.NAME]} />
      </Section>
      <div className="container">
        <div className="cs_blog_details_info">
          <div className="cs_blog_details_info_left">
            <div className="cs_blog_details_date">
              {data[ClassroomTipHeader.DATE_AND_AUTHOR]}
            </div>
          </div>
        </div>
        <Spacing md="55" />
        <img
          src={getImageUrl(data[ClassroomTipHeader.THUMBNAIL_FILE_ID])}
          alt={data[ClassroomTipHeader.NAME]}
          className="w-100 cs_radius_20"
        />
        <Spacing md="90" lg="50" />
        <div className="row">
          <div className="col-lg-12">
            <div
              className="cs_blog_details"
              dangerouslySetInnerHTML={{
                __html: contentHtml,
              }}
            ></div>
          </div>
        </div>
      </div>
      <Section bottomMd={150} bottomLg={150} bottomXl={110}>
        {data && <CommentSection type={type} id={classroomTipId} />}
      </Section>
      {/* <Spacing md="200" xl="150" lg="110" /> */}
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle9
          title="TEACH WITH EASE"
          subTitle="We are committed to providing you with innovative and effective teaching resources to help you inspire and engage your students."
          imgUrl="/images/doctors/banner_img_3.png"
        />
      </Section>
    </>
  ) : null;
}
