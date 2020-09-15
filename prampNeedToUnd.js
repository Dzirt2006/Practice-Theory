function shortestWordEditPath(source, target, words) {
    /**
     @param source: string
     @param target: string
     @param words: string[]
     @return: integer
     */

        // your code goes here
    let dict = new Set(words);
    let step = 0;
    let q = [source];
    while(q.length) {
        const next = [];
        for(let w of q) {
            if(w === target) return step;

            for(let i= 0; i < w.length;i++) {
                for(let j = 0; j < 26; j++) {
                    const w2 = w.slice(0,i) + String.fromCharCode(97 + j) + w.slice(i + 1); // 97-> 'a'

                    if(dict.has(w2)) {
                        next.push(w2);
                        dict.delete(w2);
                    }
                }
            }
        }
        q = next;
        step++;
    }
    return  -1;
}
