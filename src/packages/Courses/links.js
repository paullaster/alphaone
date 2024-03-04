import { Auth } from "@/utils"

export default {
    to: `/dashboard/${Auth.User().id}/courses`,
    order: 3,
    icon: 'mdi-cast-education',
    caption: 'Courses',
    hasSublink: false,
}