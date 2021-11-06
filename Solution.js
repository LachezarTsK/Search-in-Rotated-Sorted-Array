
var size;
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

    size = nums.length;
    let turningPoint = searchForTurningPoint(nums);
    if (nums[turningPoint] > target || (turningPoint - 1 >= 0 && nums[turningPoint - 1] < target)) {
        return -1;
    }

    const searchBoundaries = nums[size - 1] >= target ? [turningPoint, size - 1] : [0, (turningPoint > 0 ? turningPoint - 1 : 0)];
    return searchForTarget(nums, searchBoundaries[0], searchBoundaries[1], target);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
function searchForTurningPoint(nums) {
    if (nums[0] < nums[size - 1] || nums.length === 1) {
        return 0;
    }

    let left = 0;
    let right = size - 1;
    let mid = 0;

    while (left <= right) {
        mid = Math.floor(left + (right - left) / 2);

        if (mid - 1 >= 0 && nums[mid] < nums[mid - 1]) {
            break;
        }

        if (nums[mid] >= nums[0]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return mid;
}

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @param {number} target
 * @return {number}
 */
function searchForTarget(nums, left, right, target) {

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}
