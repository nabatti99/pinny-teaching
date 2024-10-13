import React from "react";
import { Link } from "react-router-dom";
import { GameHeader } from "../../sheet-api";
import { renderWithBr } from "../../utils";

export default function TeamStyle2(data) {
    return (
        <div className="cs_team cs_style_1 cs_type_2 text-center cs_radius_20 overflow-hidden">
            <div className="cs_member_img">
                <Link to={`/games/${data[GameHeader.NO]}`} className="d-block">
                    <img src={"https://picsum.photos/200/300"} alt={data[GameHeader.NAME]} />
                </Link>
                {/* <div className="cs_label cs_white_color cs_accent_bg">{department}</div> */}
            </div>
            <div className="cs_team_meta cs_white_bg">
                <div>
                    <h3 className="cs_member_name cs_fs_32">
                        <Link to={`/games/${data[GameHeader.NO]}`}>{renderWithBr(data[GameHeader.NAME])}</Link>
                    </h3>
                    <p className="cs_member_designation cs_heading_color cs_medium">{data[GameHeader.LEARNING_STYLE]}</p>
                    <p className="cs_member_description">{data[GameHeader.AGE]}</p>
                </div>
                {/* <div>
                    <div className="cs_social_links">
                        {social?.map((item, index) => (
                            <Link to={item.href} key={index}>
                                <Icon icon={item.icon} />
                            </Link>
                        ))}
                    </div>
                </div> */}
            </div>
        </div>
    );
}
