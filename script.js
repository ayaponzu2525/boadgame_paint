const prompts = [

    //食べ物
    {"prompt": "りんご", "category": "食べ物", "difficulty": "簡単"},
    {"prompt": "たこ焼き", "category": "食べ物", "difficulty": "普通"},
    {"prompt": "おにぎり", "category": "食べ物", "difficulty": "簡単"},
    {"prompt": "とうもろこし", "category": "食べ物", "difficulty": "普通"},
    {"prompt": "さくらんぼ", "category": "食べ物", "difficulty": "簡単"},
    {"prompt": "すいか", "category": "食べ物", "difficulty": "普通"},
    {"prompt": "ラーメン", "category": "食べ物", "difficulty": "普通"},
    {"prompt": "フランスパン", "category": "食べ物", "difficulty": "簡単"},
    {"prompt": "トマト", "category": "食べ物", "difficulty": "簡単"},
    {"prompt": "とうふ", "category": "食べ物", "difficulty": "簡単"},
    {"prompt": "カレーライス", "category": "食べ物", "difficulty": "普通"},
    {"prompt": "パンケーキ", "category": "食べ物", "difficulty": "簡単"},
    {"prompt": "そば", "category": "食べ物", "difficulty": "普通"},
    {"prompt": "たいやき", "category": "食べ物", "difficulty": "普通"},
    {"prompt": "バナナ", "category": "食べ物", "difficulty": "簡単"},
    {"prompt": "ピザ", "category": "食べ物", "difficulty": "簡単"},
    {"prompt": "ハンバーガー", "category": "食べ物", "difficulty": "簡単"},

    //乗り物
    {"prompt": "バイク", "category": "乗り物", "difficulty": "普通"},
    {"prompt": "新幹線", "category": "乗り物", "difficulty": "難しい"},
    {"prompt": "宇宙船", "category": "乗り物", "difficulty": "難しい"},
    {"prompt": "くるま", "category": "乗り物", "difficulty": "普通"},
    {"prompt": "ひこうき", "category": "乗り物", "difficulty": "難しい"},
    {"prompt": "気球", "category": "乗り物", "difficulty": "難しい"},

    //建物自然
    {"prompt": "雷", "category": "自然", "difficulty": "普通"},
    {"prompt": "海賊船", "category": "乗り物", "difficulty": "難しい"},
    {"prompt": "潜水艦", "category": "乗り物", "difficulty": "難しい"},
    {"prompt": "お城", "category": "建物", "difficulty": "普通"},
    {"prompt": "スカイツリー", "category": "建物", "difficulty": "難しい"},
    {"prompt": "ジェットコースター", "category": "乗り物", "difficulty": "難しい"},
    {"prompt": "火山", "category": "自然", "difficulty": "難しい"},
    {"prompt": "地球", "category": "自然", "difficulty": "簡単"},
    {"prompt": "エッフェル塔", "category": "建物", "difficulty": "難しい"},
    {"prompt": "花", "category": "自然", "difficulty": "簡単"},
    {"prompt": "ピラミッド", "category": "建物", "difficulty": "普通"},
    {"prompt": "東京タワー", "category": "建物", "difficulty": "普通"},
    {"prompt": "富士山", "category": "自然", "difficulty": "普通"},
    {"prompt": "海", "category": "自然", "difficulty": "簡単"},
    {"prompt": "月", "category": "自然", "difficulty": "簡単"},
    {"prompt": "星空", "category": "自然", "difficulty": "普通"},
    {"prompt": "ひまわり", "category": "自然", "difficulty": "簡単"},
    {"prompt": "もみじ", "category": "自然", "difficulty": "普通"},
    {"prompt": "モアイ像", "category": "建物", "difficulty": "難しい"},
    {"prompt": "スフィンクス", "category": "建物", "difficulty": "難しい"},
    {"prompt": "ビッグベン", "category": "建物", "difficulty": "難しい"},
    {"prompt": "コロッセオ", "category": "建物", "difficulty": "難しい"},
    {"prompt": "氷山", "category": "自然", "difficulty": "難しい"},
    {"prompt": "夕日", "category": "自然", "difficulty": "普通"},
    {"prompt": "稲妻", "category": "自然", "difficulty": "普通"},
    {"prompt": "虹", "category": "自然", "difficulty": "簡単"},
    {"prompt": "流れ星", "category": "自然", "difficulty": "普通"},
    {"prompt": "桜の花", "category": "自然", "difficulty": "普通"},

    //　キャラ
    {"prompt": "ドラゴン", "category": "キャラ", "difficulty": "難しい"},
    {"prompt": "ユニコーン", "category": "キャラ", "difficulty": "難しい"},
    {"prompt": "サンタクロース", "category": "キャラ", "difficulty": "普通"},
    {"prompt": "雪だるま", "category": "キャラ", "difficulty": "簡単"},
    {"prompt": "クレヨンしんちゃん", "category": "キャラ", "difficulty": "普通"},
    {"prompt": "マリオ", "category": "キャラ", "difficulty": "簡単"},
    {"prompt": "ピカチュウ", "category": "キャラ", "difficulty": "簡単"},
    {"prompt": "ドラえもん", "category": "キャラ", "difficulty": "普通"},
    {"prompt": "忍者", "category": "キャラ", "difficulty": "普通"},
    {"prompt": "ロボット", "category": "キャラ", "difficulty": "難しい"},
    {"prompt": "ダースベーダー", "category": "キャラ", "difficulty": "難しい"},
    {"prompt": "ばいきんまん", "category": "キャラ", "difficulty": "普通"},
    {"prompt": "おさるのジョージ", "category": "キャラ", "difficulty": "普通"},
    {"prompt": "くまのプーさん", "category": "キャラ", "difficulty": "簡単"},
    {"prompt": "トトロ", "category": "キャラ", "difficulty": "普通"},
    {"prompt": "マイク・ワゾウスキ", "category": "キャラ", "difficulty": "普通"},
    {"prompt": "シュレック", "category": "キャラ", "difficulty": "難しい"},
    {"prompt": "ムーミン", "category": "キャラ", "difficulty": "普通"},
    {"prompt": "スヌーピー", "category": "キャラ", "difficulty": "簡単"},
    {"prompt": "チャーリーブラウン", "category": "キャラ", "difficulty": "普通"},
    {"prompt": "ジブリの猫バス", "category": "キャラ", "difficulty": "難しい"},
    {"prompt": "ドラゴンボール", "category": "キャラ", "difficulty": "普通"},
    {"prompt": "ナルト", "category": "キャラ", "difficulty": "難しい"},
    {"prompt": "モンスターボール", "category": "キャラ", "difficulty": "簡単"},
    {"prompt": "ドナルドダック", "category": "キャラ", "difficulty": "普通"},
    {"prompt": "ミッキーマウス", "category": "キャラ", "difficulty": "普通"},
    {"prompt": "スパイダーマン", "category": "キャラ", "difficulty": "難しい"},
    {"prompt": "アイアンマン", "category": "キャラ", "difficulty": "難しい"},
    {"prompt": "キャプテンアメリカ", "category": "キャラ", "difficulty": "難しい"},

    // 動物
    {"prompt": "馬", "category": "動物", "difficulty": "普通"},
    {"prompt": "カモメ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "トナカイ", "category": "動物", "difficulty": "普通"},
    {"prompt": "ペンギン", "category": "動物", "difficulty": "普通"},
    {"prompt": "ホタル", "category": "動物", "difficulty": "難しい"},
    {"prompt": "かたつむり", "category": "動物", "difficulty": "難しい"},
    {"prompt": "うさぎ", "category": "動物", "difficulty": "簡単"},
    {"prompt": "とら", "category": "動物", "difficulty": "普通"},
    {"prompt": "カブトムシ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "くじら", "category": "動物", "difficulty": "難しい"},
    {"prompt": "たぬき", "category": "動物", "difficulty": "普通"},
    {"prompt": "かめ", "category": "動物", "difficulty": "普通"},
    {"prompt": "パンダ", "category": "動物", "difficulty": "簡単"},
    {"prompt": "ねこ", "category": "動物", "difficulty": "簡単"},
    {"prompt": "サメ", "category": "動物", "difficulty": "普通"},
    {"prompt": "いぬ", "category": "動物", "difficulty": "簡単"},
    {"prompt": "コアラ", "category": "動物", "difficulty": "簡単"},
    {"prompt": "イルカ", "category": "動物", "difficulty": "普通"},
    {"prompt": "アザラシ", "category": "動物", "difficulty": "普通"},
    {"prompt": "ネズミ", "category": "動物", "difficulty": "普通"},
    {"prompt": "トナカイ", "category": "動物", "difficulty": "普通"},
    {"prompt": "クマ", "category": "動物", "difficulty": "普通"},
    {"prompt": "サル", "category": "動物", "difficulty": "普通"},
    {"prompt": "カメ", "category": "動物", "difficulty": "簡単"},
    {"prompt": "シャチ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "金魚", "category": "動物", "difficulty": "簡単"},
    {"prompt": "ハト", "category": "動物", "difficulty": "普通"},
    {"prompt": "ウミガメ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "かえる", "category": "動物", "difficulty": "簡単"},
    {"prompt": "うぐいす", "category": "動物", "difficulty": "難しい"},
    {"prompt": "シロクマ", "category": "動物", "difficulty": "普通"},
    {"prompt": "マグロ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "ライオン", "category": "動物", "difficulty": "普通"},
    {"prompt": "ワニ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "サバンナ", "category": "自然", "difficulty": "難しい"},
    {"prompt": "バッファロー", "category": "動物", "difficulty": "難しい"},
    {"prompt": "オオカミ", "category": "動物", "difficulty": "普通"},
    {"prompt": "オウム", "category": "動物", "difficulty": "難しい"},
    {"prompt": "キングコブラ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "コウモリ", "category": "動物", "difficulty": "普通"},
    {"prompt": "アリクイ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "ツノダシ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "イグアナ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "コンドル", "category": "動物", "difficulty": "難しい"},
    {"prompt": "チーター", "category": "動物", "difficulty": "難しい"},
    {"prompt": "ミーアキャット", "category": "動物", "difficulty": "難しい"},
    {"prompt": "ダチョウ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "セイウチ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "ゾウ", "category": "動物", "difficulty": "普通"},
    {"prompt": "カピバラ", "category": "動物", "difficulty": "普通"},
    {"prompt": "カブトガニ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "ウミヘビ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "クリオネ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "シカ", "category": "動物", "difficulty": "普通"},
    {"prompt": "アザラシ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "ラッコ", "category": "動物", "difficulty": "普通"},
    {"prompt": "ヒョウ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "ジャガー", "category": "動物", "difficulty": "難しい"},
    {"prompt": "ライチョウ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "ハゲタカ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "イカ", "category": "動物", "difficulty": "普通"},
    {"prompt": "タコ", "category": "動物", "difficulty": "普通"},
    {"prompt": "カニ", "category": "動物", "difficulty": "普通"},
    {"prompt": "クマノミ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "ホッキョクグマ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "カリブー", "category": "動物", "difficulty": "難しい"},
    {"prompt": "ナマケモノ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "ハリネズミ", "category": "動物", "difficulty": "普通"},
    {"prompt": "クジャク", "category": "動物", "difficulty": "難しい"},
    {"prompt": "リス", "category": "動物", "difficulty": "普通"},
    {"prompt": "ビーバー", "category": "動物", "difficulty": "難しい"},
    {"prompt": "シマウマ", "category": "動物", "difficulty": "普通"},
    {"prompt": "アリ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "ハエ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "チョウ", "category": "動物", "difficulty": "普通"},
    {"prompt": "ハチ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "カエル", "category": "動物", "difficulty": "普通"},
    {"prompt": "トカゲ", "category": "動物", "difficulty": "普通"},
    {"prompt": "コウテイペンギン", "category": "動物", "difficulty": "難しい"},
    {"prompt": "ニワトリ", "category": "動物", "difficulty": "簡単"},
    {"prompt": "アヒル", "category": "動物", "difficulty": "簡単"},
    {"prompt": "キリン", "category": "動物", "difficulty": "普通"},
    {"prompt": "サイ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "バッタ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "ミミズ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "カメレオン", "category": "動物", "difficulty": "難しい"},
    {"prompt": "フクロウ", "category": "動物", "difficulty": "普通"},
    {"prompt": "セミ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "クモ", "category": "動物", "difficulty": "普通"},
    {"prompt": "カメ", "category": "動物", "difficulty": "普通"},
    {"prompt": "ヤモリ", "category": "動物", "difficulty": "普通"},
    {"prompt": "オオカマキリ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "トンボ", "category": "動物", "difficulty": "普通"},
    {"prompt": "ハト", "category": "動物", "difficulty": "普通"},
    {"prompt": "スズメ", "category": "動物", "difficulty": "簡単"},
    {"prompt": "カラス", "category": "動物", "difficulty": "普通"},
    {"prompt": "ツバメ", "category": "動物", "difficulty": "普通"},
    {"prompt": "ペリカン", "category": "動物", "difficulty": "難しい"},
    {"prompt": "ウグイス", "category": "動物", "difficulty": "難しい"},
    {"prompt": "メダカ", "category": "動物", "difficulty": "簡単"},
    {"prompt": "クラゲ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "タツノオトシゴ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "エビ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "キンギョ", "category": "動物", "difficulty": "簡単"},
    {"prompt": "サンゴ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "カジキ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "マッコウクジラ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "シャチ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "イルカ", "category": "動物", "difficulty": "普通"},
    {"prompt": "サメ", "category": "動物", "difficulty": "普通"},
    {"prompt": "ミノカサゴ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "ウナギ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "カワウソ", "category": "動物", "difficulty": "普通"},
    {"prompt": "タカアシガニ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "イセエビ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "ウーパールーパー", "category": "動物", "difficulty": "難しい"},
    {"prompt": "アンコウ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "アオウミガメ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "カワセミ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "マンボウ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "タツノオトシゴ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "フグ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "カジキマグロ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "アザラシ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "トド", "category": "動物", "difficulty": "難しい"},
    {"prompt": "カツオ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "ウミガメ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "リス", "category": "動物", "difficulty": "普通"},
    {"prompt": "サイ", "category": "動物", "difficulty": "難しい"},
    {"prompt": "オランウータン", "category": "動物", "difficulty": "難しい"},

    // 身の回り
    {"prompt": "歯ブラシ", "category": "日用品", "difficulty": "難しい"},
    {"prompt": "タオル", "category": "日用品", "difficulty": "簡単"},
    {"prompt": "石けん", "category": "日用品", "difficulty": "簡単"},
    {"prompt": "洗濯ばさみ", "category": "日用品", "difficulty": "普通"},
    {"prompt": "ドライヤー", "category": "日用品", "difficulty": "普通"},
    {"prompt": "シャンプーのボトル", "category": "日用品", "difficulty": "普通"},
    {"prompt": "リモコン", "category": "日用品", "difficulty": "普通"},
    {"prompt": "ティッシュ", "category": "日用品", "difficulty": "簡単"},
    {"prompt": "ゴミ箱", "category": "日用品", "difficulty": "簡単"},
    {"prompt": "傘", "category": "日用品", "difficulty": "普通"},
    {"prompt": "鏡", "category": "日用品", "difficulty": "簡単"},
    {"prompt": "腕時計", "category": "日用品", "difficulty": "普通"},
    {"prompt": "財布", "category": "日用品", "difficulty": "普通"},
    {"prompt": "電球", "category": "日用品", "difficulty": "普通"},
    {"prompt": "カレンダー", "category": "日用品", "difficulty": "普通"},
    {"prompt": "ハサミ", "category": "日用品", "difficulty": "普通"},
    {"prompt": "スリッパ", "category": "日用品", "difficulty": "簡単"},
    {"prompt": "トイレットペーパー", "category": "日用品", "difficulty": "簡単"},
    {"prompt": "リュックサック", "category": "日用品", "difficulty": "普通"},
    {"prompt": "ボールペン", "category": "日用品", "difficulty": "簡単"},
    {"prompt": "ノートパソコン", "category": "日用品", "difficulty": "難しい"},
    {"prompt": "携帯電話", "category": "日用品", "difficulty": "難しい"},
    {"prompt": "靴下", "category": "日用品", "difficulty": "簡単"},
    {"prompt": "帽子", "category": "日用品", "difficulty": "普通"},
    {"prompt": "めがね", "category": "日用品", "difficulty": "普通"},
    {"prompt": "ネクタイ", "category": "日用品", "difficulty": "普通"},
    {"prompt": "本", "category": "日用品", "difficulty": "簡単"},
    {"prompt": "鍵", "category": "日用品", "difficulty": "普通"},
    {"prompt": "コップ", "category": "日用品", "difficulty": "簡単"},
    {"prompt": "ホワイトボード", "category": "日用品", "difficulty": "普通"},
    {"prompt": "カーテン", "category": "日用品", "difficulty": "普通"},
    {"prompt": "アイロン", "category": "日用品", "difficulty": "難しい"},
    {"prompt": "電気ケトル", "category": "日用品", "difficulty": "普通"},
    {"prompt": "マウス", "category": "日用品", "difficulty": "普通"},
    {"prompt": "キーボード", "category": "日用品", "difficulty": "普通"},
    {"prompt": "ヘッドホン", "category": "日用品", "difficulty": "普通"},
    {"prompt": "USBメモリ", "category": "日用品", "difficulty": "普通"},
    {"prompt": "扇風機", "category": "日用品", "difficulty": "普通"},
    {"prompt": "手袋", "category": "日用品", "difficulty": "簡単"},
    {"prompt": "新聞", "category": "日用品", "difficulty": "普通"},
    {"prompt": "フォーク", "category": "日用品", "difficulty": "簡単"},
    {"prompt": "スプーン", "category": "日用品", "difficulty": "簡単"},
    {"prompt": "お皿", "category": "日用品", "difficulty": "簡単"},
    {"prompt": "フォトフレーム", "category": "日用品", "difficulty": "普通"},
    {"prompt": "テレビ", "category": "日用品", "difficulty": "難しい"},
    {"prompt": "冷蔵庫", "category": "日用品", "difficulty": "難しい"},
    {"prompt": "炊飯器", "category": "日用品", "difficulty": "難しい"},
    {"prompt": "掃除機", "category": "日用品", "difficulty": "難しい"},
    {"prompt": "洗濯機", "category": "日用品", "difficulty": "難しい"},
    {"prompt": "エアコン", "category": "日用品", "difficulty": "難しい"},
    {"prompt": "電子レンジ", "category": "日用品", "difficulty": "難しい"},
    {"prompt": "トースター", "category": "日用品", "difficulty": "普通"},
    {"prompt": "包丁", "category": "日用品", "difficulty": "普通"},
    {"prompt": "フライパン", "category": "日用品", "difficulty": "普通"},
    {"prompt": "まな板", "category": "日用品", "difficulty": "普通"},
    {"prompt": "アルミ缶", "category": "日用品", "difficulty": "普通"},
    {"prompt": "ペットボトル", "category": "日用品", "difficulty": "簡単"},
    {"prompt": "電卓", "category": "日用品", "difficulty": "普通"},
    {"prompt": "新聞", "category": "日用品", "difficulty": "簡単"},
    {"prompt": "雑誌", "category": "日用品", "difficulty": "普通"},
    {"prompt": "名刺", "category": "日用品", "difficulty": "普通"},
    {"prompt": "タブレット端末", "category": "日用品", "difficulty": "難しい"},
    {"prompt": "腕時計", "category": "日用品", "difficulty": "普通"},
    {"prompt": "電気スタンド", "category": "日用品", "difficulty": "普通"},
    {"prompt": "懐中電灯", "category": "日用品", "difficulty": "普通"},
];


const shapes = [
    {"shape": "正三角形", "image": "shapes/triangle.png"},
    {"shape": "波", "image": "shapes/wave.png"},
    {"shape": "楕円", "image": "shapes/oval.png"},
    {"shape": "ハート", "image": "shapes/heart.png"},
    {"shape": "半円", "image": "shapes/semicircle.png"},
    {"shape": "正四角形", "image": "shapes/square.png"},
    {"shape": "階段", "image": "shapes/stairs.png"},
    {"shape": "おうぎ", "image": "shapes/fan.png"},
];

let usedPrompts = [];
let currentShapes = [...shapes];
let usedShapes = [];
let isHidden = false;

let roundCounter = 1;
let players = [];

document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('nextBtn').addEventListener('click', nextRound); // ここでは nextRound のみを呼び出す
document.getElementById('endBtn').addEventListener('click', endGame);
document.getElementById('toggleHideBtn').addEventListener('click', toggleHide);
document.getElementById('shapesbtn').addEventListener('click', showNextShape);
document.getElementById('addPlayerBtn').addEventListener('click', addPlayer);


/* ゲームを開始し、最初のお題と図形を表示します。
スタートボタンを非表示にし、次のお題や終了、表示切替のボタンを表示します。
現在のラウンド数を更新します。 */
function startGame() {
    showNextPrompt();
    showNextShape();
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'inline-block';
    document.getElementById('endBtn').style.display = 'inline-block';
    document.getElementById('toggleHideBtn').style.display = 'inline-block';
    updateRoundCounter();
}

// 現在のラウンド数を画面に表示します。
function updateRoundCounter() {
    document.getElementById('roundCounter').textContent = `${roundCounter} 回目`;
}

function nextRound() {
    roundCounter++; // ラウンド数を増やす
    updateRoundCounter(); // ラウンドカウンターを更新
    showNextPrompt(); // 次のお題を表示
    showNextShape(); // 次の図形を表示
}


// 使用可能なお題の中からランダムに1つを選択して表示し、選択したお題を usedPrompts に移動します。
// 全てのお題が表示された場合、警告を表示します。
function showNextPrompt() {
    if (prompts.length === 0) {
        alert('すべてのお題が表示されました。');
        return;
    }

    const randomIndex = Math.floor(Math.random() * prompts.length);
    const selectedPrompt = prompts.splice(randomIndex, 1)[0];
    usedPrompts.push(selectedPrompt);

    document.getElementById('prompt').textContent = selectedPrompt.prompt;
    document.getElementById('category').textContent = `カテゴリ: ${selectedPrompt.category}`;
    document.getElementById('difficulty').textContent = `難易度: ${selectedPrompt.difficulty}`;

    updateVisibility();
}

// ゲームを終了し、すべての状態をリセット
function endGame() {
    if (confirm('ゲームを終了しますか？')) {
        document.getElementById('prompt').textContent = '';
        document.getElementById('category').textContent = '';
        document.getElementById('difficulty').textContent = '';
        document.getElementById('startBtn').style.display = 'inline-block';
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('endBtn').style.display = 'none';
        document.getElementById('toggleHideBtn').style.display = 'none';
        prompts.push(...usedPrompts);
        usedPrompts = [];
        isHidden = false;
        currentShapes = [...shapes];
        usedShapes = [];
        document.getElementById('shapes').textContent = '';
        document.getElementById('shapeImage').style.display = 'none';
        updateVisibility();

        // お題の表示スタイルをリセット
        const promptContainer = document.getElementById('promptContainer');
        promptContainer.querySelectorAll('p').forEach(p => {
            p.style.display = 'block';
            p.style.textAlign = 'center';
        });

        roundCounter = 1;
        updateRoundCounter();
        players = [];
        updateScoreboard();
    }
}

// お題の表示/非表示を切り替え
function toggleHide() {
    isHidden = !isHidden;
    const promptContainer = document.getElementById('promptContainer');
    const hiddenImage = document.getElementById('hiddenImage');
    
    if (isHidden) {
        promptContainer.querySelectorAll('p').forEach(p => p.style.display = 'none');
        hiddenImage.style.display = 'block';
        document.getElementById('toggleHideBtn').textContent = '表示する';
    } else {
        promptContainer.querySelectorAll('p').forEach(p => {
            p.style.display = 'block';
        });
        hiddenImage.style.display = 'none';
        document.getElementById('toggleHideBtn').textContent = '隠す';
    }
}

// お題、カテゴリ、難易度の表示状態を更新
function updateVisibility() {
    const elements = ['prompt', 'category', 'difficulty'];
    elements.forEach(id => {
        const element = document.getElementById(id);
        element.style.visibility = isHidden ? 'hidden' : 'visible';
    });
    document.getElementById('toggleHideBtn').textContent = isHidden ? '表示する' : '隠す';
}

// 使用可能な図形の中からランダムに1つを選択して表示し、選択した図形を usedShapes に移動します。
// 全ての図形が使用された場合、リセットします。
function showNextShape() {
    if (currentShapes.length === 0) {
        // 全ての図形を使い切った場合、リセットする
        currentShapes = [...shapes];
        usedShapes = [];
    }

    const randomIndex = Math.floor(Math.random() * currentShapes.length);
    const selectedShape = currentShapes.splice(randomIndex, 1)[0];
    usedShapes.push(selectedShape);

    document.getElementById('shapes').textContent = selectedShape.shape;
    
    const shapeImage = document.getElementById('shapeImage');
    shapeImage.src = selectedShape.image;
    shapeImage.style.display = 'block';
}

// 新しいプレイヤーを追加し、スコアボードを更新
function addPlayer() {
    const playerName = prompt("プレイヤー名を入力してください:");
    if (playerName) {
        players.push({ name: playerName, score: 0 });
        updateScoreboard();
    }
}

// スコアボードを最新の状態に更新
function updateScoreboard() {
    const scoreboard = document.getElementById('scoreboard');
    scoreboard.innerHTML = '';
    players.forEach((player, index) => {
        const playerDiv = document.createElement('div');
        playerDiv.className = 'scoreboard-item'; // ここでクラスを追加
        playerDiv.innerHTML = `
            <span>${player.name}　:　</span>
            <span id="score-${index}">${player.score}</span>
            <button onclick="addPoint(${index})">+1</button>
            <button onclick="subtractPoint(${index})">-1</button>
            <button onclick="removePlayer(${index})">削除</button>
        `;
        scoreboard.appendChild(playerDiv);
    });
}


// プレイヤー削除
function removePlayer(playerIndex) {
    if (confirm(`${players[playerIndex].name} を削除しますか？`)) {
        players.splice(playerIndex, 1);  // プレイヤーをリストから削除
        updateScoreboard();  // スコアボードを更新
    }
}


// 指定されたプレイヤーのスコアを1ポイント増やす
function addPoint(playerIndex) {
    players[playerIndex].score++;
    updateScoreboard();
}

// 指定されたプレイヤーのスコアを1ポイント減らしますが、スコアが0未満にならないようにする
function subtractPoint(playerIndex) {
    players[playerIndex].score = Math.max(0, players[playerIndex].score - 1);
    updateScoreboard();
}