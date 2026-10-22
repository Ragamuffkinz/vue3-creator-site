<template>
    <UContainer class="hero-in max-w-3xl py-12 [--i:0]">
        <div class="space-y-8 leading-relaxed">
            <div class="space-y-2">
                <h1 class="text-4xl sm:text-5xl">Terms of Use</h1>
                <p class="text-muted">Last updated: October 21st, 2026</p>
            </div>

            <USeparator />

            <section class="space-y-3 text-toned">
                <h2 class="text-xl text-highlighted">1. Acceptance of Terms</h2>
                <p>
                    This website is a personal, non-commercial site. By
                    accessing or using this website, you agree to be bound by
                    these Terms of Use. If you do not agree, please do not use
                    this website.
                </p>
            </section>

            <section class="space-y-3 text-toned">
                <h2 class="text-xl text-highlighted">2. Nature of this website</h2>
                <p>
                    This website is provided for personal, informational, and
                    entertainment purposes only. It is not operated as a
                    commercial venture, and nothing on this website is offered
                    for sale.
                </p>
            </section>

            <section class="space-y-3 text-toned">
                <h2 class="text-xl text-highlighted">
                    3. Open Source & Original Content
                </h2>
                <p>
                    Except where otherwise noted, the original content, code,
                    and design of this website are free to use and open-source,
                    generally made available under a license such as the GNU
                    Affero General Public License v3.0 (AGPLv3) or a similarly
                    permissive license that allows free, non-commercial use.
                    Refer to the applicable license file or notice accompanying
                    the specific content or source code for the exact terms that
                    apply. Nothing in this section grants rights to the
                    third-party content described in Section 4 below.
                </p>
            </section>

            <section class="space-y-3 text-toned">
                <h2 class="text-xl text-highlighted">
                    4. Third-Party Content & Trademarks
                </h2>
                <p>
                    This website may display third-party-owned images or media
                    solely for the purpose of illustrating and linking to the
                    external works they represent. These images remain the
                    property of their respective copyright and trademark owners.
                    They are not used for resale, redistribution, or commercial
                    gain, and their use is intended to fall under fair use
                    principles for commentary, identification, and reference. If
                    you are a rights holder and have concerns about specific
                    content, please reach out using the contact details below.
                </p>
            </section>

            <section class="space-y-3 text-toned">
                <h2 class="text-xl text-highlighted">5. External Links</h2>
                <p>
                    This website may contain links to third-party websites that are
                    not owned or controlled by this website operator. Some
                    linked sites may contain content intended for mature or
                    adult (18+) audiences. Clicking any external link is done
                    entirely at your own discretion and risk. This website does
                    not endorse, and is not responsible for, the content,
                    accuracy, or practices of any linked third-party site.
                </p>
            </section>

            <section class="space-y-3 text-toned">
                <h2 class="text-xl text-highlighted">
                    6. Content Rating & Audience
                </h2>
                <p>
                    This website's own content is generally intended for a
                    general audience but is not directed at, or specifically
                    designed for, children. Viewer discretion is advised,
                    particularly with respect to external links as described
                    above.
                </p>
            </section>

            <section class="space-y-3 text-toned">
                <h2 class="text-xl text-highlighted">
                    7. Privacy & Data Collection
                </h2>
                <p>
                    This website does not use cookies and does not knowingly
                    collect, store, or process any personal data or analytics
                    from visitors.
                </p>
            </section>

            <section class="space-y-3 text-toned">
                <h2 class="text-xl text-highlighted">8. Hosting</h2>
                <p>
                    This website is hosted using Cloudflare. Your use of this
                    website may also be subject to Cloudflare's own terms and
                    policies, available at
                    <ULink
                        to="https://www.cloudflare.com/website-terms/"
                        target="_blank"
                        class="text-primary underline underline-offset-4 decoration-primary/40 transition hover:decoration-primary"
                    >
                        cloudflare.com/website-terms </ULink
                    >.
                </p>
            </section>

            <section class="space-y-3 text-toned">
                <h2 class="text-xl text-highlighted">9. No Warranty</h2>
                <p>
                    This website is provided "as is" and "as available," without
                    warranty of any kind, express or implied. The operator makes
                    no guarantee that this website will be uninterrupted,
                    error-free, or free of inaccuracies.
                </p>
            </section>

            <section class="space-y-3 text-toned">
                <h2 class="text-xl text-highlighted">
                    10. Changes to These Terms
                </h2>
                <p>
                    These Terms of Use may be updated from time to time.
                    Continued use of this website after changes are posted
                    constitutes acceptance of the revised terms.
                </p>
            </section>

            <section class="space-y-3 text-toned">
                <h2 class="text-xl text-highlighted">11. Contact</h2>
                <p>
                    Questions about these terms can be directed to
                    <ULink
                        to="mailto:ragamuffkinz@gmail.com"
                        class="text-primary underline underline-offset-4 decoration-primary/40 transition hover:decoration-primary"
                        >ragamuffkinz@gmail.com</ULink
                    >
                </p>
            </section>
        </div>
    </UContainer>
</template>

<script setup lang="ts">
    useSeoMeta({
        title: "Terms of Use",
        description: "Terms of Use for this site.",
    });
</script>
