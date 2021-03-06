export const Tool = {};
Tool.paramType = data => {
    let paramsArr = [], paramsStr = '';
    for (let attr in data) {
        paramsArr.push(attr + '=' + data[attr]);
    }
    paramsStr = '?' + paramsArr.join('&');
    return paramsStr
}

Tool.getStyles = (obj, attr) => {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return document.defaultView.getComputedStyle(obj, null)[attr];
    }
}

Tool.nextPage = (element, currentPage, totalPage, callback, shouldUpdata) => {
    let updata       = shouldUpdata,
        page         = currentPage,
        height       = 0,
        windowHeight = window.screen.height,
        setTop       = 0,
        top          = 0,
        oldScrollTop = 0,
        time         = null;

    element.addEventListener('touchstart', () => {
        height = element.offsetHeight;
        setTop = element.offsetTop;
        top = parseInt(Tool.getStyles(element, 'paddingTop'));
    }, false)
    element.addEventListener('touchmove', () => {
        loadMore();
    }, false)
    element.addEventListener('touchend', () => {
        oldScrollTop = document.body.scrollTop;
        moveEnd()
    }, false)

    let requestID;

    const moveEnd = () => {
        requestID = requestAnimationFrame(() => {
            if (document.body.scrollTop != oldScrollTop) {
                oldScrollTop = document.body.scrollTop;
                moveEnd();
            } else {
                loadMore();
            }
        })
    }

    const loadMore = () => {
        if ( ( page < totalPage ) && (updata == true) ) {
            if (document.body.scrollTop + windowHeight >= height + setTop  && document.body.scrollTop > 0) {
                cancelAnimationFrame(requestID);
                page++;
                updata = false;
                callback(page);
            }
        }
    }
}
