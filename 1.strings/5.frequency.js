// string에 가장 많이 있는 글자 확인해야 한다.
// 가장 많이 있는 글자가 없으면 false 리턴해야 한다.
// 예를 들면:
//   "aaaaaaaaaaaaaaaaabbbbcddddeeeeee" => "a"
//   "bBbbaababbBaaccccCdBbbbBbbdDdCcc" => "b"
//   "aaaaaabbbbbbccccccddddddeeeeee" => false
function frequency_min(letters){
    var arraying = letters.split("");
    var obj = {};
    for (var char in arraying){
        var index = arraying[char];
        obj[index] = obj[index]==undefined?1:obj[index]+=1;
    };
    var sorting = [];
    for (var freq in obj){
        sorting.push([freq,obj[freq]]);
    }
    sorting.sort(function (a,b) {
        return b[1] - a[1];
    })
    if ((sorting[0][1])-(sorting[1][1])===0){
        return false
    }else {
        return sorting[0][0];
    }
}

function frequency(letters)
{
    var obj = {};

    letters.split("").forEach(function(letter)
    {
        if(letter in obj)
        {
            obj[letter] += 1;
        }
        else
        {
            obj[letter] = 1;
        }
    });

    var maxLetter = false;
    var maxCounter = 0;

    for(letter in obj)
    {
        var count = obj[letter];

        if(count > maxCounter)
        {
            maxCounter = count;
            maxLetter = letter;
        }
        else if(count === maxCounter)
        {
            maxLetter = false;
        }
    }

    return maxLetter;
}

// 테스트 코드
// 이 라인 후 수정하지 마세요.
var test = function(input, output)
{
    var pass = frequency(input) === output;

    console.log("Test: frequency(\"" + input + "\") === " + output + ": " + pass);

    return pass;
}

var tests = [
    test("aaaaaaaaaaaaaaaaabbbbcddddeeeeee", "a"),
    test("bBbbaababbBaaccccCdBbbbBbbdDdCcc", "b"),
    test("abcdeabcdeabcdeabcdeabcdeabcde", false)
];

var passed = tests.filter(function(output){ return output }).length === tests.length;

console.log("-------------------\r\nPractice question 1.5 frequency: " + (passed ? "Success. Next one!" : "Failed. Try again!"));