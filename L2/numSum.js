let sum=0; //宣告 sum 這個變數 等於 0，加總從0開始
array = process.argv.length
    for (i = 2; i < array ; i++) {
        sum += Number(process.argv[i]);
             //把字串轉成數字
}

console.log(sum);