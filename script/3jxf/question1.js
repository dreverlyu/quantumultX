
const url = "http://221.204.170.88:8184/app/question";
const body = "{\"userId\":\"2536713\",\"method\":1,\"totalGrade\":\"100\",\"list\":[{\"selectAnswer\":\"A\",\"grade\":10,\"ifCorrect\":1,\"questionCode\":\"66c0b8b74e9e4f61961ac919cf93e7dc\",\"questionType\":1},{\"selectAnswer\":\"D\",\"grade\":10,\"ifCorrect\":1,\"questionCode\":\"cda80de538814c3f82dc9c4d4ac58396\",\"questionType\":1},{\"selectAnswer\":\"B\",\"grade\":10,\"ifCorrect\":1,\"questionCode\":\"372d271b929e4a6f95f38b4a92b05522\",\"questionType\":1},{\"selectAnswer\":\"B\",\"grade\":10,\"ifCorrect\":1,\"questionCode\":\"74b9ac532b364d7183d1ad2218f2e9ba\",\"questionType\":1},{\"selectAnswer\":\"C\",\"grade\":10,\"ifCorrect\":1,\"questionCode\":\"a091dca9b0c4453b979f10934ddec2a9\",\"questionType\":1},{\"selectAnswer\":\"C\",\"grade\":10,\"ifCorrect\":1,\"questionCode\":\"bfbde7cb0d9543cea6ba4faa6a3272c8\",\"questionType\":1},{\"selectAnswer\":\"C\",\"grade\":10,\"ifCorrect\":1,\"questionCode\":\"010ce1aaa59a4667ac3fe60a8d1d9eb8\",\"questionType\":1},{\"selectAnswer\":\"A\",\"grade\":10,\"ifCorrect\":1,\"questionCode\":\"4dc30f15bd0244568a07f96f00b88f4a\",\"questionType\":1},{\"selectAnswer\":\"B\",\"grade\":10,\"ifCorrect\":1,\"questionCode\":\"8de0983b86454b64b18a751217bebc23\",\"questionType\":3},{\"selectAnswer\":\"A\",\"grade\":10,\"ifCorrect\":1,\"questionCode\":\"cef67bd0d449407ca8323434f27365a2\",\"questionType\":1}],\"summaryCode\":\"1a40dba7b2d24acb9b6c9e5759eea871\"}";
const headers = {
    "Connection": "close",
    "Accept-Encoding": "gzip, deflate",
    "Content-Type": "application/json",
    "Origin": "http://sxzhdjkhd.sxdygbjy.gov.cn:8081",
    "userId": "2536713",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHBpcmVUaW1lIjoxNTkxNzE0ODMyNjgzLCJ1c2VyQ29kZSI6MjUzNjcxMywiYWNjb3VudCI6IjE4MjM1MTUyMDcwIiwiYWNjb3VudFR5cGUiOjF9.n8qf5VNU8XkT5ulq43FBSYzO_C2oN5si8w3iaK4m1yk",
    "Host": "221.204.170.88:8184",
    "Referer": "http://sxzhdjkhd.sxdygbjy.gov.cn:8081/zhdj-pre/",
    "Accept-Language": "zh-cn",
    "Accept": "*/*"
};
const request = {
    url: url,
    headers: headers,
    body: body
};

$task.fetch(request).then(response => {
        console.log(response.body)
        var body = JSON.parse(response.body);
        if(body.message == "请求成功"){
            $notify("三晋先锋","我要答题成功", "目前排名"+body.bestRank)}
        count +=2;
    }, reason => {
        console.log(reason.error);
    });
