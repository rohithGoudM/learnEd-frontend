import TutorScreen from '../../../tutor/tutorScreen';
const unauth_header_routes = [
    // {
    //     title: "TUTOR", 
    //     route: "/tutor",
    //     index: 1,
    //     Component: TutorScreen
    // },
    // {
    //     title: "STUDENT", 
    //     route: "/student",
    //     index: 2
    // },
    {
        title: "HOME", 
        route: "/tutor",
        index: 1
    },
    {
        title: "NEWS FEED", 
        route: "/news_feed",
        index: 2
    },{
        title :"TESTIMONIALS",
        route: "/testimonial",
        index: 3
    },{
        title: "ABOUT US", 
        route:"about_us",
        index: 4
    }

]

export default unauth_header_routes;