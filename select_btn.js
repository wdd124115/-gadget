export function SwipeupAndSwipedown(dom, data,className,callback) {
    let startY, endY;
    let index = 0;
    const SWIPE_THRESHOLD = 100;
    dom.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
    });

    dom.addEventListener('touchend', (e) => {
        endY = e.changedTouches[0].clientY;

        if (startY - endY >= SWIPE_THRESHOLD) {
            index++;
            if (index < data.length) {
                data.forEach(item => item.class = '');
                data[index].class = `${className}`
            } else {
                index = data.length - 1; // 确保index不会超出items数组的最大索引
            }

        } else if (startY - endY <= -1 * SWIPE_THRESHOLD) {
            index--;
            if (index >= 0) {
                data.forEach(item => item.class = '');
                data[index].class = `${className}`
            } else {
                index = 0; // 确保index不会小于0
            }
        }
        // 回调函数
        callback(index);
    });
}