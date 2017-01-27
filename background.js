// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

wrapperDiv = document.createElement("div");
wrapperDiv.setAttribute("style","position: absolute; left: 0px; top: 0px; background-color: rgb(255, 255, 255); opacity: 0.5; z-index: 2000; height: 1083px; width: 100%;");

iframeElement = document.createElement("iframe");
iframeElement.setAttribute("style","width: 100%; height: 100%;");

wrapperDiv.appendChild(iframeElement);

modalDialogParentDiv = document.createElement("div");
modalDialogParentDiv.setAttribute("style","position: absolute; width: 350px; border: 1px solid rgb(51, 102, 153); padding: 10px; background-color: rgb(255, 255, 255); z-index: 2001; overflow: auto; text-align: center; top: 149px; left: 497px;");

modalDialogSiblingDiv = document.createElement("div");

modalDialogTextDiv = document.createElement("div"); 
modalDialogTextDiv.setAttribute("style" , "text-align:center");

modalDialogTextSpan = document.createElement("span"); 
modalDialogText = document.createElement("strong"); 
modalDialogText.innerHTML = "Processing...  Please Wait.";

breakElement = document.createElement("br"); 
imageElement = document.createElement("img"); 
imageElement.src = chrome.extension.getURL("spinner_progress.gif");

modalDialogTextSpan.appendChild(modalDialogText);
modalDialogTextDiv.appendChild(modalDialogTextSpan);
modalDialogTextDiv.appendChild(breakElement);
modalDialogTextDiv.appendChild(breakElement);
modalDialogTextDiv.appendChild(imageElement);

modalDialogSiblingDiv.appendChild(modalDialogTextDiv);
modalDialogParentDiv.appendChild(modalDialogSiblingDiv);

document.body.appendChild(wrapperDiv);
document.body.appendChild(modalDialogParentDiv);


let array = [
    "https://www.youtube.com/watch?v=TCcTJjLFDE8",
    "https://www.youtube.com/watch?v=AjZ0KbJcav0",
    "https://www.youtube.com/watch?v=J5pgrnstX6w",
    "https://www.youtube.com/watch?v=Hzp1xb41U40",
    "https://www.youtube.com/watch?v=UF8uR6Z6KLc",
    "https://www.youtube.com/watch?v=w8HdOHrc3OQ",
    "http://i.quoteaddicts.com/media/quotes/67/3334062-dalai-lama.jpg",
    "http://www.allquotes.info/wp-content/uploads/2016/02/Thich-Nhat-Hanh-Quotes-25-The-Best-Ones.jpg",
    "https://quotefancy.com/media/wallpaper/1600x900/3742-Carl-Sagan-Quote-We-are-star-stuff-which-has-taken-its-destiny.jpg",
    "https://www.youtube.com/watch?v=V2EfL1j4KYE",
    "https://www.youtube.com/watch?v=z1PSbDmV8Gw",
    "https://www.youtube.com/watch?v=UNQhuFL6CWg",
    "https://www.youtube.com/watch?v=H1sXTmaqRHU",
    "https://www.youtube.com/watch?v=Cz3q1R0oHmE",
    "https://www.youtube.com/watch?v=26U_seo0a1g",
    "https://www.youtube.com/watch?v=9Q-8VRxNuo8"
]

// let divPopup = document.createElement('DIV');
// let pPopup = document.createElement('H1');
// let inputPopup = document.createElement('INPUT');

// divPopup.appendChild(pPopup).appendChild(inputPopup);

function updateIcon() {
    let rando = Math.floor(Math.random() * 15);
    var newURL = array[rando];
    document.body.appendChild(divPopup);
    // chrome.tabs.create({ url: newURL })
}

chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();
