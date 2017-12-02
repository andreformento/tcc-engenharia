var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30000",
        "ok": "28231",
        "ko": "1769"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "6",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "25813",
        "ok": "25813",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "9092",
        "ok": "9662",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "6039",
        "ok": "5766",
        "ko": "0"
    },
    "percentiles1": {
        "total": "8300",
        "ok": "9399",
        "ko": "0"
    },
    "percentiles2": {
        "total": "14089",
        "ok": "14473",
        "ko": "0"
    },
    "percentiles3": {
        "total": "18723",
        "ok": "18763",
        "ko": "0"
    },
    "percentiles4": {
        "total": "21079",
        "ok": "21231",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 427,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 481,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 27323,
        "percentage": 91
    },
    "group4": {
        "name": "failed",
        "count": 1769,
        "percentage": 6
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "909.091",
        "ok": "855.485",
        "ko": "53.606"
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
        "total": "30000",
        "ok": "28231",
        "ko": "1769"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "6",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "25813",
        "ok": "25813",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "9092",
        "ok": "9662",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "6039",
        "ok": "5766",
        "ko": "0"
    },
    "percentiles1": {
        "total": "8258",
        "ok": "9408",
        "ko": "0"
    },
    "percentiles2": {
        "total": "14082",
        "ok": "14475",
        "ko": "0"
    },
    "percentiles3": {
        "total": "18723",
        "ok": "18764",
        "ko": "0"
    },
    "percentiles4": {
        "total": "21060",
        "ok": "21231",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 427,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 481,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 27323,
        "percentage": 91
    },
    "group4": {
        "name": "failed",
        "count": 1769,
        "percentage": 6
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "909.091",
        "ok": "855.485",
        "ko": "53.606"
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
