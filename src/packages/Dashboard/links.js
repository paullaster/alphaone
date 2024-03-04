import { Auth } from "@/utils"

export default {
    to: `/dashboard/${Auth.User().id}`,
    order: 1,
    icon: 'mdi-view-module',
    caption: 'Dashboard',
    hasSublink: false,
}