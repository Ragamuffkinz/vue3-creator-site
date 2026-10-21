<template>
  <div class="products">
    <!-- Header -->
    <section class="page-header container">
      <p class="label">Shop</p>
      <h1>Products</h1>
      <p class="page-header__sub">
        Enamel pins, art prints, stickers, and limited-run bundles.
        Click any item to see details, or follow the "Buy Here" link to the shop.
      </p>
    </section>

    <!-- Filter bar -->
    <div class="filter-bar container">
      <button
        v-for="cat in categories"
        :key="cat.value"
        class="filter-btn"
        :class="{ active: activeCategory === cat.value }"
        @click="activeCategory = cat.value"
      >
        {{ cat.label }}
        <span class="filter-btn__count">
          {{ cat.value === 'all' ? products.length : products.filter(p => p.category === cat.value).length }}
        </span>
      </button>
    </div>

    <!-- Product Grid -->
    <section class="products-grid-section container">
      <div class="products-grid">
        <article
          v-for="product in filteredProducts"
          :key="product.id"
          class="product-card"
          :class="{ 'product-card--sold-out': product.soldOut }"
        >
          <div class="product-card__img-wrap" @click="openDetail(product)">
            <img :src="product.imageUrl" :alt="product.name" loading="lazy" />
            <div v-if="product.soldOut" class="product-card__sold-out-badge">Sold Out</div>
            <div class="product-card__overlay">
              <span>View Details</span>
            </div>
          </div>

          <div class="product-card__body">
            <div class="product-card__meta">
              <span class="label product-card__category">{{ categoryLabel(product.category) }}</span>
              <span v-if="product.price" class="product-card__price">{{ product.price }}</span>
            </div>
            <h3 class="product-card__name">{{ product.name }}</h3>
            <p class="product-card__desc">{{ product.description }}</p>

            <div class="product-card__tags" v-if="product.tags?.length">
              <span v-for="tag in product.tags" :key="tag" class="product-card__tag">{{ tag }}</span>
            </div>

            <div class="product-card__actions">
              <button class="btn-text" @click="openDetail(product)">Details</button>
              <a
                v-if="product.buyUrl && !product.soldOut"
                :href="product.buyUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-buy"
              >
                Buy Here ↗
              </a>
              <span v-else-if="product.soldOut" class="sold-out-label">Sold Out</span>
            </div>
          </div>
        </article>
      </div>

      <p v-if="filteredProducts.length === 0" class="empty-state">
        No products in this category yet.
      </p>
    </section>

    <!-- Product Detail Modal -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div v-if="detailProduct" class="modal" @click.self="closeDetail" role="dialog" aria-modal="true">
          <button class="modal__close" @click="closeDetail" aria-label="Close">✕</button>
          <div class="modal__content">
            <div class="modal__img-wrap">
              <img :src="detailProduct.imageUrl" :alt="detailProduct.name" />
              <div v-if="detailProduct.soldOut" class="product-card__sold-out-badge">Sold Out</div>
            </div>
            <div class="modal__info">
              <span class="label">{{ categoryLabel(detailProduct.category) }}</span>
              <h2 class="modal__name">{{ detailProduct.name }}</h2>
              <p v-if="detailProduct.price" class="modal__price">{{ detailProduct.price }}</p>
              <p class="modal__desc">{{ detailProduct.description }}</p>
              <div class="modal__tags" v-if="detailProduct.tags?.length">
                <span v-for="tag in detailProduct.tags" :key="tag" class="product-card__tag">{{ tag }}</span>
              </div>
              <div class="modal__actions">
                <a
                  v-if="detailProduct.buyUrl && !detailProduct.soldOut"
                  :href="detailProduct.buyUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn--primary"
                >
                  Buy Here ↗
                </a>
                <span v-else-if="detailProduct.soldOut" class="sold-out-label sold-out-label--large">
                  Sold Out
                </span>
                <span v-else class="sold-out-label">Not yet available online</span>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { products } from '@/data/products'
import type { Product, ProductCategory } from '@/types'

type FilterValue = ProductCategory | 'all'

const categories: { value: FilterValue; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'pin', label: 'Pins' },
  { value: 'print', label: 'Prints' },
  { value: 'sticker', label: 'Stickers' },
  { value: 'bundle', label: 'Bundles' },
  { value: 'other', label: 'Other' },
]

const activeCategory = ref<FilterValue>('all')
const detailProduct = ref<Product | null>(null)

const filteredProducts = computed(() => {
  if (activeCategory.value === 'all') return products
  return products.filter(p => p.category === activeCategory.value)
})

function categoryLabel(cat: ProductCategory): string {
  const found = categories.find(c => c.value === cat)
  return found?.label ?? cat
}
function openDetail(product: Product) {
  detailProduct.value = product
  document.body.style.overflow = 'hidden'
}
function closeDetail() {
  detailProduct.value = null
  document.body.style.overflow = ''
}
</script>

<style scoped>
/* ── Page Header ─────────────────────────────────────────────── */
.page-header {
  padding-top: 5rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--border-faint);
}
.page-header .label { margin-bottom: 1rem; }
.page-header h1 { color: var(--text-primary); }
.page-header__sub {
  color: var(--text-body);
  font-size: 1rem;
  line-height: 1.7;
  margin-top: 1rem;
  max-width: 60ch;
}

/* ── Filter Bar ──────────────────────────────────────────────── */
.filter-bar {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  padding-block: 2rem;
  border-bottom: 1px solid var(--border-faint);
}
.filter-btn {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.45rem 1rem;
  border: 1px solid var(--border-faint);
  background: transparent;
  color: var(--text-muted);
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
}
.filter-btn:hover { border-color: var(--rust); color: var(--text-primary); }
.filter-btn.active {
  background: var(--rust);
  border-color: var(--rust);
  color: var(--text-primary);
}
.filter-btn__count {
  background: var(--border-mid);
  padding: 0.1rem 0.4rem;
  border-radius: 999px;
  font-size: 0.65rem;
}
.filter-btn.active .filter-btn__count { background: var(--border-accent); }

/* ── Products Grid ───────────────────────────────────────────── */
.products-grid-section { padding-block: 3rem 6rem; }
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1px;
  background: var(--border-faint);
}
.empty-state {
  text-align: center;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  padding: 4rem;
}

/* ── Product Card ────────────────────────────────────────────── */
.product-card { background: var(--bg-surface); display: flex; flex-direction: column; }
.product-card--sold-out { opacity: 0.7; }

.product-card__img-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  cursor: pointer;
}
.product-card__img-wrap img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s var(--ease-out-expo);
}
.product-card:hover .product-card__img-wrap img { transform: scale(1.05); }

.product-card__sold-out-badge {
  position: absolute;
  top: 1rem; left: 1rem;
  background: var(--bg);
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.3rem 0.7rem;
  border: 1px solid var(--border-faint);
}
.product-card__overlay {
  position: absolute; inset: 0;
  background: rgba(14,12,10,0.5);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity 0.25s ease;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-primary);
}
.product-card__img-wrap:hover .product-card__overlay { opacity: 1; }

.product-card__body { padding: 1.25rem 1.5rem 1.5rem; flex: 1; display: flex; flex-direction: column; gap: 0.75rem; }
.product-card__meta { display: flex; align-items: center; justify-content: space-between; }
.product-card__category { color: var(--rust) !important; }
.product-card__price {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text-primary);
  font-weight: 500;
}
.product-card__name {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--text-primary);
  line-height: 1.3;
}
.product-card__desc {
  color: var(--text-body);
  font-size: 0.88rem;
  line-height: 1.6;
  flex: 1;
}
.product-card__tags { display: flex; flex-wrap: wrap; gap: 0.35rem; }
.product-card__tag {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.2rem 0.55rem;
  border: 1px solid var(--border-mid);
  color: var(--text-muted);
  border-radius: 2px;
}
.product-card__actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(192,81,43,0.12);
}
.btn-text {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: none; border: none;
  color: var(--text-muted); cursor: pointer;
  padding: 0; transition: color 0.2s ease;
}
.btn-text:hover { color: var(--text-primary); }
.btn-buy {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--rust-light);
  text-decoration: none;
  margin-left: auto;
  transition: color 0.2s ease;
}
.btn-buy:hover { color: var(--text-primary); }
.sold-out-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-left: auto;
}
.sold-out-label--large { font-size: 0.85rem; }

/* ── Detail Modal ────────────────────────────────────────────── */
.modal {
  position: fixed; inset: 0;
  background: rgba(10,8,6,0.9);
  z-index: 500;
  display: flex; align-items: center; justify-content: center;
  padding: 2rem;
  backdrop-filter: blur(10px);
}
.modal__close {
  position: fixed; top: 1.5rem; right: 1.5rem;
  background: none;
  border: 1px solid var(--border-mid);
  color: var(--text-primary); width: 44px; height: 44px;
  border-radius: 50%; cursor: pointer; font-size: 1rem;
  display: flex; align-items: center; justify-content: center;
  transition: border-color 0.2s ease; z-index: 501;
}
.modal__close:hover { border-color: var(--rust-light); }
.modal__content {
  display: flex; gap: 3.5rem; align-items: center;
  max-width: 900px; width: 100%;
}
.modal__img-wrap {
  position: relative; flex-shrink: 0;
  width: 360px; max-width: 45%;
}
.modal__img-wrap img { width: 100%; display: block; }
.modal__info { flex: 1; display: flex; flex-direction: column; gap: 1rem; }
.modal__info .label { color: var(--rust); }
.modal__name {
  font-family: var(--font-display);
  font-size: 2rem; color: var(--text-primary); line-height: 1.15;
}
.modal__price {
  font-family: var(--font-mono);
  font-size: 1.1rem; color: var(--text-primary); font-weight: 500;
}
.modal__desc { color: var(--text-body); font-size: 0.95rem; line-height: 1.7; }
.modal__tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.modal__actions { margin-top: 0.5rem; }

/* Reuse lightbox transition */
.lightbox-enter-active,
.lightbox-leave-active { transition: opacity 0.25s ease; }
.lightbox-enter-from,
.lightbox-leave-to { opacity: 0; }

/* Buttons (shared with Home) */
.btn {
  font-family: var(--font-mono); font-size: 0.75rem;
  letter-spacing: 0.12em; text-transform: uppercase;
  padding: 0.85rem 2rem; border-radius: 2px;
  text-decoration: none; transition: all 0.2s ease; display: inline-block;
}
.btn--primary {
  background: var(--rust); color: var(--text-primary); border: 1px solid var(--rust);
}
.btn--primary:hover { background: var(--rust-light); border-color: var(--rust-light); }

/* ── Responsive ──────────────────────────────────────────────── */
@media (max-width: 640px) {
  .modal__content { flex-direction: column; }
  .modal__img-wrap { width: 100%; max-width: 100%; }
}
</style>
