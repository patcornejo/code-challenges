# Most Free Time Have the function MostFreeTime (strArr) read the strArr parameter being passed which will represent a
# full day and will be filled with events that span from time X to time Y in the day. The format of each event will be
# hh:mmAM/PM-hh:mmAM/PM. For example, strArr may be ["10:00AM-12:30PM","02:00PM02:45PM","09:10AM-09:50AM"].
# Your program will have to output the longest amount of free time available between the start of your first event and
# the end of your last event in the format: hh:mm. The start event should be the earliest event in the day and the
# latest event should be the latest event in the day. The output for the previous input would therefore be 01:30
# (with the earliest event in the day starting at 09:10AM and the latest event ending at 02:45PM). The input will
# contain at least 3 events and the events may be out of order.

from datetime import datetime, timedelta, timezone
from functools import cmp_to_key


def each_item(item: str):
    arr = item.split("-")
    return [datetime.strptime(x, "%I:%M%p") for x in arr]


def comp_key(time1, time2):
    return 1 if time1 > time2 else -1


def most_free_time(lst: list):
    new_lst = list(map(lambda x: each_item(x), lst))
    flatted_lst = [x for y in new_lst for x in y]
    sorted_lst = sorted(flatted_lst, key=cmp_to_key(comp_key))
    rest = timedelta(seconds=0)
    for i in range(1, len(sorted_lst) + 1):
        if i % 2 == 0 and i < len(sorted_lst) - 1:
            m = sorted_lst[i] - sorted_lst[i - 1]
            if m > rest:
                rest = m
    rest_dt = datetime.fromtimestamp(rest.total_seconds(), tz=timezone.utc)
    return rest_dt.strftime("%H:%M")


print(most_free_time(["10:00AM-12:30PM", "02:00PM-02:45PM", "09:10AM-09:50AM"]))
print(most_free_time(["12:15PM-02:00PM", "09:00AM-10:00AM", "10:30AM-12:00PM"]))
print(most_free_time(["12:15PM-02:00PM", "09:00AM-12:11PM", "02:02PM-04:00PM"]))
