function guifanpath(path) {
    let currentPathIndex = path.indexOf('/./');
    while (currentPathIndex > -1) {
        // 当前路径下
        path = path.slice(0, currentPathIndex + 1) + path.slice(currentPathIndex + 3);
        currentPathIndex = path.indexOf('/./');
    }
    let lastPathIndex = path.indexOf('/../');
    while (lastPathIndex > -1) {
        let base = lastPathIndex;
        while (path[base] === '/') {
            base = base - 1;
        }
        const lastLastIndex = path.lastIndexOf('/', base);
        path = path.slice(0, lastLastIndex + 1) + path.slice(lastPathIndex + 3);
        lastPathIndex = path.indexOf('/../');
    }
    // 尾部有.  或者..
    const doublePoint = path.indexOf('..');
    if (doublePoint > -1) {
        let base = doublePoint - 1;
        while (path[base] === '/') {
            base = base - 1;
        }
        const lastLastIndex = path.lastIndexOf('/', base);
        path = path.slice(0, lastLastIndex + 1);
    }
    const point = path.indexOf('.');
    if (point > -1) {
        path = path.slice(0, point);
    }
    let lastRootPathIndex = path.indexOf('/');
    // 尾部有/ 移除
    while (lastRootPathIndex === path.length - 1) {
        path = path.slice(0, lastRootPathIndex);
        lastRootPathIndex--;
    }
    const list = path.split('/');
    let pathTemp = '/';
    for (let i = 0; i < list.length; i++) {
        if (list[i]) {
            pathTemp += list[i] + '/';
        }
    }
    if (pathTemp === '/') {
        return pathTemp;
    }
    return pathTemp.slice(0, pathTemp.length - 1);
}

console.log(guifanpath('/a//b////c/d//././/..'));