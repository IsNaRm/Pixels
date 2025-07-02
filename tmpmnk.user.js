// ==UserScript==
// @name         YouTube Music Auto Continue
// @namespace    http://tampermonkey.net/
// @version      1.01
// @description  Автоматически продолжает воспроизведение в YouTube Music
// @author       You
// @match        https://music.youtube.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/IsNaRm/Pixels/main/tmpmnk.user.js
// @downloadURL  https://raw.githubusercontent.com/IsNaRm/Pixels/main/tmpmnk.user.js
// ==/UserScript==

setInterval(() => {
  // 1. Проверка и клик по кнопке при наличии нужного div
  const targetDiv = document.querySelector('div.font-bam.text-2024.text-black.uppercase');
  if (targetDiv && targetDiv.textContent.trim() === 'not raid list') {
    let button = document.querySelectorAll('.left-controls')[0]?.querySelectorAll('button')[4];
    if (button) {
      button.click();
      console.log('Button clicked (left-controls)');
    }
  }

  // 2. Проверка и клик по кнопке внутри блока "вы ещё слушаете?"
  const elem = document.querySelector('.actions.style-scope.ytmusic-you-there-renderer');
  if (elem && elem.parentElement && elem.parentElement.parentElement) {
    const parent = elem.parentElement.parentElement;
    const display = window.getComputedStyle(parent).getPropertyValue('display');
    if (display !== 'none') {
      const parentButton = parent.querySelector('button');
      if (parentButton) {
        parentButton.click();
        console.log('Button clicked (you-there)');
      } else {
        console.log('Button not found inside parent (you-there)');
      }
    } else {
      // Не выводим лишний лог, чтобы не засорять консоль
      // console.log('Parent is hidden (display: none)');
    }
  }
}, 3000);
