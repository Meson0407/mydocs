# Vue3

## nextTick是微任务还是宏任务？

nextTick 的本质将回调函数包装为一个**微任务**放入到微任务队列，这样浏览器在完成渲染任务后会优先执行微任务。

nextTick 在 Vue2 和 Vue3 里的实现有一些不同：

1. **Vue2** 为了兼容旧浏览器，会根据不同的环境选择不同包装策略：
   1. 优先使用 Promise，因为它是现代浏览器中最有效的微任务实现。
   2. 如果不支持 Promise，则使用 MutationObserver，这是另一种微任务机制。
   3. 在 IE 环境下，使用 setImmediate，这是一种表现接近微任务的宏任务。
   4. 最后是 setTimeout(fn, 0) 作为兜底方案，这是一个宏任务，但会在下一个事件循环中尽快执行。

2. **Vue3** 则是只考虑现代浏览器环境，直接使用 **Promise** 来实现微任务的包装，这样做的好处在于代码更加简洁，性能更高，因为不需要处理多种环境的兼容性问题。

整体来讲，Vue3 的 nextTick 实现更加简洁和高效，是基于现代浏览器环境的优化版本，而 Vue2 则为了兼容性考虑，实现层面存在更多的兼容性代码。
