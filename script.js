const prompts = [
    {"prompt": "いぬ", "category": "動物", "difficulty": "簡単"},
    {"prompt": "くるま", "category": "乗り物", "difficulty": "普通"},
    {"prompt": "花", "category": "自然", "difficulty": "簡単"},
    {"prompt": "ひこうき", "category": "乗り物", "difficulty": "難しい"},
    {"prompt": "ダースベーダー", "category": "キャラ", "difficulty": "難しい"},
    {"prompt": "ばいきんまん", "category": "キャラ", "difficulty": "普通"},
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