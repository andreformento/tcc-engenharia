var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "15000",
        "ok": "14985",
        "ko": "15"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "6",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "10830",
        "ok": "10830",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "4143",
        "ok": "4147",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2191",
        "ok": "2188",
        "ko": "0"
    },
    "percentiles1": {
        "total": "4134",
        "ok": "4135",
        "ko": "0"
    },
    "percentiles2": {
        "total": "5476",
        "ok": "5478",
        "ko": "0"
    },
    "percentiles3": {
        "total": "7887",
        "ok": "7887",
        "ko": "0"
    },
    "percentiles4": {
        "total": "10618",
        "ok": "10618",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 620,
        "percentage": 4
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1006,
        "percentage": 7
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 13359,
        "percentage": 89
    },
    "group4": {
        "name": "failed",
        "count": 15,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1000",
        "ok": "999",
        "ko": "1"
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
        "total": "15000",
        "ok": "14985",
        "ko": "15"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "6",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "10830",
        "ok": "10830",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "4143",
        "ok": "4147",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2191",
        "ok": "2188",
        "ko": "0"
    },
    "percentiles1": {
        "total": "4133",
        "ok": "4134",
        "ko": "0"
    },
    "percentiles2": {
        "total": "5477",
        "ok": "5478",
        "ko": "0"
    },
    "percentiles3": {
        "total": "7887",
        "ok": "7887",
        "ko": "0"
    },
    "percentiles4": {
        "total": "10618",
        "ok": "10618",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 620,
        "percentage": 4
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1006,
        "percentage": 7
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 13359,
        "percentage": 89
    },
    "group4": {
        "name": "failed",
        "count": 15,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1000",
        "ok": "999",
        "ko": "1"
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
