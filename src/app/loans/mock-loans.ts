import { Book } from '../book';
import { Loan } from './loan';
import { LoanStatus } from './loan-status.enum';

export const MockLoans: Loan[] = [
    {
        book: {
            id: 'DiK_UShlVCEC',
            title: 'JavaScript For Dummies',
            authors: [
                'Emily A. Vander Veer'
            ],
            publisher: 'John Wiley & Sons',
            publishedDate: '2004-10-28',
            description: 'Responding to reader feedback, the author has thoroughly revamped the book with more step-by-step coverage of JavaScript basics,' +
            ' an exclusive focus on Internet Explorer, and many complete sample scripts Updated to cover JavaScript 1.5, the latest release of this popular ' +
            'Web scripting language Using lots of examples, including a sample working Web site, the book shows how to create dynamic and interactive pages,' +
            ' build entire sites, and automate pages',
            smallThumbnail: 'http://books.google.com/books/content?id=DiK_UShlVCEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail: 'http://books.google.com/books/content?id=DiK_UShlVCEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
        },
        from: '2017-04-14T01:00:00.000Z',
        to: '2017-05-03T01:00:00.000Z',
        status: LoanStatus.Opened
    },
    {
        book: {
            id: 'I8xhVj9qTUQC',
            title: 'HTML, XHTML and CSS For Dummies',
            authors: [
                'Ed Tittel',
                'Jeff Noble'
            ],
            publisher: 'John Wiley & Sons',
            publishedDate: '2010-12-09',
            description: 'The indispensable introductory reference guide to HTML, XHTML and CSS Even though new technologies enable people to do much more ' +
            'with the Web, in the end HTML, XHTML and CSS are still at the root of any Web site. The newest edition of this bestselling guide is fully updated' +
            ' and revised for the latest technology changes to the field, including HTML5 and CSS3. Illustrated in full color, this book provides beginner and' +
            ' advanced coders the tools they need to be proficient at these programming languages. Shows you how to create a Web page and formulate XHTML document' +
            ' structure Addresses working with content management systems (WordPress, Drupal, and Joomla), and designing for mobile devices ' +
            '(iPhone, BlackBerry, and Android) Introduces HTML5 and CSS3, tools critical to mobile Web development Reviews working with text, lists, and images, ' +
            'and customizing links Demonstrates ways to employ cascading style sheets (CSS) and get creative with colors and fonts Details integrating scripts with ' +
            'XHTML and understanding deprecated HTML markup tags Written by two veteran computer whizzes, HTML, XHTML and CSS For Dummies will help you get the design ' +
            'results you want!',
            smallThumbnail: 'http://books.google.com/books/content?id=I8xhVj9qTUQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail: 'http://books.google.com/books/content?id=I8xhVj9qTUQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
        },
        from: '2017-05-10T01:00:00.000Z',
        to: '2017-06-07T01:00:00.000Z',
        status: LoanStatus.Opened
    },
    {
        book: {
            id: 'HAZwDQAAQBAJ',
            title: 'Learning Angular 2',
            authors: [
                'Pablo Deeleman'
            ],
            publisher: 'Packt Publishing Ltd',
            publishedDate: '2016-05-31',
            description: 'Your quick, no-nonsense guide to building real-world apps with Angular 2 About This Book The first and best overview of Angular 2 ' +
            'on the market—this guide gathers together everything there is to know about Angular 2 and groups it into intuitive sections. This book is your ' +
            'detailed map of every feature and its use cases. The author has done all the hard work of fitting everything Angular 2 means for developers together ' +
            'for you, making this book the quickest way to learn Angular 2 from scratch. Who This Book Is For This book is targeted at web developers who want to ' +
            'build the next generation of state-of-the-art mobile and desktop web applications with Angular 2. This book does not require you to have prior exposure ' +
            'to either Angular 1.x or 2, although comprehensive knowledge of JavaScript is assumed. It\'s great for newcomers to Angular who learn best through clear ' +
            'explanations and definitions of concepts. What You Will Learn Set up your working environment in order to have all the tools you need to start building ' +
            'Angular 2 components with minimum effort Get up to speed with TypeScript, a powerful typed superset of JavaScript that compiles to plain JavaScript Take ' +
            'full control of how your data is rendered and updated upon data changes Build powerful web applications based on structured component hierarchies' +
            ' that emit and listen to events and data changes throughout the elements tree Explore how to consume external APIs and data services and allow data' +
            ' editing by harnessing the power of web forms made with Angular 2 Deliver seamless web navigation experiences with application routing and state handling' +
            ' common features with ease Discover how to bulletproof your applications by introducing smart unit testing techniques and debugging tools In Detail Angular 2' +
            ' was conceived as a complete rewrite in order to fulfill the expectations of modern developers who demand blazing fast performance and responsiveness from' +
            ' their web applications. This book will help you learn the basics of how to design and build Angular 2 components right from the beginning, providing full' +
            ' coverage of the TypeScript syntax required to follow the examples included. From that point on, we will build upon our first components, interconnect them,' +
            ' and give shape to larger web applications. We will then move to implementing routing in Angular 2, analyzing how to handle application states, and navigating' +
            ' from one component to another in depth. After this, the book features full coverage of web forms and user input validation, later leveraging all of this' +
            ' information to go through the basics of implementing user authentication in Angular 2 and providing a bird\'s eye view of the different strategies at hand' +
            ' to secure pages and areas of your website. Animating components and DOM elements with Angular 2 is also covered in this book. The final part of this book provides broad insights into how to unit test components and other modules such as services, directives, routes or pipes. Style and approach This book covers everything there is to know about getting well-acquainted with Angular without bogging you down. Everything is neatly laid out under clear headings for quick consultation, offering you the information required to understand a concept immediately, with short relevant examples of each feature.',
            smallThumbnail: 'http://books.google.com/books/content?id=HAZwDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail: 'http://books.google.com/books/content?id=HAZwDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        from: '2017-09-01T01:00:00.000Z',
        to: '2017-09-28T01:00:00.000Z',
        status: LoanStatus.Opened
    }
];
