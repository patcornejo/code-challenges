##
# Using the JavaScript language, have the function distinct_list(arr)
# take the array of numbers stored in arr and determine the total number
# of duplicate entries. For example if the input is [1, 2, 2, 2, 3]
# then your program should output 2 because there are two duplicates of one of the elements.
##


def distinct_list(arr: list):
    no_equals = list(set(arr))
    return len(arr) - len(no_equals)


print(distinct_list([1, 2, 2, 2, 3]))
print(distinct_list([1, 2, 2, 3, 2, 1, 3, 3, 3]));
print(distinct_list([1, 1, 2, 2, 3]));
print(distinct_list([0, -2, -2, 5, 5, 5]));
print(distinct_list([1, 2, 2, 2, 3]));