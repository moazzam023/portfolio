import { title } from "process";

export abstract class Constant {
    public static readonly USERNAME = 'Md Moazzam Ali';
    public static readonly DESIGNATION = 'Senior Software Engineer';
    public static readonly HEAD_INFO = 'I build responsive and engaging application which is used across several client in different domain and geography.';
    public static readonly NAVBARS = ['About', 'Experience', 'Projects'];

    public static readonly ABOUT_PAGE_CONTENT = [
        "Back in 2013, I have stared my degree in Computer Science from the premier institute in Jharkhand, India called <b>B.I.T Sindri.</b> Fast-forward to today, and I’ve had the privilege of building software for a <b>market research</b> firm and <b>BFSI domain.</b>",
        "My main focus these days is building accessible user interfaces for our customers at <b>Circana.</b> I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood.",
        "When I’m not at the computer, I’m usually reading, hanging out with my family, or taking care of my plants in my garden."
    ];
    public static readonly EXPERIENCE_DTL = [
        {
            startDate: '2024',
            endDate: 'Present',
            designation: 'Senior Engineer - Product Development',
            companyName: 'Circana, India',
            workDtl: 'In circana I have worked on various projects which help our cistomer to understand their business properly. I have created a portal which gives information about their client using the application across various geographical region. I have created a <b>proxy authentiucation app </b>which can be use by internal users or support users to check issue which is faced by the customer.',
            techUsed: ['HIghcharts', 'Angular 14', 'Typescript', 'Javascript']
        },{
            startDate: '2021',
            endDate: '2024',
            designation: 'Senior Software Engineer',
            companyName: 'Harman Connected Services',
            workDtl: 'At Harman, I have started working on the application which gives the customer flexibilty to check there product performance across differnt region and time. Here my works as a UI developer are handling <b>API integration </b>, <b>designing angular common component</b> which can be used across the application. I have worked on charts to show the data in more prominent view. For charts I have used highcharts library.',
            techUsed: ['Highcharts', 'Angular 11', 'HTML/SCSS']
        },{
            startDate: '2018',
            endDate: '2021',
            designation: 'Software Engineer',
            companyName: 'Mindtree Limited',
            workDtl: 'I have started my career in Mindtree. Here I was trained in MEAN Stack. After my training I worked in Angular 5. I have worked on <b>Unit test </b> using Jasmine and Karma. I worked in an <b>agile environment</b> which help me focusing on my tasks better. ',
            techUsed: ['Node JS', 'Express', 'Angular 5', 'GIT', 'Agile']
        },
    ];
    public static readonly PROJECTS_DTL = [
        {
            title: 'User Proxy authentication',
            description: "I have completed this project recently. Using this application, our support/admin users can login to account which has issues or to workon any change request. Admin user need to login to its credencials first than he can proxy authenticate to diferent user profile. It developed using Angular 15 from frontend side. In this I have used <b> ng bootstrap </b> for handling some used component like Modal. ",
            additionalInfo: '',
            techUsed: [ 'Angular 15', 'SVN', 'Ng Bootstrap', 'AG Grid']
        },
        {
            title: 'Currency Converter Application',
            description: "As the name of the project suggests, it is an currency converter application which can use by the user to see/compare different currency values. The technogy used is Node JS, Mongo DB, Angular 18, GIT etc. The backend is handled using express framework.",
            additionalInfo: '',
            techUsed: ['Angular 5', 'GIT', 'Node JS', 'Express']
        }
    ]
}
