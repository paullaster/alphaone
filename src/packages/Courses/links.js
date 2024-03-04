import { Auth } from "@/utils"

export default {
    to: `/dashboard/${Auth.User().id}/courses`,
    order: 2,
    icon: 'mdi-cast-education',
    caption: 'Courses',
    hasSublink: false,
}