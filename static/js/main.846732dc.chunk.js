(this["webpackJsonpmy-pf"]=this["webpackJsonpmy-pf"]||[]).push([[0],{26:function(n,e,t){},27:function(n,e,t){},31:function(n,e,t){"use strict";t.r(e);var i,r=t(2),c=t.n(r),a=t(17),o=t.n(a),s=(t(26),t(4)),l=(t(27),t(5)),d=t(18),p=t(1);var b,h=Object(l.a)(i||(i=Object(s.a)(["\n    z-index: 10;\n    position: fixed;\n    top: 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    height: 70px;\n    padding: 0 50px;\n    color: var(--color-main);\n    background-color: rgb(0, 0, 0, 0.7);\n    backdrop-filter: blur(7px);\n    .tit {\n        font-size: 30px;\n        font-weight: bold;\n        cursor: pointer;\n        svg {\n            margin-right: 10px;\n            transform: translateY(3px);\n        }\n    }\n    .menus {\n        display: flex;\n    }\n"]))),m=function(){return Object(p.b)("div",{css:h,children:[Object(p.b)("div",{className:"tit",children:[Object(p.a)(d.a,{}),"Home"]}),Object(p.b)("div",{className:"menus",children:[Object(p.a)(j,{text:"About"}),Object(p.a)(j,{text:"Projects"}),Object(p.a)(j,{text:"Contact"})]})]})};var x,u=Object(l.a)(b||(b=Object(s.a)(["\n    width: fit-content;\n    font-size: 21px;\n    box-sizing: content-box;\n    padding: 0 10px;\n    margin: 0 20px;\n    border-radius: var(--radius);\n    color: white;\n    font-weight: bold;\n    cursor: pointer;\n    transition: .2s;\n    .bar {\n        height: 5px;\n        width: 0px;\n        background-color: var(--color-main);\n        border-radius: var(--radius);\n        transition: .2s;\n    }\n    &:hover {\n        .bar {\n            width: 100%;\n        }\n    }\n"]))),j=function(n){var e=n.text;return Object(p.b)("a",{css:u,children:[e,Object(p.a)("div",{className:"bar"})]})};var v,f=function(n){return Object(l.a)(x||(x=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    .txt {\n        font-size:","px;\n        font-weight: bold;\n        color: var(--color-main);\n        .hide {\n            display: none;\n        }\n        .eli\n    }\n    .cursor {\n        width: 4px;\n        height: ","px;\n        margin-left: 7px;\n        transition: .3s;\n        background-color: white;\n        animation-name: blink;\n        animation-duration: 1.1s;\n        animation-timing-function: ease;\n        animation-iteration-count: infinite;\n    }\n    \n    @keyframes blink {\n        0% {opacity: 0;}\n        50% {opacity: 1;}\n        100% {opacity: 0;}\n    }\n"])),n,n)},g=function(n){var e=n.text,t=n.size,i=void 0===t?45:t,c=e.split(""),a=Object(r.useRef)(null),o=Object(r.useRef)(0);return Object(r.useEffect)((function(){return o.current=window.setInterval((function(){var n=a.current.querySelector(".hide");n?n.classList.remove("hide"):clearInterval(o.current)}),130),function(){return clearInterval(o.current)}})),Object(p.b)("div",{css:f(i),children:[Object(p.a)("div",{className:"txt",ref:a,children:c.map((function(n,e){return Object(p.a)("span",{className:"hide",children:n},e)}))}),Object(p.a)("div",{className:"cursor"})]})};var O,w=function(n){var e=n.size,t=n.width;return Object(l.a)(v||(v=Object(s.a)(["\n    width: ","px;\n    font-size: ","px;\n    overflow: hidden;\n    margin: 0 10px;\n    text-align: center;\n    border-bottom: 1px solid var(--color-main);\n    .txt-box {\n        width: 100%;\n        height: ","px;\n        transition: .8s;\n    }\n"])),t,e,e+10)},k=function(n){var e=n.textList,t=n.size,i=void 0===t?20:t,c=n.width,a=void 0===c?350:c,o=Object(r.useRef)(0),s=Object(r.useRef)(0),l=Object(r.useRef)(null);return Object(r.useEffect)((function(){var n=l.current.querySelector(".txt-box");return s.current=window.setInterval((function(){n.style.transform="translateY(calc(100% * -".concat(o.current,"))"),o.current=o.current<e.length-1?o.current+1:0}),2800),function(){return clearInterval(s.current)}}),[]),Object(p.a)("div",{css:w({size:i,width:a}),ref:l,children:Object(p.a)("div",{className:"txt-box",children:e.map((function(n,e){return Object(p.a)("div",{className:"txt",children:n},e)}))})})},N=t(19);var y,S=Object(l.a)(O||(O=Object(s.a)(["\n    color: white;\n    font-size: 22px;\n    a {\n        font-weight: bold;\n        margin: 0 5px;\n    }\n    .desc {\n        > div {\n            line-height: 40px;\n            span {\n                font-weight: bold;\n            }\n        }\n    }\n    .tech {\n        margin-top: 10px;\n        > div {\n            display: flex;\n            align-items: center;\n            .el {\n                width: 120px;\n            }\n        }\n    }\n"]))),z=function(n){return Object(N.a)(n),Object(p.b)("div",{css:S,children:[Object(p.b)("div",{className:"desc",children:[Object(p.b)("div",{children:["\uc5e0\ub85c (2018.01 ~) ",Object(p.a)("a",{href:"http://www.emro.co.kr/",target:"blank",children:"http://www.emro.co.kr"})]}),Object(p.a)("div",{children:"\ud611\ub825\uc0ac \ub4f1\ub85d, \uacac\uc801\uc11c\uc791\uc131, \ubc1c\uc8fc\uc0dd\uc131, \uc785\uace0/\uac80\uc218 \ub4f1 \uad6c\ub9e4 \uc2dc\uc2a4\ud15c\uc744 \uad6c\ucd95\ud558\ub294 \ud504\ub85c\uc81d\ud2b8\ub4e4\uc5d0 \ucc38\uc5ec\ud558\uc600\uc2b5\ub2c8\ub2e4."}),Object(p.b)("div",{children:["\uac1c\ubc1c\uc5d0\uc11c \ubc30\ud3ec, \uc6b4\uc601\uae4c\uc9c0 \ub2f4\ub2f9\ud558\uc600\uace0, \uc8fc\ub85c Javascript / CSS / HTML \uacfc",Object(p.a)("a",{href:"https://library.polymer-project.org/3.0/docs/devguide/feature-overview",target:"blank",children:"PolymerJS"}),"\ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c"]}),Object(p.a)("div",{children:"\uc0ac\uc6a9\ud558\uc5ec Front \uac1c\ubc1c\uc744 \uc9c4\ud589\ud558\uc600\uc2b5\ub2c8\ub2e4."})]}),Object(p.a)("br",{}),Object(p.a)("div",{children:"\uac1c\ubc1c \ud658\uacbd"}),Object(p.b)("div",{className:"tech",children:[Object(p.b)("div",{children:[Object(p.a)("div",{className:"el",children:"\u2022 Client"}),Object(p.a)(C,{text:"Javascript"}),Object(p.a)(C,{text:"CSS"}),Object(p.a)(C,{text:"HTML"}),Object(p.a)(C,{text:"PolmyerJS"})]}),Object(p.b)("div",{children:[Object(p.a)("div",{className:"el",children:"\u2022 Server"}),Object(p.a)(C,{text:"Java"}),Object(p.a)(C,{text:"Spring Framework"}),Object(p.a)(C,{text:"Oracle RDB"})]}),Object(p.b)("div",{children:[Object(p.a)("div",{className:"el",children:"\u2022 DevOps"}),Object(p.a)(C,{text:"Jenkins"}),Object(p.a)(C,{text:"FTP"})]}),Object(p.b)("div",{children:[Object(p.a)("div",{className:"el",children:"\u2022 \ud611\uc5c5\ud234"}),Object(p.a)(C,{text:"Jira"}),Object(p.a)(C,{text:"Confluence"}),Object(p.a)(C,{text:"SVN"})]})]})]})};var R,L=Object(l.a)(y||(y=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    padding: 2px 10px;\n    width: fit-content;\n    border-radius: var(--radius);\n    border: 1px solid var(--color-dark-main);\n    font-size: 19px;\n    color: var(--color-dark-main);\n    margin: 5px 15px 5px 0;\n    transition: .3s;\n    &:hover {\n        border: 1px solid #6bffff;\n        color: #6bffff;\n    }\n"]))),C=function(n){var e=n.text;return Object(p.a)("div",{css:L,children:e})},J=t(20),T=t(21);var E,F=Object(l.a)(R||(R=Object(s.a)(["\n    padding: 20px 0;\n    margin-bottom: 100px;\n    .wrapper {\n        display: flex;\n        .preview {\n            position: relative;\n            width: 600px;\n            min-width: 600px;\n            height: 400px;\n            padding: 40px;\n            overflow: hidden;\n            border-radius: var(--radius);\n            background-color: #2b8165;\n            &:hover {\n                .cir1 {\n                    transform: scale(1.1);\n                }\n                .cir2 {\n                    transform: scale(1.3);\n                }\n                .cir3 {\n                    transform: scale(2.5);\n                }\n                .cir4 {\n                    transform: scale(2.2);\n                }\n                img {\n                    transform: scale(1.05);\n                    box-shadow: 0 0 30px 10px black;\n                }\n            }\n            img {\n                z-index: 1;\n                position: relative;\n                width: 100%;\n                height: 100%;\n                border-radius: 10px;\n                box-shadow: 0 0 30px 5px black;\n                transition: .5s;\n            }\n            [class*='cir'] {\n                position: absolute;\n                border-radius: 50%;\n                transition: .5s;\n            }\n            .cir1 {\n                width: 150px;\n                height: 150px;\n                top: -50px;\n                left: -50px;\n                background-color: #bfc5c4;\n            }\n            .cir2 {\n                width: 110px;\n                height: 110px;\n                top: 300px;\n                left: 400px;\n                background-color: #8affe4;\n            }\n            .cir3 {\n                width: 100px;\n                height: 100px;\n                top: 300px;\n                left: -10px;\n                background-color: #9ed5b2;\n            }\n            .cir4 {\n                width: 70px;\n                height: 70px;\n                top: 0;\n                left: 410px;\n                background-color: #80ffad;\n            }\n        }\n        .explain {\n            padding-left: 40px;\n            flex-grow: 1;\n            color: white;\n            .tit {\n                color: var(--color-main);\n                font-size: 37px;\n                margin-bottom: 20px;\n            }\n            .for {\n                font-size: 22px;\n                margin: 6px 0;\n            }\n            .desc {\n                white-space: pre-line;\n                font-size: 20px;\n                line-height: 35px;\n            }\n            .tech {\n                display: flex;\n                flex-wrap: wrap;\n                margin-top: 7px;\n            }\n            .link {\n                margin: 15px 0 0 15px;\n                svg {\n                    margin-right: 15px;\n                    transition: .3s;\n                    &:hover {\n                        cursor: pointer;\n                        transform: scale(1.1);\n                    }\n                }\n            }\n        }\n    }\n"]))),I=function(n){var e=n.imgUrl,t=n.projectName,i=n.period,r=n.description,c=n.techList,a=n.link,o=n.site,s=function(n){var e="git"===n.currentTarget.dataset.name?a:o;window.open(e,"_blank")};return Object(p.a)("div",{css:F,children:Object(p.b)("div",{className:"wrapper",children:[Object(p.b)("div",{className:"preview",children:[Object(p.a)("img",{src:e}),Object(p.a)("div",{className:"cir1"}),Object(p.a)("div",{className:"cir2"}),Object(p.a)("div",{className:"cir3"}),Object(p.a)("div",{className:"cir4"})]}),Object(p.b)("div",{className:"explain",children:[Object(p.a)("div",{className:"tit",children:t}),Object(p.a)("div",{className:"for",children:i}),Object(p.a)("div",{className:"desc",children:r}),Object(p.a)("div",{className:"tech",children:c.map((function(n){return Object(p.a)(C,{text:n},n)}))}),Object(p.b)("div",{className:"link",children:[Object(p.a)(J.a,{size:"45","data-name":"git",onClick:s}),o?Object(p.a)(T.a,{size:"48","data-name":"site",onClick:s}):null]})]})]})})},P={projects:[{imgUrl:"/pj4.png",projectName:"Employee Management",period:"~ \uc9c4\ud589\uc911",description:"Apollo \uc640 GraphQL \ub97c \uacf5\ubd80\ud558\uba70 \ub9cc\ub4dc\ub294 \ud1a0\uc774 \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4. \n            \uac80\uc0c9 \uc870\uac74\uc5d0 \ub9de\ub294 \uc9c1\uc6d0\ub4e4\uc758 \uc815\ubcf4\ub97c \uac00\uc838\uc640 \ubcf4\uc5ec\uc8fc\ub294 \uc9c1\uc6d0\uad00\ub9ac \ud398\uc774\uc9c0\uc785\ub2c8\ub2e4.",techList:["React","GraphQL","Apollo","Redux","Typescript","ExpressJS","Emotion","SCSS"],link:"https://github.com/kks2139/employee-management",site:""},{imgUrl:"/pj2.png",projectName:"Quiz",period:"~ 2021.08",description:"\ubb38\uc81c\ub97c \ub9de\ucd94\uace0 \uc624\ub2f5\ub178\ud2b8\ub97c \uae30\ub85d\ud558\ub294 \uac04\ub2e8\ud55c \ud034\uc988\uc6f9\uc571 \uc785\ub2c8\ub2e4.\n            \ud034\uc988 \uacf5\uac1c api\ub97c \uc774\uc6a9\ud558\uc5ec \ub79c\ub364\uc8fc\uc81c 5\uac00\uc9c0\uc758 \ud034\uc988\uac00 \ucd9c\uc81c\ub429\ub2c8\ub2e4.\n            \ud034\uc988\ub97c \ud480\uace0 \uacb0\uacfc\ub97c \ucc28\ud2b8\ub85c \ud655\uc778\ud560 \uc218 \uc788\uace0 \uc624\ub2f5\ub178\ud2b8\ub97c \uc791\uc131\ud558\uace0 \n            \uc774\ub825\uc744 \ub0a8\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",techList:["React","Redux","Typescript","Emotion","SCSS","Victory","react-icons"],link:"https://github.com/kks2139/quiz",site:"https://kks2139.github.io/quiz-deploy/"},{imgUrl:"/pj1.png",projectName:"Shopping cart",period:"~ 2021.07",description:"Redux\ub97c \uacf5\ubd80\ud558\uba74\uc11c \ub9cc\ub4e0 \ud1a0\uc774 \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4.\n            depth\uac00 \uae4a\uc740 \uc0c1\ud488 \ub9ac\uc2a4\ud2b8\ub97c \uc870\ud68c\ud558\uace0 \uc774\ub97c Redux \ub85c \uad00\ub9ac\ud558\ub294 \ud654\uba74\uc744\n            \ub9cc\ub4e4\uc5b4\ubcf4\uace0 \uc2f6\uc5b4\uc11c \uc2dc\uc791\ud558\uac8c \ub41c \uac1c\uc778 \ud504\ub85c\uc81d\ud2b8 \uc785\ub2c8\ub2e4.\n            \uc120\ud0dd\ud55c \uc0c1\ud488\uc758 \uc635\uc158\uc744 \uc120\ud0dd\ud55c \ud6c4 \uc7a5\ubc14\uad6c\ub2c8\uc5d0 \ub2f4\uace0 \ucd1d \uae08\uc561\uae4c\uc9c0 \uacc4\uc0b0\ud558\ub294 \n            \uc0c1\ud488 \uc8fc\ubb38\uc571 \uc785\ub2c8\ub2e4.",techList:["React","Redux","Typescript","CSS"],link:"https://github.com/kks2139/shopping-cart",site:"https://kks2139.github.io/deploy-shopping-cart/"},{imgUrl:"/pj3.png",projectName:"Responsive style app",period:"~ 2021.06",description:"W3School \uc0ac\uc774\ud2b8\uc758 \uba54\uc778 \ud654\uba74\uc744 \ucc38\uace0\ud558\uc5ec \ubc18\uc751\ud615 \uc6f9\ud398\uc774\uc9c0\ub97c \uad6c\ud604.",techList:["React","Javascript","CSS"],link:"https://github.com/kks2139/clone-w3s-main",site:"https://kks2139.github.io/responsive-app-refering-w3s/"},{imgUrl:"/pj5.png",projectName:"Tetris",period:"~ 2021.05",description:"React Hooks\uc744 \uacf5\ubd80\ud558\uba70 \ub9cc\ub4e0 \ud1a0\uc774\ud504\ub85c\uc81d\ud2b8 \uc785\ub2c8\ub2e4.\n            \ub85c\uadf8\uc778 \uc2dc CSRF \ud1a0\ud070\uc73c\ub85c \uc0ac\uc6a9\uc790\ub97c \uc778\uc99d\ud569\ub2c8\ub2e4. \uac8c\uc784\uc5d0 \uc785\uc7a5\ud55c \uc0ac\uc6a9\uc790\ub294\n            \uc870\uc791\ud0a4\uc640 \ud14c\ub9c8\uc0c9\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \n            \ub09c\uc774\ub3c4\ub97c \uc120\ud0dd\ud558\uace0 \ud14c\ud2b8\ub9ac\uc2a4 \uac8c\uc784\uc744 \uc990\uae38 \uc218 \uc788\uace0 \uac8c\uc784\uc774 \ub05d\ub09c\ud6c4\uc5d4 \uc810\uc218\uac00 \uae30\ub85d\ub429\ub2c8\ub2e4.\n            \uae30\ub85d\ub41c \uc810\uc218\ub4e4\uc740 \ub7ad\ud0b9\ubaa9\ub85d\uc744 \ud1b5\ud574 \uc870\ud68c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",techList:["React","Javascript","CSS","ExpressJS","AWS RDB","AWS EC2","MySQL","Nginx","FTP"],link:"https://github.com/kks2139/Tetris",site:"http://ec2-3-36-219-54.ap-northeast-2.compute.amazonaws.com/"}]};var U=Object(l.a)(E||(E=Object(s.a)(["\n  min-height: 100vh;\n  .intro {\n    width: 100%;\n    margin-top: 200px;\n    padding: 0 100px;\n    .im {\n      margin-top: 10px;\n      font-size: 25px;\n      font-weight: bold;\n      color: var(--color-main);\n      span {\n        color: white;\n      }\n      .feat {\n        margin-top: 15px;\n        display: flex;\n      }\n    }\n  }\n"]))),A=function(){return Object(p.b)("div",{css:U,children:[Object(p.a)(m,{}),Object(p.b)("div",{className:"intro",children:[Object(p.a)(g,{text:"Let me introduce myself !",size:47}),Object(p.b)("div",{className:"im",children:[Object(p.a)("span",{children:"Hello!"}),Object(p.b)("div",{children:[Object(p.a)("span",{children:"I'm "}),"Kwangsun Kim."]}),Object(p.b)("div",{className:"feat",children:[Object(p.a)(k,{textList:["\uc0ac\uc6a9\uc790 \uc785\uc7a5\uc5d0\uc11c \uace0\ubbfc\ud558\ub294","\ud611\uc5c5\uc758 \uc2dc\ub108\uc9c0\ub97c \uc911\uc694\uc2dc\ud558\ub294","\ubd80\uc871\ud55c \ubd80\ubd84\uc744 \ucc44\uc6cc\ub098\uac00\ub294","\uafb8\uc900\ud788 \uc131\uc7a5\ud574 \ub098\uac00\ub294"],size:27,width:350}),Object(p.a)("span",{children:"\uac1c\ubc1c\uc790 \uc785\ub2c8\ub2e4."})]})]}),Object(p.a)("div",{className:"sub-title",children:"Career"}),Object(p.a)(z,{}),Object(p.a)("div",{className:"sub-title",children:"Projects"}),P.projects.map((function(n){return Object(p.a)(I,{imgUrl:n.imgUrl,projectName:n.projectName,period:n.period,description:n.description,techList:n.techList,site:n.site,link:n.link},n.projectName)}))]})]})},H=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),i(n),r(n),c(n),a(n)}))},M=t(6);o.a.render(Object(M.jsx)(c.a.StrictMode,{children:Object(M.jsx)(A,{})}),document.getElementById("root")),H()}},[[31,1,2]]]);
//# sourceMappingURL=main.846732dc.chunk.js.map