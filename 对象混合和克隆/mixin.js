if (!this.myPlugin) {
    this.myPlugin = {};
}

/**
 * obj2混合到obj1产生新的对象
 */
this.myPlugin.mixin = function (obj1, obj2) {
    return Object.assign({}, obj1, obj2);
    // var newObj = {};
    // //复制obj2的属性
    // for (var prop in obj2) {
    //     newObj[prop] = obj2[prop];
    // }
    // //找到obj1中有但是obj2中没有的属性
    // for (var prop in obj1) {
    //     if (!(prop in obj2)) {
    //         newObj[prop] = obj1[prop];
    //     }
    // }
    // return newObj;
}
