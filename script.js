// script.js
document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('clickable-image');
    
    // 2つの音声ファイルのURLリスト
    const soundUrls = [
        "https://pub-aab82de189cc4de2ab98d01648c8b06c.r2.dev/nc116455_%E3%82%84%E3%82%8A%E3%81%BE%E3%81%99%E3%81%AD%E3%81%87%EF%BC%81.wav",
        "https://pub-aab82de189cc4de2ab98d01648c8b06c.r2.dev/nc116912_Foo%E2%86%91%E6%B0%97%E6%8C%81%E3%81%A1%E3%81%84%E3%81%84%E3%82%A3%EF%BD%9E.mp3",
        "https://pub-aab82de189cc4de2ab98d01648c8b06c.r2.dev/nc163099_%E3%82%93%E3%81%AB%E3%82%83%E3%81%B2%E3%82%9A.wav",
        "https://pub-aab82de189cc4de2ab98d01648c8b06c.r2.dev/nc175438_%E3%81%8A%E5%89%8D%E3%81%AE%E3%81%93%E3%81%A8%E3%81%8B%E3%82%99%E5%A5%BD%E3%81%8D%E3%81%9F%E3%82%99%E3%81%A3%E3%81%9F%E3%82%93%E3%81%9F%E3%82%99%E3%82%88%EF%BC%81%EF%BC%88%E8%BF%AB%E7%9C%9F%EF%BC%89.wav",
        "https://pub-aab82de189cc4de2ab98d01648c8b06c.r2.dev/nc219089_%E9%87%8E%E7%8D%A3_%E3%83%95%E3%82%A1%EF%BC%81%EF%BC%9F.wav",
        "https://pub-aab82de189cc4de2ab98d01648c8b06c.r2.dev/nc99425_114514%EF%BC%88%E9%87%8E%E7%8D%A3%E5%85%88%E8%BC%A9%EF%BC%89.mp3",
        "https://pub-aab82de189cc4de2ab98d01648c8b06c.r2.dev/nc51910_%E3%83%B3%E3%82%A2%E3%83%83%E3%83%BC%EF%BC%81.mp3"
    ];

    // 音声オブジェクトを事前に作成し、ロードしておく
    const audioObjects = soundUrls.map(url => {
        const audio = new Audio(url);
        audio.preload = 'auto'; // 自動的にロード
        return audio;
    });

    let currentAudio = null; // 現在の音声オブジェクトを保持する変数

    image.addEventListener('click', function() {
        // ランダムに音声オブジェクトを選択
        const randomIndex = Math.floor(Math.random() * audioObjects.length);
        const selectedAudio = audioObjects[randomIndex];
        
        // 既存の音声が再生中の場合は停止する
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0; // 再生位置をリセット
        }
        
        // 新しい音声を再生
        currentAudio = selectedAudio;
        currentAudio.play();
    });

    // 右クリックを無効にする
    image.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // 事前に音声ファイルをロード
    window.addEventListener('load', function() {
        audioObjects.forEach(audio => {
            audio.load();
        });
    });
});
