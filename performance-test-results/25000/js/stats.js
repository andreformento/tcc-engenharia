var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "25000",
        "ok": "24746",
        "ko": "254"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "6",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "20885",
        "ok": "20885",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "8973",
        "ok": "9065",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "5083",
        "ok": "5027",
        "ko": "0"
    },
    "percentiles1": {
        "total": "10253",
        "ok": "10393",
        "ko": "0"
    },
    "percentiles2": {
        "total": "13552",
        "ok": "13574",
        "ko": "0"
    },
    "percentiles3": {
        "total": "15857",
        "ok": "15866",
        "ko": "0"
    },
    "percentiles4": {
        "total": "17190",
        "ok": "17192",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 485,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 376,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 23885,
        "percentage": 96
    },
    "group4": {
        "name": "failed",
        "count": 254,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "806.452",
        "ok": "798.258",
        "ko": "8.194"
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
        "total": "25000",
        "ok": "24746",
        "ko": "254"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "6",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "20885",
        "ok": "20885",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "8973",
        "ok": "9065",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "5083",
        "ok": "5027",
        "ko": "0"
    },
    "percentiles1": {
        "total": "10253",
        "ok": "10387",
        "ko": "0"
    },
    "percentiles2": {
        "total": "13553",
        "ok": "13574",
        "ko": "0"
    },
    "percentiles3": {
        "total": "15857",
        "ok": "15866",
        "ko": "0"
    },
    "percentiles4": {
        "total": "17190",
        "ok": "17192",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 485,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 376,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 23885,
        "percentage": 96
    },
    "group4": {
        "name": "failed",
        "count": 254,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "806.452",
        "ok": "798.258",
        "ko": "8.194"
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
