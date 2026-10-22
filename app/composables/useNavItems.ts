import type { NavigationMenuItem } from "@nuxt/ui";

export const useNavItems = () => {
    const router = useRouter();

    return computed<NavigationMenuItem[]>(() =>
        router
            .getRoutes()
            .filter(
                (route) =>
                    route.path !== "/" &&
                    route.path !== "terms" &&
                    route.path !== "/:all(.*)*" &&
                    route.path !== "/404",
            )
            .map((route) => ({
                label: route.path
                    .slice(1)
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase()),
                to: route.path,
            })),
    );
};