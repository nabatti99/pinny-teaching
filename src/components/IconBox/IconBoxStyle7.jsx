import React from "react";
import { Link } from "react-router-dom";
import { FlashCardHeader } from "../../google-apis/constants";
import { renderWithBr } from "../../utils";

export default function IconBoxStyle6(data) {
    return (
        <div className="cs_iconbox cs_style_7">
            <div className="cs_iconbox_icon">
                <img src="images/departments/icon_1.svg" alt="Icon" />
            </div>
            <h2 className="cs_iconbox_title cs_fs_32" style={{ height: "64px" }}>
                {renderWithBr(data[FlashCardHeader.NAME])}
            </h2>
            {/* <p className="cs_iconbox_subtitle m-0">{parser(subTitle)}</p> */}
            <Link to={`/flash-cards/${data[FlashCardHeader.NO]}`} className="cs_iconbox_btn cs_center">
                <img src="images/icons/arrow_white.svg" alt="Icon" />
                <img src="images/icons/arrow_white.svg" alt="Icon" />
            </Link>
        </div>
    );
}
