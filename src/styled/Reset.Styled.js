import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    * {outline:0 !important;}
*,
*:after,
*:before { box-sizing: border-box;} 
html,body,h1,h2,h3,h4,h5,h6,div,p,blockquote,pre,code,address,ul,ol,li,menu,nav,section,article,aside,
dl,dt,dd,table,thead,tbody,tfoot,label,caption,th,td,form,fieldset,legend,hr,input,button,textarea,object,figure,figcaption {margin:0;padding:0;}
html, body{width:100%;}
html{-webkit-touch-callout:none; -webkit-user-select:none; -webkit-tap-highlight-color:rgba(0, 0, 0, 0);}
body{width:100%; background:#fff; min-width:320px; -webkit-text-size-adjust:none;word-wrap:break-word;word-break:break-all;}
body,input,select,textarea,button {border:none;font-size:12px; font-family: 'Noto Sans KR', sans-serif; color:#080404;}
ul,ol,li{list-style:none;}
table{width:100%;border-spacing:0;border-collapse:collapse;}
img,fieldset{border:0; display: block;}
address,cite,code,em{font-style:normal;font-weight:normal;}
label,img,input,select,textarea,button{vertical-align:middle;}
.hide,caption,legend{line-height:0;font-size:1px;overflow:hidden;}
hr{display:none;}
main,header,section,nav,footer,aside,article,figure{display:block;}
a{color:#080404;text-decoration:none;}
div,p,li,a,h1,h2,h3,h4,h5,h6,a { line-height: 1em; }
h1,h2,h3,h4,h5,h6 { font-family: sans-serif; }

/* Form */
textarea { border:1px solid #dbdbdb;}
select { width: 100%; height:100%; font-size:14px; color:#373737; border:none; background:#fff;border-radius: 5px;}
input[type=tel],
input[type=time],
input[type=text],
input[type=password],
input[type=search],
input[type=email],
input[type=file],
input[type=url],
input[type=number],
input[type=date],textarea {width:100%; height:100%; font-size:14px; color:#373737; border:none; background:#fff; padding: 0 1em; transition: all 0.5s; vertical-align:middle;}
input::-webkit-input-placeholder{color:#b5b5b5; font-size:12px; line-height:100%;}
textarea { padding:1em;}
select:focus,
textarea:focus,
input:focus { border: none;}

input[type=tel][readonly],
input[type=text][readonly],
input[type=password][readonly],
input[type=email][readonly], 
input[type=search][readonly], 
input[type=tel][disabled],
input[type=text][disabled],
input[type=password][disabled],
input[type=search][disabled],
input[type=email][disabled]{background: transparent; border-color:transparent; color:#666; -webkit-appearance:none;font-size:12px;}
textarea[readonly],
textarea[disabled]{padding:11px; font-size:16px; color:#666; font-weight:normal; line-height:1.4em; height:100px; background:#eaeaea;border:1px solid #c0c0c0;}
`;



