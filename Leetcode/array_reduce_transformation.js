const reduce = function (nums, fn, init) {
    if (!nums.length) return init
    for (let i = 0; i < nums.length; i++) {
        init = fn(init, nums[i])
    }
    return init
};
