(this["webpackJsonpmy-pf"]=this["webpackJsonpmy-pf"]||[]).push([[0],{29:function(n,e,t){},30:function(n,e,t){},34:function(n,e,t){"use strict";t.r(e);var i,a=t(2),c=t.n(a),r=t(20),o=t.n(r),s=(t(29),t(4)),d=(t(30),t(5)),l=t(24),p=t(12),b=t(1);var x,m=Object(d.a)(i||(i=Object(s.a)(["\n    z-index: 101;\n    position: fixed;\n    top: 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    height: 70px;\n    padding: 0 50px;\n    color: var(--color-main);\n    background-color: rgb(0, 0, 0, 0.7);\n    backdrop-filter: blur(7px);\n    .tit {\n        font-size: 30px;\n        font-weight: bold;\n        cursor: pointer;\n        svg {\n            margin-right: 10px;\n            transform: translateY(3px);\n        }\n    }\n    .menus {\n        display: flex;\n    }\n    .icon {\n        display: none;\n        cursor: pointer;\n        transition: .3s;\n        &:hover {\n            transform: scale(1.1);\n        }\n    }\n\n    @media screen and (max-width: 900px){\n        .menus {\n            display: none;\n        }\n        .icon {\n            display: unset;\n        }\n        .drop {\n            position: fixed;\n            top: 70px;\n            right: 0;\n            display: flex !important;\n            flex-direction: column;\n            border-bottom-left-radius: 6px;\n            border-bottom-right-radius: 6px;\n            background-color: rgb(0, 0, 0, 0.7);\n            backdrop-filter: blur(7px);\n        }\n    }\n\n    @media screen and (max-width: 385px){\n        padding: 0 10px;\n    }\n"]))),h=function(){var n=Object(a.useState)(!1),e=Object(l.a)(n,2),t=e[0],i=e[1],c=Object(a.useRef)(null),r=function(){var n=document.querySelector(".screen");if(n)document.body.removeChild(n);else{var e=document.createElement("div");e.className="screen",e.onclick=function(){o()},document.body.appendChild(e)}},o=function(){c.current.querySelector(".menus").classList.toggle("drop"),r(),i((function(n){return!n}))};return Object(b.b)("div",{css:m,ref:c,children:[Object(b.b)("div",{className:"tit",onClick:function(){document.documentElement.scrollTo(0,0)},children:[Object(b.a)(p.b,{}),"KKS"]}),Object(b.b)("div",{className:"menus",children:[Object(b.a)(j,{text:"About",targ:"About"}),Object(b.a)(j,{text:"Projects",targ:"Projects"}),Object(b.a)(j,{text:"Contact",targ:"Contact"})]}),t?Object(b.a)(p.a,{className:"icon",size:"30",color:"white",onClick:o}):Object(b.a)(p.d,{className:"icon",size:"30",color:"white",onClick:o})]})};var u,f=Object(d.a)(x||(x=Object(s.a)(["\n    width: fit-content;\n    box-sizing: content-box;\n    margin: 0 20px;\n    border-radius: var(--radius);\n    cursor: pointer;\n    text-decoration: none;\n    transition: 1s;\n    .txt {\n        text-align: center;\n        color: white;\n        font-size: 21px;\n        font-weight: bold;\n        padding: 3px 0;\n    }\n    .bar {\n        height: 5px;\n        width: 0px;\n        background-color: var(--color-main);\n        border-radius: var(--radius);\n        transition: .3s;\n    }\n    &:hover {\n        .bar {\n            width: 100%;\n        }\n    }\n\n    @media screen and (max-width: 900px){\n        .txt {\n            transition: .3s;\n            font-size: 18px;\n            padding: 0 20px 25px 20px;\n            &:hover {\n                color: var(--color-main);\n            }\n        }\n        .bar {\n            display: none;\n        }\n    }\n"]))),j=function(n){var e=n.text,t=n.targ;return Object(b.b)("a",{css:f,onClick:function(){var n=document.querySelector("#"+t);n&&document.documentElement.scrollTo(0,n.offsetTop-70)},children:[Object(b.a)("div",{className:"txt",children:e}),Object(b.a)("div",{className:"bar"})]})};var v,g=function(n){return Object(d.a)(u||(u=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    .txt {\n        white-space: nowrap;\n        font-size:","px;\n        font-weight: bold;\n        color: var(--color-main);\n        .hide {\n            display: none;\n        }\n        .eli\n    }\n    .cursor {\n        width: 4px;\n        height: ","px;\n        margin-left: 5px;\n        transition: .3s;\n        background-color: white;\n        animation-name: blink;\n        animation-duration: 1.1s;\n        animation-timing-function: ease;\n        animation-iteration-count: infinite;\n    }\n    \n    @keyframes blink {\n        0% {opacity: 0;}\n        50% {opacity: 1;}\n        100% {opacity: 0;}\n    }\n\n    @media screen and (max-width: 710px){\n        .txt {\n          font-size: 35px;\n        }\n        .cursor {\n          height: 35px;\n        }\n    }\n\n    @media screen and (max-width: 385px){\n        .txt {\n          font-size: 25px;\n        }\n        .cursor {\n            height: 25px;\n        }\n    }\n"])),n,n)},O=function(n){var e=n.text,t=n.size,i=void 0===t?45:t,c=e.split(""),r=Object(a.useRef)(null),o=Object(a.useRef)(0);return Object(a.useEffect)((function(){return o.current=window.setInterval((function(){var n=r.current.querySelector(".hide");n?n.classList.remove("hide"):clearInterval(o.current)}),130),function(){return clearInterval(o.current)}})),Object(b.b)("div",{css:g(i),children:[Object(b.a)("div",{className:"txt",ref:r,children:c.map((function(n,e){return Object(b.a)("span",{className:"hide",children:n},e)}))}),Object(b.a)("div",{className:"cursor"})]})};var w,k=function(n){var e=n.size,t=n.width;return Object(d.a)(v||(v=Object(s.a)(["\n    width: ","px;\n    font-size: ","px;\n    overflow: hidden;\n    margin: 0 10px 10px 0;\n    text-align: center;\n    border-bottom: 1px solid var(--color-main);\n    .txt-box {\n        height: ","px;\n        transition: .8s;\n        .txt {\n            height: ","px;\n            width: ","px;\n            min-width: ","px;\n        }\n    }\n\n    @media screen and (max-width: 710px){\n        font-size: 23px;\n    }\n\n    @media screen and (max-width: 385px){\n        width: 245px;\n        font-size: 19px;\n        .txt-box {\n            .txt {\n                min-width: unset;\n                width: unset;\n            }\n        }\n    }\n"])),t,e,e+12,e+12,t,t)},N=function(n){var e=n.textList,t=n.size,i=void 0===t?20:t,c=n.width,r=void 0===c?350:c,o=Object(a.useRef)(0),s=Object(a.useRef)(0),d=Object(a.useRef)(null);return Object(a.useEffect)((function(){var n=d.current.querySelector(".txt-box");return s.current=window.setInterval((function(){n.style.transform="translateY(calc(100% * -".concat(o.current,"))"),o.current=o.current<e.length-1?o.current+1:0}),2800),function(){return clearInterval(s.current)}}),[]),Object(b.a)("div",{css:k({size:i,width:r}),ref:d,children:Object(b.a)("div",{className:"txt-box",children:e.map((function(n,e){return Object(b.a)("div",{className:"txt",children:n},e)}))})})},y=t(11);var z,S=Object(d.a)(w||(w=Object(s.a)(["\n    color: white;\n    font-size: 19px;\n    a {\n        font-weight: bold;\n        margin: 0 5px;\n    }\n    .desc {\n        > div {\n            line-height: 33px;\n            span {\n                font-weight: bold;\n            }\n        }\n    }\n    .tech {\n        margin-top: 10px;\n        > div {\n            display: flex;\n            align-items: center;\n            .el {\n                width: 120px;\n            }\n        }\n    }\n\n    @media screen and (max-width: 710px){\n        .tech {\n            display: flex;\n            flex-wrap: wrap;\n            > div {\n                .el {\n                    display: none;\n                }\n            }\n        }\n    }\n"]))),C=function(n){return Object(y.a)(n),Object(b.b)("div",{css:S,children:[Object(b.b)("div",{className:"desc",children:[Object(b.b)("div",{children:["\uc5e0\ub85c (2018.01 ~) ",Object(b.a)("a",{href:"http://www.emro.co.kr/",target:"blank",children:"http://www.emro.co.kr"})]}),Object(b.a)("div",{children:"\ud611\ub825\uc0ac \ub4f1\ub85d, \uacac\uc801\uc11c\uc791\uc131, \ubc1c\uc8fc\uc0dd\uc131, \uc785\uace0/\uac80\uc218 \ub4f1 \uad6c\ub9e4 \uc2dc\uc2a4\ud15c\uc744 \uad6c\ucd95\ud558\ub294 \ud504\ub85c\uc81d\ud2b8\ub4e4\uc5d0 \ucc38\uc5ec\ud558\uc600\uc2b5\ub2c8\ub2e4."}),Object(b.b)("div",{children:["\uac1c\ubc1c\uc5d0\uc11c \ubc30\ud3ec, \uc6b4\uc601\uae4c\uc9c0 \ub2f4\ub2f9\ud558\uc600\uace0, \uc8fc\ub85c Javascript / CSS / HTML \uacfc",Object(b.a)("a",{href:"https://library.polymer-project.org/3.0/docs/devguide/feature-overview",target:"blank",children:"PolymerJS"}),"\ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c"]}),Object(b.a)("div",{children:"\uc0ac\uc6a9\ud558\uc5ec Front \uac1c\ubc1c\uc744 \uc9c4\ud589\ud558\uc600\uc2b5\ub2c8\ub2e4."})]}),Object(b.a)("br",{}),Object(b.a)("div",{children:"\uac1c\ubc1c \ud658\uacbd"}),Object(b.b)("div",{className:"tech",children:[Object(b.b)("div",{children:[Object(b.a)("div",{className:"el",children:"\u2022 Client"}),Object(b.a)(T,{text:"Javascript"}),Object(b.a)(T,{text:"CSS"}),Object(b.a)(T,{text:"HTML"}),Object(b.a)(T,{text:"PolmyerJS"})]}),Object(b.b)("div",{children:[Object(b.a)("div",{className:"el",children:"\u2022 Server"}),Object(b.a)(T,{text:"Java"}),Object(b.a)(T,{text:"Spring Framework"}),Object(b.a)(T,{text:"Oracle RDB"})]}),Object(b.b)("div",{children:[Object(b.a)("div",{className:"el",children:"\u2022 DevOps"}),Object(b.a)(T,{text:"Jenkins"}),Object(b.a)(T,{text:"FTP"})]}),Object(b.b)("div",{children:[Object(b.a)("div",{className:"el",children:"\u2022 \ud611\uc5c5\ud234"}),Object(b.a)(T,{text:"Jira"}),Object(b.a)(T,{text:"Confluence"}),Object(b.a)(T,{text:"SVN"})]})]})]})};var R,L=Object(d.a)(z||(z=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    padding: 2px 10px;\n    width: fit-content;\n    border-radius: var(--radius);\n    border: 1px solid var(--color-main);\n    font-size: 19px;\n    white-space: nowrap;\n    color: var(--color-main);\n    margin: 5px 15px 5px 0;\n    transition: .3s;\n    &:hover {\n        border: 1px solid #00f5f5;\n        color: #00f5f5;\n    }\n\n    @media screen and (max-width: 385px){\n        font-size: 14px;\n        padding: 2px 5px;\n    }\n"]))),T=function(n){var e=n.text;return Object(b.a)("div",{css:L,children:e})},P=t(6),J=t(21);var E,F=Object(d.a)(R||(R=Object(s.a)(["\n    padding: 20px 0;\n    margin-bottom: 100px;\n    .wrapper {\n        display: flex;\n        transition: 1s;\n        .preview {\n            position: relative;\n            width: 550px;\n            min-width: 550px;\n            height: 400px;\n            padding: 40px;\n            overflow: hidden;\n            border-radius: var(--radius);\n            background-color: #2b8165;\n            transition: 1s;\n            &:hover {\n                .cir1 {\n                    transform: scale(1.1);\n                }\n                .cir2 {\n                    transform: scale(1.3);\n                }\n                .cir3 {\n                    transform: scale(2.5);\n                }\n                .cir4 {\n                    transform: scale(2.2);\n                }\n                img {\n                    transform: scale(1.05);\n                    box-shadow: 0 0 30px 10px black;\n                }\n            }\n            img {\n                z-index: 1;\n                position: relative;\n                width: 100%;\n                height: 100%;\n                border-radius: 10px;\n                box-shadow: 0 0 30px 5px black;\n                transition: .5s;\n            }\n            [class*='cir'] {\n                position: absolute;\n                border-radius: 50%;\n                transition: .5s;\n            }\n            .cir1 {\n                width: 150px;\n                height: 150px;\n                top: -50px;\n                left: -50px;\n                background-color: #bfc5c4;\n            }\n            .cir2 {\n                width: 110px;\n                height: 110px;\n                top: 300px;\n                left: 400px;\n                background-color: #8affe4;\n            }\n            .cir3 {\n                width: 100px;\n                height: 100px;\n                top: 300px;\n                left: -10px;\n                background-color: #9ed5b2;\n            }\n            .cir4 {\n                width: 70px;\n                height: 70px;\n                top: 0;\n                left: 410px;\n                background-color: #80ffad;\n            }\n        }\n        .explain {\n            padding-left: 40px;\n            flex-grow: 1;\n            color: white;\n            transition: 1s;\n            .tit {\n                color: var(--color-main);\n                font-size: 37px;\n                margin-bottom: 20px;\n            }\n            .for {\n                font-size: 20px;\n                margin: 6px 0;\n            }\n            .desc {\n                white-space: pre-line;\n                font-size: 18px;\n                line-height: 30px;\n            }\n            .tech {\n                display: flex;\n                flex-wrap: wrap;\n                margin-top: 7px;\n            }\n            .link {\n                margin: 15px 0 0 15px;\n                svg {\n                    margin-right: 15px;\n                    transition: .3s;\n                    &:hover {\n                        cursor: pointer;\n                        transform: scale(1.1);\n                    }\n                }\n            }\n        }\n    }\n\n    @media screen and (max-width: 1400px) {\n        .wrapper {\n            flex-direction: column;\n            align-items: center;\n            .explain {\n                flex-grow: unset;\n                width: 700px;\n                padding-left: 80px;\n                padding-top: 15px;\n            }\n        }\n    }\n\n    @media screen and (max-width: 710px) {\n        .wrapper {\n            .preview {\n                width: 460px;\n                min-width: 460px;\n                height: 300px;\n            }\n            .explain {\n                width: 450px;\n                padding-left: 0;\n                .tech {\n                    width: calc(100% - 30px);\n                }\n            }\n        }\n    }\n\n    @media screen and (max-width: 385px){\n        .wrapper {\n            .preview {\n                width: 100%;\n                min-width: unset;\n                height: 280px;\n            }\n            .explain {\n                width: 100%;\n                min-width: unset;\n                .tit {\n                    font-size: 30px;\n                }\n                .link {\n                    svg {\n                        width: 40px;\n                    }\n                }\n            }\n        }\n    }\n"]))),I=function(n){var e=n.imgUrl,t=n.projectName,i=(n.period,n.description),a=n.techList,c=n.link,r=n.site,o=function(n){var e="git"===n.currentTarget.dataset.name?c:r;window.open(e,"_blank")};return Object(b.a)("div",{css:F,children:Object(b.b)("div",{className:"wrapper",children:[Object(b.b)("div",{className:"preview",children:[Object(b.a)("img",{src:e}),Object(b.a)("div",{className:"cir1"}),Object(b.a)("div",{className:"cir2"}),Object(b.a)("div",{className:"cir3"}),Object(b.a)("div",{className:"cir4"})]}),Object(b.b)("div",{className:"explain",children:[Object(b.a)("div",{className:"tit",children:t}),Object(b.a)("div",{className:"desc",children:i}),Object(b.a)("div",{className:"tech",children:a.map((function(n){return Object(b.a)(T,{text:n},n)}))}),Object(b.b)("div",{className:"link",children:[Object(b.a)(P.c,{size:"45","data-name":"git",onClick:o}),r?Object(b.a)(J.a,{size:"48","data-name":"site",onClick:o}):null]})]})]})})};var U,q=Object(d.a)(E||(E=Object(s.a)(["\n    display: flex;\n    justify-content: space-between;\n    color: white;\n    margin-bottom: 100px;\n    svg {\n        margin: 10px 20px;\n        transition: .2s;\n        &:hover {\n            transform: scale(1.1);\n        }\n    }\n    .txt {\n        text-align: center;\n    }\n    .icon1:hover {color: #f0db4f;};\n    .icon2:hover {color: #f16529;};\n    .icon3:hover {color: #33a9dc;};\n    .icon4:hover {color: #2f74c0;};\n    .icon5:hover {color: #61dafb;};\n    .icon6:hover {color: #0076c6;};\n    .icon7:hover {color: #e84e31;};\n\n    @media screen and (max-width: 930px) {\n        flex-wrap: wrap;\n        justify-content: unset;    \n    }\n    \n    @media screen and (max-width: 385px) {\n        svg {\n            width: 40px;\n        }\n    }\n"]))),A=function(n){return Object(y.a)(n),Object(b.b)("div",{css:q,children:[Object(b.b)("div",{children:[Object(b.a)(P.e,{className:"icon1",size:"70"}),Object(b.a)("div",{className:"txt",children:"Javascript"})]}),Object(b.b)("div",{children:[Object(b.a)(P.d,{className:"icon2",size:"70"}),Object(b.a)("div",{className:"txt",children:"HTML 5"})]}),Object(b.b)("div",{children:[Object(b.a)(P.a,{className:"icon3",size:"70"}),Object(b.a)("div",{className:"txt",children:"CSS 3"})]}),Object(b.b)("div",{children:[Object(b.a)(P.g,{className:"icon4",size:"70"}),Object(b.a)("div",{className:"txt",children:"Typescript"})]}),Object(b.b)("div",{children:[Object(b.a)(P.f,{className:"icon5",size:"70"}),Object(b.a)("div",{className:"txt",children:"React"})]}),Object(b.b)("div",{children:[Object(b.a)(P.h,{className:"icon6",size:"70"}),Object(b.a)("div",{className:"txt",children:"vscode"})]}),Object(b.b)("div",{children:[Object(b.a)(P.b,{className:"icon7",size:"70"}),Object(b.a)("div",{className:"txt",children:"git"})]})]})},G=t(22),K=t(23);var M,D=Object(d.a)(U||(U=Object(s.a)(["\n    color: white;\n    .row {\n        display: flex;\n        align-items: center;\n        margin-bottom: 15px;\n        .txt {\n            font-size: 20px;\n            margin-left: 20px;\n            transition: .3s;\n        }\n        .link {\n            cursor: pointer;\n            &:hover {\n                color: var(--color-link);\n            }\n        }\n    }\n"]))),H=function(n){Object(y.a)(n);var e=function(n){var e=n.currentTarget.textContent||"";window.open(e,"blank")};return Object(b.b)("div",{css:D,children:[Object(b.b)("div",{className:"row",children:[Object(b.a)(p.c,{size:"35"}),Object(b.a)("div",{className:"txt",children:"eyeyel93@gmail.com"})]}),Object(b.b)("div",{className:"row",children:[Object(b.a)(G.a,{size:"35"}),Object(b.a)("div",{className:"txt link",onClick:e,children:"https://kwangsunny.tistory.com"})]}),Object(b.b)("div",{className:"row",children:[Object(b.a)(K.a,{size:"35"}),Object(b.a)("div",{className:"txt link",onClick:e,children:"https://github.com/kks2139"})]})]})},B={projects:[{imgUrl:"pj4.PNG",projectName:"Employee Management",period:"~ \uc9c4\ud589\uc911",description:"Apollo \uc640 GraphQL \ub97c \uacf5\ubd80\ud558\uba70 \ub9cc\ub4dc\ub294 \ud1a0\uc774 \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4. \n            \uac80\uc0c9 \uc870\uac74\uc5d0 \ub9de\ub294 \uc9c1\uc6d0\ub4e4\uc758 \uc815\ubcf4\ub97c \uac00\uc838\uc640 \ubcf4\uc5ec\uc8fc\ub294 \n            \uc9c1\uc6d0\uad00\ub9ac \ud398\uc774\uc9c0\uc785\ub2c8\ub2e4.",techList:["React","GraphQL","Apollo","Redux","Typescript","ExpressJS","Emotion","SCSS"],link:"https://github.com/kks2139/employee-management",site:""},{imgUrl:"pj2.PNG",projectName:"Quiz",period:"~ 2021.08",description:"\ubb38\uc81c\ub97c \ub9de\ucd94\uace0 \uc624\ub2f5\ub178\ud2b8\ub97c \uae30\ub85d\ud558\ub294 \uac04\ub2e8\ud55c \ud034\uc988\uc6f9\uc571 \uc785\ub2c8\ub2e4.\n            \ud034\uc988 \uacf5\uac1c api\ub97c \uc774\uc6a9\ud558\uc5ec \ub79c\ub364\uc8fc\uc81c 5\uac00\uc9c0\uc758 \ud034\uc988\uac00 \ucd9c\uc81c\ub429\ub2c8\ub2e4.\n            \ud034\uc988\ub97c \ud480\uace0 \uacb0\uacfc\ub97c \ucc28\ud2b8\ub85c \ud655\uc778\ud560 \uc218 \uc788\uace0 \uc624\ub2f5\ub178\ud2b8\ub97c \uc791\uc131\ud558\uace0 \n            \uc774\ub825\uc744 \ub0a8\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",techList:["React","Redux","Typescript","Emotion","SCSS","Victory","react-icons"],link:"https://github.com/kks2139/quiz",site:"https://kks2139.github.io/quiz-deploy/"},{imgUrl:"pj1.PNG",projectName:"Shopping cart",period:"~ 2021.07",description:"Redux\ub97c \uacf5\ubd80\ud558\uba74\uc11c \ub9cc\ub4e0 \ud1a0\uc774 \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4.\n            depth\uac00 \uae4a\uc740 \uc0c1\ud488 \ub9ac\uc2a4\ud2b8\ub97c \uc870\ud68c\ud558\uace0 \uc774\ub97c Redux \ub85c \uad00\ub9ac\ud558\ub294 \ud654\uba74\uc744\n            \ub9cc\ub4e4\uc5b4\ubcf4\uace0 \uc2f6\uc5b4\uc11c \uc2dc\uc791\ud558\uac8c \ub41c \uac1c\uc778 \ud504\ub85c\uc81d\ud2b8 \uc785\ub2c8\ub2e4.\n            \uc120\ud0dd\ud55c \uc0c1\ud488\uc758 \uc635\uc158\uc744 \uc120\ud0dd\ud55c \ud6c4 \uc7a5\ubc14\uad6c\ub2c8\uc5d0 \ub2f4\uace0 \ucd1d \uae08\uc561\uae4c\uc9c0 \uacc4\uc0b0\ud558\ub294 \n            \uc0c1\ud488 \uc8fc\ubb38\uc571 \uc785\ub2c8\ub2e4.",techList:["React","Redux","Typescript","CSS"],link:"https://github.com/kks2139/shopping-cart",site:"https://kks2139.github.io/deploy-shopping-cart/"},{imgUrl:"pj3.PNG",projectName:"Responsive style app",period:"~ 2021.06",description:"W3School \uc0ac\uc774\ud2b8\uc758 \uba54\uc778 \ud654\uba74\uc744 \ucc38\uace0\ud558\uc5ec\n            \ubc18\uc751\ud615 \uc6f9\ud398\uc774\uc9c0\ub97c \uad6c\ud604\ud558\uc600\uc2b5\ub2c8\ub2e4.",techList:["React","Javascript","CSS"],link:"https://github.com/kks2139/clone-w3s-main",site:"https://kks2139.github.io/responsive-app-refering-w3s/"},{imgUrl:"pj5.PNG",projectName:"Tetris",period:"~ 2021.05",description:"React Hooks\uc744 \uacf5\ubd80\ud558\uba70 \ub9cc\ub4e0 \ud1a0\uc774\ud504\ub85c\uc81d\ud2b8 \uc785\ub2c8\ub2e4.\n            \ub85c\uadf8\uc778 \uc2dc CSRF \ud1a0\ud070\uc73c\ub85c \uc0ac\uc6a9\uc790\ub97c \uc778\uc99d\ud569\ub2c8\ub2e4. \n            \uac8c\uc784\uc5d0 \uc785\uc7a5\ud55c \uc0ac\uc6a9\uc790\ub294 \uc870\uc791\ud0a4\uc640 \ud14c\ub9c8\uc0c9\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \n            \ub09c\uc774\ub3c4\ub97c \uc120\ud0dd\ud558\uace0 \ud14c\ud2b8\ub9ac\uc2a4 \uac8c\uc784\uc744 \uc990\uae38 \uc218 \uc788\uace0, \n            \uac8c\uc784\uc774 \ub05d\ub09c\ud6c4\uc5d4 \uc810\uc218\uac00 \uae30\ub85d\ub429\ub2c8\ub2e4.\n            \uae30\ub85d\ub41c \uc810\uc218\ub4e4\uc740 \ub7ad\ud0b9\ubaa9\ub85d\uc744 \ud1b5\ud574 \uc870\ud68c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",techList:["React","Javascript","CSS","ExpressJS","AWS RDB","AWS EC2","MySQL","Nginx","FTP"],link:"https://github.com/kks2139/Tetris",site:"http://ec2-3-36-219-54.ap-northeast-2.compute.amazonaws.com/"}]},Q=t.p+"static/media/stary-sky.e74961c7.jpg";var W=Object(d.a)(M||(M=Object(s.a)(["\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  > .background {\n    position: absolute;\n    background-image: url(",");\n    width: 100%;\n    height: 600px;\n    box-shadow: 0 5px 30px 0 black;\n  }\n  > .content {\n    width: calc(100% - 100px);\n    margin-top: 200px;\n    padding: 0 100px;\n    .about-box {\n      position: relative;\n      display: flex;\n      justify-content: space-between;\n      height: 310px;\n      .im {\n        margin-top: 10px;\n        font-size: 25px;\n        font-weight: bold;\n        color: var(--color-main);\n        span {\n          color: white;\n        }\n        .feat {\n          margin-top: 15px;\n          display: flex;\n        }\n      }\n    }\n    .footer {\n      display: flex;\n      justify-content: center;\n      margin: 270px 0 15px 0;\n      height: 30px;\n      color: white;\n    }\n  }\n  .rocket-box {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-right: 100px;\n    width: 310px;\n    height: 310px;\n    overflow: hidden;\n    img {\n      position: absolute;\n    }\n    .rk {\n      width: 200px;\n      animation-name: shaking;\n      animation-duration: 5s;\n      animation-timing-function: ease;\n      animation-iteration-count: infinite;\n    }\n    [class*='st'] {\n      width: 35px;\n      animation-duration: 3s;\n      animation-timing-function: linear;\n      animation-iteration-count: infinite;\n      \n    }\n    .st1 {\n      width: 30px;\n      transform: translate(-500px, -500px);\n      animation-name: fall-1;\n      animation-delay: 0s;\n    }\n    .st2 {\n      z-index: 2;\n      transform: translate(-500px, -500px);\n      animation-name: fall-2;\n      animation-delay: 1s;\n    }\n    .st3 {\n      width: 30px;\n      transform: translate(-500px, -500px);\n      animation-name: fall-3;\n      animation-delay: 2s;\n    }\n    .st4 {\n      z-index: 2;\n      transform: translate(-500px, -500px);\n      animation-name: fall-4;\n      animation-delay: 3s;\n    }\n  }\n\n  @keyframes shaking {\n    0% {transform: rotate(-50deg);}\n    50% {transform: rotate(-40deg);}\n    100% {transform: rotate(-50deg);}\n  }\n  @keyframes fall-1 {\n    0% {transform: translate(-30px, -200px);}\n    100% {transform: translate(-200px, 200px);}\n  }\n  @keyframes fall-2 {\n    0% {transform: translate(100px, -200px);}\n    100% {transform: translate(-140px, 200px);}\n  }\n  @keyframes fall-3 {\n    0% {transform: translate(140px, -200px);}\n    100% {transform: translate(-50px, 200px);}\n  }\n  @keyframes fall-4 {\n    0% {transform: translate(220px, -200px);}\n    100% {transform: translate(0px, 200px);}\n  }\n\n  @media screen and (max-width: 1300px) {\n    .content {\n      .about-box {\n        .rocket-box {\n          position: fixed;\n          top: -116px;\n          left: 40px;\n          transform: scale(0.16);\n          z-index: 101;\n        }\n      }\n    }\n  }\n\n  @media screen and (max-width: 900px){\n    .content {\n      padding: 0;\n    }\n  }\n\n  @media screen and (max-width: 710px){\n    .intro-box {\n      .im {\n        font-size: 23px !important;\n        .feat {\n          flex-direction: column;\n        }\n      }\n    }\n  }\n\n  @media screen and (max-width: 385px){\n    .content {\n      width: 100%;\n      padding: 0 20px;\n      .im {\n        font-size: 20px !important;\n      }\n      .about-box {\n        .rocket-box {\n          left: 0;\n        }\n      }\n      .sub-title {\n        font-size: 32px;\n      }\n    }\n  }\n\n"])),Q),V=function(){return Object(b.b)("div",{css:W,children:[Object(b.a)(h,{}),Object(b.a)("div",{className:"background"}),Object(b.b)("div",{className:"content",children:[Object(b.b)("div",{className:"about-box",id:"About",children:[Object(b.b)("div",{className:"intro-box",children:[Object(b.a)(O,{text:"Let me introduce myself !",size:47}),Object(b.b)("div",{className:"im",children:[Object(b.a)("span",{children:"Hello!"}),Object(b.b)("div",{children:[Object(b.a)("span",{children:"I'm "}),"Kwangsun Kim."]}),Object(b.b)("div",{className:"feat",children:[Object(b.a)(N,{textList:["\uc0ac\uc6a9\uc790 \uc785\uc7a5\uc5d0\uc11c \uace0\ubbfc\ud558\ub294","\ud611\uc5c5\uc758 \uc2dc\ub108\uc9c0\ub97c \uc911\uc694\uc2dc\ud558\ub294","\ubd80\uc871\ud55c \ubd80\ubd84\uc744 \ucc44\uc6cc\ub098\uac00\ub294","\uafb8\uc900\ud788 \uc131\uc7a5\ud574 \ub098\uac00\ub294"],size:27,width:350}),Object(b.a)("span",{children:"\uac1c\ubc1c\uc790 \uc785\ub2c8\ub2e4."})]})]})]}),Object(b.b)("div",{className:"rocket-box",children:[Object(b.a)("img",{className:"rk",src:"shuttle.png"}),Object(b.a)("img",{className:"st1",src:"star.png"}),Object(b.a)("img",{className:"st2",src:"star.png"}),Object(b.a)("img",{className:"st3",src:"star.png"}),Object(b.a)("img",{className:"st4",src:"star.png"})]})]}),Object(b.a)("div",{className:"sub-title",children:"Career"}),Object(b.a)(C,{}),Object(b.a)("div",{className:"sub-title",id:"Projects",children:"Projects"}),Object(b.a)("div",{className:"pjt-wrapper",children:B.projects.map((function(n){return Object(b.a)(I,{imgUrl:n.imgUrl,projectName:n.projectName,period:n.period,description:n.description,techList:n.techList,site:n.site,link:n.link},n.projectName)}))}),Object(b.a)("div",{className:"sub-title",children:"Skills & Tools"}),Object(b.a)(A,{}),Object(b.a)("div",{className:"sub-title",id:"Contact",children:"Contact"}),Object(b.a)(H,{}),Object(b.a)("div",{className:"footer",children:"Developed by KKS \ud83e\uddd1\ud83c\udffb"})]})]})},Y=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;t(n),i(n),a(n),c(n),r(n)}))},_=t(7);o.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(V,{})}),document.getElementById("root")),Y()}},[[34,1,2]]]);
//# sourceMappingURL=main.ee65e06b.chunk.js.map