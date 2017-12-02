var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40000",
        "ok": "28232",
        "ko": "11768"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "5",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "21140",
        "ok": "21140",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "5030",
        "ok": "7127",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "5497",
        "ok": "5279",
        "ko": "0"
    },
    "percentiles1": {
        "total": "3351",
        "ok": "5691",
        "ko": "0"
    },
    "percentiles2": {
        "total": "8118",
        "ok": "10629",
        "ko": "0"
    },
    "percentiles3": {
        "total": "17202",
        "ok": "18112",
        "ko": "0"
    },
    "percentiles4": {
        "total": "19284",
        "ok": "19480",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 584,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1648,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 26000,
        "percentage": 65
    },
    "group4": {
        "name": "failed",
        "count": 11768,
        "percentage": 29
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "769.231",
        "ok": "542.923",
        "ko": "226.308"
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
        "total": "40000",
        "ok": "28232",
        "ko": "11768"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "5",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "21140",
        "ok": "21140",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "5030",
        "ok": "7127",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "5497",
        "ok": "5279",
        "ko": "0"
    },
    "percentiles1": {
        "total": "3352",
        "ok": "5691",
        "ko": "0"
    },
    "percentiles2": {
        "total": "8119",
        "ok": "10650",
        "ko": "0"
    },
    "percentiles3": {
        "total": "17204",
        "ok": "18113",
        "ko": "0"
    },
    "percentiles4": {
        "total": "19284",
        "ok": "19480",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 584,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1648,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 26000,
        "percentage": 65
    },
    "group4": {
        "name": "failed",
        "count": 11768,
        "percentage": 29
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "769.231",
        "ok": "542.923",
        "ko": "226.308"
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
