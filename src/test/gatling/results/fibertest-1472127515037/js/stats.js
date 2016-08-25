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
        "total": "2000",
        "ok": "2000",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2251",
        "ok": "2251",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2005",
        "ok": "2005",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2002",
        "ok": "2002",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2003",
        "ok": "2002",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2007",
        "ok": "2007",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2118",
        "ok": "2118",
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
        "total": "489.13",
        "ok": "489.13",
        "ko": "-"
    }
},
contents: {
"req_test-098f6": {
        type: "REQUEST",
        name: "test",
path: "test",
pathFormatted: "req_test-098f6",
stats: {
    "name": "test",
    "numberOfRequests": {
        "total": "22500",
        "ok": "22500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2000",
        "ok": "2000",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2251",
        "ok": "2251",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2005",
        "ok": "2005",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2002",
        "ok": "2002",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2003",
        "ok": "2003",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2007",
        "ok": "2007",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2118",
        "ok": "2118",
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
        "total": "489.13",
        "ok": "489.13",
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
