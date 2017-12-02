var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8901",
        "ok": "8901",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2470",
        "ok": "2470",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1117",
        "ok": "1117",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2274",
        "ok": "2275",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3172",
        "ok": "3172",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3789",
        "ok": "3789",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8192",
        "ok": "8192",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 484,
        "percentage": 5
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 260,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 9256,
        "percentage": 93
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "769.231",
        "ok": "769.231",
        "ko": "-"
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
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8901",
        "ok": "8901",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2470",
        "ok": "2470",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1117",
        "ok": "1117",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2274",
        "ok": "2275",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3172",
        "ok": "3172",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3789",
        "ok": "3789",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8192",
        "ok": "8192",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 484,
        "percentage": 5
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 260,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 9256,
        "percentage": 93
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "769.231",
        "ok": "769.231",
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
