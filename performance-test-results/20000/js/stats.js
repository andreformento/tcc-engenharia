var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "19623",
        "ko": "377"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "6",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "31216",
        "ok": "31216",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "6765",
        "ok": "6895",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "3620",
        "ok": "3529",
        "ko": "0"
    },
    "percentiles1": {
        "total": "7090",
        "ok": "7215",
        "ko": "0"
    },
    "percentiles2": {
        "total": "9263",
        "ok": "9297",
        "ko": "0"
    },
    "percentiles3": {
        "total": "11483",
        "ok": "11496",
        "ko": "0"
    },
    "percentiles4": {
        "total": "17932",
        "ok": "17937",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 169,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 272,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 19182,
        "percentage": 96
    },
    "group4": {
        "name": "failed",
        "count": 377,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "540.541",
        "ok": "530.351",
        "ko": "10.189"
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
        "total": "20000",
        "ok": "19623",
        "ko": "377"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "6",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "31216",
        "ok": "31216",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "6765",
        "ok": "6895",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "3620",
        "ok": "3529",
        "ko": "0"
    },
    "percentiles1": {
        "total": "7095",
        "ok": "7213",
        "ko": "0"
    },
    "percentiles2": {
        "total": "9264",
        "ok": "9294",
        "ko": "0"
    },
    "percentiles3": {
        "total": "11483",
        "ok": "11496",
        "ko": "0"
    },
    "percentiles4": {
        "total": "17932",
        "ok": "17937",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 169,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 272,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 19182,
        "percentage": 96
    },
    "group4": {
        "name": "failed",
        "count": 377,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "540.541",
        "ok": "530.351",
        "ko": "10.189"
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
