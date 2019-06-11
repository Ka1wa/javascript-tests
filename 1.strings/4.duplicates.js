// string에 똑같은 단어 몇번 있는지 확인해야 한다
// 예를 들면:
//   "apple pear melon banana grape" => false
//   "apple pear apple banana apple" => true
function duplicates(words)
{
    // 코드 여기 작성해야 한다. 리턴해야 한다!
    
    return;
}









// 테스트 코드
// 이 라인 후 수정하지 마세요.
var test = function(input, output)
{
    var pass = duplicates(input) === output;

    console.log("Test: duplicates(\"" + input + "\") === " + output + ": " + pass);

    return pass;
}

var tests = [
    test("apple pear melon banana grape", false),
    test("grapefruit fruit melon banana apple", false),
    test("apple pear apple banana apple", true),
    test("pear banana banana banana", true)
];

var passed = tests.filter(function(output){ return output }).length === tests.length;

console.log("-------------------\r\nPractice question 1.4 duplicates: " + (passed ? "Success. Next one!" : "Failed. Try again!"));