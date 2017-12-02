var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "35000",
        "ok": "28231",
        "ko": "6769"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "6",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "21716",
        "ok": "21716",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "6496",
        "ok": "8054",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "5847",
        "ok": "5462",
        "ko": "0"
    },
    "percentiles1": {
        "total": "4996",
        "ok": "6856",
        "ko": "0"
    },
    "percentiles2": {
        "total": "9863",
        "ok": "11748",
        "ko": "0"
    },
    "percentiles3": {
        "total": "18432",
        "ok": "18670",
        "ko": "0"
    },
    "percentiles4": {
        "total": "20076",
        "ok": "20172",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 413,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 470,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 27348,
        "percentage": 78
    },
    "group4": {
        "name": "failed",
        "count": 6769,
        "percentage": 19
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "795.455",
        "ok": "641.614",
        "ko": "153.841"
    }
},
contents: {
"req_user-ticket-res-1033c": {
        type: "REQUEST",
        name: "user_ticket_reservation_request",
path: "user_ticket_reservation_request",
pathFormatted: "req_user-ticket-res-1033c",
stats: {
    "name": "user_ticket_reservation_request",
    "numberOfRequests": {
        "total": "35000",
        "ok": "28231",
        "ko": "6769"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "6",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "21716",
        "ok": "21716",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "6496",
        "ok": "8054",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "5847",
        "ok": "5462",
        "ko": "0"
    },
    "percentiles1": {
        "total": "4997",
        "ok": "6854",
        "ko": "0"
    },
    "percentiles2": {
        "total": "9857",
        "ok": "11750",
        "ko": "0"
    },
    "percentiles3": {
        "total": "18433",
        "ok": "18670",
        "ko": "0"
    },
    "percentiles4": {
        "total": "20076",
        "ok": "20172",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 413,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 470,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 27348,
        "percentage": 78
    },
    "group4": {
        "name": "failed",
        "count": 6769,
        "percentage": 19
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "795.455",
        "ok": "641.614",
        "ko": "153.841"
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
