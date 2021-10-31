
document.getElementById("button").onclick = function () {

    let random_array = [];
    let coordinate = [[]]
    let num = document.getElementById("number").value

    // (i, j)
    for (let i = 0; i < num; i++) {
        // 乱数生成
        let random_num = Math.floor(Math.random() * 10) + 1;
        random_array.push(random_num);

        // 一行目は数値。それ以降はcurrent_array_numまで*を表示
        for (let j = 0; j < 11; j++) {
            if (j === 0) {
                coordinate[i] = i < 10 ? [i] : [i % 10]
            } else {
                coordinate[i][j] = j <= random_array[i] ? '*' : " "
            }
        }
    }
    // 配列を左に90度回転
    const rotate = a => a[0].map((_, c) => a.map(r => r[c])).reverse();

    // 文字列に変換して1行ずつconsoleに表示(ここがconsoleならではでずるい)
    rotate(coordinate).forEach(element => {
        str = element.join('')
        console.log(str)
    });

}








