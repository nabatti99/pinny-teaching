import { Icon } from "@iconify/react";
import React from "react";

export default function ContactInfoWidget() {
    return (
        <ul className="cs_contact_widget">
            <li>
                <i className="cs_accent_bg">
                    <Icon icon="bi:facebook" />
                </i>
                Pinny Teaching
            </li>
            <li>
                <i className="cs_accent_bg">
                    <Icon icon="bi:envelope" />
                </i>
                pinnyteaching@gmail.com
            </li>
        </ul>
    );
}
