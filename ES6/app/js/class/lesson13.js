{
    // 基本定义
    let ajax = function (callback) {
        console.log('执行');
        setTimeout(function () {
            callback && callback.call()
        }, 1000);
    };
    ajax(function () {
        console.log('timeout1');
    })
}

{
    let ajax = function () {
        console.log('执行2');
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve()
            }, 1000);
        })
    };

    ajax().then(function () {
        console.log('promise', 'timeout2');
    })
}

{
    let ajax = function () {
        console.log('执行3');
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve()
            }, 1000);
        })
    };

    ajax()
        .then(function () {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve()
                }, 2000);
            });
        })
        .then(function () {
            console.log('timeout3');
        }) // 3s后 timeout3
}

{
    let ajax = function (num) {
        console.log('执行4');
        return new Promise(function (resolve, reject) {
            if (num > 5) {
                resolve()
            } else {
                throw new Error('出错了')
            }
        })
    }

    ajax(6).then(function () {
        console.log('log', 6);
    }).catch(function (err) {
        console.log('catch', err);
    });

    ajax(3).then(function () {
        console.log('log', 3);
    }).catch(function (err) {
        console.log('catch', err);
    });
}

{
    // 所有图片加载完后再加载页面
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                resolve(img);  // 图片加载完成后立即执行
            }
            img.oneerror = function (err) {
                reject(err);
            }
        })
    }

    function showImgs(imgs) {
        imgs.forEach(function (img) {
            document.body.appendChild(img);
        })
    }

    Promise.all([
            // 将多个Promis实例当做一个新的Promis实例
            // 当数组中所有Promis实例都完成后，新的Promis实例才会变化，才会有then方法
            // 一个实例 -> 一个then方法
            loadImg('http://i4.buimg.com/567571/dflef0720bea6832.png'),
            loadImg('http://i4.buimg.com/567571/2b07ee25b08930ba.png'),
            loadImg('http://i4.buimg.com/567571/5eb8190d6b2a1c9c.png')
        ]).then(showImgs) // 所有图片加载完后才会显示在页面中


}

{
    // 所有图片加载完后再加载页面
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                resolve(img);
            }
            img.oneerror = function (err) {
                reject(err);
            }
        })
    }

    function showImgs(imgs) {
        let p = document.createElement('p');
        p.appendChild('img');
        document.body.appendChild(p)
    }
    Promise.race([
            // 先到先得，落后的不执行
            loadImg('http://i4.buimg.com/567571/dflef0720bea6832.png'),
            loadImg('http://i4.buimg.com/567571/2b07ee25b08930ba.png'),
            loadImg('http://i4.buimg.com/567571/5eb8190d6b2a1c9c.png')
        ]).then(showImgs) // 先加载的图片显示,后面的图片就不显示了
}
