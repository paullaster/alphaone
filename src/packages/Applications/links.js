import { Auth } from "@/utils"

export default {
    to: `/dashboard/${Auth.User().id}/applications`,
    order: 2,
    icon: 'mdi-folder-open',
    caption: 'My Applications',
    hasSublink: false,
}