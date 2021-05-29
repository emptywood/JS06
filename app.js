let seireki = prompt('西暦何年ですか？');
seireki = parseInt(seireki);
let msg;// 出力文字列
// うるう年の判定 //
if (seireki % 4 > 0) {
	msg = '平年です';
} else {
	if (seireki % 100 > 0) {
		msg = 'うるう年です';
	} else {
		if (seireki % 400 > 0) {
			msg = '平年です';
		} else {
			msg = 'うるう年です';
		}
	}
}
alert(msg);
