const prompts = [
    {"prompt": "犬", "category": "動物", "difficulty": "簡単"},
    {"prompt": "車", "category": "乗り物", "difficulty": "普通"},
    {"prompt": "花", "category": "自然", "difficulty": "簡単"},
    {"prompt": "飛行機", "category": "乗り物", "difficulty": "難しい"}
];

const shapes = [
    {"shape": "正三角形", "image": "triangle.png"},
    {"shape": "波", "image": "wave.png"},
    {"shape": "楕円", "image": "oval.png"},
    {"shape": "ハート", "image": "heart.png"},
    {"shape": "半円", "image": "semicircle.png"},
    {"shape": "正四角形", "image": "square.png"},
    {"shape": "階段", "image": "stairs.png"},
    {"shape": "おうぎ", "image": "fan.png"},
];

let usedPrompts = [];
let currentShapes = [...shapes];
let usedShapes = [];
let isHidden = false;

document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('nextBtn').addEventListener('click', showNextPrompt);
document.getElementById('endBtn').addEventListener('click', endGame);
document.getElementById('toggleHideBtn').addEventListener('click', toggleHide);
document.getElementById('shapesbtn').addEventListener('click', showNextShape);

function startGame() {
    showNextPrompt();
    showNextShape();
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'inline-block';
    document.getElementById('endBtn').style.display = 'inline-block';
    document.getElementById('toggleHideBtn').style.display = 'inline-block';
}

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
    }
}

function toggleHide() {
    isHidden = !isHidden;
    updateVisibility();
}

function updateVisibility() {
    const elements = ['prompt', 'category', 'difficulty'];
    elements.forEach(id => {
        const element = document.getElementById(id);
        element.style.visibility = isHidden ? 'hidden' : 'visible';
    });
    document.getElementById('toggleHideBtn').textContent = isHidden ? '表示する' : '隠す';
}

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