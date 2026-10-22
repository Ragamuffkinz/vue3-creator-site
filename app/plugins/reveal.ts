// v-reveal: fades an element up the first time it scrolls into view.
//
//   <UPageCard v-reveal />        -> no delay
//   <UPageCard v-reveal="2" />    -> staggered (index * 70ms)
//
// Elements already on screen at load are left alone (no flash of hidden
// content), and everything stays visible if JS or IntersectionObserver
// isn't available. Respects prefers-reduced-motion.
const observers = new WeakMap<HTMLElement, IntersectionObserver>();

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("reveal", {
        mounted(el: HTMLElement, binding) {
            if (typeof IntersectionObserver === "undefined") return;
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                return;

            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) return;

            const delay = Math.min(Number(binding.value) || 0, 8) * 70;
            el.style.setProperty("--reveal-delay", `${delay}ms`);
            el.classList.add("reveal");

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (!entry?.isIntersecting) return;
                    el.classList.add("is-revealed");
                    observer.disconnect();
                    // Hand control back to hover transitions once finished
                    window.setTimeout(() => {
                        el.classList.remove("reveal", "is-revealed");
                        el.style.removeProperty("--reveal-delay");
                    }, 1000 + delay);
                },
                { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
            );
            observer.observe(el);
            observers.set(el, observer);
        },
        beforeUnmount(el: HTMLElement) {
            observers.get(el)?.disconnect();
            observers.delete(el);
        },
        getSSRProps: () => ({}),
    });
});
