import React from "react";
import { Link } from "react-router-dom";
import { ClassroomTipHeader } from "../../google-apis/constants";
import { getImageUrl } from "../../utils";

export default function Post(data) {
    return (
        <div className={`cs_post cs_style_1`}>
            <Link to={`/classroom-tips/${data[ClassroomTipHeader.NO]}`} className="cs_post_thumb cs_view_mouse">
                <img src={getImageUrl(data[ClassroomTipHeader.THUMBNAIL_FILE_ID])} alt={data[ClassroomTipHeader.NAME]} />
            </Link>
            <div className="cs_post_info">
                <div>
                    <h2 className="cs_post_title cs_semibold cs_fs_32">
                        <Link to={`/classroom-tips/${data[ClassroomTipHeader.NO]}`}>{data[ClassroomTipHeader.NAME]}</Link>
                    </h2>
                </div>
            </div>
        </div>
    );
}
