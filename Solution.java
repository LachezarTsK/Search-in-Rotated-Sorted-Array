
public class Solution {

    public int size;

    public int search(int[] nums, int target) {

        size = nums.length;
        int turningPoint = searchForTurningPoint(nums);
        if (nums[turningPoint] > target || (turningPoint - 1 >= 0 && nums[turningPoint - 1] < target)) {
            return -1;
        }

        int[] searchBoundaries = nums[size - 1] >= target ? new int[]{turningPoint, size - 1} : new int[]{0, (turningPoint > 0 ? turningPoint - 1 : 0)};
        return searchForTarget(nums, searchBoundaries[0], searchBoundaries[1], target);
    }

    public int searchForTurningPoint(int[] nums) {
        if (nums[0] < nums[size - 1] || nums.length == 1) {
            return 0;
        }

        int left = 0;
        int right = size - 1;
        int mid = 0;

        while (left <= right) {
            mid = left + (right - left) / 2;

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

    public int searchForTarget(int[] nums, int left, int right, int target) {

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] == target) {
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
}
