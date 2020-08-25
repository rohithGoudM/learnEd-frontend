const unauth_header_routes_teacher= [

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
    },{
        title: "ABOUT ME", 
        route:"/about_me",
        index: 5
    }

]
const unauth_header_routes_student= [

    {
        title: "HOME", 
        route: "/student",
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

export  {unauth_header_routes_teacher, unauth_header_routes_student};