import React from "react";
import { FlashCardHeader } from "../../google-apis/constants";

export default function IconBoxStyle1(data) {
    return (
        <a href={`/flash-cards/${data[FlashCardHeader.NO]}`} className="d-block cs_iconbox cs_style_1 cs_shadow_1 cs_radius_15">
            <div className="cs_iconbox_top">
                <div className="cs_iconbox_icon cs_radius_15 cs_accent_bg cs_center">
                    <img src="images/icons/cards-blank.svg" alt="Icon" />
                </div>
                <h2 className="cs_iconbox_title cs_medium cs_fs_20 m-0">{data[FlashCardHeader.NAME]}</h2>
            </div>
            <p className="cs_iconbox_text">{data[FlashCardHeader.DESCRIPTION]}</p>
        </a>
    );
}
