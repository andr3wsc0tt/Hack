function balanced(word) {
    var len = word.length;
    console.log(word);
    if (len % 2 == 0) {
        var ls = word.substring(0, (len / 2));
        var rs = word.substring((len / 2), word.length);
        console.log(`${ls} ${rs}`);

        var ls_sum = 0;
        var rs_sum = 0;

        for (let i = 0; i < ls.length; i++) {
            ls_sum += (ls.charCodeAt(i) - 96)
        }
        for (let i = 0; i < rs.length; i++) {
            rs_sum += (rs.charCodeAt(i) - 96)
        }
        if (rs_sum == ls_sum)
            return true;
        else
            return false;
    }
    else {
        var ls = word.substring(0, (len / 2));
        var rs = word.substring((len / 2) + 1, word.length);
        console.log(`${ls} ${rs}`);

        var ls_sum = 0;
        var rs_sum = 0;

        for (let i = 0; i < ls.length; i++) {
            ls_sum += (ls.charCodeAt(i) - 96)
        }
        for (let i = 0; i < rs.length; i++) {
            rs_sum += (rs.charCodeAt(i) - 96)
        }
        if (rs_sum == ls_sum)
            return true;
        else
            return false;
    }
}