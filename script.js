// script.js
document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('clickable-image');
    
    // 2つの音声ファイルのURLリスト
    const soundUrls = [
        "https://pub-aab82de189cc4de2ab98d01648c8b06c.r2.dev/nc116455_%E3%82%84%E3%82%8A%E3%81%BE%E3%81%99%E3%81%AD%E3%81%87%EF%BC%81.wav",
        "https://pub-aab82de189cc4de2ab98d01648c8b06c.r2.dev/nc51910_%E3%83%B3%E3%82%A2%E3%83%83%E3%83%BC%EF%BC%81.mp3"
    ];

    let audio = null; // 現在の音声オブジェクトを保持する変数

    image.addEventListener('click', function() {
        // ランダムに音声ファイルを選択
        const randomIndex = Math.floor(Math.random() * soundUrls.length);
        const selectedSoundUrl = soundUrls[randomIndex];
        
        // 既存の音声が再生中の場合は停止する
        if (audio) {
            audio.pause();
            audio.currentTime = 0; // 再生位置をリセット
        }
        
        // 新しい音声を再生
        audio = new Audio(selectedSoundUrl);
        audio.play();
    });

    // 右クリックを無効にする
    image.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
