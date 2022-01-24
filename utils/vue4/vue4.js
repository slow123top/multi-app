import { Compile } from './compile';
import { observer } from './observer';
import { proxy } from './vue4-proxy';
class Vue4 {
    constructor(options) {
        this.$options = options;
        this.$data = options.data;
        this.$methods = options.methods;
        observer(this.$data);
        // 代理
        proxy(this);
        // 编译模板
        new Compile(options.el, this);
    }
}