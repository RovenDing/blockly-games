/**
* Blockly Games: Ding
/**
* @author weifen@mijotech.net
*/
'use strict';
goog.provide('Ding');
goog.require('Ding.soy');
goog.require('Ding.Blocks');
goog.require('BlocklyDialogs');
goog.require('BlocklyGames');
goog.require('BlocklyInterface');
goog.require('goog.math');
BlocklyGames.NAME = 'Ding';
/**
* Initialize Blockly and the Ding. Called on page load.
*/
Ding.init = function() {
// Render the Soy template.
document.body.innerHTML = Ding.soy.start({}, null,
{lang: BlocklyGames.LANG,
html: BlocklyGames.IS_HTML});
BlocklyInterface.init();
var rtl = BlocklyGames.isRtl();
var blocklyDiv = document.getElementById('blockly');
var onresize = function(e) {
blocklyDiv.style.width = (window.innerWidth - 20) + 'px';
blocklyDiv.style.height =
(window.innerHeight - blocklyDiv.offsetTop - 15) + 'px';
};
onresize();
window.addEventListener('resize', onresize);
Blockly.inject(document.getElementById('blockly'),
{toolbox: document.getElementById('toolbox')});
};
window.addEventListener('load', Ding.init);