(this["webpackJsonpmy-pf"]=this["webpackJsonpmy-pf"]||[]).push([[0],{30:function(n,e,t){},31:function(n,e,t){},35:function(n,e,t){"use strict";t.r(e);var i,a=t(2),r=t.n(a),c=t(22),o=t.n(c),s=(t(30),t(3)),d=t(17),l=(t(31),t(4)),p=t(12),b=t(20),m=t(1),h=0;var x,u=function(n){var e=n.onThemeChanged,t=Object(a.useContext)(Q),r=Object(a.useState)(!1),c=Object(d.a)(r,2),o=c[0],x=c[1],u=Object(a.useRef)(null),f=Object(a.useRef)(null),g=function(){var n=document.querySelector(".screen");if(n)document.body.removeChild(n);else{var e=document.createElement("div");e.className="screen",e.onclick=function(){v()},document.body.appendChild(e)}},v=function(){u.current.querySelector(".menus").classList.toggle("drop"),g(),x((function(n){return!n}))},O=function(){h||(h=window.setTimeout((function(){console.log(123),h=0,w()}),50))},w=function(){var n=document.documentElement,e=n.scrollHeight,t=n.scrollTop/(e-window.innerHeight)*100;f.current.style.width=t+"%"};Object(a.useEffect)((function(){if("dark"===t){var n,e=null===(n=u.current)||void 0===n?void 0:n.querySelector(".theme");null===e||void 0===e||e.classList.add("dark")}window.addEventListener("scroll",O),w()}),[]);var k=Object(l.a)(i||(i=Object(s.a)(["\n        z-index: 101;\n        position: fixed;\n        top: 0;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        width: 100%;\n        height: 70px;\n        padding: 0 50px;\n        color: var(--color-main);\n        background-color: rgb(0, 0, 0, 0.7);\n        backdrop-filter: blur(7px);\n        .tit {\n            font-size: 30px;\n            font-weight: bold;\n            cursor: pointer;\n            svg {\n                margin-right: 10px;\n                transform: translateY(3px);\n            }\n        }\n        .menus {\n            display: flex;\n            .theme {\n                display: flex;\n                align-items: center;\n                width: 28px;\n                overflow: hidden;\n                transition: .3s;\n                cursor: pointer;\n                // border: 1px solid red;\n                svg {\n                    min-width: 22px;\n                    min-height: 22px;\n                    margin: 0 2px;\n                    transition: .3s;\n                }\n            }\n            .theme.dark {\n                svg {\n                    transform: translateX(-25px);\n                }\n            }\n        }\n        .icon {\n            display: none;\n            cursor: pointer;\n            transition: .3s;\n            &:hover {\n                transform: scale(1.1);\n            }\n        }\n\n        .progress-bar {\n            position: absolute;\n            bottom: 0;\n            left: 0;\n            height: 2px;\n            background-color: var(--color-main);\n            transition: .2s;\n        }\n\n        @media screen and (max-width: 900px){\n            .menus {\n                display: none;\n            }\n            .icon {\n                display: unset;\n            }\n            .drop {\n                position: fixed;\n                top: 70px;\n                right: 0;\n                display: flex !important;\n                flex-direction: column;\n                border-bottom-left-radius: 6px;\n                border-bottom-right-radius: 6px;\n                background-color: rgb(0, 0, 0, 0.7);\n                backdrop-filter: blur(7px);\n                .theme {\n                    position: relative;\n                    left: 50%;\n                    transform: translateX(-50%);\n                    margin-bottom: 20px;\n                    // height: 45px;\n                }\n            }\n        }\n\n        @media screen and (max-width: 420px){\n            padding: 0 10px;\n        }\n    "])));return Object(m.b)("div",{css:k,ref:u,children:[Object(m.a)("div",{className:"tit",onClick:function(){document.documentElement.scrollTo(0,0)},children:Object(m.a)(p.b,{})}),Object(m.b)("div",{className:"menus",children:[Object(m.b)("div",{className:"theme",onClick:function(n){var t=n.currentTarget.classList;t.toggle("dark"),e(t.contains("dark"))},children:[Object(m.a)(b.b,{color:"#ffe000"}),Object(m.a)(b.a,{color:"#efff00"})]}),Object(m.a)(j,{text:"Career",targ:"Career"}),Object(m.a)(j,{text:"Team Projects",targ:"TeamProjects"}),Object(m.a)(j,{text:"Projects",targ:"Projects"}),Object(m.a)(j,{text:"Contact",targ:"Contact"})]}),o?Object(m.a)(p.a,{className:"icon",size:"30",color:"white",onClick:v}):Object(m.a)(p.d,{className:"icon",size:"30",color:"white",onClick:v}),Object(m.a)("div",{ref:f,className:"progress-bar"})]})};var f,g=Object(l.a)(x||(x=Object(s.a)(["\n    width: fit-content;\n    box-sizing: content-box;\n    margin: 0 20px;\n    border-radius: var(--radius);\n    cursor: pointer;\n    text-decoration: none;\n    transition: 1s;\n    .txt {\n        text-align: center;\n        color: white;\n        font-size: 21px;\n        font-weight: bold;\n        padding: 3px 0;\n    }\n    .bar {\n        height: 5px;\n        width: 0px;\n        background-color: var(--color-main);\n        border-radius: var(--radius);\n        transition: .3s;\n    }\n    &:hover {\n        .bar {\n            width: 100%;\n        }\n    }\n\n    @media screen and (max-width: 900px){\n        .txt {\n            transition: .3s;\n            font-size: 18px;\n            padding: 0 20px 25px 20px;\n            &:hover {\n                color: var(--color-main);\n            }\n        }\n        .bar {\n            display: none;\n        }\n    }\n"]))),j=function(n){var e=n.text,t=n.targ;return Object(m.b)("a",{css:g,onClick:function(){var n=document.querySelector("#"+t);n&&document.documentElement.scrollTo(0,n.getBoundingClientRect().top+window.pageYOffset-70)},children:[Object(m.a)("div",{className:"txt",children:e}),Object(m.a)("div",{className:"bar"})]})};var v,O=function(n){return Object(l.a)(f||(f=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    .txt {\n        white-space: nowrap;\n        font-size:","px;\n        font-weight: bold;\n        color: var(--color-main);\n        .hide {\n            display: none;\n        }\n    }\n    .cursor {\n        width: 4px;\n        height: ","px;\n        margin-left: 5px;\n        transition: .3s;\n        background-color: white;\n        animation-name: blink;\n        animation-duration: 1.1s;\n        animation-timing-function: ease;\n        animation-iteration-count: infinite;\n    }\n    \n    @keyframes blink {\n        0% {opacity: 0;}\n        50% {opacity: 1;}\n        100% {opacity: 0;}\n    }\n\n    @media screen and (max-width: 710px){\n        .txt {\n          font-size: 28px;\n        }\n        .cursor {\n          height: 35px;\n        }\n    }\n\n    @media screen and (max-width: 420px){\n        .txt {\n          font-size: 22px;\n        }\n        .cursor {\n            height: 25px;\n        }\n    }\n"])),n,n)},w=function(n){var e=n.text,t=n.size,i=void 0===t?45:t,r=e.split(""),c=Object(a.useRef)(null),o=Object(a.useRef)(0);return Object(a.useEffect)((function(){return o.current=window.setInterval((function(){var n=c.current.querySelector(".hide");n?n.classList.remove("hide"):clearInterval(o.current)}),130),function(){return clearInterval(o.current)}})),Object(m.b)("div",{css:O(i),children:[Object(m.a)("div",{className:"txt",ref:c,children:r.map((function(n,e){return Object(m.a)("span",{className:"hide",children:n},e)}))}),Object(m.a)("div",{className:"cursor"})]})};var k,N,y=function(n){var e=n.size,t=n.width;return Object(l.a)(v||(v=Object(s.a)(["\n    width: ","px;\n    font-size: ","px;\n    overflow: hidden;\n    margin: 0 10px 10px 0;\n    text-align: center;\n    border-bottom: 1px solid var(--color-main);\n    .txt-box {\n        height: ","px;\n        transition: .8s;\n        .txt {\n            height: ","px;\n            width: ","px;\n            min-width: ","px;\n        }\n    }\n\n    @media screen and (max-width: 710px){\n        font-size: 23px;\n    }\n\n    @media screen and (max-width: 420px){\n        width: 245px;\n        font-size: 19px;\n        .txt-box {\n            .txt {\n                min-width: unset;\n                width: unset;\n            }\n        }\n    }\n"])),t,e,e+12,e+12,t,t)},z=function(n){var e=n.textList,t=n.size,i=void 0===t?20:t,r=n.width,c=void 0===r?350:r,o=Object(a.useRef)(0),s=Object(a.useRef)(0),d=Object(a.useRef)(null);return Object(a.useEffect)((function(){var n=d.current.querySelector(".txt-box");return s.current=window.setInterval((function(){n.style.transform="translateY(calc(100% * -".concat(o.current,"))"),o.current=o.current<e.length-1?o.current+1:0}),2800),function(){return clearInterval(s.current)}}),[]),Object(m.a)("div",{css:y({size:i,width:c}),ref:d,children:Object(m.a)("div",{className:"txt-box",children:e.map((function(n,e){return Object(m.a)("div",{className:"txt",children:n},e)}))})})},S=t(11),C=Object(l.a)(k||(k=Object(s.a)(["\n    opacity: 0;\n    transform: translateY(130px);\n    &.fadein {\n        opacity: 1;\n        transform: translateY(0);\n    }\n    transition: 1s;\n"])));var L,T=function(n){return Object(l.a)(N||(N=Object(s.a)(["\n    color: ",";\n    font-size: 19px;\n    padding: 0 20px;\n    ","\n    a {\n        font-weight: bold;\n        margin: 0 5px;\n        /* "," */\n    }\n    .desc {\n        > div {\n            line-height: 33px;\n            span {\n                font-weight: bold;\n            }\n        }\n    }\n    .tech {\n        margin-top: 10px;\n        > div {\n            display: flex;\n            align-items: center;\n            .el {\n                width: 120px;\n                &::before {\n                    content: '-';\n                    margin: 0 15px;\n                }\n            }\n        }\n    }\n\n    @media screen and (max-width: 710px){\n        .tech {\n            display: flex;\n            flex-wrap: wrap;\n            > div {\n                .el {\n                    display: none;\n                }\n            }\n        }\n    }\n"])),"dark"===n?"white":"var(--color-dark)",C,"dark"===n?"":"color: blue;")},R=function(n){Object(S.a)(n);var e=Object(a.useContext)(Q);return Object(m.b)("div",{css:T(e),"data-fade-in":!0,children:[Object(m.b)("div",{className:"desc",children:[Object(m.b)("div",{children:["\uc5e0\ub85c (2018.01 ~) ",Object(m.a)("a",{href:"http://www.emro.co.kr/",target:"blank",children:"http://www.emro.co.kr"})]}),Object(m.a)("div",{children:"\uc804\uc790\uad6c\ub9e4 \uc194\ub8e8\uc158\uc744 \uac1c\ubc1c, \uacf5\uae09\ud558\ub294 IT\uae30\uc5c5\uc5d0\uc11c Front-End \uac1c\ubc1c\uc744 \ub9e1\uc558\uc2b5\ub2c8\ub2e4."}),Object(m.b)("div",{children:["Javascript / CSS / HTML \uacfc",Object(m.a)("a",{href:"https://library.polymer-project.org/3.0/docs/devguide/feature-overview",target:"blank",children:"PolymerJS"}),"\ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c"]}),Object(m.a)("div",{children:"\uc0ac\uc6a9\ud558\uc5ec Front \uac1c\ubc1c\uc744 \uc9c4\ud589\ud558\uc600\uc2b5\ub2c8\ub2e4."})]}),Object(m.a)("br",{}),Object(m.a)("div",{children:"\uac1c\ubc1c \ud658\uacbd"}),Object(m.b)("div",{className:"tech",children:[Object(m.b)("div",{children:[Object(m.a)("div",{className:"el",children:"Front"}),Object(m.a)(P,{text:"Javascript"}),Object(m.a)(P,{text:"HTML"}),Object(m.a)(P,{text:"CSS"}),Object(m.a)(P,{text:"PolmyerJS"})]}),Object(m.b)("div",{children:[Object(m.a)("div",{className:"el",children:"Server"}),Object(m.a)(P,{text:"Java"}),Object(m.a)(P,{text:"Spring Framework"}),Object(m.a)(P,{text:"Oracle RDB"})]}),Object(m.b)("div",{children:[Object(m.a)("div",{className:"el",children:"DevOps"}),Object(m.a)(P,{text:"Jenkins"}),Object(m.a)(P,{text:"FTP"})]}),Object(m.b)("div",{children:[Object(m.a)("div",{className:"el",children:"\ud611\uc5c5\ud234"}),Object(m.a)(P,{text:"Jira"}),Object(m.a)(P,{text:"Confluence"}),Object(m.a)(P,{text:"SVN"})]})]})]})};var E,P=function(n){var e=n.text,t=n.color,i=Object(a.useContext)(Q),r=Object(l.a)(L||(L=Object(s.a)(["\n        display: flex;\n        align-items: center;\n        padding: 2px 10px;\n        width: fit-content;\n        border-radius: var(--radius);\n        font-size: 16px;\n        font-weight: 500;  \n        white-space: nowrap;\n\n        ","\n\n        ","\n\n        margin: 5px 15px 5px 0;\n        transition: .3s;\n    \n        @media screen and (max-width: 420px){\n            font-size: 14px;\n            padding: 2px 5px;\n        }\n    "])),"dark"===i?"\n            background-color: #545454;\n            color: white;\n            ":"\n            background-color: #545454;\n            color: white;\n        ",t?"\n            background-color: ".concat(t,";\n        "):"");return Object(m.a)("div",{css:r,children:e})},D=t(6),J=t(23);var U,_=function(n){return Object(l.a)(E||(E=Object(s.a)(["\n    padding: 20px 0;\n    margin-bottom: 100px;\n    ","\n    .wrapper {\n        display: flex;\n        transition: 1s;\n        .preview {\n            position: relative;\n            width: 550px;\n            min-width: 550px;\n            height: 400px;\n            /* padding: 40px; */\n            overflow: hidden;\n            border-radius: var(--radius);\n            transition: .5s;\n\n            ","\n            \n            img {\n                z-index: 1;\n                position: relative;\n                width: 100%;\n                height: 100%;\n                border-radius: 10px;\n                box-shadow: 0 0 15px -3px black;\n                transition: .3s;\n                &:hover {\n                    transform: scale(1.1);\n                }\n            }\n            [class*='cir'] {\n                position: absolute;\n                border-radius: 50%;\n                transition: .5s;\n                filter: grayscale(1);\n            }\n            .cir1 {\n                width: 150px;\n                height: 150px;\n                top: -50px;\n                left: -50px;\n                background-color: #bfc5c4;\n            }\n            .cir2 {\n                width: 110px;\n                height: 110px;\n                top: 300px;\n                left: 400px;\n                background-color: #8affe4;\n            }\n            .cir3 {\n                width: 100px;\n                height: 100px;\n                top: 300px;\n                left: -10px;\n                background-color: #9ed5b2;\n            }\n            .cir4 {\n                width: 70px;\n                height: 70px;\n                top: 0;\n                left: 410px;\n                background-color: #80ffad;\n            }\n        }\n\n        .title-box {\n            display: flex;\n            .tit {\n                color: ",";\n                font-weight: 600;\n                font-size: 30px;\n                margin-bottom: 20px;\n            }\n            span {\n                margin: 15px 0 0 25px;\n                ","\n            }\n        }\n\n        .explain {\n            padding-left: 40px;\n            flex-grow: 1;\n            color: ",";\n            transition: 1s;\n            .for {\n                font-size: 20px;\n                margin: 6px 0;\n            }\n            .team {\n                margin-bottom: 15px;\n                line-height: 30px;\n                font-weight: bold;\n                ","\n                span {\n                    &::before {\n                        content: '-';\n                        margin: 0 10px;\n                    }\n                } \n            }\n            > .desc {\n                white-space: pre-line;\n                font-size: 18px;\n                line-height: 30px;\n                margin-bottom: 10px;\n            }\n            .tech {\n                display: flex;\n                flex-wrap: wrap;\n                margin-top: 7px;\n            }\n            .link {\n                margin: 15px 0 0 15px;\n                a {\n                    color: unset;\n                }\n                svg {\n                    margin-right: 15px;\n                    transition: .3s;\n                    &:hover {\n                        cursor: pointer;\n                        transform: scale(1.1);\n                    }\n                }\n            }\n            .extra {\n                display: flex;\n                margin-top: 15px;\n                font-weight: bold;\n                .desc {\n                    &::after {\n                        content: '-';\n                        margin: 0 10px;\n                    }\n                }\n                .wrap {\n                    max-width: 450px;\n                    overflow: hidden;\n                    text-overflow: ellipsis;\n                    white-space: nowrap;\n                }\n            }\n        }\n    }\n\n    @media screen and (max-width: 1400px) {\n        .wrapper {\n            flex-direction: column;\n            align-items: center;\n            .explain {\n                flex-grow: unset;\n                width: 700px;\n                padding-left: 80px;\n                padding-top: 15px;\n            }\n        }\n    }\n\n    @media screen and (max-width: 710px) {\n        .wrapper {\n            .preview {\n                width: 460px;\n                min-width: 460px;\n                height: 300px;\n            }\n            .explain {\n                width: 450px;\n                padding-left: 0;\n                .tech {\n                    width: calc(100% - 30px);\n                }\n                .extra {\n                    .wrap {\n                        max-width: 300px;\n                    }\n                }\n            }\n        }\n    }\n\n    @media screen and (max-width: 420px){\n        .wrapper {\n            .preview {\n                width: 100%;\n                min-width: unset;\n                height: 280px;\n            }\n            .explain {\n                width: 100%;\n                min-width: unset;\n                .tit {\n                    font-size: 30px;\n                }\n                .link {\n                    svg {\n                        width: 40px;\n                    }\n                }\n                .tech {\n                    \n                }\n            }\n        }\n    }\n"])),C,"dark"===n?"\n                box-shadow: 0 0 5px 0px gray;\n            ":"\n                box-shadow: 0 0 30px -5px black;\n            ","dark"===n?"var(--color-main)":"#545454","dark"===n?"\n                    color: #b7b7b7;\n                ":"\n                    color: #8d8d8d;\n                ","dark"===n?"white":"black","dark"===n?"\n                    color: #b7b7b7;\n                ":"\n                    color: #8d8d8d;\n                ")},F=function(n){var e=n.imgUrl,t=n.projectName,i=n.period,r=n.description,c=n.techList,o=n.link,s=n.site,d=n.imgDesc,l=void 0===d?"":d,p=n.coworkTool,b=n.extraLink,h=n.members,x=Object(a.useContext)(Q);return Object(m.a)("div",{css:_(x),"data-fade-in":!0,children:Object(m.b)("div",{className:"wrapper",children:[Object(m.a)("div",{className:"preview",children:Object(m.a)("img",{src:e,alt:l})}),Object(m.b)("div",{className:"explain",children:[Object(m.b)("div",{className:"title-box",children:[Object(m.a)("h3",{className:"tit",children:t}),Object(m.a)("span",{children:i})]}),h&&Object(m.b)("div",{className:"team",children:[Object(m.b)("div",{className:"count",children:["\ud300 \uc778\uc6d0",Object(m.b)("span",{children:[h.count,"\uba85 \xa0 (",h.desc,")"]})]}),Object(m.b)("div",{className:"contribution",children:["\ub0b4 \uc5ed\ud560",Object(m.a)("span",{children:h.contribution})]})]}),Object(m.a)("div",{className:"desc",children:r}),Object(m.a)("div",{className:"tech",children:c.map((function(n){return Object(m.a)(P,{text:n},n)}))}),p&&Object(m.a)("div",{className:"tech",children:p.map((function(n){return Object(m.a)(P,{text:n,color:"#6262d9"},n)}))}),Object(m.b)("div",{className:"link",children:[Object(m.a)("a",{title:"\uae43\ud5c8\ube0c \ub9c1\ud06c",target:"_blank",href:o,children:Object(m.a)(D.c,{size:"45","data-name":"git"})}),s&&Object(m.a)("a",{title:"\ud398\uc774\uc9c0 \ub9c1\ud06c",target:"_blank",href:s,children:Object(m.a)(J.a,{size:"48","data-name":"site"})})]}),b&&b.map((function(n,e){return Object(m.b)("div",{className:"extra",children:[Object(m.a)("span",{className:"desc",children:n.desc}),Object(m.a)("div",{className:"wrap",children:Object(m.a)("a",{className:"url",target:"_blank",title:"\ub9c1\ud06c",href:n.url,children:n.url})})]},e)}))]})]})})};var I,q=function(n){return Object(l.a)(U||(U=Object(s.a)(["\n    display: flex;\n    justify-content: space-between;\n    color: ",";\n    margin-bottom: 100px;\n    ","\n    svg {\n        margin: 10px 20px;\n        transition: .1s;\n        &:hover {\n            transform: scale(1.15);\n        }\n    }\n    .txt {\n        ","\n        text-align: center;\n    }\n    .icon1:hover {color: #f0db4f;}\n    .icon2:hover {color: #f16529;}\n    .icon3:hover {color: #33a9dc;}\n    .icon4:hover {color: #2f74c0;}\n    .icon5:hover {color: #61dafb;}\n    .icon6:hover {color: #0076c6;}\n    .icon7:hover {color: #e84e31;}\n    .icon8:hover {color: #D0469D;}\n\n    @media screen and (max-width: 995px) {\n        flex-wrap: wrap;\n        justify-content: unset;    \n    }\n    \n    @media screen and (max-width: 420px) {\n        svg {\n            width: 40px;\n        }\n    }\n"])),"dark"===n?"white":"black",C,"dark"===n?"":"font-weight: 500;")},H=function(n){Object(S.a)(n);var e=Object(a.useContext)(Q);return Object(m.b)("div",{css:q(e),"data-fade-in":!0,children:[Object(m.b)("div",{children:[Object(m.a)(D.e,{className:"icon1",size:"70"}),Object(m.a)("div",{className:"txt",children:"Javascript"})]}),Object(m.b)("div",{children:[Object(m.a)(D.f,{className:"icon5",size:"70"}),Object(m.a)("div",{className:"txt",children:"React"})]}),Object(m.b)("div",{children:[Object(m.a)(D.h,{className:"icon4",size:"70"}),Object(m.a)("div",{className:"txt",children:"Typescript"})]}),Object(m.b)("div",{children:[Object(m.a)(D.d,{className:"icon2",size:"70"}),Object(m.a)("div",{className:"txt",children:"HTML5"})]}),Object(m.b)("div",{children:[Object(m.a)(D.a,{className:"icon3",size:"70"}),Object(m.a)("div",{className:"txt",children:"CSS3"})]}),Object(m.b)("div",{children:[Object(m.a)(D.g,{className:"icon8",size:"70"}),Object(m.a)("div",{className:"txt",children:"SASS"})]}),Object(m.b)("div",{children:[Object(m.a)(D.i,{className:"icon6",size:"70"}),Object(m.a)("div",{className:"txt",children:"vscode"})]}),Object(m.b)("div",{children:[Object(m.a)(D.b,{className:"icon7",size:"70"}),Object(m.a)("div",{className:"txt",children:"git"})]})]})},M=t(24),W=t(25);var B,Y=function(n){return Object(l.a)(I||(I=Object(s.a)(["\n    color: ",";\n    ","\n    .row {\n        display: flex;\n        align-items: center;\n        margin-bottom: 15px;\n        .name {\n            width: 70px;\n            margin-left: 10px;\n        }\n        .txt {\n            font-size: 20px;\n            margin-left: 20px;\n            transition: .2s;\n        }\n        .link {\n            cursor: pointer;\n            &:hover {\n                color: var(--color-link);\n            }\n        }\n    }\n"])),"dark"===n?"white":"black",C)},A=function(n){Object(S.a)(n);var e=Object(a.useContext)(Q),t=function(n){var e=n.currentTarget.textContent||"";window.open(e,"blank")};return Object(m.b)("div",{css:Y(e),"data-fade-in":!0,children:[Object(m.b)("div",{className:"row",children:[Object(m.a)(M.a,{size:"35"}),Object(m.a)("div",{className:"name",children:"\ube14\ub85c\uadf8"}),Object(m.a)("div",{className:"txt link",onClick:t,children:"https://kwangsunny.tistory.com"})]}),Object(m.b)("div",{className:"row",children:[Object(m.a)(W.a,{size:"35"}),Object(m.a)("div",{className:"name",children:"Github"}),Object(m.a)("div",{className:"txt link",onClick:t,children:"https://github.com/kks2139"})]}),Object(m.b)("div",{className:"row",children:[Object(m.a)(p.c,{size:"35"}),Object(m.a)("div",{className:"name",children:"Email"}),Object(m.a)("div",{className:"txt",children:"eyeyel93@gmail.com"})]})]})},G={team_projects:[{imgUrl:"team_demo.gif",imgDesc:"\ub2e4\ub77d\ubc29",projectName:"\ub2e4\ub77d\ubc29",period:"2021.11 ~ \uc9c4\ud589\uc911",description:"\uc0ac\uc774\ub4dc \ud504\ub85c\uc81d\ud2b8, \ucde8\ubbf8 \ub4f1 \uacf5\ud1b5\uc758 \uad00\uc2ec\uc0ac\ub97c \uac00\uc9c4 \uc0ac\ub78c\ub4e4\uc774 \ubaa8\uc5ec\n            \ud65c\ub3d9\uc744 \ub9cc\ub4e4\uace0 \ucc38\uc5ec\ud560 \uc218 \uc788\ub294 \ucee4\ubba4\ub2c8\ud2f0 \uc11c\ube44\uc2a4\ub97c \ub9cc\ub4dc\ub294 \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4.",techList:["React","Redux","Typescript","Emotion"],coworkTool:["Slack","Notion","Figma","Github"],link:"https://github.com/kks2139/darakbang",site:"https://sharp-goldstine-03b926.netlify.app/",extraLink:[{desc:"\uac1c\ubc1c\uac04 \uc774\uc288",url:"https://kwangsunny.tistory.com/33"}],members:{count:3,desc:"\ud504\ub860\ud2b81, \ubc31\uc5d4\ub4dc1, \ub514\uc790\uc774\ub1081",contribution:"\ud504\ub85c\uc81d\ud2b8\uc758 \ud504\ub860\ud2b8 \uac1c\ubc1c \uc804\ubc18\uc744 \ub9e1\uc544 \uc9c4\ud589\uc911\uc785\ub2c8\ub2e4."}}],projects:[{imgUrl:"numble_demo.gif",imgDesc:"\ub118\ube14 \ucc4c\ub9b0\uc9c0",projectName:"Numble Challenge",period:"2021.10 ~ 2021.11",description:"\ud504\ub85c\uc81d\ud2b8 \ucc4c\ub9b0\uc9c0 \ucee4\ubba4\ub2c8\ud2f0 '\ub118\ube14' \uc5d0\uc11c \uc8fc\ucd5c\ud55c\n            \ud504\ub860\ud2b8\uc5d4\ub4dc \ud074\ub860\ucf54\ub529 \ucc4c\ub9b0\uc9c0\uc5d0 \uc81c\ucd9c\ud55c \uacb0\uacfc\ubb3c \uc785\ub2c8\ub2e4.\n            \ub9ac\ub514\ubd81\uc2a4 \ud398\uc774\uc9c0\ub97c 3\uc8fc \ub3d9\uc548 \ud074\ub860\ucf54\ub529 \ud558\uc5ec \uc81c\ucd9c\ud558\uc600\uace0 \uc0c1\uc70410% \uc548\uc5d0 \uc120\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",techList:["React","Redux","Typescript","Emotion","SCSS","react-icons"],link:"https://github.com/kks2139/numble-challenge",site:"https://kks2139.github.io/deploy-numble-challenge/",extraLink:[{desc:"\ucc4c\ub9b0\uc9c0 \ud68c\uace0",url:"https://kwangsunny.tistory.com/31"},{desc:"\ucc4c\ub9b0\uc9c0 \uacb0\uacfc",url:"https://www.numble.it/d66f25b3-9cfd-40e5-ac9e-29212d698aec"}]},{imgUrl:"dino_demo.gif",imgDesc:"\uacf5\ub8e1 \uac8c\uc784",projectName:"Dino Game",period:"2021.10 ~ 2021.12",description:"\uc21c\uc218Javascript\ub9cc \uc0ac\uc6a9\ud558\uc5ec \ub9cc\ub4e0 \ud06c\ub86c\uc758 \uacf5\ub8e1\uac8c\uc784 \uc785\ub2c8\ub2e4.\n            Webpack\uc744 \uacf5\ubd80\ud558\uba70 \ub9cc\ub4e0 \ud1a0\uc774 \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4.",techList:["Javascript","CSS","HTML"],link:"https://github.com/kks2139/dino-game",site:"https://61eeb1ec87f59f0838ccd354--musing-aryabhata-440e6d.netlify.app/",extraLink:[{desc:"Webpack \uac04\ub7b5 \uc815\ub9ac",url:"https://kwangsunny.tistory.com/29"}]},{imgUrl:"quiz_demo.gif",imgDesc:"\ud034\uc988",projectName:"Quiz",period:"2021.07 ~ 2021.08",description:"\ubb38\uc81c\ub97c \ub9de\ucd94\uace0 \uc624\ub2f5\ub178\ud2b8\ub97c \uae30\ub85d\ud558\ub294 \uac04\ub2e8\ud55c \ud034\uc988\uc6f9\uc571 \uc785\ub2c8\ub2e4.\n            \ud034\uc988 \uacf5\uac1c api\ub97c \uc774\uc6a9\ud558\uc5ec \ub79c\ub364\uc8fc\uc81c 5\uac00\uc9c0\uc758 \ud034\uc988\uac00 \ucd9c\uc81c\ub429\ub2c8\ub2e4.\n            \ud034\uc988\ub97c \ud480\uace0 \uacb0\uacfc\ub97c \ucc28\ud2b8\ub85c \ud655\uc778\ud560 \uc218 \uc788\uace0 \uc624\ub2f5\ub178\ud2b8\ub97c \uc791\uc131\ud558\uace0 \n            \uc774\ub825\uc744 \ub0a8\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",techList:["React","Redux","Typescript","Emotion","SCSS","Victory","react-icons"],link:"https://github.com/kks2139/quiz",site:"https://kks2139.github.io/quiz-deploy/"},{imgUrl:"shopping_demo.gif",imgDesc:"\uc1fc\ud551\uce74\ud2b8",projectName:"Shopping cart",period:"2021.06 ~ 2021.07",description:"Redux\ub97c \uacf5\ubd80\ud558\uba74\uc11c \ub9cc\ub4e0 \ud1a0\uc774 \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4.\n            depth\uac00 \uae4a\uc740 \uc0c1\ud488 \ub9ac\uc2a4\ud2b8\ub97c \uc870\ud68c\ud558\uace0 \uc774\ub97c Redux \ub85c \uad00\ub9ac\ud558\ub294 \ud654\uba74\uc744\n            \ub9cc\ub4e4\uc5b4\ubcf4\uace0 \uc2f6\uc5b4\uc11c \uc2dc\uc791\ud558\uac8c \ub41c \uac1c\uc778 \ud504\ub85c\uc81d\ud2b8 \uc785\ub2c8\ub2e4.\n            \uc120\ud0dd\ud55c \uc0c1\ud488\uc758 \uc635\uc158\uc744 \uc120\ud0dd\ud55c \ud6c4 \uc7a5\ubc14\uad6c\ub2c8\uc5d0 \ub2f4\uace0 \ucd1d \uae08\uc561\uae4c\uc9c0 \uacc4\uc0b0\ud558\ub294 \n            \uc0c1\ud488 \uc8fc\ubb38\uc571 \uc785\ub2c8\ub2e4.",techList:["React","Redux","Typescript","CSS"],link:"https://github.com/kks2139/shopping-cart",site:"https://kks2139.github.io/deploy-shopping-cart/"},{imgUrl:"w3s_demo.gif",imgDesc:"W3S \ud074\ub860",projectName:"Responsive style app",period:"2021.06 ~ 2021.06",description:"W3School \uc0ac\uc774\ud2b8\uc758 \uba54\uc778 \ud654\uba74\uc744 \ucc38\uace0\ud558\uc5ec\n            \ubc18\uc751\ud615 \uc6f9\ud398\uc774\uc9c0\ub97c \uad6c\ud604\ud558\uc600\uc2b5\ub2c8\ub2e4.",techList:["React","Javascript","CSS"],link:"https://github.com/kks2139/clone-w3s-main",site:"https://kks2139.github.io/responsive-app-refering-w3s/"},{imgUrl:"tetris_demo.gif",imgDesc:"\ud14c\ud2b8\ub9ac\uc2a4",projectName:"Tetris",period:"2021.03 ~ 2021.05",description:"React Hooks\uc744 \uacf5\ubd80\ud558\uba70 \ub9cc\ub4e0 \ud1a0\uc774\ud504\ub85c\uc81d\ud2b8 \uc785\ub2c8\ub2e4.\n            \uac8c\uc784\uc5d0 \uc785\uc7a5\ud55c \uc0ac\uc6a9\uc790\ub294 \uc870\uc791\ud0a4\uc640 \ud14c\ub9c8\uc0c9\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \n            \ub09c\uc774\ub3c4\ub97c \uc120\ud0dd\ud558\uace0 \ud14c\ud2b8\ub9ac\uc2a4 \uac8c\uc784\uc744 \uc990\uae38 \uc218 \uc788\uace0, \n            \uac8c\uc784\uc774 \ub05d\ub09c\ud6c4\uc5d4 \uc810\uc218\uac00 \uae30\ub85d\ub429\ub2c8\ub2e4.\n            \uae30\ub85d\ub41c \uc810\uc218\ub4e4\uc740 \ub7ad\ud0b9\ubaa9\ub85d\uc744 \ud1b5\ud574 \uc870\ud68c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",techList:["React","Javascript","CSS","ExpressJS","AWS RDB","AWS EC2","MySQL","Nginx","FTP"],link:"https://github.com/kks2139/Tetris",site:"http://ec2-3-36-219-54.ap-northeast-2.compute.amazonaws.com/"}]},K=t.p+"static/media/stary-sky.e74961c7.jpg",Q=r.a.createContext(""),V=["\uc0ac\uc6a9\uc790 \uc785\uc7a5\uc5d0\uc11c \uace0\ubbfc\ud558\ub294","\ud611\uc5c5\uc758 \uc2dc\ub108\uc9c0\ub97c \uc911\uc694\uc2dc\ud558\ub294","\ubd80\uc871\ud55c \ubd80\ubd84\uc744 \ucc44\uc6cc\ub098\uac00\ub294","\uafb8\uc900\ud788 \uc131\uc7a5\ud574 \ub098\uac00\ub294"];var X=function(n){return Object(l.a)(B||(B=Object(s.a)(["\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  ","\n\n  .sub-title {\n    font-size: 35px;\n    font-weight: bold;\n    color: var(--color-main);\n    margin: 160px 0 15px 0;\n    padding: 0 0 10px 20px;\n    border-radius: 5px;\n    transition: .2s;\n\n    &::before {\n      content: '\u2023';\n      margin-right: 18px;\n      font-size: 49px;\n    }\n\n    ","\n  }\n  transition: .3s;\n  \n  > .header {\n    z-index: 100;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    > .background {\n      position: absolute;\n      background-image: url(",");\n      width: 100%;\n      height: 600px;\n    }\n    .about-box {\n      margin-top: 200px;\n      padding: 0 100px;\n      position: relative;\n      display: flex;\n      justify-content: space-between;\n      height: 310px;\n      ","\n      .im {\n        margin-top: 10px;\n        font-size: 25px;\n        font-weight: bold;\n        color: var(--color-main);\n        span {\n          color: white;\n        }\n        .feat {\n          margin-top: 15px;\n          display: flex;\n        }\n      }\n    }\n  }\n\n  > .content {\n    position: relative;\n    z-index: 100;\n    background-color: ",";\n    margin-top: 600px;\n    padding: 0 100px;\n    box-shadow: inset 0 20px 30px -20px black;\n    transition: .2s;\n  }\n\n  .footer {\n    position: relative;\n    z-index: 100;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    padding: 0 0 45px 0;\n    height: 300px;\n    font-weight: bold;\n    color: ",";\n    ",";\n    background-color: ",";\n    transition: .2s;\n  }\n\n  .rocket-box {\n    z-index: 100;\n    position: fixed;\n    top: 180px;\n    right: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-right: 100px;\n    width: 310px;\n    height: 310px;\n    overflow: hidden;\n    img {\n      position: absolute;\n    }\n    .rk {\n      width: 200px;\n      animation-name: shaking;\n      animation-duration: 5s;\n      animation-timing-function: ease;\n      animation-iteration-count: infinite;\n    }\n    [class*='st'] {\n      width: 35px;\n      animation-duration: 3s;\n      animation-timing-function: linear;\n      animation-iteration-count: infinite;\n      \n    }\n    .st1 {\n      width: 30px;\n      transform: translate(-500px, -500px);\n      animation-name: fall-1;\n      animation-delay: 0s;\n    }\n    .st2 {\n      z-index: 2;\n      transform: translate(-500px, -500px);\n      animation-name: fall-2;\n      animation-delay: 1s;\n    }\n    .st3 {\n      width: 30px;\n      transform: translate(-500px, -500px);\n      animation-name: fall-3;\n      animation-delay: 2s;\n    }\n    .st4 {\n      z-index: 2;\n      transform: translate(-500px, -500px);\n      animation-name: fall-4;\n      animation-delay: 3s;\n    }\n  }\n\n  @keyframes shaking {\n    0% {transform: rotate(-50deg);}\n    50% {transform: rotate(-40deg);}\n    100% {transform: rotate(-50deg);}\n  }\n  @keyframes fall-1 {\n    0% {transform: translate(-30px, -200px);}\n    100% {transform: translate(-200px, 200px);}\n  }\n  @keyframes fall-2 {\n    0% {transform: translate(100px, -200px);}\n    100% {transform: translate(-140px, 200px);}\n  }\n  @keyframes fall-3 {\n    0% {transform: translate(140px, -200px);}\n    100% {transform: translate(-50px, 200px);}\n  }\n  @keyframes fall-4 {\n    0% {transform: translate(220px, -200px);}\n    100% {transform: translate(0px, 200px);}\n  }\n\n  @media screen and (max-width: 1300px) {\n    .rocket-box {\n      position: fixed;\n      top: -116px;\n      left: -20px;\n      transform: scale(0.16);\n      z-index: 101;\n    }\n  }\n\n  @media screen and (max-width: 900px){\n    .content {\n      padding: 0 10px;\n    }\n  }\n\n  @media screen and (max-width: 710px){\n    > .header {\n      .about-box {\n        padding: 0 50px;\n        .intro-box {\n          .im {\n            font-size: 23px !important;\n            .feat {\n              flex-direction: column;\n            }\n          }\n        }\n      }\n    }\n  }\n\n  @media screen and (max-width: 420px){\n    > .header {\n      .about-box {\n        padding: 0 20px;\n      }\n    }\n    .rocket-box {\n      left: 0;\n    }\n    > .content {\n      width: 100%;\n      padding: 0 20px;\n      .im {\n        font-size: 20px !important;\n      }\n      .sub-title {\n        font-size: 30px;\n      }\n    }\n  }\n"])),"dark"!==n?"color: black !important;":"","dark"===n?"\n      border-radius: 0;\n      border-bottom: 1px solid;\n      ":"\n      background-color: black;\n    ",K,C,"dark"===n?"var(--color-dark)":"white","dark"===n?"white":"black","dark"===n?"":"font-weight: 500;","dark"===n?"var(--color-dark)":"white")},Z=function(){var n=Object(a.useState)("dark"),e=Object(d.a)(n,2),t=e[0],i=e[1];return Object(a.useLayoutEffect)((function(){!function(){var n=new IntersectionObserver((function(n,e){n.forEach((function(n){var t=n.target;n.isIntersecting&&(t.classList.add("fadein"),e.unobserve(t))}))}),{root:null,rootMargin:"0px",threshold:.2});document.querySelectorAll("[data-fade-in]").forEach((function(e){n.observe(e)}))}()}),[t]),Object(m.a)(Q.Provider,{value:t,children:Object(m.b)("div",{css:X(t),children:[Object(m.a)(u,{onThemeChanged:function(n){i((function(e){return n?"dark":"light"}))}}),Object(m.b)("header",{className:"header",children:[Object(m.a)("div",{className:"background"}),Object(m.a)("div",{className:"about-box","data-fade-in":!0,children:Object(m.b)("div",{className:"intro-box",children:[Object(m.a)(w,{text:"Let me introduce myself !",size:47}),Object(m.b)("div",{className:"im",children:[Object(m.a)("span",{children:"Hello!"}),Object(m.b)("div",{children:[Object(m.a)("span",{children:"I'm "}),"Kwangsun Kim."]}),Object(m.b)("div",{className:"feat",children:[Object(m.a)(z,{textList:V,size:27,width:350}),Object(m.a)("span",{children:"\uac1c\ubc1c\uc790 \uc785\ub2c8\ub2e4."})]})]})]})})]}),Object(m.b)("div",{className:"rocket-box",children:[Object(m.a)("img",{className:"rk",src:"shuttle.png"}),Object(m.a)("img",{className:"st1",src:"star.png"}),Object(m.a)("img",{className:"st2",src:"star.png"}),Object(m.a)("img",{className:"st3",src:"star.png"}),Object(m.a)("img",{className:"st4",src:"star.png"})]}),Object(m.b)("main",{className:"content",children:[Object(m.a)("h2",{className:"sub-title",id:"Career",children:"Career"}),Object(m.a)(R,{}),Object(m.a)("h2",{className:"sub-title",id:"TeamProjects",children:"Team Projects"}),Object(m.a)("div",{className:"team-pjt-wrapper",children:G.team_projects.map((function(n){return Object(m.a)(F,{imgUrl:n.imgUrl,projectName:n.projectName,period:n.period,description:n.description,techList:n.techList,site:n.site,link:n.link,coworkTool:n.coworkTool,extraLink:n.extraLink,members:n.members},n.projectName)}))}),Object(m.a)("h2",{className:"sub-title",id:"Projects",children:"Personal Projects"}),Object(m.a)("div",{className:"pjt-wrapper",children:G.projects.map((function(n){return Object(m.a)(F,{imgUrl:n.imgUrl,projectName:n.projectName,period:n.period,description:n.description,techList:n.techList,site:n.site,link:n.link,extraLink:n.extraLink},n.projectName)}))}),Object(m.a)("h2",{className:"sub-title",children:"Skills & Tools"}),Object(m.a)(H,{}),Object(m.a)("h2",{className:"sub-title",id:"Contact",children:"Contact"}),Object(m.a)(A,{})]}),Object(m.a)("footer",{className:"footer",children:"Thank you! \ud83e\uddd1\ud83c\udffb"})]})})},$=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,c=e.getTTFB;t(n),i(n),a(n),r(n),c(n)}))},nn=t(7);o.a.render(Object(nn.jsx)(r.a.StrictMode,{children:Object(nn.jsx)(Z,{})}),document.getElementById("root")),$()}},[[35,1,2]]]);
//# sourceMappingURL=main.c7a7c320.chunk.js.map