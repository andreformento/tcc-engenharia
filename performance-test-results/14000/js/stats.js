var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "14000",
        "ok": "14000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7239",
        "ok": "7239",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2431",
        "ok": "2431",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1323",
        "ok": "1323",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2325",
        "ok": "2325",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3236",
        "ok": "3237",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5388",
        "ok": "5388",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6299",
        "ok": "6299",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 668,
        "percentage": 5
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1662,
        "percentage": 12
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 11670,
        "percentage": 83
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "823.529",
        "ok": "823.529",
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
        "total": "14000",
        "ok": "14000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7239",
        "ok": "7239",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2431",
        "ok": "2431",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1323",
        "ok": "1323",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2325",
        "ok": "2325",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3237",
        "ok": "3237",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5388",
        "ok": "5388",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6299",
        "ok": "6299",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 668,
        "percentage": 5
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1662,
        "percentage": 12
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 11670,
        "percentage": 83
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "823.529",
        "ok": "823.529",
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
