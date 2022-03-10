function patch(oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
        if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
        return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue);
    } else {
        var isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
            // patch existing root node
            patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
        } else {
            if (isRealElement) {
                // mounting to a real element
                // check if this is server-rendered content and if we can perform
                // a successful hydration.
                if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                    oldVnode.removeAttribute(SSR_ATTR);
                    hydrating = true;
                }
                if (isTrue(hydrating)) {
                    if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                        invokeInsertHook(vnode, insertedVnodeQueue, true);
                        return oldVnode
                    } else {
                        warn(
                            'The client-side rendered virtual DOM tree is not matching ' +
                            'server-rendered content. This is likely caused by incorrect ' +
                            'HTML markup, for example nesting block-level elements inside ' +
                            '<p>, or missing <tbody>. Bailing hydration and performing ' +
                            'full client-side render.'
                        );
                    }
                }
                // either not server-rendered, or hydration failed.
                // create an empty node and replace it
                oldVnode = emptyNodeAt(oldVnode);
            }

            // replacing existing element
            var oldElm = oldVnode.elm;
            var parentElm = nodeOps.parentNode(oldElm);

            // create new node
            createElm(
                vnode,
                insertedVnodeQueue,
                // extremely rare edge case: do not insert if old element is in a
                // leaving transition. Only happens when combining transition +
                // keep-alive + HOCs. (#4590)
                oldElm._leaveCb ? null : parentElm,
                nodeOps.nextSibling(oldElm)
            );

            // update parent placeholder node element, recursively
            if (isDef(vnode.parent)) {
                var ancestor = vnode.parent;
                var patchable = isPatchable(vnode);
                while (ancestor) {
                    for (var i = 0; i < cbs.destroy.length; ++i) {
                        cbs.destroy[i](ancestor);
                    }
                    ancestor.elm = vnode.elm;
                    if (patchable) {
                        for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                            cbs.create[i$1](emptyNode, ancestor);
                        }
                        // #6513
                        // invoke insert hooks that may have been merged by create hooks.
                        // e.g. for directives that uses the "inserted" hook.
                        var insert = ancestor.data.hook.insert;
                        if (insert.merged) {
                            // start at index 1 to avoid re-invoking component mounted hook
                            for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                                insert.fns[i$2]();
                            }
                        }
                    } else {
                        registerRef(ancestor);
                    }
                    ancestor = ancestor.parent;
                }
            }

            // destroy old node
            if (isDef(parentElm)) {
                removeVnodes([oldVnode], 0, 0);
            } else if (isDef(oldVnode.tag)) {
                invokeDestroyHook(oldVnode);
            }
        }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
}



function patchVnode(
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
) {
    if (oldVnode === vnode) {
        return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
        // clone reused vnode
        vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
            hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
            vnode.isAsyncPlaceholder = true;
        }
        return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
        isTrue(oldVnode.isStatic) &&
        vnode.key === oldVnode.key &&
        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
        vnode.componentInstance = oldVnode.componentInstance;
        return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
        if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
            if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
        } else if (isDef(ch)) {
            {
                checkDuplicateKeys(ch);
            }
            if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
            addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
            removeVnodes(oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, '');
        }
    } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
}
function isUndef(v) {
    return v === undefined || v === null
}

function isDef(v) {
    return v !== undefined && v !== null
}