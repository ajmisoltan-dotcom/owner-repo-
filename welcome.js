#!/usr/bin/env node
// سكربت ترحيب JavaScript

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function welcome() {
  console.log('🌟 برنامج الترحيب 🌟');
  console.log('==================================');
  
  rl.question('ما اسمك؟ ', (name) => {
    console.log('');
    console.log(`مرحباً ${name}! 👋`);
    console.log('أهلاً وسهلاً بك معنا! 🎉');
    console.log('==================================');
    console.log('نتمنى لك يوماً رائعاً! ✨');
    rl.close();
  });
}

welcome();
