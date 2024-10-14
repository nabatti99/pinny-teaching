import React from "react";

export default function AboutSectionStyle2({ name, subTitle, imgUrl, pdfUrl }) {
    return (
        <section className="cs_shape_wrap">
            <div className="cs_shape_1 cs_position_5" />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="cs_section_heading cs_style_1">
                            <h2 className="cs_section_title cs_fs_72 m-0">{name}</h2>
                            <div className="cs_height_54 cs_height_xl_30" />
                            <p className="m-0">{subTitle}</p>
                            <div className="cs_height_120 cs_height_xl_60" />
                        </div>
                        <a href={pdfUrl} download={`${name}.pdf`} className="cs_btn cs_style_1">
                            <span>Download</span>
                            <i>
                                <img src="/images/icons/arrow_white.svg" alt="Icon" />
                                <img src="/images/icons/arrow_white.svg" alt="Icon" />
                            </i>
                        </a>
                    </div>
                    <div className="col-lg-7 offset-lg-1">
                        <img src={imgUrl} alt={name} />
                    </div>
                </div>
            </div>
        </section>
    );
}
