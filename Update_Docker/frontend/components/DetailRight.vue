<template>
  <div class="detail-right">
    <div class="sticky-right">
      <div class="content">
        <h2 class="price-wrapper mb-5">
          <span
            class="color-deep price"
          >
             <price-format
               :price="productPrice"
             />
          </span>
          <span
            class="strike-through f-7"
            v-if="prevPrice"
          >
            <price-format
              :price="prevPrice"
            />
          </span>
        </h2>
        <div>
          <span
            class="mr-5 block"
          >
            + <price-format
            :price="parseInt(shippingPrice)"
          /> {{ $t('detailRight.shippingFee') }}
          </span>
          <div class="pos-rel lh-30 z-10 inline ">
            <button
              class="semi-bold clear-height mt-10"
              aria-label="submit"
              @click.prevent="pricePopOver = !pricePopOver"
              data-ignore="price-pop-over"
            >
              <span
                class="flex no-click"
              >
                <span class="mt-2">{{ $t('detailRight.details') }}</span>
                <i
                  class="icon black scale-8"
                  :class="[{'arrow-up': pricePopOver}, {'arrow-down': !pricePopOver}]"
                />
              </span>
            </button>
            <client-only>
              <pop-over
                v-if="pricePopOver"
                :title="$t('detailRight.shippingFeeDetails')"
                @close="closePricePopOver"
                :elem-id="'price-pop-over'"
                :layer="false"
              >
                <template v-slot:content>
                  <div class="flex sided">
                    <div>
                      <p>{{ $t('detailRight.price') }}</p>
                      <p>{{ $t('detailRight.shippingFee') }}</p>
                    </div>
                    <div class="right-text">
                      <p>
                        <price-format
                          :price="toFixed(productPrice)"
                        />
                      </p>
                      <p>
                        <price-format
                          :price="toFixed(shippingPrice)"
                        />
                      </p>
                    </div>
                  </div>
                </template>
                <template v-slot:pop-footer>
                  <div class="flex sided">
                    <h5 class="semi-bold">{{ $t('checkoutRight.total') }}</h5>
                    <h5 class="semi-bold">
                      <price-format
                        :price="toFixed(totalPrice)"
                      />
                    </h5>
                  </div>
                </template>
              </pop-over>
            </client-only>
          </div>
        </div>

        <div
          v-if="!attrRender"
          v-for="(value, index) in productAttributes"
          :key="index"
          class="start flex mb-10 wrap"
        >
          <span
            class="mr-10 mn-w-70x"
          >
            {{value.title}}
          </span>
          <dropdown
            :default-null="true"
            :options="value.values"
            class="block-md"
            @clicked="selectedAttribute"
          />
        </div>

        <p
          v-if="cartError.attribute"
          class="error mb-10"
        >
          {{cartError.attribute}}</p>
        <div
          class="start flex gap-10 mb-10 wrap"
        >
          <span
            class="mt-5 mn-w-70x"
          >
            {{ $t('detailRight.quantity') }}
          </span>

          <quantity-nav
            class="mt-5"
            :quantity="quantity"
            :product-inventory="productInventory"
            :max="maxQuantity"
            @value-changed="quantity = $event.value"
          />

          <p
            v-if="cartError.inventory"
            class="error mb-10"
          >
            {{cartError.inventory}}
          </p>
        </div>
        <div class="flex-sm mlr-sm--2-5">
          <ajax-button
            id="add-to-cart"
            class="w-100 w-sm-50 primary-btn mtb-10 mlr-sm-2-5"
            :disabled="disabled"
            type="button"
            :fetching-data="ajaxing"
            @clicked="addToCart"
            :loading-text="$t('detailRight.adding')"
            :text="$t('detailRight.addToCart')"
          />
          <ajax-button
            class="w-100 w-sm-50 outline-btn  mtb-10 mlr-sm-2-5"
            :disabled="disabled"
            type="button"
            color="primary"
            :fetching-data="buyingNow"
            @clicked="addToCart(true)"
            :loading-text="$t('detailRight.buyNow')"
            :text="$t('detailRight.buyNow')"
          />
        </div>

        <div class="pos-rel inline">
          <button
            class="clear-height ml--7-5 mtb-10 f-10 semi-bold flex color-deep"
            aria-label="submit"
            @click.prevent="secureTrans = !secureTrans"
            data-ignore="secure-trans"
          >
            <i
              class="no-click icon lock-icon mr-5 opacity-35 dimen-20x"
            />
            {{ $t('detailRight.secureTransaction') }}
          </button>
          <pop-over
            :title="$t('detailRight.transactionIsSecured')"
            v-if="secureTrans"
            @close="closeSecureTrans"
            class="secure-trans"
            elem-id="secure-trans"
          >
            <template v-slot:content>
              <p class="mn-w-350x mn-w-sm-0">
                {{ $t('detailRight.secureTransaction') }}
                {{ $t('detailRight.secureTransactionMsg') }}
              </p>
            </template>
          </pop-over>
        </div>

        <client-only>
          <p class="f-9">{{ $t('detailRight.arrives') }} : <span class="color-lite semi-bold">{{arrivesAt}}</span></p>
          <ajax-button
            class="mt-15 w-100 outline-btn hide-sm"
            type="button"
            color="primary"
            :fetching-data="ajaxingWishlist"
            @clicked="wishListAction"
            :loading-text="!wishListed ? $t('detailRight.addingToWishlist') : $t('detailRight.removingFromWishlist')"
            :text="!wishListed ? $t('detailRight.addToWishlist') : $t('detailRight.removeFromWishlist')"
          />
        </client-only>
      </div>

      <client-only>
        <social-share
          class="hide-sm mb-15"
          :product="product"
        />
      </client-only>

      <store-tile
        class="mt-10"
        :store="product.store"
      />

    </div><!-- detail-right -->
  </div><!-- detail-right -->
</template>

<script>
  import moment from 'moment'
  import util from '~/mixin/util'
  import productHelper from '~/mixin/productHelper'
  import productPriceHelper from '~/mixin/productPriceHelper'
  import Dropdown from '~/components/Dropdown'
  import PopOver from '~/components/PopOver'
  import SocialShare from '~/components/SocialShare'
  import QuantityNav from '~/components/QuantityNav'
  import AjaxButton from '~/components/AjaxButton'
  import {mapGetters, mapActions} from 'vuex'
  import PriceFormat from "~/components/PriceFormat"
  import StoreTile from "~/components/StoreTile"

  export default {
    data() {
      return {
        cartError: {
          attribute: null,
          quantity: null,
        },
        productInventory: {},
        currentAttributes: [],
        attrRender: false,
        ajaxing: false,
        ajaxingWishlist: false,
        inventory: null,
        price: 0,
        selectedAttributesTitle: {},
        quantity: 1,
        pricePopOver: false,
        buyingNow: false,
        secureTrans: false
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      product: {
        type: Object
      }
    },
    components: {
      StoreTile,
      PriceFormat,
      Dropdown,
      PopOver,
      SocialShare,
      QuantityNav,
      AjaxButton
    },
    mixins: [util, productHelper, productPriceHelper],
    computed: {
      wishListed() {
        return this.$auth?.user?.id && this.product?.wishlisted
      },
      maxQuantity() {
        return parseInt(this.productInventory?.quantity || 0)
      },
      isInStock() {
        if (this.inventory) {
          return this.inventory.quantity > 0
        }
        return this.product?.in_stock
      },
      /*productPrice() {
        if (this.productInventory?.inventory_attributes?.length > 0 && this.productInventory?.price > 0) {
          return this.productInventory?.price
        }
        return this.product.price > 0
          ? this.product.price : this.product.offered > 0
            ? this.product.offered : this.product.selling
      },*/

      /*productPrice() {
        if (this.productInventory?.price > 0) {
          return this.productInventory?.price
        }
        return this.product.price !== null
          ? this.product.price : this.product.offered > 0
            ? this.product.offered : this.product.selling
      },*/
      totalPrice() {
        return parseFloat(this.productPrice) + parseFloat(this.shippingPrice)
      },
      shippingPlace() {
        const all = this.shippingRule.find(obj => {
          return obj.country.toUpperCase() === 'ALL'
        })
        if (!all) {
          let maxPrice = 0
          let maxObj = 0
          this.shippingRule.forEach((obj) => {
            if (parseFloat(obj.price) > maxPrice) {
              maxPrice = obj.price
              maxObj = obj
            }
          })
          return maxObj
        } else return all
      },
      arrivesAt() {
        const momentDate = moment()
          .add(this.shippingPlace?.day_needed, 'days')

        const day = momentDate.format('ddd').toLowerCase()
        const mon = momentDate.format('MMM').toLowerCase()
        const date = momentDate.format('D')
        return this.$t('date.ddddMMMD', {day: this.$t(`date.${day}`), mon: this.$t(`date.${mon}`), date: date})
      },
      shippingPrice() {
        return this.shippingPlace?.price
      },
      shippingRule() {
        return this.product?.shipping_rule?.shipping_places;
      },
      productAttributes() {

        return this.product?.attribute.map(i => {
          return {
            ...i,
            ...{
              values: i.values.reduce((a, item) => {
                a[`${item.attribute_id}-${item.attribute_value_id}`] = item
                return a;
              }, {})
            }
          }
        })
      },
      ...mapGetters('language', ['langCode']),
      ...mapGetters('common', ['currencyIcon', 'setting']),
      ...mapGetters('cart', ['cartProducts']),
    },
    methods: {
      toFixed(num) {
        return parseFloat(num).toFixed(2)
      },
      closePricePopOver() {
        this.pricePopOver = false
      },
      closeSecureTrans() {
        this.secureTrans = false
      },
      selectedAttribute(data) {
        this.cartError.attribute = null

        this.currentAttributes[data.key.split('-')[0]] = data.value

        if (Object.values(this.currentAttributes).length === this.productAttributes.length) {

          const selected = Object.values(this.currentAttributes).map(i => {
            return i.attribute_value_id
          })

          const selectedAttr = selected.sort().join('-')

          let currentInventory = null
          const inventoryAttr = []
          for (var i of this.product?.inventory) {
            const invAttr = []
            i.inventory_attributes.forEach(j => {
              invAttr.push(j.attribute_value_id)
            })
            inventoryAttr[invAttr.sort().join('-')] = i
          }

          if(inventoryAttr[selectedAttr]){
            currentInventory = inventoryAttr[selectedAttr]
          }

          this.productInventory = currentInventory
          this.$emit('option-changed', currentInventory)
        }
      },
      async cartAdd() {
        this.ajaxing = true
        await this.cartAction({
          payload: {
            user_token: await this.getUserToken(),
            apiVal: {
              user_token: await this.getUserToken(),
              product_id: this.product.id,
              inventory_id: this.productInventory?.id,
              quantity: this.quantity
            },
            isBundle: !!this.product?.bundle_deal,
            storeVal: {
              product: {
                id: this.product.id,
                title: this.product.title,
                offered: this.product.offered,
                selling: this.product.selling,
                image: this.product.image,
                shipping_rule: this.product.shipping_rule
              },
              inventory: this.productInventory,
              quantity: this.quantity,
              selected: 1,
              offered: 0,
              bundle_deal: this.product?.bundle_deal,
              shipping_type: 1
            }
          },
          lang: this.langCode

        })
        this.ajaxing = false
      },
      async buyNowProduct() {
        return new Promise(async resolve => {

          this.buyingNow = true

          await this.buyNow({
            payload: {
              user_token: await this.getUserToken(),
              product_id: this.product.id,
              inventory_id: this.productInventory.id,
              quantity: this.quantity
            },
            lang: this.langCode
          }).then(() => {
            this.buyingNow = false
            resolve()
          })
        })
      },
      async addToCart(isBuyNow = false) {
        if (!this.setting?.guest_checkout) {
          if (!this.$auth.loggedIn) {
            this.$auth.redirect('login')
            return false
          }
        }

        this.cartError = {
          attribute: null,
          quantity: null
        }

        if (!this.isInStock) {
          this.setToastError(this.$t('detailRight.outOfStock'))
          return false
        }
        if (Object.values(this.productInventory).length === 0) {
          this.cartError.attribute = this.$t('detailRight.requiredAttributes')
          return false
        }

        if (this.productInventory.quantity < this.quantity) {

          this.cartError.quantity = this.$t('detailRight.exceedsInventory')
          return false
        }
        /*let current = -1
        current = this.cartProducts.findIndex((obj) => {
          return obj.product_id === this.product.id &&
            obj.inventory_id === this.productInventory.id &&
            obj.user_id === this.$auth.user.id
        })*/


        if (isBuyNow) {
          await this.buyNowProduct()
            .then(() => {

              setTimeout(() => {
                this.$router.push({path: '/shipping'})
              }, 300)

            })

        } else {
          await this.cartAdd()
        }
      },
      ...mapActions('common', ['setToastMessage', 'setToastError']),
      ...mapActions('cart', ['cartAction', 'buyNow']),
      ...mapActions('user', ['getUserToken']),
      ...mapActions('wishlist', ['userWishlistAction'])
    },
    mounted() {

      //Checking if the product has no attribute
      if (this.product?.inventory?.length === 1 && this.product?.inventory[0]?.inventory_attributes?.length === 0) {

        this.productInventory = this.product?.inventory[0]
      }
    },
    activated() {
      this.attrRender = true
      setTimeout(() => {
        this.attrRender = false
      }, 10)
    }
  }
</script>

<style>

</style>
