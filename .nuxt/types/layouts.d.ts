import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "aa-default" | "aa-guide" | "category" | "default" | "guide" | "mo-category" | "mo-default" | "pc-category" | "pc-default" | "publish" | "publishlnb"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}