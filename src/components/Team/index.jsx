import React from "react";
import { MemberHeader } from "../../google-apis/constants";
import { getImageUrl } from "../../utils";

export default function Team(data) {
    return (
        <div className="cs_team cs_style_1 text-center cs_radius_20 cs_type_1">
            <div className="cs_member_img">
                <img src={getImageUrl(data[MemberHeader.THUMBNAIL_FILE_ID])} alt={data[MemberHeader.NAME]} />
            </div>
            <div className="cs_team_meta">
                <div>
                    <h3 className="cs_member_name cs_semibold cs_fs_40">{data[MemberHeader.NAME]}</h3>
                    <p className="cs_member_designation cs_fs_20 cs_heading_color">{data[MemberHeader.ROLE]}</p>
                </div>
            </div>
        </div>
    );
}
