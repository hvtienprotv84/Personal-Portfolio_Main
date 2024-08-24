"use client";
import React from 'react';
import Image from "next/image";
import Dropdown from './Dropdown'

import { useTranslation } from 'react-i18next';
import { IoLanguage } from 'react-icons/io5';

import VN from "../../public/icon-language/vietnam.svg"
import USA from "../../public/icon-language/my.svg"

type Props = {}

function MultiLang({ }: Props) {
    // Multi Language Functions
    const [t, i18n] = useTranslation("global");


    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);
        document.documentElement.className = lang;
        document.documentElement.setAttribute('lang', lang);
    };

    if (!localStorage.getItem("language")) {
        localStorage.setItem("language", "en");
    }

    if(localStorage.getItem("language") === "en") {
        document.documentElement.setAttribute('dir', "ltr");
        document.title = "Vĩnh Tiến - Portfolio - EN";
        
    }
    else if (localStorage.getItem("language") === "vn") {
        document.documentElement.setAttribute('dir', "ltr"); 
        // nếu muốn khi chuyển ngôn ngữ và chuyển hướng từ trái sang phải thì dùng "rtl" thay thế cho "ltr"
        document.title = "Vĩnh Tiến - Portfolio - VN";
    }

    

    // Dropdown values
    const options = [
        { value: 'VN', label: <button className="flex items-center justify-center mt-1" onClick={() => handleChangeLanguage("vn")}><p>VN</p> &#10240;<Image src={VN} className="rounded" alt="IRAN Flag" loading="lazy" /></button> },
        { value: 'EN', label: <button className="flex items-center justify-center mt-1" onClick={() => handleChangeLanguage("en")}><p>EN</p> &#10240;<Image src={USA} className="rounded" alt="USA Flag" loading="lazy" /></button> },
    ];

    return (
        <div className="text-gray-100 dark:text-white">
            <Dropdown
                options={options}
                text={<button><IoLanguage /></button>}
            />
        </div>
    )
}

export default MultiLang;