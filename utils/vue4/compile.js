import { Watcher } from "./watcher";

export class Compile {
    constructor(el, vm) {
        this.$vm = vm;
        this.$el = document.querySelector(el);
        if (this.$el) {
            this.compile(this.$el);
        }
    }

    compile(el) {
        const childNodes = el.childNodes;
        if (!childNodes) { return; }
        childNodes.forEach(node => {
            if (node.nodeType === 1) {
                // 处理元素  指令和事件
                const attrs = node.attributes;
                Array.from(attrs).forEach(attr => {
                    const attrName = attr.name;
                    const exp = attr.value;

                    if (attrName.startsWith('v-')) {
                        const dir = attrName.substring(2);
                        this[dir] && this[dir](node, exp);
                    } else if (attrName.startsWith('@')) {
                        const dir = attrName.substring(1);
                        this.eventFun(node, exp, dir);
                    }
                })
            } else if (this.isInter(node)) {
                // 解析插值表达式
                this.compileText(node);
            }

            if (node.childNodes) {
                this.compile(node);
            }
        })
    }

    //处理事件


    eventFun(node, exp, dir) {
        node.addEventListener(dir, this.$vm.$methods[exp].bind(this.$vm))
    }


    update(node, exp, dir) {
        const fn = this[dir + 'Update'];
        fn && fn(node, this.$vm[exp]);
        new Watcher(this.$vm, exp, function (val) {
            fn && fn(node, val);
        })
    }

    textUpdate(node, val) {
        node.textContent = val;
    }

    compileText(node) {
        node.textContent = this.$vm[RegExp.$1];
        this.update(node, RegExp.$1, 'text');
    }

    isInter(node) {
        return node.nodeType === 3 && /\{\{.*)\}\}/.test(node.textContent);
    }

    text(node, exp) {
        this.update(node, exp, 'text');
    }

    html(node, exp) {
        this.update(node, exp, 'html');
    }

    htmlUpdate(node, val) {
        node.innerHtml = val;
    }

    model(node, exp) {
        this.update(node, exp, 'model');
        node.addEventListener('input', (e) => {
            this.$vm[exp] = e.target.value;
        })
    }
}