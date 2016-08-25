var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "22500",
        "ok": "22500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2130",
        "ok": "2130",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12058",
        "ok": "12058",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "8969",
        "ok": "8969",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1162",
        "ok": "1162",
        "ko": "-"
    },
    "percentiles1": {
        "total": "9008",
        "ok": "9008",
        "ko": "-"
    },
    "percentiles2": {
        "total": "9016",
        "ok": "9015",
        "ko": "-"
    },
    "percentiles3": {
        "total": "10923",
        "ok": "10923",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10934",
        "ok": "10934",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 22500,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "144.231",
        "ok": "144.231",
        "ko": "-"
    }
},
contents: {
"req_test1-5a105": {
        type: "REQUEST",
        name: "test1",
path: "test1",
pathFormatted: "req_test1-5a105",
stats: {
    "name": "test1",
    "numberOfRequests": {
        "total": "22500",
        "ok": "22500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2130",
        "ok": "2130",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12058",
        "ok": "12058",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "8969",
        "ok": "8969",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1162",
        "ok": "1162",
        "ko": "-"
    },
    "percentiles1": {
        "total": "9007",
        "ok": "9008",
        "ko": "-"
    },
    "percentiles2": {
        "total": "9015",
        "ok": "9015",
        "ko": "-"
    },
    "percentiles3": {
        "total": "10923",
        "ok": "10923",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10934",
        "ok": "10934",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 22500,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "144.231",
        "ok": "144.231",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
