import TutorScreen from '../../../tutor/tutorScreen';
const unauth_header_routes = [
    {
        title: "TUTOR", 
        route: "/tutor",
        index: 1,
        Component: TutorScreen
    },
    {
        title: "STUDENT", 
        route: "/student",
        index: 2
    },
    {
        title: "HOME SCHOOLING", 
        route: "/home_schooling",
        index: 3
    },
    {
        title: "NEWS FEED", 
        route: "/news_feed",
        index: 4
    },{
        title :"TESTIMONIALS",
        route: "/testimonial",
        index: 5
    },{
        title: "ABOUT US", 
        route:"about_us",
        index: 6
    }

]

export default unauth_header_routes;